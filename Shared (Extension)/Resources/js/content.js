browser.runtime.sendMessage({ greeting: "hello" }).then((response) => {
    console.log("Received response: ", response);
});

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("Received request: ", request.title);
    if (request.title == "bingSearch") {
        searchRandomWord(request.message);
    }
});

function searchRandomWord(randomWord) {
//    const form = "QBLH";
    const form2 = "HPNN01";
    const searchURL = `https://cn.bing.com/search?q=${randomWord}&form=${form2}`;
    console.log("Random url: ", searchURL);
    window.location.href = searchURL;
}
