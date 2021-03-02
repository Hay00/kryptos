export default class Crc32 {
  createTable() {
    var c;
    var crcTable = [];
    for (var n = 0; n < 256; n++) {
      c = n;
      for (var k = 0; k < 8; k++) {
        c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
      }
      crcTable[n] = c;
    }
    return crcTable;
  }

  encode(input) {
    let table = this.createTable();
    let C = 0 ^ -1;
    for (var i = 0, L = input.length, c, d; i < L; ) {
      c = input.charCodeAt(i++);
      if (c < 0x80) {
        C = (C >>> 8) ^ table[(C ^ c) & 0xff];
      } else if (c < 0x800) {
        C = (C >>> 8) ^ table[(C ^ (192 | ((c >> 6) & 31))) & 0xff];
        C = (C >>> 8) ^ table[(C ^ (128 | (c & 63))) & 0xff];
      } else if (c >= 0xd800 && c < 0xe000) {
        c = (c & 1023) + 64;
        d = input.charCodeAt(i++) & 1023;
        C = (C >>> 8) ^ table[(C ^ (240 | ((c >> 8) & 7))) & 0xff];
        C = (C >>> 8) ^ table[(C ^ (128 | ((c >> 2) & 63))) & 0xff];
        C =
          (C >>> 8) ^
          table[(C ^ (128 | ((d >> 6) & 15) | ((c & 3) << 4))) & 0xff];
        C = (C >>> 8) ^ table[(C ^ (128 | (d & 63))) & 0xff];
      } else {
        C = (C >>> 8) ^ table[(C ^ (224 | ((c >> 12) & 15))) & 0xff];
        C = (C >>> 8) ^ table[(C ^ (128 | ((c >> 6) & 63))) & 0xff];
        C = (C >>> 8) ^ table[(C ^ (128 | (c & 63))) & 0xff];
      }
    }
    return ((C ^ -1) >>> 0).toString(16);
  }
}
