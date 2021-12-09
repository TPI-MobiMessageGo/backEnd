// 長度檢查(title)
function getStrLength() {
    var size = 0;
    var str = document.getElementById('prefername').value
    var textTotal = document.getElementById('textTotal')

    for (var i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) >= 0x4e00 && str.charCodeAt(i) <= 0x9FA5) {
            size += 2;
        } else {
            size += 1;
        }
    }
    textTotal.innerHTML = "<code>" + size + "</code>"
    return size;
}

// 長度檢查(內文)
function getPushStrLength() {
    var size = 0;
    var str = document.getElementById('pushText').value
    var textTotal = document.getElementById('pushTextCheck')

    for (var i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) >= 0x4e00 && str.charCodeAt(i) <= 0x9FA5) {
            size += 2;
        } else {
            size += 1;
        }
    }
    textTotal.innerHTML = "<code>" + size + "</code>"
    return size;
}
//優惠通知長度檢查
function getPushLength() {
    var size = 0;
    var str = document.getElementById('pushText').value
    var textTotal = document.getElementById('pushTextCheck')

    for (var i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) >= 0x4e00 && str.charCodeAt(i) <= 0x9FA5) {
            size += 2;
        } else {
            size += 1;
        }
    }
    textTotal.innerHTML = "<code>" + size + "</code>"
    previewText()
    return size;
}
//優惠通知建立長度檢查
function getPushBuildLength() {
    var size = 0;
    var str = document.getElementById('pushText').value
    var textTotal = document.getElementById('pushTextCheck')

    for (var i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) >= 0x4e00 && str.charCodeAt(i) <= 0x9FA5) {
            size += 2;
        } else {
            size += 1;
        }
    }
    textTotal.innerHTML = "<code>" + size + "</code>"
    previewBuildText()
    return size;
}

// ID隱碼/驗證
function hiddenID() {

    var id = $('#customID').val();
    $("#customIdHidden").val(id);
    if (id.length === 1) {
        var pass = id.substr(0, id.length - 1) + "*"
    } else if (id.length === 2) {
        var pass = id.substr(0, id.length - 2) + "**"
    } else {
        var pass = id.substr(0, id.length - 3) + "***"
    }

    $("#customID").val(pass);
    var hiddenid = $('#customIdHidden').val();
    var reg = new RegExp("^[a-zA-Z]{1}[1-2]{1}[0-9]{8}$");

    $("#reporWarning").children().remove();
    if (reg.test(hiddenid)) {} else {
        $node = '<div>格式輸入錯誤，請重新確認。</div>'
        $("#reporWarning").append($node);
        $("#reportModel").modal("show");
        $("#customID").val('');
        $("#customIdHidden").val('');
    }
}