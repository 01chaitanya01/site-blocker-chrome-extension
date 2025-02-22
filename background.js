chrome.runtime.onInstalled.addListener(() => {
  chrome.declarativeNetRequest.updateDynamicRules({
    addRules: [
      {
        id: 2,
        priority: 1,
        action: {
          type: "redirect",
          redirect: { extensionPath: "/redirect.html" },
        },
        condition: {
          urlFilter: "*://*.facebook.com/*",
          resourceTypes: ["main_frame"],
        },
      },
      {
        id: 3,
        priority: 1,
        action: {
          type: "redirect",
          redirect: { extensionPath: "/redirect.html" },
        },
        condition: {
          urlFilter: "*://*.instagram.com/*",
          resourceTypes: ["main_frame"],
        },
      },
      {
        id: 4,
        priority: 1,
        action: {
          type: "redirect",
          redirect: { extensionPath: "/redirect.html" },
        },
        condition: {
          urlFilter: "*://*.twitter.com/*",
          resourceTypes: ["main_frame"],
        },
      },
      {
        id: 5,
        priority: 1,
        action: {
          type: "redirect",
          redirect: { extensionPath: "/redirect.html" },
        },
        condition: {
          urlFilter: "*://*.brave.com/*",
          resourceTypes: ["main_frame"],
        },
      },
    ],
    removeRuleIds: [2, 3, 4, 5],
  });
});
