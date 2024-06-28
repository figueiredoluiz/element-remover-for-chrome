# Element Remover

Element Remover is a Chrome extension that allows users to create rules to remove elements from web pages based on their CSS selectors. This can be particularly useful for testing purposes, such as removing banners, pop-ups, or other elements during web development and testing.

## Features

- Add rules to remove specific elements from web pages using CSS selectors.
- Option to remove scrolling blockers to allow smooth scrolling on the page.
- Manage rules with an easy-to-use interface.
- Rules are applied automatically when visiting the specified URLs.

## Installation

1. Clone or download the repository to your local machine.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" using the toggle in the top right corner.
4. Click on "Load unpacked" and select the directory where you saved the repository.
5. The Element Remover extension should now appear in your list of extensions.

## Usage

1. Click on the Element Remover icon in the Chrome toolbar to open the popup.
2. Enter the URL (supports wildcards, e.g., `*://*.example.com/*`).
3. Enter the CSS selector for the element you want to remove.
4. (Optional) Check the box to remove scrolling blockers.
5. Click "Add rule" to save the rule.
6. The rules will be listed in the popup, and you can remove them by clicking the delete icon next to each rule.
7. The rules are automatically applied when you visit the specified URLs.

## Example

To remove ads from a hypothetical website, you could create a rule with the following details:

- **URL:** `*://*.example.com/*`
- **Selector:** `.ad-banner`

This would remove any element with the class `ad-banner` from pages on `example.com`.

## Development

If you want to contribute to the development of this extension:

1. Fork the repository and clone it to your local machine.
2. Make your changes and test them locally by loading the unpacked extension in Chrome.
3. Submit a pull request with your changes.

## Files

- `manifest.json`: The configuration file for the Chrome extension.
- `popup.html`: The HTML file for the extension's popup interface.
- `popup.js`: The JavaScript file containing the logic for the popup interface.
- `icons/`: Directory containing the extension's icons.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgments

Inspired by the need to streamline web development and testing by removing unwanted elements from web pages.
