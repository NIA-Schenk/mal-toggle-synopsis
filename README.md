# mal-toggle-synopsis
Simple JavaScript-based browser extension that hides the synopses of anime and manga on MyAnimeList by default and injects a button to toggle the synopsis's state.
## Compatibility
I've tested this extension on Brave and Google Chrome, which are both Chromium-based browsers. This extension should work on any Chromium-based browser.
## What does the extension do and why would I want it to do it?
This extension is perfect for adding shows to your "Plan to Watch" list without accidentally seeing spoilers in the synopsis. It's also useful if you're watching a show and want to add the next season without revealing plot details. It works by injecting CSS into the page to hide the synopsis by default, with a button that lets you toggle its visibility as needed.
## What can I expect visually?
![demo](https://github.com/user-attachments/assets/993d24bb-a543-462c-a4f2-1d84604f575c)<br>![demo2](https://github.com/user-attachments/assets/14127a9f-6178-4d6e-965c-b64f5bf45a7e)

As you can see in the GIFs above, the synopsis gets hidden even before the page starts to load. When the page has finished loading, a button gets added which toggles the synopsis's visibility.
## Installing from source
This repository is not published to the Chrome Web Store, so you'll have to download the zip file and install it manually. Here's how to do so:
1. Go to the [releases page](https://github.com/NIA-Schenk/mal-toggle-synopsis/releases) and download the latest release .zip-file <i>(not the source code)</i>.
2. Unzip the downloaded file.
3. Go to your browser's extensions page (usually `chrome://extensions`; if this does not work, try replacing `chrome` with the name of your browser (ex. `brave://extensions` or `edge://extensions` or use the extensions button) and enable developer mode if you haven't already:<br>![image](https://github.com/user-attachments/assets/5fed6744-fd3b-46c4-bca7-aa9422aae5cc)
4. Click "Load unpacked" and navigate to the downloaded and unzipped folder:<br>![image](https://github.com/user-attachments/assets/e430ff67-944e-4f85-8381-f6d6dcdd30a0)
5. Select that folder.
6. The extension should now work.
