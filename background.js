chrome.webNavigation.onCompleted.addListener(function() {
	console.log("This is my favorite website!");
}, {url: [{urlMatches : 'https://www.netflix.com/*'}]});
var x = "";
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    console.log("Received %o from %o, frame", msg, sender.tab, sender.frameId);
	x = msg;
    sendResponse(msg);
});

//chrome.storage.local.set({variable: variableInformation});

//chrome.runtime.onSuspend.addListener(function() {
//	console.log("Unloading.");
//	chrome.browserAction.setBadgeText({text: ""});
//});