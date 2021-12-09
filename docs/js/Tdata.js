var hostCount = 1;
var ManageCount = 1;
var checklist = ''
var applist = ''
var channellist = ''
var testlist = ''

//全選優惠活動庫存
function preferentialCheck() {
    var el = document.getElementsByName('perferbox');
    var len = el.length;
    for (var i = 0; i < len; i++) {
        $("input[name='perferbox']").prop("checked", true);
    }
}

//取消全選優惠活動庫存
function falsePreferentialCheck() {
    var el = document.getElementsByName('perferbox');
    var len = el.length;
    for (var i = 0; i < len; i++) {
        $("input[name='perferbox']").prop("checked", false);
    }
}

//顯示活動序號檔案名稱
function selectPreferential() {
    var file = $("#preferentialFile").val()
    $fileName = "<span>" + file + "<span>"
    $("#preferentialName").children().remove();
    $("#preferentialName").append($fileName);
}

//全選行銷通知channel
function channelCheck() {
    var el = document.getElementsByName('channelbox');
    var len = el.length;
    for (var i = 0; i < len; i++) {
        $("input[name='channelbox']").prop("checked", true);
    }
}
//取消全選行銷通知channel
function falseChannel() {
    var el = document.getElementsByName('channelbox');
    var len = el.length;
    for (var i = 0; i < len; i++) {
        $("input[name='channelbox']").prop("checked", false);
    }
}

// 顯示行銷優惠選擇checkbox
function showChannelCheck() {
    if ($("#ml-2").children() !== '') {
        $("#ml-2").children().remove();
    }
    applist = $("input:checkbox[name='channelbox']:checked").map(function() {
        return $(this).val()
    }).get().join('<br>');
    $node = '<div id="showAPP">' + applist + '</div>'
    $("#ml-2").append($node);
}

// 全選api checkbox
function allCheck() {
    var el = document.getElementsByName('apiCheckbox');
    var len = el.length;
    for (var i = 0; i < len; i++) {
        $("input[name='apiCheckbox']").prop("checked", true);
    }
}
//取消全選api checkbox
function falseCheck() {
    var el = document.getElementsByName('apiCheckbox');
    var len = el.length;
    for (var i = 0; i < len; i++) {
        $("input[name='apiCheckbox']").prop("checked", false);
    }
}
// 顯示選擇checkbox
function showCheck() {
    if ($("#ml-1").children() !== '') {
        $("#ml-1").children().remove();
    }
    checklist = $("input:checkbox[name='apiCheckbox']:checked").map(function() {
        return $(this).val()
    }).get().join('<br>');
    $node = '<span class="apiPushName">' + checklist + '</span>'
    $("#ml-1").append($node);
}

// 全選APPcheckbox
function allAppCheck() {
    var el = document.getElementsByName('appCheckbox');
    var len = el.length;
    for (var i = 0; i < len; i++) {
        $("input[name='appCheckbox']").prop("checked", true);
    }
}

// 全選APPcheckbox
function falseAppCheck() {
    var el = document.getElementsByName('appCheckbox');
    var len = el.length;
    for (var i = 0; i < len; i++) {
        $("input[name='appCheckbox']").prop("checked", false);
    }
}
// 顯示選擇checkbox
function showAPPCheck() {
    if ($("#ml-2").children() !== '') {
        $("#ml-2").children().remove();
    }
    applist = $("input:checkbox[name='appCheckbox']:checked").map(function() {
        return $(this).val()
    }).get().join('<br>');
    $node = '<div id="showAPP">' + applist + '</div>'
    $("#ml-2").append($node);
}

// 行銷通知建立 選擇channel 全選checkbox
function allChannel() {
    var el = document.getElementsByName('channelbox');
    var len = el.length;
    for (var i = 0; i < len; i++) {
        $("input[name='channelbox']").prop("checked", true);
    }
}
// 行銷通知建立 選擇channel 取消全選checkbox
function allChannel() {
    var el = document.getElementsByName('channelbox');
    var len = el.length;
    for (var i = 0; i < len; i++) {
        $("input[name='channelbox']").prop("checked", false);
    }
}

// 行銷通知建立 選擇channel 顯示選擇checkbox
function showChannel() {
    if (channellist !== '') {
        $("#showChannel").remove();
    }
    channellist = $("input:checkbox[name='Channelbox']:checked").map(function() {
        return $(this).val()
    }).get().join('<br>');
    $node = '<div id="showChannel">' + channellist + '</div>'
    $("#ml-3").append($node);
}


// 行銷通知建立 選擇推播裝置 全選checkbox
function allTest() {
    if ($("#checkAll").prop("checked")) { //如果全選按鈕有被選擇的話（被選擇是true）
        $("input[name='AppTest']").prop("checked", true); //把所有的核取方框的property都變成勾選
    } else {
        $("input[name='AppTest']").prop("checked", false); //把所有的核取方框的property都取消勾選
    }
}

// 行銷通知建立 選擇推播裝置 顯示選擇checkbox
function showTest() {
    if (testlist !== '') {
        $("#showTest").remove();
    }
    testlist = $("input:checkbox[name='AppTest']:checked").map(function() {
        return $(this).val()
    }).get().join('<br>');
    $node = '<div id="showTest">' + testlist + '</div>'
    $("#ml-4").append($node);
}

// 點選 發送至所有會員	為 '是' 時隱藏選擇檔案欄位
function pushALL() {
    $("tr.markinglist").hide();
}

// 點選 發送至所有會員	為 '否' 時復原選擇檔案欄位
function pushFales() {
    $("tr.markinglist").show()
}

//顯示異動欄位
function hideoldIos() {
    $("#newIos").show()
}
//隱藏 異動欄位 顯示舊有憑證
function hidenewIos() {
    $('.newfile').hide();
    $("#iosPassword").val('');
    $("#file-1").val('');
    $("#newIos").hide();
}


// remove host/ip
function removeIP() {
    $('form').on('click', '.removeip', function() {
        $(this).parent().remove();
    });
}
// host/ip
function addHost() {
    hostCount++;
    $node =
        '<tr><td><div class="formStyle"><input placeholder="請填入host" type="text" class="form-control" name="host' +
        hostCount + '" id="host' + hostCount +
        '"></div><div class="formStyle"><input type="text" class="form-control hostright"' +
        'name="ip' + hostCount + '" id="ip' + hostCount + '" placeholder="請填入IP"></div><div class="radio"' +
        'style="display: initial;"><label class="hostleft"><input type="radio" name="hostIP' +
        hostCount + '" id="optionsRadios1" value="stop"' +
        'checked> 停用</label><label class="hostlefts"><input type="radio" name="hostIP' + hostCount +
        '" id="optionsRadios2" value="open"> 啟用</label>' +
        '</div><button class="btn btn-danger removeip btn-sm lasthost" type="button" onClick="removeIP()"><span class="glyphicon glyphicon-trash "' +
        'aria-hidden="true"></span></button></td></tr>';
    $("#showBlock").append($node);
}

//顯示上傳檔名
function getfile() {
    if ($('#filename').children().length !== 0) { //是否上傳過,有的話就把舊的隱藏
        $(".newfile").hide();
    }
    var fullPath = $('#file-1').val();
    var filename = fullPath.replace(/^.*[\\\/]/, '');
    if (filename !== '') { //新輸入的檔名不為空
        $('#filename').append("<a class='newfile' href='#'>" + filename +
            "</a><button class='btn-del newfile' onclick='deletefile()'></button>")
    }
};
// 移除上傳檔案
function deletefile() {
    $("#file-1").val('');
    $('.newfile').hide()
}

// 已移除
// 圖檔大小檢核及顯示檔名
// function checkFile(input) {
//   if (input.files && input.files[0]) {
//     var reader = new FileReader();
//     reader.onload = function (e) {
//       console.log(e);
//       $('.preview').attr('src', e.target.result);

//       // 檔案大小，把 Bytes 轉換為 KB
//       var size = format_float(e.total / 1024, 2);
//       if (size > 3072) {
//         console.log(size)
//         $("#errorAlert").children().remove()
//         $node = '<div class="alert alert-danger" role="alert">上傳檔案不得超過 3M </div>'
//         $("#errorAlert").append($node);
//         return false;
//       } else {
//         $("#errorAlert").children().remove()
//       }
//     }

//     reader.readAsDataURL(input.files[0]);
//   }
// }

// //格式化圖檔
// function format_float(num, pos) {
//   var size = Math.pow(10, pos);
//   return Math.round(num * size) / size;
// }

//會簽文件上傳
function checkupload() {
    // while (document.getElementById("result").hasChildNodes()) {
    //   document.getElementById("result").removeChild(document.getElementById("result").firstChild);
    // }
    for (var i = 0; i < document.getElementById("file-1").files.length; i++) {
        $("#result").append(
            "<li id=newfile" + i + "><a href='#'>" + document.getElementById("file-1").files[i].name + "</a><button class='btn-del newfile' onclick='deleteSign(this)'></button></li>"
        )
    }
    return false;
}

// 移除上傳會簽文件
function deleteSign(obj) {
    $(obj).parent().remove()
    $(obj).val('')
}

//排序
$(document).on('click', 'th.intro', function() {
    var table = $(this).parents('table').eq(0);
    var rows = table.find('tr:gt(0)').toArray().sort(comparer($(this).index()));
    this.asc = !this.asc;
    if (!this.asc) {
        rows = rows.reverse();
    }
    table.children('tbody').empty().html(rows);
});

function comparer(index) {
    return function(a, b) {
        var valA = getCellValue(a, index),
            valB = getCellValue(b, index);
        return $.isNumeric(valA) && $.isNumeric(valB) ?
            valA - valB : valA.localeCompare(valB);
    };
}

function getCellValue(row, index) {
    return $(row).children('td').eq(index).text();
}

// 優惠通知預覽
function previewText() {
    if ($('#pushtext') !== undefined) {
        $('#pushtext').remove()
        var name = $('#prefername').text()
        var text = $('#pushText').val()
        var start = $('#preferTimePickerStart').text()
        var end = $('#perferEditTimePickerEnd').val()
        $('#preview').append('<div id="pushtext">' + name + '，' + text + '從' + start + '至' + end + '</div>');
    }
}

// // 優惠通知建立內容預覽
// function previewBuildText() {
//   if ($('#pushtext') !== undefined) {
//     $('#pushtext').remove()
//     var name = $('#prefername').val()
//     var text = $('#pushText').val()
//     var start = $('#preferTimePickerStart').val()
//     var end = $('#preferTimePickerEnd').val()
//     $('#preview').append('<div id="pushtext">' + name + '，' + text + '從' + start + '至' + end + '</div>');
//   }
// }
// 插入優惠URL
function addGiftUrl(btn) {
    var str = "$[str1]"
    var obj = btn.form.pushtext;
    if (document.selection) //for ie 
    {
        obj.focus();
        var sel = document.selection.createRange();
        sel.text = str;
    } else //for firefox 
    {
        var prefix = obj.value.substring(0, obj.selectionStart);
        var suffix = obj.value.substring(obj.selectionEnd);
        obj.value = prefix + str + suffix;
    }
    getPushLength()
}

// 插入優惠密碼
function addGiftPwd(btn) {
    var str = "$[str2]"
    var obj = btn.form.pushtext;
    if (document.selection) //for ie 
    {
        obj.focus();
        var sel = document.selection.createRange();
        sel.text = str;
    } else //for firefox 
    {
        var prefix = obj.value.substring(0, obj.selectionStart);
        var suffix = obj.value.substring(obj.selectionEnd);
        obj.value = prefix + str + suffix;
    }
    getPushLength()
}

// 優惠建立插入優惠URL
function preferAddGiftUrl(btn) {
    var str = "$[str1]"
    var obj = btn.form.pushtext;
    if (document.selection) //for ie 
    {
        obj.focus();
        var sel = document.selection.createRange();
        sel.text = str;
    } else //for firefox 
    {
        var prefix = obj.value.substring(0, obj.selectionStart);
        var suffix = obj.value.substring(obj.selectionEnd);
        obj.value = prefix + str + suffix;
    }
    getPushBuildLength()
}

// 優惠建立插入優惠密碼
function preferAddGiftPwd(btn) {
    var str = "$[str2]"
    var obj = btn.form.pushtext;
    if (document.selection) //for ie 
    {
        obj.focus();
        var sel = document.selection.createRange();
        sel.text = str;
    } else //for firefox 
    {
        var prefix = obj.value.substring(0, obj.selectionStart);
        var suffix = obj.value.substring(obj.selectionEnd);
        obj.value = prefix + str + suffix;
    }
    getPushBuildLength()
}
// 發送時間警告
function pushTimeOut() {
    var re = new RegExp("^[1]{1}[0-8]{1}")
    var pushTime = $('#datetimepicker2').val()
    if (re.test(pushTime)) {} else {
        $('#pushTimeModal').modal('show')
    }
}

// 取消發送時間
function cancelTime() {
    document.getElementById("datetimepicker2").value = "10:00"
}
//channel設定 修改channel密碼
function changeChannel() {
    console.log("aa")
    if ($("#chChannel").children() !== '') {
        $("#chChannel").children().remove();
    }
    $node = '<div style="display: inline-block;"><input id="chPassword" type="password" class="form-control" required="required"></div>' +
        '<button type="button" style="margin: 4px 0px 7px 10px;" class="btn btn-danger" onclick="delChannel()">取消</button>' +
        '<div class="help-block with-errors"></div>'
    $("#chChannel").append($node);
}
//取消修改channel密碼
function delChannel() {
    if ($("#chChannel").children() !== '') {
        $("#chChannel").children().remove();
        $('#chPassword').val("")
    }
    $node = '<button type="button" class="btn btn-danger" onclick="changeChannel()">修改</button>'
    $("#chChannel").append($node);
}