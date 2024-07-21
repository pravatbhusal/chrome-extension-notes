async function sayHello() {
  let [tab] = await chrome.tabs.query({ active: true });
  chrome.scripting.executeScript({
    target: {
      tabId: tab.id,
    },
    func: () => {
      // Change the background color of the web page
      // document in this case is the context of the page
      document.body.style.backgroundColor = "red";
    }
  });
}

// When clicking the "Click me" button in the chrome extension
// document in this case is the context of the extension popup
document.getElementById("click-me").addEventListener("click", sayHello);