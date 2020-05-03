let button = document.getElementById("startBtn");
let signal = false;

function getActiveTab() { 
    return browser.tabs.query({active:true, currentWindow: true}); 
}

// Check if url is not myOn
getActiveTab().then((tabs) => {
    if (!tabs[0].url.includes("https://www.myon.com/reader/index.html?a=")) {
        browser.browserAction.setPopup("../home.html");
    }
});

button.onclick = function() {
    signal = !signal;

    let readTime = parseInt(document.getElementById("readTime").value);
    let delayTime = parseInt(document.getElementById("delayTime").value);

    if (signal){
        button.innerHTML = "Stop Auto Read";
        button.setAttribute("id", "clickedStartBtn");

        getActiveTab().then((tabs) => {
            browser.tabs.sendMessage(tabs[0].id, {signal, readTime, delayTime});
        });

    } else if (!signal) {
        button.innerHTML = "Start Auto Read";
        button.setAttribute("id", "startBtn");

        getActiveTab().then((tabs) => {
            browser.tabs.sendMessage(tabs[0].id, {signal, readTime, delayTime});
        });
    }
}
