chrome.runtime.onInstalled.addListener(() => {
    chrome.declarativeNetRequest.updateDynamicRules({
        addRules: [
            {
                id: 1,
                priority: 1,
                action: {
                    type: "redirect",
                    redirect: { extensionPath: "/redirect.html" }
                },
                condition: {
                    urlFilter: "||youtube.com/*",
                    resourceTypes: ["main_frame"]
                }
            }
        ],
        removeRuleIds: [1]
    });
});
