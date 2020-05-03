browser.runtime.onMessage.addListener(recvMsg);

function recvMsg(request, send, sendResponse) {
    if (request.signal) {
        continueButton();
    }
}

// Check if continue button exist, click if it does
function continueButton() {
    let continueBtn = document.getElementsByClassName("button -primary bookInfo_button -continue")[0];
    continueBtn.click();
}