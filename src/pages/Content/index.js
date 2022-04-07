chrome.runtime.onMessage.addListener((message) => {
  if (message.type === 'linkClick') {
    const anchor = document.createElement('a');
    anchor.href = message.url;
    anchor.click();
  }
});
