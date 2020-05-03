(function (){
    browser.tabs.query({currentWindow: true, active: true})
      .then((tabs) => {
        let activeTab = tabs[0].url;

        if (activeTab.substring(0, 41) != "https://www.myon.com/reader/index.html?a=") {
            browser.browserAction.setPopup({popup: "../home.html"})
        }
    })
})();

let readTime = parseInt(document.getElementById("readTime"));
let delayTime = parseInt(document.getElementById("delayTime"));
let startBtn = document.getElementById("startBtn");
let enable = false;

startBtn.addEventListener("click", function (){
    changeBtn(startBtn);
})

function changeBtn(startBtn) {
    enable = !enable;

    if (enable){
        startBtn.innerHTML = "Stop Auto Read";
        startBtn.id = "clickedStartBtn";
    } else if (!enable) {
        startBtn.innerHTML = "Start Auto Read";
        startBtn.id = "startBtn";
    }
}