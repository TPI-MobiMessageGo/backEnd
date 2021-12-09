var ManageCount = 1;
$(function () {
  // categoryManagementChild 新增通知項目
  $('#addManage').click(function () {
    ManageCount++;
    $nodeManage =
      '<tr><td><div class="xxx">' +
      '<input type="text" class="form-control" name="Manage' + ManageCount + '" id="Manage' + ManageCount + '" placeholder="請填入新增通知項目">' +
      '</div>' +
      '<button class="btn btn-danger removeManage btn-sm" type="button">' +
      '<span class="glyphicon glyphicon-trash" aria-hidden="true"></span>' +
      '</button></td></tr>'
    $("#showManage").append($nodeManage);
  });
  // remove 新增通知項目
  $('form').on('click', '.removeManage', function () {
    $(this).parent().remove();
  });
  // 輸入新增類別後remove選擇類別名稱
  $("#addNotificatin").bind("input propertychange change", function () {
    if ($('input[name="check1"]').val().length !== 0) {
      $("#selectNotificatin").parent().hide();
    }
    if ($('input[name="check1"]').val().length == 0) {
      $("#selectNotificatin").parent().show();
    }
  });


  // 選擇類別名稱remove新增類別
  $("#selectNotificatinGroup").change(function () {
    if ($("#selectNotificatinGroup").val() !== 1) {
      $(".notificatinNameAdd").children().hide();
    }
    if ($("#selectNotificatinGroup").val() == 1) {
      $(".notificatinNameAdd").children().show();
    }
  });
  // 點編輯切換文字為input編輯狀態,button變為確認.
  $("#category01").click(function () {
    $("div.hide1").hide()
    $("td.title").html(function () {
      if (window.$currEditing)
        finishEditing($currEditing);
      var $cell = $(this);
      var $inp = $('<div style="display: inline-block;width:200px;">' +
        '<input type="text" name="check1" class="form-control" value="台外幣活存" />' +
        '</div>' +
        '<div class="editCat" style="display: inline-block;">' +
        '<button class="btn btn-danger btnOK">確定</button>' +
        '<button class="btn btn-danger">取消</button>' +
        '</div>');
      $inp.val($cell.text());
      $cell.addClass("cell-editor").html("").append($inp);
      window.$currEditing = $inp;
    });
    // 點確定後切回div
    $("button.btnOK").on("click", function () {
      finishEditing($("td.cell-editor input"));
    })
    //結束編輯模式
    function finishEditing($inp) {
      $inp.parent().removeClass("cell-editor").text($inp.val());
      window.$currEditing = null;
      $(".editCat").remove()
      $("#catTd1").show()
    }
  })

  // // 移動到邊即時顯示
  // $("td.titleEdit ").hover(function(){
  //   $("div.hide1").css("display","block");
  // //   },function(){
  // //   $("div.hide1").css("display","none");
  // });
  // var pos = [];
  // $('.hide1').hover(
  //   function () {
  //     $(this).show();
  //   },
  //   function () {
  //     pos = [$(this).offset().left, $(this).offset().top, $(this).width(), $(this).height()];
  //     $(this).hide();
  //   }
  // );
  // $(document).mousemove(function (e) {
  //   if (pos.length > 0) {
  //     e = e || window.event;
  //     var x = e.clientX,
  //       y = e.clientY;
  //     if (x > pos[0] && x < pos[0] + pos[2] && y > pos[1] && y < pos[1] + pos[3]) {
  //       $('.hide1').show();
  //       pos = [];
  //     }
  //   }
  // })
});