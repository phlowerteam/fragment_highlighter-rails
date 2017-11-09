class LS { // LocalStorage

  static uSettings() {
    return JSON.parse(localStorage.getItem('userSettings'));
  }

  static saveUSettings(userSettings) {
    localStorage.setItem('userSettings', JSON.stringify(userSettings));
  }
}
