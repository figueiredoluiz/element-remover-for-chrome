document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("modifierForm");
  const statusDiv = document.getElementById("status");
  const rulesTableContainer = document.getElementById("rulesTableContainer");
  const rulesTable = document.getElementById("rulesTable");
  const noRulesMessage = document.getElementById("noRulesMessage");

  // Automatically fill the URL field with the current tab URL
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    let url = new URL(tabs[0].url);
    document.getElementById("url").value = `*://${url.hostname}/*`;
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const url = document.getElementById("url").value;
    const selector = document.getElementById("selector").value;
    const removeScrollBlocker = document.getElementById(
      "removeScrollBlocker"
    ).checked;

    // Save the data to Chrome storage
    chrome.storage.sync.get({ modifiers: [] }, (data) => {
      const modifiers = data.modifiers;
      modifiers.push({ url, selector, removeScrollBlocker });
      chrome.storage.sync.set({ modifiers }, () => {
        statusDiv.textContent = "Saved!";
        setTimeout(() => {
          statusDiv.textContent = "";
        }, 2000);
        form.reset();
        loadRules();
      });
    });
  });

  form.addEventListener("reset", () => {
    // Reset the form and refill the URL field with the current tab URL
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      let url = new URL(tabs[0].url);
      document.getElementById("url").value = `*://${url.hostname}/*`;
    });
  });

  function loadRules() {
    chrome.storage.sync.get({ modifiers: [] }, (data) => {
      rulesTable.innerHTML = "";
      const modifiers = data.modifiers;
      if (modifiers.length === 0) {
        noRulesMessage.classList.remove("hidden");
        rulesTableContainer.classList.add("hidden");
      } else {
        noRulesMessage.classList.add("hidden");
        rulesTableContainer.classList.remove("hidden");
        modifiers.forEach((modifier, index) => {
          const row = document.createElement("tr");
          row.classList.add("highlight-row");
          row.innerHTML = `
              <td class="border p-2">${modifier.url}</td>
              <td class="border p-2">${modifier.selector}</td>
              <td class="border p-2 text-center">
                <a href="#" class="text-red-500" data-index="${index}">
                  <span class="material-icons">delete</span>
                </a>
              </td>
            `;
          rulesTable.appendChild(row);
        });

        document.querySelectorAll("a[data-index]").forEach((link) => {
          link.addEventListener("click", (event) => {
            event.preventDefault();
            const index = event.target.closest("a").getAttribute("data-index");
            removeRule(index);
          });
        });
      }
    });
  }

  function removeRule(index) {
    chrome.storage.sync.get({ modifiers: [] }, (data) => {
      const modifiers = data.modifiers;
      modifiers.splice(index, 1);
      chrome.storage.sync.set({ modifiers }, loadRules);
    });
  }

  loadRules();
});
