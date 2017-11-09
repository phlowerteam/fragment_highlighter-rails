//= require fragment-highlighter/libs/jquery.mark.es6.min.js
//= require fragment-highlighter/libs/classes/HView.js
//= require fragment-highlighter/libs/classes/HWindowCtrls.js
//= require fragment-highlighter/libs/classes/LS.js
//= require fragment-highlighter/libs/classes/Marker.js
//= require fragment-highlighter/libs/classes/Tools.js
//= require fragment-highlighter/libs/classes/UserSettings.js

class FragmentHighlighter {

  constructor(pages) {
    FragmentHighlighter.init(pages);
  }

  static init(allowedPages) {
    $(function(){
      if (HView.isSupportedPage(allowedPages)) {
        HView.renderModeButton();
      }

      HView.initHighlightWindow();
      UserSettings.init();

      if (HView.isHModeOn(allowedPages)) {
        $(document.body).on('click', '.remove-text', function(e){
          Marker.removeMarked(e.target);
        });

        $(document.body).bind('mouseup', function(e){
          Marker.extractFragment();
        });
      }
    });
  }
}
