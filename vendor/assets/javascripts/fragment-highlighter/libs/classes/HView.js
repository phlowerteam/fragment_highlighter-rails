class HView {

  static isHModeOn(allowedPages) {
    return (UserSettings.isHMode() && HView.isSupportedPage(allowedPages));
  }

  static isSupportedPage(allowedPages) {
    let matcher = new RegExp("(" + allowedPages.join('|') + ")", "g");
    return matcher.test(window.location.href)
  }

  static renderModeButton() {
    // https://www.w3schools.com/howto/howto_css_sidenav_buttons.asp
    $('body').prepend(`
      <div id='highlightSidenav' class='sidenav'>
        <a href='#' id='h-mode' onclick='HWindowCtrls.showHighlightWindow()'>
          <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
        </a>
      </div>`);
  }

  static initHighlightWindow() {
    $('body').prepend(`
      <div class="modal fade" id="highlightModal" tabindex="-1" role="dialog" aria-labelledby="highlightModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel">Highlighted Articles</h4>
          </div>
          <div class="modal-body" id="marked-items-list">
            ...
          </div>
          <div class="modal-footer">
            <row>
              <div class="col-md-8">
                <div class="checkbox">
                  <label><input type="checkbox" id="hmode_checkbox" value="" onclick="HWindowCtrls.turnOnHMode()"> TURN ON Highlighting Mode</label>
                </div>
              </div>
              <div class="col-md-4">
                <button type="button" class="btn btn-primary" onclick='HWindowCtrls.exportJSON()'>Export Settings</button>
              </div>
            </row>
            <br>
            <br>
            <row>
              <div class="col-md-12">
                <form id="jsonFile" name="jsonFile" enctype="multipart/form-data" method="post">
                  <fieldset>
                    <label class="custom-file">
                      <input type="file" id="fileinput" class="custom-file-input" required>
                      <span class="custom-file-control"></span>
                    </label>
                    <input type='button' class="btn btn-success" id='btnLoad' value='Import Settings' onclick='HWindowCtrls.importJSON();'>
                  </fieldset>
                </form>
              </div>
            </row>
          </div>
          <a id="downloadAnchorElem" style="display:none"></a>
        </div>
      </div>
    </div>`);

    $('#highlightModal').modal({ show: false });
  }
}
