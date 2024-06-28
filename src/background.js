chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.url) {
    chrome.storage.sync.get({ modifiers: [] }, (data) => {
      const modifiers = data.modifiers;
      for (const modifier of modifiers) {
        const urlPattern = new RegExp(modifier.url.replace(/\*/g, ".*"));
        if (urlPattern.test(tab.url)) {
          chrome.scripting.executeScript({
            target: { tabId },
            func: (selector, removeScrollBlocker) => {
              // Remove the specified element
              const elements = document.querySelectorAll(selector);
              elements.forEach((el) => el.remove());

              // Remove scrolling blockers if checked
              if (removeScrollBlocker) {
                document.body.style.overflow = "auto";
                document.documentElement.style.overflow = "auto";
                document.body.style.position = "static";
                document.documentElement.style.position = "static";
                document.body.style.width = "auto";
                document.documentElement.style.width = "auto";
              }
            },
            args: [modifier.selector, modifier.removeScrollBlocker],
          });
        }
      }
    });
  }
});
