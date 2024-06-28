browser.runtime.sendMessage({ greeting: "hello" }).then((response) => {
    console.log("Received response: ", response);
});

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("Received request: ", request.title);
    if (request.title == "bingSearch") {
        let form = getURLForm();
        searchRandomWord(request.message, form);
    }
});

function searchRandomWord(randomWord, form) {
    const searchURL = `https://cn.bing.com/search?q=${randomWord}&form=${form}&cvid={cvid}`;
    console.log("Random url: ", searchURL);
    window.location.href = searchURL;
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
  const macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
//  const iosPlatforms = ['iPhone', 'iPad', 'iPod']; // 添加 iOS 平台
  let os = 'iPhone';

    for (let i = 0; i < macosPlatforms.length; i++) {
        if (userAgent.indexOf(macosPlatforms[i]) !== -1) {
            os = 'Mac';
            break;
        }
    }

  return os;
}
