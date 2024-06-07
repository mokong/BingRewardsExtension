import words from './words.js';

function startRandomSearch() {
    browser.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var activeTab = tabs[0];
        let randomWord = words[Math.floor(Math.random() * words.length)]
        browser.tabs.sendMessage(activeTab.id, { title: "bingSearch", message: randomWord }, function (res) {
            
        });
    });
}

startRandomSearch();
setInterval(startRandomSearch, 6000);
