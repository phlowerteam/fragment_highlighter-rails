class Tools {
  static href() {
    return window.location.href.split('#')[0];
  }

  static reloadPage() {
    location.reload();
  }
}
