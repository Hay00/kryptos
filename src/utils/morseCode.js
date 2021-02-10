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
    return Array.from(
      input.trimEnd().toLowerCase().replace(/\n/g, '').split(' ')
    )
      .map((word) =>
        Array.from(word)
          .map((char) => {
            // Swap between alphabets
            const morseChar = this.morseCode[this.alphabet.indexOf(char)];
            if (morseChar) {
              return morseChar;
            }
            // If this char doesn't exists in morse return a error
            throw new Error(`Char ${char} doesn't exist in Morse Code`);
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
            // Swap between alphabets
            const alphabetChar = this.alphabet[this.morseCode.indexOf(char)];
            if (alphabetChar) {
              return alphabetChar;
            }
            // This char doesn't exists in the alphabet, parsing error
            throw new Error(`Char at index [${index}] caused a parsing error!`);
          })
          .join('')
      )
      .join(' ');
  }
}
