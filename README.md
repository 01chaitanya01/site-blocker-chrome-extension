# Mindset Chrome Extension

## 🚀 Overview
**Mindset** is a simple Chrome extension designed to help you stay focused by redirecting distracting websites like Facebook, Instagram, Twitter, and Brave to a motivational video page.

---

## 📂 Features
- Redirects from:
  - Facebook
  - Instagram
  - Twitter
  - Brave
- Displays a motivational video to refocus your mindset.
- Lightweight and easy to use.

---

## 🔧 Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/01chaitanya01/site-blocker-chrome-extension.git
   ```
2. Open Google Chrome and go to `chrome://extensions/`.
3. Enable **Developer mode** (toggle in the top right corner).
4. Click on **Load unpacked** and select the project directory.

---

## 📜 How It Works
- The extension uses `chrome.declarativeNetRequest` to intercept and redirect requests from specified distracting sites.
- The redirected page (`redirect.html`) displays an inspiring video to help you regain focus.

---

## 📝 File Structure
```
Mindset/
│
├── background.js        # Handles redirection logic
├── manifest.json        # Extension configuration
├── popup.html           # Popup shown when clicking the extension icon
├── redirect.html        # Redirect page with a motivational video
├── icon128.png          # Extension icon
└── video.mp4            # Motivational video displayed on redirection
```

---

## 🛠️ Technologies Used
- **Manifest V3** for Chrome Extensions
- **JavaScript** for core functionality
- **HTML & CSS** for UI design

---

## 🙌 Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.

---

## 📃 License
This project is licensed under the [MIT License](LICENSE).