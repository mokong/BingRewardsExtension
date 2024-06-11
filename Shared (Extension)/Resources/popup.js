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
        let form = getURLForm();
        
        console.log('form:', form);
        
        browser.tabs.sendMessage(activeTab.id, { title: "bingSearch", message: randomWord, form: form }, function (res) {
            
        });
    });
}

function getURLForm() {
    let os = getOS();
    if (os === "Mac") {
        return "QBLH";
    } else {
        return "HPNN01";
    }
}

function getOS() {
  const userAgent = window.navigator.userAgent;
  const platform = window.navigator.platform;
  const macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
  const iosPlatforms = ['iPhone', 'iPad', 'iPod']; // 添加 iOS 平台
  let os = null;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = 'Mac';
  } else if (iosPlatforms.indexOf(userAgent) !== -1) { // 修改判断条件为 userAgent
    os = 'iPhone';
  }

  return os;
}

const searchInterval = setInterval(startRandomSearch, 7000);
startRandomSearch();
