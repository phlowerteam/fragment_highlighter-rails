class HWindowCtrls {

  static showHighlightWindow(){
    $('#marked-items-list').html('');
    let userSettings = LS.uSettings();
    for (let key in userSettings.articles_titles) {
      $('#marked-items-list').append(`<span><a href='${key}' target='_blank'>${userSettings.articles_titles[key]}</a>&nbsp<a href="#" onclick="HWindowCtrls.deleteFragments('${key}')">[${I18.tr(I18j.remove)}]</a></span><br>`);
    };

    if (userSettings.settings.hmode_is_on) {
      $('input#hmode_on_radio_btn')[0].checked = true;
    } else {
      if (userSettings.settings.hmode_reading_is_on) {
        $('input#hmode_reading_radio_btn')[0].checked = true;
      } else {
        $('input#hmode_off_radio_btn')[0].checked = true;
      }
    }
    $('#highlightModal').modal();
  }

  static exportJSON(){
    let userSettings = LS.uSettings();
    let dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(userSettings));
    let dlAnchorElem = document.getElementById('downloadAnchorElem');
    dlAnchorElem.setAttribute("href",     dataStr     );
    dlAnchorElem.setAttribute("download", "settings.json");
    dlAnchorElem.click();
  }

  static importJSON(){
    let input, file, fr;

    if (typeof window.FileReader !== 'function') {
      alert(I18.tr(I18j.import.not_supported_api));
      return;
    }

    input = document.getElementById('fileinput');
    if (!input) {
      alert(I18.tr(I18j.import.not_find));
    }
    else if (!input.files) {
      alert(I18.tr(I18j.import.not_supported_files));
    }
    else if (!input.files[0]) {
      alert(I18.tr(I18j.import.please_select));
    }
    else {
      file = input.files[0];
      fr = new FileReader();
      fr.onload = receivedText;
      fr.readAsText(file);
    }

    function receivedText(e) {
      LS.saveUSettings(JSON.parse(e.target.result));
      Tools.reloadPage();
    }
  }

  static turnOnHMode(){
    let userSettings = LS.uSettings();
    userSettings.settings.hmode_is_on = true;
    userSettings.settings.hmode_reading_is_on = false;
    LS.saveUSettings(userSettings);
    Tools.reloadPage();
  }

  static turnOffHMode(){
    let userSettings = LS.uSettings();
    userSettings.settings.hmode_is_on = false;
    userSettings.settings.hmode_reading_is_on = false;
    LS.saveUSettings(userSettings);
    Tools.reloadPage();
  }

  static turnOnReadingHMode(){
    let userSettings = LS.uSettings();
    userSettings.settings.hmode_is_on = false;
    userSettings.settings.hmode_reading_is_on = true;
    LS.saveUSettings(userSettings);
    Tools.reloadPage();
  }

  static deleteFragments(url) {
    UserSettings.deleteFragments(url);
    Tools.reloadPage();
  }
}
