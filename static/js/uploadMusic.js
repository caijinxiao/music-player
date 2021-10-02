// 点击上传文件框，触发 upload_file
$("#choose_file").on('click', () => {
    $("#upload_file").trigger("click");
})

$('#upload_file').on('change', () => {

    $("#choose_file").html('<ul id="file_list"></ul>')

    // 遍历上传的文件
    $.each($("#upload_file").prop("files"), (i, ele) => {
        $("#file_list").append("<li><span class='order'>" + (i + 1) + '、' + "</span><span class='name'>" + ele['name'] + "</span></li>")
    })

    new scrollbot("#file_list", 10).setStyle(
        {
            background: "rgb(255,182,193,.6)",
            "z-index": "2",
            "border-radius": "20",
            height: "30px",
        },
        {
            background: "rgb(0,0,0,0)",
        }
    )
})

// 上传文件
$("#upload_btn").on('click', () => {
    // console.log($("#upload_file").prop("files"));
    if (!$("#upload_file").prop("files").length) {
        iziToast.show({
            title: '提示!',
            message: '您还没有选择文件',
            color: "green",
        });
    }

    else {
        var files = $("#upload_file").prop("files");
        var data = new FormData()

        $.each(files, (i, file) => {
            data.append(file['name'], file)
        })

        $.ajax({
            type: "POST",
            url: "http://127.0.0.1:8000/player/uploadMusic/",
            data: data,
            dataType: "json",
            contentType: false,
            processData: false,
            statusCode: {
                200: (result) => { console.log(result); },
                300: (result) => { console.log(result); }
            },
            xhrFields: {
                withCredemtoals: true
            }
        });
    }
})
