// js/background.js
chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.create({ url: 'index.html' });
});