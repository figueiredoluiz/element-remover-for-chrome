document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('extensionNameHeader').textContent = chrome.i18n.getMessage('extensionName');
  document.title = chrome.i18n.getMessage('extensionName');
  document.getElementById('urlLabel').textContent = chrome.i18n.getMessage('url');
  document.getElementById('selectorLabel').textContent = chrome.i18n.getMessage('selector');
  document.getElementById('removeScrollBlockerLabel').textContent = chrome.i18n.getMessage('removeScrollBlocker');
  document.getElementById('addRuleButton').textContent = chrome.i18n.getMessage('addRule');
  document.getElementById('clearButton').textContent = chrome.i18n.getMessage('clear');
  document.getElementById('noRulesMessageText').textContent = chrome.i18n.getMessage('noRulesSaved');
});
