/*!
 * General
 */

/**
 * Reset input欄位
 * @param objId 	欄位id
 * @return {Boolean}
 */
function resetFieldById(objId){
	$('#' + objId).val(function(){
		return this.defaultValue;
	});
	$('#' + objId).focus();
}

/**
 * 字串是否包含子字串
 * @param mainString 主字串
 * @param subString 子字串
 * @return {Boolean}
 */
function checkStringContain(mainString, subString){
	if(mainString.indexOf(subString) == -1){
		return false;
	}
	return true;
}

/**
 * 計算輸入字元長度
 * UTF8-每個中文要3byte
 * Big5-每個中文要2byte
 * @param objValue 需計算的文字
 * @return 字串長度
 */
function countTextLength(objValue){
	var str = encodeURIComponent(objValue);
	str = str.replace(/%[A-F\d]{2}/g, 'U').length;
	// console.log("[ " + objValue + "] length: " + str);
	return str;
}
/**
 * 計算輸入字元長度
 * UTF8-每個中文要3byte
 * Big5-每個中文要2byte
 * @param objValue 需計算的文字
 * @return 字串長度
 */
function countTextLengthByChar(objValue){
	var str = objValue;
	str = str.replace(/%[A-F\d]{2}/g, 'U').length;
	// console.log("[ " + objValue + "] length: " + str);
	return str;
}

/**
 * 確認是否為整數
 * @param objValue 需計算的文字
 */
function isDecimal(objValue){
	return (objValue.match(/^\d+$/));
}
/**
 * 警告訊息
 * <p>glyphicon glyphicon-info-sign</p>
 */
function alert(msg){
	$('#alertBoxStyle').attr('class', 'glyphicon glyphicon-info-sign');
	$('#alertBoxMsg').text(msg);
	$('#alertModal').modal('show');
}
/**
 * 成功訊息
 * <p>glyphicon glyphicon-ok</p>
 */
function alertSuccess(msg){
	$('#alertBoxStyle').attr('class', 'glyphicon glyphicon-ok');
	$('#alertBoxMsg').text(msg);
	$('#alertModal').modal('show');
}
/**
 * 失敗訊息
 * <p>glyphicon glyphicon-remove s</p>
 */
function alertFail(msg){
	$('#alertBoxStyle').attr('class', 'glyphicon glyphicon-remove s');
	$('#alertBoxMsg').text(msg);
	$('#alertModal').modal('show');
}
/**
 * 確認視窗
 * @param title 標題
 * @param msg	內容
 */
function confirmWithoutInputText(title, msg){
	$('#messageTextTitle').text(title);
	$('#messageTextLabel').text(msg);
	$('#messageText').hide();
	$('#confirmModal').modal('show');
}
/**
 * 確認視窗(有帶input text)
 * @param title 標題
 * @param msg	內容
 */
function confirmWithInputText(title, msg){
	$('#messageTextTitle').text(title);
	$('#messageTextLabel').text(msg);
	$('#messageText').show();
	$('#confirmModal').modal('show');
}


/**
 * 計算中英文字長度byte
 * @param str
 * @returns {Number}
 */
function getStrLength(str){
	
	var size = 0;
	for(var i = 0 ; i < str.length ; i++ ){
		
		if(str.charCodeAt(i) >= 0x4e00 && str.charCodeAt(i) <= 0x9FA5 ){
			size += 2;
		} else {
			size += 1;
		}
	}
	return size;
}

/**
 * 字串左邊補0
 * @param str
 * @returns
 */
function leftPadInt(str , size){
	
	var pad ="";
	for(var i = 0 ; i < size ; i++){
		pad += "0";
	}
	var ans = pad.substring(0,pad.length - str.length) + str;
	return ans;
	
}


/**
 * 防止重複submit form
 * <p>EX. $("#couponForm").preventDoubleSubmit();</p>
 */
jQuery.fn.preventDoubleSubmit = function(){
	$(this).submit(function(e){
		var $form = $(this);
		if($form.data('submitted') === true){
			// Previous submitted - don't submit again
			console.log('prevent double submitted!!');
			e.preventDefault();
		}else{
			// Mark it so that next submit can be ignored
			$form.data('submitted', true);
		}
	});
	return this;
};
