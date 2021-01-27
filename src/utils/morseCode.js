export default class MorseCode {
  alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789.,?\'!/()&:;=+-_"$@';
  morseCode = [
    '.-',
    '-...',
    '-.-.',
    '-..',
    '.',
    '..-.',
    '--.',
    '....',
    '..',
    '.---',
    '-.-',
    '.-..',
    '--',
    '-.',
    '---',
    '.--.',
    '--.-',
    '.-.',
    '...',
    '-',
    '..-',
    '...-',
    '.--',
    '-..-',
    '-.--',
    '--..',
    '-----',
    '.----',
    '..---',
    '...--',
    '....-',
    '.....',
    '-....',
    '--...',
    '---..',
    '----.',
    '.-.-.-',
    '--..--',
    '..--..',
    '.----.',
    '-.-.--',
    '-..-.',
    '-.--.',
    '-.--.-',
    '.-...',
    '---...',
    '-.-.-.',
    '-...-',
    '.-.-.',
    '-....-',
    '..--.-',
    '.-..-.',
    '..._.._',
    '.--.-.',
  ];

  encode(input) {
    return Array.from(input.toLowerCase().replace(/\n/g, '').split(' '))
      .map((word) =>
        Array.from(word)
          .map((char, index) => {
            const morseChar = this.morseCode[this.alphabet.indexOf(char)];
            if (morseChar) {
              return morseChar;
            }
            throw new Error(
              `Char ${char} at index [${index}] doesn't exist in Morse Code`
            );
          })
          .join(' ')
      )
      .join(' / ');
  }

  decode(input) {
    return Array.from(input.split(' / '))
      .map((word) =>
        Array.from(word.split(' '))
          .map((char, index) => {
            const aplhabetChar = this.alphabet[this.morseCode.indexOf(char)];
            if (aplhabetChar) {
              return aplhabetChar;
            }
            throw new Error(`Char at index [${index}] caused a parsing error!`);
          })
          .join('')
      )
      .join(' ');
  }
}
