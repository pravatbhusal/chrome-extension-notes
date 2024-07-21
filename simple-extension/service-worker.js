chrome.action.onClicked.addListener(tab => { // When clicking the chrome extension icon, requires "action" prop in manifest.json
  chrome.scripting.executeScript({ // Requires "scripting" permission in manifest.json
    target: {
      tabId: tab.id, // Context of this script is the chrome extension
    },
    func: () => {
      console.log("Hello world from Pravat's extension service-worker.js.");
    }
  });
});