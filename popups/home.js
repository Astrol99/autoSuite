(function (){
    browser.tabs.query({currentWindow: true, active: true})
      .then((tabs) => {
        let activeTab = tabs[0].url;

        if (activeTab.substring(0, 41) == "https://www.myon.com/reader/index.html?a=") {
            browser.browserAction.setPopup({popup: "autoMyon/myonPopup.html"});
        } else {
            browser.browserAction.setPopup({popup: "home.html"})
        }
    })
})();