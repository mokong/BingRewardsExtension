import words from './words.js';

// 设置最大搜索次数
const maxSearchCount = 30;
let searchCount = 0;


function startRandomSearch() {
    searchCount++;
    if (searchCount >= maxSearchCount) {
        clearInterval(searchInterval);
        console.log('已达到最大搜索次数');
    }
    
    browser.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var activeTab = tabs[0];
        let randomWord = words[Math.floor(Math.random() * words.length)]
        browser.tabs.sendMessage(activeTab.id, { title: "bingSearch", message: randomWord }, function (res) {
            
        });
    });
}

const searchInterval = setInterval(startRandomSearch, 7000);
startRandomSearch();
