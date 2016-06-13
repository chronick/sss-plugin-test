// Javascript Events
function readerIsAttached (event) {
    var evt = new CustomEvent("readerIsAttached", {
        detail: event,
        bubbles: true,
        cancelable: true,
    });

    document.dispatchEvent(evt);
}

function readerIsDisconnected (event) {
    var evt = new CustomEvent("readerIsDisconnected", {
        detail: event,
        bubbles: true,
        cancelable: true,
    });

    document.dispatchEvent(evt);
}

function readerIsConnecting (event) {
    var evt = new CustomEvent("readerIsConnecting", {
        detail: event,
        bubbles: true,
        cancelable: true,
    });

    document.dispatchEvent(evt);
}

function readerIsConnected (event) {
    if(event["connected"] != "true") {
        return;
    }

    var evt = new CustomEvent("readerIsConnected", {
        detail: event,
        bubbles: true,
        cancelable: true,
    });

    document.dispatchEvent(evt);
}

function manualCardInvalid (event) {
    var evt = new CustomEvent("manualCardInvalid", {
        detail: event,
        bubbles: true,
        cancelable: true,
    });

    document.dispatchEvent(evt);
}

function manualCardValid (event) {
    var evt = new CustomEvent("manualCardValid", {
        detail: event,
        bubbles: true,
        cancelable: true,
    });

    document.dispatchEvent(evt);
}

function emvBatteryLow (event) {
    var evt = new CustomEvent("emvBatteryLow", {
        detail: event,
        bubbles: true,
        cancelable: true,
    });

    document.dispatchEvent(evt);
}

function emvCardRemoved (event) {
    var evt = new CustomEvent("emvCardRemoved", {
        detail: event,
        bubbles: true,
        cancelable: true,
    });

    document.dispatchEvent(evt);
}

function emvMessage (event) {
    var evt = new CustomEvent("emvMessage", {
        detail: event,
        bubbles: true,
        cancelable: true,
    });

    document.dispatchEvent(evt);
}

function emvCardDipped (event) {
    var evt = new CustomEvent("emvCardDipped", {
        detail: event,
        bubbles: true,
        cancelable: true,
    });

    document.dispatchEvent(evt);
}

function processingEMVCard (event) {
    var evt = new CustomEvent("processingEMVCard", {
        detail: event,
        bubbles: true,
        cancelable: true,
    });

    document.dispatchEvent(evt);
}
