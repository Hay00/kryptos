export default class PassGenerator {
  encode() {
    const passLenght = 16;
    const minChar = 32;
    const maxChar = 126;
    let password = '';
    for (let i = 0; i < passLenght; i++) {
      password += String.fromCharCode(
        Math.floor(Math.random() * (maxChar - minChar + 1) + minChar)
      );
    }
    return password;
  }
}
