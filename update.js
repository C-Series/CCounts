var num = 0;
var url = new URL(window.location.href);
var params = new URLSearchParams(document.location.search.substring(1));
var social_id = params.get("/c");
var num = 0;
var preVal = 0;

function datas() {
    fetch('https://mixerno.space/api/youtube-channel-counter/user/' +c+'').then(res => res.json()).then(data => {
        num = Math.round(data.count[0].count);
    });
}

function e() {
    subscriberCount.innerHTML = num;
}