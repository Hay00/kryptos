import type { GenericEncoderLib } from '../libs.interface';

export default class Base64 implements GenericEncoderLib {
  encode(input: string) {
    return btoa(
      encodeURIComponent(input).replace(/%([0-9A-F]{2})/g, (_, p1) =>
        String.fromCodePoint(Number.parseInt(p1, 16))
      )
    );
  }

  decode(input: string) {
    return decodeURIComponent(
      atob(input)
        .split('')
        .map((c) => {
          const code = c.codePointAt(0);
          if (code === undefined) return '';
          return '%' + code.toString(16).padStart(2, '0');
        })
        .join('')
    );
  }
}
