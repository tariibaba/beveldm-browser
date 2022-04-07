chrome.contextMenus.onClicked.addListener(async (info) => {
  if (info.menuItemId === 'download') {
    const link = info.linkUrl;
    const url = encodeURI(`beveldm://open/download?url=${link}`);
    const tab = (
      await chrome.tabs.query({ active: true, currentWindow: true })
    )[0];
    chrome.tabs.sendMessage(tab.id, { type: 'linkClick', url });
  }
});

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    title: 'Download with Bevel DM',
    contexts: ['link'],
    id: 'download',
  });
});
