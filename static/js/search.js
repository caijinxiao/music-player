// 搜索框位置
$("#search").css({
    marginTop: ($(window).height() - $("#search").height()) / 2 - 50,
    marginLeft: ($(window).width() - $("#search").width()) / 2,
});

// 搜索结果位置
$("#search_result").css({
    marginTop: -($(window).height() - $("#search_result").height()) / 2 + 70,
    marginLeft: ($(window).width() - $("#search_result").width()) / 2 - 40,
});

// 搜索框获得焦点后，上移搜索框
$("#search #searchImg").on("click", function () {
    $("#search_result").html("");

    // 动画上移搜索框
    $("#search").animate(
        {
            top: -200,
        }, 500
    );

    // 点击搜索符后 0.5s 出现 ul
    setTimeout(() => {
        $("#search_result").slideDown(350);

        // 创建 ul
        var ul = $("<ul class=" + '"search_ul"' + "></ul>");
        $("#search_result").append(ul);

        // 创建一个数组，用于保存多个对象
        var songArr = [
            {
                id: "1",
                songName: "明天会更好",
                singer: "邓紫棋",
                add: "♥",
                times: "03:00",
            },
            {
                id: "2",
                songName: "无畏",
                singer: "毛不易",
                add: "♥",
                times: "03:35",
            },
            {
                id: "3",
                songName: "明天会更好",
                singer: "邓紫棋",
                add: "♥",
                times: "03:00",
            },
            {
                id: "4",
                songName: "无畏",
                singer: "毛不易",
                add: "♥",
                times: "03:35",
            },
            {
                id: "5",
                songName: "明天会更好",
                singer: "邓紫棋",
                add: "♥",
                times: "03:00",
            },
            {
                id: "6",
                songName: "无畏",
                singer: "毛不易",
                add: "♥",
                times: "03:35",
            },
            {
                id: "7",
                songName: "明天会更好",
                singer: "邓紫棋",
                add: "♥",
                times: "03:00",
            },
            {
                id: "8",
                songName: "明天会更好",
                singer: "邓紫棋",
                add: "♥",
                times: "03:00",
            },
            {
                id: "9",
                songName: "明天会更好",
                singer: "邓紫棋",
                add: "♥",
                times: "03:00",
            },
            {
                id: "10",
                songName: "明天会更好",
                singer: "邓紫棋",
                add: "♥",
                times: "03:00",
            },
            {
                id: "11",
                songName: "无畏",
                singer: "毛不易",
                add: "♥",
                times: "03:35",
            },
        ];

        // 遍历数组
        $.each(songArr, function (index, value) {
            // 创建 li
            var li = $("<li></li>");
            $.each(value, function (key, value) {
                li.append($("<span class=" + "li_" + key + ">" + value + "</span>"));
            });
            ul.append(li);
            li.slideDown();
        });

        // 出现跳转至 index.html 的图标
        var jumpImg = $('<a href="index.html" id="jumpImg"></a>');
        $("#search").append(jumpImg);

        /* 滚动条 */
        var customScroll3 = new scrollbot("#search_result", 10).setStyle(
            {
                background: "rgb(255,182,193,.6)",
                "z-index": "2",
                "border-radius": "20",
                height: "30px",
            },
            {
                background: "rgb(0,0,0,0)",
            }
        );
    }, 500);
});
