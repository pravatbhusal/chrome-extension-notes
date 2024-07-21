chrome.action.onClicked.addListener(tab => { // When clicking the chrome extension icon, requires "action" prop in manifest.json
  chrome.scripting.executeScript({ // requires "scripting" permission in manifest.json
    target: {
      tabId: tab.id, // Context of this script is the chrome extension
    },
    func: () => {
      alert("Hello world from Pravat's simple-extension.");
    }
  });
});