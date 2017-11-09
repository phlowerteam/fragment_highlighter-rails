class Marker {

  static removeMarked(element){
    let textElement = $(element).prev();
    UserSettings.removeFragment($(textElement).text());
    $(textElement).removeClass('highlight-marked');
    $(textElement).unmark();
    $(element).remove();
  }

  static extractFragment(element){
    let selection;

    if (window.getSelection) {
      selection = window.getSelection();
    } else if (document.selection) {
      selection = document.selection.createRange();
    }

    if (selection.toString() !== '') {
      Marker.saveFragments(selection.toString());
    }
  }

  static saveFragments(text){
    let fragments = text.trim().split("\n\n");
    fragments.forEach( fragment => {
      if (fragment.length > 0) {
        UserSettings.saveFragment(fragment);
        Marker.highlight(fragment.trim());
      }
    });
  }

  static highlight(text){
    $("body").mark(text, {
      "className": "highlight-marked",
      "caseSensitive": true,
      "separateWordSearch": false,
      "diacritics": false
    });

    let highlights = $(".highlight-marked");
    if (highlights){
      highlights.each((i, hl) => {
        let next = $(hl).next();
        if(next && $(next).attr('class') == 'remove-text'){
        } else {
          $('<span class="remove-text">[X]</span>').insertAfter(hl);
        }
      })
    }
    $(".highlight-marked").css('background-color', 'yellow');
    $(".remove-text").css('background-color', 'gold');
  }
}
