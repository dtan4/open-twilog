var openTwilog = function(tab) {
    if (tab.url.match(/^https?:\/\/twitter\.com\/.+$/)) {
        var twilogUrl = tab.url.replace(/^https?:\/\/twitter\.com\/(.+)$/,
                                       "http://twilog.org/$1");
        chrome.tabs.update(tab.id, {'url': twilogUrl});
    } else {
        alert("This page is not a Twitter user page!");
    }
};

chrome.browserAction.onClicked.addListener(openTwilog);
