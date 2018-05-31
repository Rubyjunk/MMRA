// Saves options to chrome.storage
function save_options() {
  var hideDickbar = document.getElementById('dickbar').checked;
  var disableLazyImages = document.getElementById('images').checked;
  var hideHighlightMenu = document.getElementById('highlight').checked;
  var hideHeaders = document.getElementById('headers').checked;
  var pseudoPremium = document.getElementById('pseudopremium').checked;
  chrome.storage.sync.set({
    hideDickbar: hideDickbar,
    disableLazyImages: disableLazyImages,
    hideHighlightMenu: hideHighlightMenu,
	hideHeaders: hideHeaders,
	pseudoPremium: pseudoPremium
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Readability improved! (Settings saved.)';
    setTimeout(function() {
      status.textContent = '';
    }, 2500);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get({
    hideDickbar: false,
    disableLazyImages: false,
    hideHighlightMenu: false,
	hideHeaders: false,
	pseudoPremium: false
  }, function(items) {
    document.getElementById('dickbar').checked = items.hideDickbar;
    document.getElementById('images').checked = items.disableLazyImages;
    document.getElementById('highlight').checked = items.hideHighlightMenu;
	document.getElementById('headers').checked = items.hideHeaders;
	document.getElementById('pseudopremium').checked = items.pseudoPremium;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
