var url =' ';
chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
    url = tabs[0].url
    fetch(`https://returnyoutubedislikeapi.com/votes?videoId=${url.substring(url.indexOf('=')+1)}`)
    .then(data => data.json())
    .then(ladLD => {
        const ladL = ladLD.likes;
        const ladD = ladLD.dislikes;
        const vc = ladLD.viewCount;
        const btn1 = document.getElementById('btn1');
        btn1.innerHTML = ladL;
        const btn2 = document.getElementById('btn2');
        btn2.innerHTML = ladD;
        const btn3 = document.getElementById('btn3');
        btn3.innerHTML = vc;

    })
});