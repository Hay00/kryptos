class Base64 {
  constructor(value, isEncode) {
    this.value = value;
    this.isEncode = isEncode;
  }

  translate() {
    if (!this.isEncode) {
      return atob(this.value);
    }
    return btoa(this.value);
  }
}

module.exports = Base64;
