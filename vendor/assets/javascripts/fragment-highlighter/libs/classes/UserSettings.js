// userSettings format:
// {
//   articles: {
//     'url': [
//       {
//         text: 'fragment'
//       }
//     ]
//   },
//   articles_titles: {
//     'url': 'title'
//   },
//   settings: {
//     hmode_is_on: true
//   }
// }

class UserSettings {

  static init() {
    let userSettings = LS.uSettings();
    if (!userSettings){
    // if (true){ //for debug
      let userSettings = {
        articles: {},
        articles_titles: {},
        settings:{
          hmode_is_on: true
        }
      };
      LS.saveUSettings(userSettings);
    } else {
      let hModeOn = LS.uSettings().settings.hmode_is_on;
      if(hModeOn){
        let articleFragments = userSettings.articles[Tools.href()] || [];
        articleFragments.forEach(fragment => {
          Marker.highlight(fragment.text);
        });
      }
    };
  }

  static isHMode() {
    let mode;
    try { mode = LS.uSettings().settings.hmode_is_on } catch(e) {};
    return mode;
  }

  static isNotPresent(text){
    let article = LS.uSettings().articles[Tools.href()];
    return (article && article.findIndex(i => i.text.trim() === text.trim()) < 0);
  }

  static removeFragment(text){
    let userSettings = LS.uSettings();
    let articleFragments = userSettings.articles[Tools.href()] || [];
    userSettings.articles[Tools.href()].forEach(((fragment, i) => {
      if (fragment.text.trim() == text.trim()){
        userSettings.articles[Tools.href()].splice(i, 1);
        LS.saveUSettings(userSettings);
        return;
      }
    }));
  }

  static saveFragment(text){
    let userSettings = LS.uSettings();
    userSettings.articles[Tools.href()] = userSettings.articles[Tools.href()] || [];
    userSettings.articles_titles = userSettings.articles_titles || {};

    if (UserSettings.isNotPresent(text)) {
      userSettings.articles[Tools.href()].push({
        text: text.trim()
      });
    }
    userSettings.articles_titles[Tools.href()] = $('h1').text();
    LS.saveUSettings(userSettings);
  }

  static deleteFragments(url) {
    let userSettings = LS.uSettings();
    delete userSettings.articles[url];
    delete userSettings.articles_titles[url];
    LS.saveUSettings(userSettings);
  }
}
