// Init variables
let readTime = parseInt(document.getElementById("readTime"));
let delayTime = parseInt(document.getElementById("delayTime"));
let button = document.getElementById("startBtn");
let enable = false;

function getActiveTab() { 
    return browser.tabs.query({active:true, currentWindow: true}); 
}

// Check if url is not myOn
getActiveTab().then((tabs) => {
    if (!tabs[0].url.includes("https://www.myon.com/reader/index.html?a=")) {
        browser.browserAction.setPopup("../home.html");
    }
});

button.onclick = function(e) {
    enable = !enable;

    if (enable){
        button.innerHTML = "Stop Auto Read";
        button.setAttribute("id", "clickedStartBtn");

        getActiveTab().then((tabs) => {
            browser.tabs.sendMessage(tabs[0].id, {txt: "IT WORKED"});
        });
    } else if (!enable) {
        button.innerHTML = "Start Auto Read";
        button.setAttribute("id", "startBtn");
    }
}
