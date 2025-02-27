# mal-toggle-synopsis
Simple JavaScript-based browser extension that hides the synopses of anime and manga on MyAnimeList by default and injects a button to toggle the synopsis's state.
## Compatibility
I've tested this extension on Brave and Google Chrome, which are both Chromium-based browsers. This extension should work on any Chromium-based browser.
## What does the extension do and why would I want it to do it?
This extension is perfect for adding shows to your "Plan to Watch" list without accidentally seeing spoilers in the synopsis. It's also useful if you're watching a show and want to add the next season without revealing plot details. It works by injecting CSS into the page to hide the synopsis by default, with a button that lets you toggle its visibility as needed.
## What can I expect visually?
![demo](https://github.com/user-attachments/assets/993d24bb-a543-462c-a4f2-1d84604f575c)<br>
As you can see in the GIF above, the synopsis gets hidden even before the page starts to load. When the page has finished loading, a button gets added which toggles the synopsis's visibility.
## Installing from source
This repository is not published to the Chrome Web Store, so you'll have to download the zip file and install it manually. Here's how to do so:
1. Go to the [releases page](https://github.com/NIA-Schenk/mal-toggle-synopsis/releases) and download the latest release .zip-file <i>(not the source code)</i>.
2. Unzip the downloaded file.
3. Go to your browser's [extensions page](chrome://extensions/) and enable developer mode if you haven't already.
4. Click "Load unpacked" and navigate to the downloaded and unzipped folder.
5. Select that folder.
6. The extension should automatically start to work.
