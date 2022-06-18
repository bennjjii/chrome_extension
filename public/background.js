chrome.idle.setDetectionInterval(15); //15 seconds is minimum permitted by API
chrome.idle.onStateChanged.addListener((newState) => {
  let _name = undefined;
  switch (newState) {
    case "active":
      break;
    case "idle":
      chrome.storage.local.get("username", (result) => {
        _name = result.username;
        if (_name) {
          chrome.tabs.query(
            {
              active: true,
              currentWindow: true,
            },
            (result) => {
              chrome.tabs.sendMessage(
                result[0].id,
                { from: 0, message: _name },
                () => {}
              );
            }
          );
        }
      });
      break;
  }
});
