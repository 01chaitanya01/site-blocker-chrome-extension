// document.addEventListener("DOMContentLoaded", () => {
//     const para = document.getElementById("para");

//     chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//         if (chrome.runtime.lastError) {
//             para.textContent = `Error: ${chrome.runtime.lastError.message}`;
//         } else if (tabs[0]) {
//             if (tabs[0].url === "https://www.youtube.com/") {
//                 chrome.tabs.update(tabs[0].id, { url: "https://www.w3schools.com" });
//             }
//             para.textContent = `Current Tab URL: ${tabs[0].url}`;
//         } else {
//             para.textContent = "No active tab found.";
//         }
//     });
// });


document.addEventListener("DOMContentLoaded", () => {
    const para = document.getElementById("para");

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (chrome.runtime.lastError) {
            para.textContent = `Error: ${chrome.runtime.lastError.message}`;
        } else if (tabs[0]) {
            para.textContent = `Current Tab URL: ${tabs[0].url}`;
        } else {
            para.textContent = "No active tab found.";
        }
    });
});
