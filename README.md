# Chrome Extension Notes
This repository is a collection of my notes on how to develop chrome extensions. Chrome extensions are developed with the WebExtensions API, which provide compatibility across all the main browsers (i.e. Chrome, Firefox, Safari), so extensions should run on any browser with minimal changes.

### Extension Contexts
There are 3 main contexts for chrome extensions:
1. Popup context - The popup menu of the chrome extension
2. Service worker - Background process that intercepts network requests, this is a [common JS concept](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers) too 
3. Page context - The website's page DOM, also called "content script"

### Manifest.json
Configuration file that defines the name, description, structure, behavior, and settings of the chrome extension.

Read more in the Google dev docs: https://developer.chrome.com/docs/extensions/reference/manifest