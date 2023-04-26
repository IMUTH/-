/**
 * WIDESIGN 자바스크립트
 * @since 2019.02.19 조원권
 * @latest 2019.12.23 - 조원권
 * 
 * 목차
 * 1. 기본제공 변수
 * 2. jquery 추가 펑션
 * 3. 위디자인 제공 스크립트
 * 4. 위디자인 시작(init()) 스크립트
 * 5. 팝업관련 스크립트
 * 6. 파일 미리보기 스크립트
 * 7. tab 기능 스크립트
 * 8. collapse 스크립트
 * 9. 위디자인 이미지 팝업 스크립트
 * 10. affix 스크립트
 * 11. scroll fade effect
 * 12. 토스트 메시지
 */

/* 1. 기본제공 변수 */
var wzbtnClassList = [
					'btn-red',
					'btn-red-bg',
					'btn-pink',
					'btn-pink-bg',
					'btn-orange',
					'btn-orange-bg',
					'btn-yellow',
					'btn-yellow-bg',
					'btn-green',
					'btn-green-bg',
					'btn-blue',
					'btn-blue-bg',
					'btn-brown',
					'btn-brown-bg',
					'btn-violet',
					'btn-violet-bg',
					'btn-purple',
					'btn-purple-bg',
					'btn-grey',
					'btn-grey-bg',
					'btn-black',
					'btn-black-bg'
                      ]
var wzbgArr;
function getBgColorList(){
	if(wzbgArr == undefined || wzbgArr.length == 0){
		var bgArr = [];
		bgArr.push({className : 'bg-red', 		 	title : getColorName('red' , false)		, textcol : '#000'});
		bgArr.push({className : 'bg-orange', 		title : getColorName('orange' , false)	, textcol : '#000'});
		bgArr.push({className : 'bg-yellow', 		title : getColorName('yellow' , false)	, textcol : '#000'});
		bgArr.push({className : 'bg-green', 		title : getColorName('green' , false)	, textcol : '#000'});
		bgArr.push({className : 'bg-blue', 			title : getColorName('skyblue' , false)	, textcol : '#000'});
		bgArr.push({className : 'bg-skyblue', 		title : getColorName('blue' , false)	, textcol : '#000'});
		bgArr.push({className : 'bg-purple', 		title : getColorName('purple' , false)	, textcol : '#000'});
		bgArr.push({className : 'bg-red-strong', 	title : getColorName('red' , true)		, textcol : '#fff'});
		bgArr.push({className : 'bg-orange-strong', title : getColorName('orange' , true)	, textcol : '#000'});
		bgArr.push({className : 'bg-yellow-strong', title : getColorName('yellow' , true)	, textcol : '#000'});
		bgArr.push({className : 'bg-green-strong', 	title : getColorName('green' , true)	, textcol : '#000'});
		bgArr.push({className : 'bg-blue-strong', 	title : getColorName('skyblue' , true)	, textcol : '#000'});
		bgArr.push({className : 'bg-blue-strong2', 	title : getColorName('blue' , true)		, textcol : '#fff'});
		bgArr.push({className : 'bg-purple-strong', title : getColorName('purple' , true)	, textcol : '#fff'});
		/*bgArr.push({className : 'bg-violet', 		title : getColorName('violet' , false)});
		bgArr.push({className : 'bg-violet-strong', title : getColorName('violet' , true)});
		bgArr.push({className : 'bg-grey', 			title : getColorName('grey' , false)});
		bgArr.push({className : 'bg-grey-strong', 	title : getColorName('grey' , true)});
		bgArr.push({className : 'bg-white', 		title : getColorName('white' , false)});
		bgArr.push({className : 'bg-black', 		title : getColorName('black' , false)});
		bgArr.push({className : 'bg-pink', 		 	title : getColorName('pink' , false)});
		bgArr.push({className : 'bg-pink-strong', 	title : getColorName('pink' , true)});*/
		wzbgArr = bgArr;
	}
	
	return wzbgArr;
}

function getColorName(col, isStrong){
	var colNm = '';
	if(typeof w_msg == 'function'){
		colNm = w_msg('wzwg.cmm.word.col.' + col);
		if(isStrong){
			colNm = w_msg('wzwg.cmm.word.col.strong') + ' ' + colNm;
		}
		return colNm;
	}
	
	if(isStrong){
		colNm = '진한 ';
	}
	
	if(col == 'red'){
		colNm += '빨강';
	}else if(col == 'pink'){
		colNm += '분홍';
	}else if(col == 'orange'){
		colNm += '주황';
	}else if(col == 'yellow'){
		colNm += '노랑';
	}else if(col == 'green'){
		colNm += '초록';
	}else if(col == 'skyblue'){
		colNm += '하늘';
	}else if(col == 'blue'){
		colNm += '파랑';
	}else if(col == 'brown'){
		colNm += '갈';
	}else if(col == 'violet'){
		colNm += '연보라';
	}else if(col == 'purple'){
		colNm += '보라';
	}else if(col == 'grey'){
		colNm += '회';
	}else if(col == 'white'){
		colNm = '흰';
	}else if(col == 'black'){
		colNm = '검정';
	}
	
}


function getBgColorData(bgClass){
	var bgArr = getBgColorList();
	for(var i = 0 ; i < bgArr.length ; i++){
		var bgData = bgArr[i];
		if(bgData.className == bgClass){
			return bgData;
		}
	}
	
	return undefined;
}

/* 스크롤계산속도 이슈로 글로벌 변수처리함 2020.07.30 */
var srollWidth;
/* 2. jquery 추가 펑션 */
document.addEventListener("DOMContentLoaded", function(){
	/* 해당객체의 스크롤이 있는지 확인 사용법  */
	// 가로 스크롤바
	(function($) {
		$.fn.hasHorizontalScrollBar = function() {
			return this.get(0) ? this.get(0).scrollWidth > this.innerWidth() : false;
		}
	})(jQuery);
	
	// 세로 스크롤바
	(function($) {
		$.fn.hasVerticalScrollBar = function() {
			if($(this).length > 0){
				//console.log(this);
				console.log('Object scroll check');
	    		return this.get(0) ? this.get(0).scrollHeight > this.innerHeight() : false;
	    	}else{
	    		console.log('window scroll check');
	    		return $(document).height() > $(window).height();
	    	}
		}
	})(jQuery);
	
	/* jquery 로드 충돌로 인해 일반 function 으로 변경함
		$.fn.scrollbarWidth = function(){
			if($(document).height() <= $(window).height()){
				return 0;
			}
			//console.log('scrollbarWidth');
			var a = document.createElement("div");
	        a.style.position = 'absolute';
	        a.style.top = '-9999px';
	        a.style.width = '50px';
	        a.style.height = '50px';
	        a.style.overflow = 'scroll';
	        $('body').append(a);
	        var b = a.offsetWidth - a.clientWidth;
	        $(a).remove();
	        return b;
		};
	
		$.fn.wzHideScrollbar = function(){
			var srollWidth = $().scrollbarWidth();
			var bodyCssOpt = {
					"padding-right" : srollWidth + 'px'
				,	"overflow" : 'hidden'
			}
			$("body").css(bodyCssOpt);
		};
		
		$.fn.wzShowScrollbar = function(){
			var bodyCssOpt = {
					"padding-right" : ''
				,	"overflow" : 'auto'
			}
			$("body").css(bodyCssOpt);
		};
	*/
	// 사옹예
	//if($("#element").hasVerticalScrollbar()){
	// 세로 스크롤바가 있을 경우 처리
	//}
	//출처: https://bloodguy.tistory.com/entry/jQuery-element의-scrollbar가-보이고-있는지-여부-체크 [Bloodguy]

	/* 스크롤계산속도 이슈로 글로벌 변수처리함 2020.07.30 */
	srollWidth = wzScrollbarWidth();
});


function wzScrollbarWidth(){
	if($(document).height() <= $(window).height()){
		return 0;
	}
	//console.log('scrollbarWidth');
	var a = document.createElement("div");
    a.style.position = 'absolute';
    a.style.top = '-9999px';
    a.style.width = '50px';
    a.style.height = '50px';
    a.style.overflow = 'scroll';
    $('body').append(a);
    var b = a.offsetWidth - a.clientWidth;
    $(a).remove();
    return b;
};

function wzHideScrollbar(){
	
	var bodyCssOpt = {
			"padding-right" : srollWidth + 'px'
		,	"overflow-y" : 'hidden'
	}
	$("body").css(bodyCssOpt);
};

function wzShowScrollbar(){
	var bodyCssOpt = {
			"padding-right" : ''
		,	"overflow-y" : 'auto'
	}
	$("body").css(bodyCssOpt);
};




/* 3. 위디자인 제공 스크립트 */
$(function(){
	
	$.fn.isDisplayNone = function(){
		if($(this).css('display') == 'none'){
			return true;
		}else{
			return false;
		}
	}
})


function isView(ele){
	 if($(ele).css('display') == 'none'){
		 return false;
	 }
	 
	 if($(ele).css('visibility') == 'hidden'){
		 return false;
	 }
	 
	 if($(ele).css('opacity') == '0'){
		 return false;
	 }
	 
	 return true;
 }

function fnGetQueryMap(){
	var qeuryStr = location.search.replace('?','');
	var queryArr = qeuryStr.split('&');
	var queryMap = {};
	
	for(var i = 0 ; i < queryArr.length ; i++){
		queryMap[queryArr[i].split('=')[0]] = queryArr[i].split('=')[1]
	}
	
	return queryMap;
}





/* 4. 위디자인 시작(init()) 스크립트 */

$(window).on('load', function(){
//$(function(){
	
	console.log('widesign init');
	var tab = $('.cocntainer_tabs');
	oldTabClassSetting(tab , false);
	
	var tab2 = $('.step .tapMenu');
	oldTabClassSetting(tab2, true);
	oldTabOnClassObserver(tab2);
	wzTabInit();
	
	wzCollapseInit();
	
	wzImgPopupInit();
	
	wzAffixInit();
});




/* 5. 팝업관련 스크립트 */
var wzPopCallBtn;
var openSrcId;//html 아이디 wzHtmlModal 호출용
function wzModalClose(){
	//$('.wzpopup .close').click();
	//wzShowScrollbar();
	//$(".wzpopup-wrap").remove();
	//$("#fade").remove();
	
	if(openSrcId){
		$('#wzPopupArea').append($('#' + openSrcId));
    	$('#' + openSrcId).unwrap();
	}
	
	var popLen = $(".wzpopup-wrap").length;
	
	if(popLen > 1){
		$(".wzpopup-wrap").eq(popLen-1).remove();
	}else{
		wzShowScrollbar();
		$(".wzpopup-wrap").remove();
		$("#fade").remove();
	}
	
	if($(wzPopCallBtn).length == 1){
		$(wzPopCallBtn).focus();	
	}
	
	if($('._preFocus').length == 1){
		$('._preFocus').focus();
		$('._preFocus').removeClass('_preFocus');
	}
	$("#fadeLodingModal").remove();
	openSrcId = null;
}


function wzAjaxModal(sizCls, title, html, moveFlag, callObj){
	//if(!callObj){
	//	alert('호출 버튼을 찾을수 없습니다.');
	//	return;
	//}
	//console.log(this);
	
	wzPopCallBtn = callObj;
	//console.log(wzPopCallBtn);
	if(!moveFlag){
		moveFlag = 'true';
		//console.log('기본값으로 무브시킵니다.');
	}
	
	var popupForm = getPoupLayer(sizCls);
	
	var popup = $(popupForm);
	wzHideScrollbar();
	$('body').append(popup);
	$(".wzpopup").show();
	//$(".wzpopup").focus();

    
    if(moveFlag == 'true'){
    	//$('.wzpopup').draggable();
    	$('.wzpopup').draggable({ handle: ".pop-header" });
    	$(".pop-header").css('cursor', 'move');
    }
	
	
    if(title){
    	popup.find('.pop-title').html(title);
    }
    
    if(html){
    	popup.find('.pop-container').html(html);
    }
    
    popup.find('.close, .pop-close').click(function(){
    	//wzShowScrollbar();
    	//$(".wzpopup-wrap").remove();
    	//$("#fade").remove();
    	
    	//if($(wzPopCallBtn).length == 1){
    	//	$(wzPopCallBtn).focus();	
    	//}
    	wzModalClose();
    	
    	
    	//if($('._preFocus').length == 1){
    	//	$('._preFocus').focus();
    	//	$('._preFocus').removeClass('_preFocus');
    	//}
    	
    });
    
    popup.find('.close, .pop-close').on('keydown', function(e){
    	//console.log(e.keyCode);
    	
    	if(e.keyCode == '9'){
    		//닫기버튼에서 탭키를 누르면
    		wzModalFocus();
    		e.stopPropagation();
			e.preventDefault();
    	}
    });
    
    
    
    wzModalFocus();
    
    return popup;
}


function wzHtmlModal(sizCls, title, contentsId, moveFlag, callObj){
	
	//if(!callObj){
	//	alert('호출 버튼을 찾을수 없습니다.');
	//	return;
	//}
	wzPopCallBtn = callObj;
	
	openSrcId = contentsId;
	
	if(!moveFlag){
		moveFlag = 'true';
		//console.log('기본값으로 무브시킵니다.');
	}
	
	var popupForm = getPoupLayer(sizCls);
	
	var popup = $(popupForm);
	wzHideScrollbar();
	$('body').append(popup);
	
	
	$("body").css("overflow","hidden");
	$(".wzpopup").show();
    //$(".wzpopup").focus();
    
    
    if(moveFlag == 'true'){
    	//$('.wzpopup').draggable();
    	$('.wzpopup').draggable({ handle: ".pop-header" });
    	$(".pop-header").css('cursor', 'move');
    }
    
    
    if(title){
    	popup.find('.pop-title').html(title);
    }
    
    
    if(contentsId){
    	$('#' + contentsId).wrap('<div id="wzPopupArea"></div>');
    	popup.find('.pop-container').append($('#' + contentsId));
    	
    	//$('#skinPop').wrap('<div id="test"></div>');
    	//$('.wzpopup').find('.pop-container').append($('#test #skinPop'));
    }
    
    var onPopup = $('.wzpopup-wrap');
    
    onPopup.find('.close, .pop-close').click(function(){
    	//$('#test').append($('#skinPop'));
    	//$('#skinPop').unwrap();
    	//console.log(contentsId);
    	//$('#wzPopupArea').append($('#' + contentsId));
    	//$('#' + contentsId).unwrap();
    	//$(".wzpopup-wrap").remove();
    	//$("body").css("overflow","auto");
    	//$("#fade").remove();
    	wzModalClose();
    	//$(wzPopCallBtn).focus();
    	
    });
    
    onPopup.find('.close, .pop-close').on('keydown', function(e){
    	//console.log(e.keyCode);
    	
    	if(e.keyCode == '9'){
    		//닫기버튼에서 탭키를 누르면
    		wzModalFocus();
    		e.stopPropagation();
			e.preventDefault();
    	}
    });
        
    
    
    
    wzModalFocus();
    
    return popup;
	
}

function getPoupLayer(sizCls){
	var pop = '';
	pop += '<div class="wzpopup-wrap">                                                            ';
	pop += '<div class="wzpopup ' + sizCls + '">                                                            ';
  	pop += '<div class="pop-header">                                                                 ';
	pop += '    <span class="pop-title">'+wz_msg("wzwg.webModule.word.layerPopTitle")+'</span>                                                        ';
	pop += '</div>                                                                                   ';
	pop += '<div class="pop-body">                                                                   ';
	pop += '	<div class="pop-container">                                                          ';
	pop += '	</div>                                                                               ';
	pop += '</div>                                                                                   ';
	pop += '<button type="button" class="close" title="'+wz_msg("wzwg.webModule.word.popClose")+'" ><img src="/widesign/img/pop-close.png" alt="'+wz_msg("wzwg.webModule.word.popClose")+'"></button>  ';
    pop += '</div>                                                                                   ';
    pop += '</div>                                                                                   ';
    if($('#fade').length < 1){
    	pop += '<div id="fade"></div>                                                                     ';
    }
    return pop;
}   

function getYoutubeLayer(youtubeId){
	var pop = '';
	pop += '<div class="wzpopup-wrap">                                                            ';
	pop += '  <div class="wzpopup popup_video">                                                                                  ';
	pop += '	<div class="pop-body">                                                                                           ';
	pop += '		<div class="pop-container">                                                                                  ';
	pop += '				<iframe src="https://www.youtube.com/embed/' + youtubeId + '" frameborder="0" allowfullscreen=""></iframe> ';
	pop += '		</div> <!-- pop-container end -->                                                                            ';
	pop += '	</div> <!-- pop-body end -->                                                                                     ';
	pop += '	<button type="button" class="close" title="'+wz_msg("wzwg.webModule.word.popClose")+'"><img src="/widesign/img/pop-close.png" alt="'+wz_msg("wzwg.webModule.word.popClose")+'"></button>                          ';
	pop += '  </div>                                                                                                             ';
	pop += '</div>                                                                                   ';
	if($('#fade').length < 1){
    	pop += '<div id="fade"></div>                                                                     ';
    }
    return pop;
}

function wzYoutubeModal(youtubeId){
	var popupForm = getYoutubeLayer(youtubeId);
	
	$('body').append(popupForm);
	
	$("body").css("overflow","hidden");
	$(".wzpopup").show();
    $(".wzpopup").focus();
    
    var popup = $('.wzpopup');
    
    popup.find('.close, .pop-close').click(function(){
    	//$(".wzpopup-wrap").remove();
    	//$("body").css("overflow","auto");
    	//$("#fade").remove();
    	wzModalClose();
    });
    
    popup.find('.close, .pop-close').on('keydown', function(e){
    	//console.log(e.keyCode);
    	
    	if(e.keyCode == '9'){
    		//닫기버튼에서 탭키를 누르면
    		wzModalFocus();
    		e.stopPropagation();
			e.preventDefault();
    	}
    });
    
    wzModalFocus();
}
    
    


function wzLoadingModal(imgObj){
	var pop = '';
	pop += '<div class="wzpopup-wrap" id="wzLodingModal">                                                            ';
	pop += '  <div class="wzpopup popup_loading" style="box-shadow:none;">                                                                                  ';
	pop += '	<div class="pop-body">                                                                                           ';
	pop += '		<div class="pop-container txt-c" style="background: rgba(0,0,0,0);">                  ';
//	pop += '				<iframe src="https://www.youtube.com/embed/' + youtubeId + '" frameborder="0" allowfullscreen=""></iframe> ';
	pop += imgObj;
	pop += '		</div> <!-- pop-container end -->                                                                            ';
	pop += '	</div> <!-- pop-body end -->                                                                                     ';
//	pop += '	<button type="button" class="close" title="닫기"><img src="/widesign/img/pop-close.png"></button>                          ';
	pop += '  </div>                                                                                                             ';
	pop += '</div>                                                                                   ';
    pop += '<div id="fadeLodingModal"></div>                                                                     ';
    
    
    wzHideScrollbar();
    $('body').append(pop);
	
	$("body").css("overflow","hidden");
	$(".wzpopup").show();
    $(".wzpopup").focus();
   
}
    

function wzLoadingModalClose(){
	if($(".wzpopup-wrap").length > 1){
		$('#wzLodingModal').remove();
		$('#fadeLodingModal').remove();
	}else{
		wzShowScrollbar();
		$(".wzpopup-wrap").remove();
		$("body").css("overflow","auto");
		$("#fadeLodingModal").remove();
	}
	
}
    

function wzModalFocus(com){
	 var selectors = $('.wzpopup .pop-container').find('a, button, input[type="text"], input[type="radio"], input[type="checkbox"], select, textarea'); 
	 //console.log(selectors.length);
	 if(selectors.length > 0){
		 
		 if(com == 'last'){
			 selectors[selectors.length-1].focus();
		 }else{
			 selectors[0].focus();
		 }
		 //console.log(selectors[0]);
	 }else{
	    $('.wzpopup .close').focus();
	    //console.log('close focus');
	 }
}
    
    
    
    
    
    
    
    
/* 6. 파일 미리보기 스크립트 */
var wzFileExt = ['jpg','gif','png','bmp','jpeg'];
function wzImgFileExtCheck(ext){
	ext = ext.toLowerCase();
	
	for(i = 0 ; i < wzFileExt.length ; i++){
		if(wzFileExt[i] == ext) return true;
	}
	
	return false;
}
function wzImgPreview(fileid, imgid){
    	var file = $('#' + fileid)[0].files[0];
    	
    	if(file == undefined){
    		return;
    	}
    	
    	var fileExt = file.name.split('.');
    	
    	fileExt = fileExt[fileExt.length-1];
    	
    	if(wzImgFileExtCheck(fileExt) == false){
    		$('#' + fileid).val('');
    		alert('Please select an image file\n Check the file name(watch out for special characters)');
    		return;
    	}
    	
    	var preview = $('#' + imgid);
    	var reader = new FileReader();
    	
    	//reader.addEventListener("load", function () {
    	//    preview.src = reader.result;
    	//}, false);
    	reader.onload = function(e){
    		preview.attr('src', e.target.result);
    	}
    	
    	if(file){
    		reader.readAsDataURL(file);
    	}
    }    


function wzImgPrevieBind(fildid, imgid){
	
	$('#' + fildid).on('change', function(e){
		//var file = $('#' + fileid)[0].files[0];
		var file = $(this)[0].files[0];
		if(file == undefined){
    		return;
    	}
    	
		var fileExt = file.name.split('.');
		
		fileExt = fileExt[fileExt.length-1];
    	
    	if(wzImgFileExtCheck(fileExt) == false){
    		$(this).val('');
    		alert('Please select an image file\n Check the file name(watch out for special characters)');
    		return;
    	}
    	
		var preview = $('#' + imgid);
		var reader = new FileReader();
		
		reader.onload = function (e) {
			
			preview.attr('src', e.target.result);
		}
		reader.readAsDataURL($(this)[0].files[0]);
		
	});
}
    







/* 7. tab 기능 스크립트 */
function oldTabClassSetting(tab, hasParent){
	tab.addClass('wztab-list');
	tab.children().addClass('wztab-item');
	/*tab.children().each(function(idx){
		console.log($(this).find('.on'));
		if($(this).find('.on').length == 1){
			$(this).addClass('active');
		}
	});*/
	
	if(hasParent){
		tab.parent().addClass('wztab');
	}else{
		tab.wrap('<div class="wztab"></div>');
	}
}

function oldTabOnClassObserver(tab){
	setInterval(function(){
		tab.find('a').each(function(idx){
			if($(this).hasClass('on')){
				$(this).parent().addClass('active');
			}else{
				$(this).parent().removeClass('active');
			}
		});
	}, 0)
}

function wzTabInit(){
	var wztab = $('.wztab-list'); //여러개 있을수 있음
	
	var toggleBtn = '';
		toggleBtn += '<button type="button" class="wzbtn-table btn-basic wzbtnTab-toggle">&gt;</button>';
	
	wztab.find('.wzbtnTab-toggle').remove(); // 기존에 버튼이 있으면 삭제하고 다시 진행
	wztab.prepend(toggleBtn);
	
	wztab.each(function(idx){
		var tab = $(this);
		tab.find('.wzbtnTab-toggle').on('click', function(){
			tab.find('.wztab-item').toggleClass('visible');
			tab.toggleClass('wztab-select');
			if(tab.hasClass('wztab-select')){
				$(this).html('&lt;');
			}else{
				$(this).html('&gt;');
			}
		});
		
	});
	
	wztab.find('a, button').on('click', function(){
		//console.log('dd');
		$(this).parent().siblings().removeClass('active');
		$(this).parent().addClass('active');
		
		//$(this).parent().siblings().each(function(){
		//	//console.log($(this));
		//	var tabId = $(this).find('a, button').attr('data-tabid');
		//	//console.log('siblings id find : ' + tabId);
		//	if(tabId != undefined && tabId != ''){
		//		$('#' + tabId).css('display', 'none');
		//	}
		//})
		//
		//var activeTabId = $(this).attr('data-tabid');
		//if(activeTabId != undefined && activeTabId != ''){
		//	$('#' + activeTabId).css('display', 'block');
		//}
	});
	
	wzCustomTabInit();
}


function wzCustomTabInit(){
	var wztab = $('.wztab-custom-list'); //여러개 있을수 있음
	
	wztab.each(function(){
		var activeClas = $(this).attr('data-active');
		
		if(activeClas != undefined && activeClas != ''){
			$(this).find('a, button').attr('data-active', activeClas); // 정의된 active class 세팅
		}else{
			$(this).find('a, button').attr('data-active', 'on'); // 기본값 active class 세팅
		}
		
		
		//보여진 컨텐츠 display 정리
		$(this).find('a, button').each(function(idx){
			if(idx == 0){
				var activeClas = $(this).attr('data-active');
				$(this).parent().addClass(activeClas);
			}else{
				var activeTabId = $(this).attr('data-tabid');
				$('#' + activeTabId).css('display', 'none');
			}
		});
		
		
		//버튼 액션 바인딩
		$(this).find('a, button').on('click', function(){
			//console.log('dd');
			var activeClas = $(this).attr('data-active');
			$(this).parent().siblings().removeClass(activeClas);
			$(this).parent().addClass(activeClas);
			
			$(this).parent().siblings().each(function(){
				//console.log($(this));
				var tabId = $(this).find('a, button').attr('data-tabid');
				//console.log('siblings id find : ' + tabId);
				if(tabId != undefined && tabId != ''){
					$('#' + tabId).css('display', 'none');
				}
			})
			
			var activeTabId = $(this).attr('data-tabid');
			if(activeTabId != undefined && activeTabId != ''){
				$('#' + activeTabId).css('display', 'block');
			}
		});
		
		
	});//end wztab
	
	
	
	
	
}


/* 8. collapse 스크립트 */
function wzCollapseInit(){
	$('.wz-collapse').each(function(){
		$(this).off();
		$(this).on('click', function(e){
			e.stopPropagation();
			//e.preventDefault();

			var target = $(this).attr('data-for');
			var action = $(this).attr('data-act');
			if($(target).isDisplayNone()){
				if(action == 'fade'){
					$(target).fadeIn();
				}else{
					$(target).slideDown();
				}
			}else{
				if(action == 'fade'){
					$(target).fadeOut();
				}else{
					$(target).slideUp();
				}
			}
		})
		
	})
}







/* 9. 위디자인 팝업 스크립트 */
function wzImgPopupInit(){
	$('img.wzpop-item').each(function(idx){
		$(this).off();// 혹시나 추가로 이미지 작업후 수행할시 기존 이벤트를 제거해 주도록 한다.
		$(this).attr('data-ord', idx);
		$(this).attr('tabindex', '0');
	});
	
	$('img.wzpop-item').on('click keydown', function(e){
		//console.log(e);
		if(e.type == 'keydown'){
			if(e.keyCode != 13){
				return;
			}
		}
		
		$(this).addClass('_preFocus');
		//var item = '<img class="w100" src="' + $(this).attr('src') + '">';
		var item = makeImagePopupBody();
		wzAjaxModal('popup_la', 'ImageViewer', item, 'false', 'imgPopup');
		
//		$('.pop-container .imageBox').children().eq($(this).attr('data-ord')).show();
		$('.pop-container .imageBox').children().eq($(this).attr('data-ord')).addClass('imgActive');
		
		wzPopImgBtnDisplay();
		$('.pop-container').addClass('bg-black');
		$('.pop-header').addClass('dp-none');
		$('.wzpopup').addClass('popup_img');
		$('.wzpopup').css('display', 'inline-block');
		
		imagePopupDrag();
		
		e.stopPropagation();
		e.preventDefault();
	});
	
	$('a.wzpop-item').on('click', function(e){
		if($('#wzpopup').length > 0){
			return;
		}
		var thisItem = $(this);
		var thisIdx = 0;
		$('a.wzpop-item').each(function(idx){
			if($(this)[0] == thisItem[0]){
				//console.log($(this));
				thisIdx = idx;
			}
		});
		//console.log($(this))
		//console.log(thisIdx);
		
		//return;;;
		var item = makeImagePopupBody();
		wzAjaxModal('popup_la', 'ImageViewer', item, 'false', 'imgPopup');
		
//		$('.pop-container .imageBox').children().eq($(this).attr('data-ord')).show();
		$('.pop-container .imageBox').children().eq(thisIdx).addClass('imgActive');
		
		wzPopImgBtnDisplay();
		$('.pop-container').addClass('bg-black');
		$('.pop-header').addClass('dp-none');
		$('.wzpopup').addClass('popup_img');
		$('.wzpopup').css('display', 'inline-block');
		
		imagePopupDrag();
		
		e.stopPropagation();
		e.preventDefault();
	})
}

function makeImagePopupBody(){
	var imgs = $('img.wzpop-item');
	var html = '';
		html += '<div class="popup_image" data-cnt="' + imgs.length + '">';
		
		html += '	<div class="imageBox">';
		imgs.each(function(){
			//var img = '<img class="w100 dp-none" src="' + $(this).attr('src') + '">';
			var img = $(this).clone();
			img.addClass('dp-none');
			img.removeAttr('style');
			html += img[0].outerHTML;
		});
		html += '	</div>';
		
		html += '	<div class="pagingBox txt-c" style="z-index:0">';
		html += '		<span id="wzpop-pagination">';
		imgs.each(function(idx){
			var dot = '<span onclick="wzPopImgMov(\'dot\',' + idx + ', event)">' + (idx+1) + '</span>';
			html += dot;
		});
		html += '		</span>';
		html += '		<button id="btn-popimg-prev" type="button" class="wzbtn-table" onclick="wzPopImgMov(\'prev\', 0, event)" title="'+wz_msg("wzwg.webModule.word.prevImg")+'"><</button>';
		html += '		<button id="btn-popimg-next" type="button" class="wzbtn-table" onclick="wzPopImgMov(\'next\', 0, event)" title="'+wz_msg("wzwg.webModule.word.nextImg")+'">></button>';
		html += '		<button id="btn-popimg-down" type="button" class="wzbtn-table fr" onclick="wzPopImgDown();" style="z-index:1" title="'+wz_msg("wzwg.webModule.word.imgDwld")+'">download</button>';
		html += '	</div>';
		
		html += '</div>';
		
	return html;
}

function imagePopupDrag(){
	var mouseX;
	var touchX;
	
	$('.pagingBox').on({
		'mousedown' : function(e){
			//e.preventDefault();
			//console.log('mousedown');
			mouseX = e.pageX;
		},
		'touchstart' : function(e){
			//e.preventDefault();
			//console.log(e.originalEvent.touches[0].screenX);
			//console.log(e.originalEvent.touches[0].clientX);
			//console.log(e.originalEvent.touches[0].pageX);
			//console.log(e);
			//console.log('touchstart');
			touchX = e.originalEvent.touches[0].screenX;
		},
		'mouseup' : function(e){
			//e.preventDefault();
			//console.log('mouseup');
			//console.log(e.pageX - mouseX);
			var mouseMov = e.pageX - mouseX;
			if(Math.abs(mouseMov) < 50){
				return true;
			}
			if(mouseMov > 50){
				//오른쪽으로 드래그
				wzPopImgMov('prev', 0, e);
			}else if(mouseMov < 50){
				//왼쪽으로 드래그
				wzPopImgMov('next', 0, e);
			}
		},
		'touchend' : function(e){
			//e.preventDefault();
			//console.log('touchend');
			//console.log(e);
			//console.log(e.originalEvent.changedTouches[0].screenX);
			//console.log(e.originalEvent.changedTouches[0].clientX);
			//console.log(e.originalEvent.changedTouches[0].pageX);
			//console.log(e.originalEvent.changedTouches[0].screenX - touchX);
			var mouseMov = e.originalEvent.changedTouches[0].screenX - touchX;
			if(Math.abs(mouseMov) < 50){
				return true;
			}
			if(mouseMov > 50){
				//오른쪽으로 드래그
				wzPopImgMov('prev', 0, e);
			}else if(mouseMov < 50){
				//왼쪽으로 드래그
				wzPopImgMov('next', 0, e);
			}
		}
	});
	
}

var _imgSpped = 100;//팝업 이미지 전환속도 단위 ms
function wzPopImgMov(command, idx, event){
	event.preventDefault();
	//console.log(command);
	var imgs = $('.pop-container .imageBox').find('img');
	var viewImg = $('.popup_image .imgActive');
	
	
	if(command == 'prev'){
		if(viewImg.prev().length > 0){
			viewImg.fadeOut(_imgSpped, function(){
				viewImg.removeClass('imgActive');
				viewImg.prev().addClass('imgActive');
				viewImg.prev().fadeIn(_imgSpped, wzPopImgBtnDisplay);
			});
		} 
	}else if(command == 'next'){
		if(viewImg.next().length > 0){
			viewImg.fadeOut(_imgSpped, function(){
				viewImg.removeClass('imgActive');
				viewImg.next().addClass('imgActive');
				viewImg.next().fadeIn(_imgSpped, wzPopImgBtnDisplay);
			});
		}
	}else if(command == 'dot'){
		viewImg.fadeOut(_imgSpped, function(){
			viewImg.removeClass('imgActive');
			imgs.eq(idx).addClass('imgActive');
			imgs.eq(idx).fadeIn(_imgSpped, wzPopImgBtnDisplay);
		});
	}
	
}

function wzPopImgBtnDisplay(){
	/*disabled="disabled" bg-grey-strong*/
	$('#btn-popimg-prev').removeClass('disabled');
	$('#btn-popimg-next').removeClass('disabled');
	//var imgs = $('.pop-container .imageBox').find('img');
	var viewImg = $('.popup_image .imgActive');
	var dotPosition = viewImg.attr('data-ord');
	
	viewImg.show();
	
		if(viewImg.prev().length == 0){
			$('#btn-popimg-prev').addClass('disabled');
		} 
		
		if(viewImg.next().length == 0){
			$('#btn-popimg-next').addClass('disabled');
		}
		
	$('#wzpop-pagination').children().removeClass('on');
	$('#wzpop-pagination').children().eq(dotPosition).addClass('on');
	
	var download = viewImg.attr('data-down');
	//console.log(viewImg);
	//console.log(download);
	if(download){
		$('#btn-popimg-down').show();
	}else{
		$('#btn-popimg-down').hide();
	}
	
	//팝업닫힘 포커스 잡기
	var imgIdx = $('.popup_image .imgActive').attr('data-ord');
	wzPopCallBtn = $('a.wzpop-item').eq(imgIdx);
	//console.log(imgIdx);
}

function wzPopImgDown(){
	
	var imgs = $('.pop-container .imageBox').find('img');
	var viewImg;
	imgs.each(function(idx){
		if($(this).isDisplayNone() == false){
			viewImg = $(this);
			dotPosition = idx;
		}
	});
	
	
//	var imageUrl = viewImg.attr('src');
	var imageUrl = viewImg.attr('data-down');
	
	if(imageUrl == 'this'){
		imageUrl = viewImg.attr('src');
	}
	
	//window.location.assign(imageUrl);
	//return;
	
	var urlSplit = imageUrl.split('/');
	var fName = viewImg.attr('data-filename');
	if(!fName){
		fName = urlSplit[urlSplit.length-1];
	}
	
	
	
	if(/msie|trident/i.test(navigator.userAgent)){ // IE 인지 체크

	      var _window = window.open(imageUrl, '_blank');// 새창으로 열어서..

	      _window.document.close();

	      _window.document.execCommand('SaveAs', true, fName);// 저장하라, false 로 해도 동일

	      _window.close();// 끝나면 새창 닫음
		//var ifr = $('<iframe id="_tframe" style="display: none;"></iframe>');
		////$('body').append(ifr);
		//ifr[0].src = imageUrl;
		////ifr[0].contentDocument.close();
		//ifr[0].contentDocument.execCommand('SaveAs', true, fName);
		//ifr.remove();

	    }else{

	      var $a = $("<a>").attr("href", imageUrl).attr("download", fName).attr('target', '_clink').appendTo("body");// HTML 5 가 가능한 녀석들은 좋아..

	      $a[0].click();

	      $a.remove();

	    }



	//출처: https://jsp-making.tistory.com/282 [JSP 요리]
}





/* 10. affix 스크립트 */
var wzAffixList = null;//new Array();
function wzAffixInit(){
	wzAffixList = new Array();//초기화
	$('.wzAffix').each(function(){
			//console.log(this);
			//var parentTop = $(this).parent().offset().top;
			wzAffixList.push($(this));
			$(this).attr('data-affix', 'off');
			$(this).attr('data-affix-bottom', '0');
			$(this).attr('data-affix-top', $(this).offset().top);
			//console.log('wzAffixInit $(this).offset().top : ' + $(this).offset().top);
			
		});
		
		if(wzAffixList.length > 0){
			wzAffixScrollAction();
			wzAffixScrollStart();
		}
		
		$('.wzAffix').each(function(){
			//console.log('affix 로드이후');
			var loadFunction = $(this).attr('data-load-function');
			if(loadFunction == undefined || loadFunction == null || loadFunction == ''){
				return;
			}
			
			if(typeof loadFunction.toString == 'function'){
				//console.log(loadFunction);
				if(loadFunction.indexOf('()') == -1){
					eval(loadFunction + '()');
				}else{
					eval(loadFunction);
				}
				console.log('wzAffix load function execute');
			}
		
	});
}

var wzScrolPos;
var wzAffixTopSpace = 0;
function wzAffixScrollAction(){
	var movScrolpx = $(document).scrollTop();
	
	for(var i = 0 ; i < wzAffixList.length ; i++){
		var ele = wzAffixList[i];
		//console.log(ele);
		var usrTopSpace = eval(ele.attr('data-topSpace'));
		//console.log("usrTopSpace : " + usrTopSpace);
		if(!usrTopSpace){
			 usrTopSpace = wzAffixTopSpace;
		}
		var parentTop = ele.parent().offset().top;// + usrTopSpace;
		

		var fixPoint = ele.attr('data-fix-point');
		var footerTopPosition = function(){
			var result = 0;
			if(fixPoint == 'bottom'){
				result = movScrolpx + $(window).height();
			}else{
				//var elelMaginTop = parseInt(ele.css('margin-top').replace('px', ''));
				result = (movScrolpx + ele.outerHeight(true) + usrTopSpace);
			}
			return result;
		}
		
		var bottom = $(ele.attr('data-bottom'));
		if(bottom.length != 1){
			console.log('waAffix :: empty data-bottom');
			//푸터없음
		}else{
			//푸터 작동함
//			var footerTop = $('#footer').offset().top;
			
			var footerTop = bottom.offset().top;
//			var footerTop = ele.offset().top;
			//console.log("footer check [footerTop : " + footerTop + " find : (" + (movScrolpx + ele.outerHeight()) + ") movScrolpx : " + movScrolpx + " ele.outerHeight() : " + ele.outerHeight());
			//console.log(footerTop + ' : ' + footerTopPosition());
			var footerScrollPoint = footerTopPosition();
			if(footerTop < footerScrollPoint){
				if(ele.attr('data-affix-bottom') == '0'){
					//console.log('footerTopPosition movScrolpx : ' + (movScrolpx));
					//console.log('footerTopPosition usrTopSpace : ' + (usrTopSpace));
					//console.log('footerTopPosition() : ' + footerScrollPoint);
					//console.log('ele.offset().top : ' +  ele.offset().top);
					//console.log(footerScrollPoint + ' - ' + ele.outerHeight(true) + ' : ' + (footerTop - ele.outerHeight(true)));
					//console.log('quick menu footer position on');
					//console.log(footerTop + ' / ' + parentTop + ' / ' + ele.outerHeight(true));
					var absTop = footerTop - parentTop - ele.outerHeight(true);
					//console.log(absTop);
					var offsetTop = ele.attr('data-affix-top');
					//if(offsetTop != undefined &&  offsetTop != ''){
					//	absTop += parseInt(offsetTop);
					//}
					ele.css('position', 'absolute');
					ele.removeClass('fixed');
					ele.css('top', absTop + 'px');
					ele.css('bottom', '');
					ele.attr('data-affix-bottom', movScrolpx);
					ele.attr('data-affix', 'x'); // position 이 fixed가 아니기 때문에 변경해둠
				}
				//ele.css('bottom', '0');
				
			}else{
				// footer 컨트롤 종료
				//console.log('quick menu footer position end');
				ele.attr('data-affix-bottom', '0');
				
			}
		}
		
		
		// footer 컨트롤을 하지 않을때
		if(ele.attr('data-affix-bottom') == '0'){
			if(parentTop - usrTopSpace >= movScrolpx){
				if(ele.attr('data-affix') == 'off'){
					continue;
				}
				//console.log('quick menu top position fixed off');
				if(fixPoint == 'bottom'){
					ele.css('bottom', '');
					ele.animate({top : 0}, function(){
						ele.css('top', '');
						ele.css('position', 'relative');
					})
				}else{
					ele.css('position', 'relative');
					ele.css('top', '');
					ele.css('bottom', '');
				}
				
				ele.removeClass('fixed');
				ele.attr('data-affix', 'off');
				//ele.animate({'top' : 0});
			}else{
				if(ele.attr('data-affix') == 'on'){
					continue;
				}
				//console.log('quick menu top position fixed on');
				ele.css('position', 'fixed');
				ele.attr('data-affix', 'on');
				ele.addClass('fixed');
				
				if(fixPoint == 'bottom'){
					//ele.animate({bottom : usrTopSpace});
					ele.css('top', '0');
					ele.animate({top : ($(window).height() - ele.outerHeight()) }, function(){
						ele.css('top', ''); 
						ele.css('bottom', '0px')
						});
				}else{
					ele.css('top', usrTopSpace + 'px');
				}
				//ele.css('top', '0px');
				//ele.animate({'top' : usrTopSpace} );
			}
		}
			
	}
	 
	if(movScrolpx > wzScrolPos){
		//console.log('스크롤 내려감');
		
	}else{
		//console.log('스크롤 올라감');
	}
	
	wzScrolPos = movScrolpx; 
}
function wzAffixScrollStart(){
	$(document).scroll(function(){ 
		wzAffixScrollAction();
  });
}








/* 11. scroll fade effect */
var ef_switch = false;
function wzStartScrollEffec(){
	ef_switch = true;
}
function wzStopScrollEffec(){
	ef_switch = false;
	$('.FXarea_Fade').each(function (i) {
		$(this).removeClass('animate-fade');
	});
	$('.FXarea_slideUp').each(function (i) {
		$(this).removeClass('animate-slideUp');
	});
	$('.FXarea_slideNfade').each(function (i) {
		$(this).removeClass('animate-slideNfade');
	});
}
function wzRestartScollEffect(){
	wzStopScrollEffec();
	wzStartScrollEffec();
}

$(document).ready(function() {
	
	$(window).scroll(function () {
		
		//스크롤 되었을때 FX1 - fade
		//해당 요소의 위치 파악
		//fade 할 위치에 FXarea_Fade 가 들어가있는 상태.
		$('.FXarea_Fade').each(function (i) {
			if($(this).hasClass('animate-fade')){
				return;
			}
			if(ef_switch == false){return;}
			
			var bottom_of_object = $(this).offset().top + $(this).outerHeight();
			var bottom_of_window = $(window).scrollTop() + $(window).height();
			bottom_of_window = bottom_of_window + Math.ceil($(this).height() * 0.7);

			//해당 요소가 완벽히 보이는 위치까지 스크롤 되었을때 - fade
			if (bottom_of_window > bottom_of_object) {
				$(this).addClass('animate-fade');
			}
		});
		
		
		//스크롤 되었을때 FX2 - slideUp
		//해당 요소의 위치 파악
		//slideUp 할 위치에 FXarea_slideUp 가 들어가있는 상태.
		$('.FXarea_slideUp').each(function (i) {
			if($(this).hasClass('animate-slideUp')){
				return;
			}
			if(ef_switch == false){return;}
			
			var bottom_of_object = $(this).offset().top + $(this).outerHeight();
			var bottom_of_window = $(window).scrollTop() + $(window).height();
			bottom_of_window = bottom_of_window + Math.ceil($(this).height() * 0.95);

			//해당 요소가 완벽히 보이는 위치까지 스크롤 되었을때 - slideUp
			if (bottom_of_window > bottom_of_object) {
				$(this).addClass('animate-slideUp');
			}
		});
		
		
		//스크롤 되었을때 FX3 - slideNfade : fade, slideUp 동시에. (css에서 시간설정이 조금 다름)
		//해당 요소의 위치 파악
		//slideNfade 할 위치에 FXarea_slideNfade 가 들어가있는 상태.
		$('.FXarea_slideNfade').each(function (i) {
			if($(this).hasClass('animate-slideNfade')){
				return;
			}
			if(ef_switch == false){return;}
			
			var bottom_of_object = $(this).offset().top + $(this).outerHeight();
			var bottom_of_window = $(window).scrollTop() + $(window).height();
			bottom_of_window = bottom_of_window + Math.ceil($(this).height() * 0.95);

			//해당 요소가 완벽히 보이는 위치까지 스크롤 되었을때 - slideNfade
			if (bottom_of_window > bottom_of_object) {
				$(this).addClass('animate-slideNfade');
			}
		});
	});




});
	

/* 12. 토스트 메시지 */
function fillWidth(elem, timer, limit) {
	if (!timer) { timer = 3000; }	
	if (!limit) { limit = 100; }
	var width = 1;
	var id = setInterval(frame, timer / 100);
		function frame() {
		if (width >= limit) {
			clearInterval(id);
		} else {
			width++;
			elem.style.width = width + '%';
		}
	}
};

function getToastLayer(msg, title, type, closeBtn, timerUseAt) {
	var toast = '';
	toast += '<div class="toastWrap">';
	toast += '	<div class="toast type-'+type+'">';
	if(title){
		toast += '	<div class="toast-title">'+title+'</div>';
	}
	toast += '		<div class="toast-msg">'+msg+'</div>';
	if(closeBtn){
		toast += '	<b></b>';
	}
	if(timerUseAt){
		toast += '	<div class="timerWrap"><div class="timer"></div></div>';
	}
	toast += '	</div>';
	toast += '</div>';
    return toast;
}

function wzToast(msg, option, el) {
	
	//기본옵션
	var wzToastOp = {
		'type' : 'none',				//아이콘 Success, Info, Warning, Error 등
		'title' : '',					//제목
		'closeButton' : false,			//닫기버튼 유, 무
		'position' : 'bottom',			//위치 - bottom, top
		'accAt' : true,					//메시지 누적여부
		'accCnt' : 3,					//메시지 누적개수
		'timeOut' : 1000,				//유지시간
		'timerUseAt' : false,			//타이머 사용유무
	}
	
	if(option) {
		if(option.type){
			wzToastOp.type = option.type;
		}
		if(option.title){
			wzToastOp.title = option.title;
		}
		if(option.closeButton != null && option.closeButton != undefined){
			wzToastOp.closeButton = option.closeButton;
		}
		if(option.position){
			wzToastOp.position = option.position;
		}
		if(option.accAt != null && option.accAt != undefined){
			wzToastOp.accAt = option.accAt;
		}
		if(option.accCnt){
			wzToastOp.accCnt = option.accCnt;
			if(wzToastOp.accCnt < 0){
				wzToastOp.accCnt = 1;
			}
		}
		if(option.timeOut){
			wzToastOp.timeOut = parseInt(option.timeOut);
		}
		if(option.timerUseAt != null && option.timerUseAt != undefined){
			wzToastOp.timerUseAt = option.timerUseAt;
		}
	}
	
	console.log(wzToastOp);
	
	/*if(el){
		//툴팁은 무조건 중복없고 timeOut 시간이 안정해져있으면 기본값넣음
		wzToastOp.accAt = false;
		if(isNaN(wzToastOp.timeOut)){
			wzToastOp.timeOut = 1000;
		}
		$(el).css('position', 'relative');
		$(el).append('<div id="wzToast-container" class="toast-tooltip"></div>');
	}else {
		$('body').append('<div id="wzToast-container"></div>');
	}*/
	
	if(isNaN(wzToastOp.timeOut)){	//메시지가 사라지지않고 고정이면 닫기 버튼 무조건 생성
		wzToastOp.closeButton = true;
	}
	
	if($('#wzToast-container').size() == 0) {
		$('body').append('<div id="wzToast-container"></div>');
	}
	
	var $elem = $(getToastLayer(msg, wzToastOp.title, wzToastOp.type, wzToastOp.closeButton, wzToastOp.timerUseAt));
	
	function toastPosi() {
		if(wzToastOp.position.indexOf('top') > -1){
			$("#wzToast-container").prepend($elem); //top = prepend, bottom = append
		}else{
			$("#wzToast-container").append($elem);
		}
		
		/*if(!el){
			$("#wzToast-container").addClass('toastPosi-'+wzToastOp.position);
		}*/
		$("#wzToast-container").removeClass('toastPosi-top').removeClass('toastPosi-bottom');
		$("#wzToast-container").addClass('toastPosi-'+wzToastOp.position);
	}
	
	if(wzToastOp.accAt) {
		if(wzToastOp.accCnt) {
			if($('.toastWrap').size() < wzToastOp.accCnt){
				toastPosi();
			}else {
				$('.toastWrap').first().remove();
				toastPosi();
			}
		}else {
			toastPosi();
		}
	}else {
		$("#wzToast-container").empty();
		toastPosi();
	}
	
	$elem.slideToggle(100, function() {
		$('.timerWrap', this).first().outerWidth($elem.find('.toast').first().outerWidth() - 10);
		if (!isNaN(wzToastOp.timeOut)) {
			if(wzToastOp.timerUseAt){
				fillWidth($elem.find('.timer').first()[0], wzToastOp.timeOut);
			}
			setTimeout(function() {
				$elem.fadeOut(function() {
					$(this).remove();
				});
			}, wzToastOp.timeOut);
		}
	});
	
	$("#wzToast-container").on("click", "b", function() {
		$(this).closest('.toastWrap').remove();
	});

}

