function onClickHandler(info, tab) {
    chrome.tabs.create({url : 'http://jisho.org/search/'+info.selectionText});
};

chrome.contextMenus.onClicked.addListener(onClickHandler);

chrome.runtime.onInstalled.addListener(function() {
  var contexts = ["selection"];
  var context = contexts[0];
  var title = "Search on Jisho";
  var id = chrome.contextMenus.create({"title": title, "contexts":[context],
                                         "id": "context" + context});
});
