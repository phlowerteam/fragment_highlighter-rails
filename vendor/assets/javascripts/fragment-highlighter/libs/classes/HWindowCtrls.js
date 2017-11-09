class HWindowCtrls {

  static showHighlightWindow(){
    $('#marked-items-list').html('');
    let userSettings = LS.uSettings();
    for (let key in userSettings.articles_titles) {
      $('#marked-items-list').append(`<span><a href='${key}' target='_blank'>${userSettings.articles_titles[key]}</a>&nbsp<a href="#" onclick="HWindowCtrls.deleteFragments('${key}')">[Delete]</a></span><br>`);
    };
    $('input#hmode_checkbox')[0].checked = userSettings.settings.hmode_is_on;
    $('#highlightModal').modal();
  }

  static exportJSON(){
    let userSettings = LS.uSettings();
    let dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(userSettings));
    let dlAnchorElem = document.getElementById('downloadAnchorElem');
    dlAnchorElem.setAttribute("href",     dataStr     );
    dlAnchorElem.setAttribute("download", "scene.json");
    dlAnchorElem.click();
  }

  static importJSON(){
    let input, file, fr;

    if (typeof window.FileReader !== 'function') {
      alert("The file API isn't supported on this browser yet.");
      return;
    }

    input = document.getElementById('fileinput');
    if (!input) {
      alert("Um, couldn't find the fileinput element.");
    }
    else if (!input.files) {
      alert("This browser doesn't seem to support the `files` property of file inputs.");
    }
    else if (!input.files[0]) {
      alert("Please select a file before clicking 'Load'");
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
    userSettings.settings.hmode_is_on = $('input#hmode_checkbox')[0].checked;
    LS.saveUSettings(userSettings);
    Tools.reloadPage();
  }

  static deleteFragments(url) {
    UserSettings.deleteFragments(url);
    Tools.reloadPage();
  }
}
