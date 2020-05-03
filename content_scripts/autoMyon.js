browser.runtime.onMessage.addListener(recvMsg);

function recvMsg(request, send, sendResponse) {
    console.log(request);
}