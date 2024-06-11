browser.runtime.sendMessage({ greeting: "hello" }).then((response) => {
    console.log("Received response: ", response);
});

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("Received request: ", request.title);
    if (request.title == "bingSearch") {
        searchRandomWord(request.message, request.form);
    }
});

function searchRandomWord(randomWord, form) {
    const searchURL = `https://cn.bing.com/search?q=${randomWord}&form=${form}&cvid={cvid}`;
    console.log("Random url: ", searchURL);
    window.location.href = searchURL;
}
