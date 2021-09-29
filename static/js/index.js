// 歌单滚动条
var customScroll1 = new scrollbot(".listName_ul", 10).setStyle({
    "background": "darksalmon",
    "z-index": "2",
    "border-radius": "10",
    "height": "50px"
}, {
    "background": "rgb(0,0,0,0)"
});

// 歌词滚动条
var customScroll2 = new scrollbot(".lyricText", 10).setStyle({
    "background": "grey",
    "z-index": "2",
    "border-radius": "50%",
    "height": "10px"
}, {
    "background": "rgb(0,0,0,0)"
});


