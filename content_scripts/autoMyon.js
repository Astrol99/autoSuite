let signal;

browser.runtime.onMessage.addListener(recvMsg);
console.log("autoSuite: autoMyon: Listening for messages...");

function recvMsg(request, send, sendResponse) {
    console.log(`Received Message:`);
    console.log(request)
    
    signal = request.signal;

    if (signal) {
        console.log("Initalizing auto read...");
        read(request.readTime, request.delayTime);
    }
}

function read(readTime, delayTime) {

    try {
        // https://www.myon.com/reader/index.html?a=myon_wuthheights
        // Check if dialog appears before reading a book
        document.getElementsByClassName("button -primary bookInfo_button -continue")[0].click();
        document.getElementsByClassName("button -primary bookInfo_button -start")[0].click();
    } catch (err) {
        console.warn(`autoSuite: autoMyon: ${err}: Continue and starting buttons not found, skipping...`);
    }

    function getETA(currentTime, minutes) { return new Date(currentTime.getTime() + minutes*60000); }

    // Get current time
    let currentTime = new Date();
    // Get estimated time of completetion
    const ETA = getETA(currentTime, readTime);

    // 12-hour format - Ex: "ETA: 4:20"
    console.log(`START: ${currentTime.getHours() % 12}:${currentTime.getMinutes()}`)
    console.log(`ETA: ${ETA.getHours() % 12}:${ETA.getMinutes()}`)
    
    function Read() {
        // Update time
        currentTime = new Date();
        // Turn Page
        document.getElementsByClassName("stage_buttonImg -rightArrow")[0].click();
    }

    if (signal && currentTime != ETA) {
        setInterval(Read, delayTime*1000);
    }

    /*
    while (signal && currentTime != ETA) {
        // Update time
        currentTime = new Date();
        // Check if time is divisble by delayTime(seconds) in milliseconds
        if (currentTime.getTime() % (delayTime*1000) == 0) {
            // Turn page
            document.getElementsByClassName("stage_buttonImg -rightArrow")[0].click();
        }
    }
    */
}