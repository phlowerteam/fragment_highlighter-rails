//= require fragment-highlighter/libs/jquery.mark.es6.min.js
//= require fragment-highlighter/libs/classes/HView.js
//= require fragment-highlighter/libs/classes/HWindowCtrls.js
//= require fragment-highlighter/libs/classes/LS.js
//= require fragment-highlighter/libs/classes/Marker.js
//= require fragment-highlighter/libs/classes/Tools.js
//= require fragment-highlighter/libs/classes/UserSettings.js
//= require fragment-highlighter/libs/classes/I18.js

class FragmentHighlighter {

  constructor(options) {
    FragmentHighlighter.init(options);
  }

  static init(options) {
    $(function(){
      if (FragmentHighlighter.isEnabled(options)) {
        HView.renderModeButton();

        HView.initHighlightWindow();
        UserSettings.init();

        if (UserSettings.isHMode()) {
          $(document.body).on('click', '.remove-text', function(e){
            Marker.removeMarked(e.target);
          });

          $(document.body).bind('mouseup', function(e){
            Marker.extractFragment();
          });
        }
      }
    });
  }

  static isEnabled(options) {
    let allowedMatcher = new RegExp("(" + options.allowedPages.join('|') + ")", "g");
    let deniedMatcher = new RegExp("(" + options.deniedPages.join('|') + ")", "g");
    return (allowedMatcher.test(window.location.href) && !deniedMatcher.test(window.location.href));
  }
}
