"use strict";function mashvipo_custom_html_scrolling_popup(){return"undefined"==typeof popup_html_elem?!1:"1000"!=percentage?!1:"1"===disable_scrolling_popup?(console.log("mashvipo: disabled"),!1):(console.log("mashvipo: search custom html elem:"+popup_html_elem),jQuery(popup_html_elem).appear(),void jQuery(document.body).on("appear",popup_html_elem,function(a,b){return loadPopupCheck(),popuploaded=!0,console.log("mashvipo: fired on custom elem: "+popup_html_elem),!0}))}function mashvipo_percentage_scrolling_poup(){"0"===disable_scrolling_popup&&"0"===videopopuponly&&(percentage="undefined"!=typeof percentage?+percentage:100,"1000"!=percentage&&window.addEventListener("scroll",function(){console.log(getDocHeight()*(percentage/100)),window.innerHeight+window.scrollY>=getDocHeight()*(percentage/100)&&(loadPopupCheck(),popuploaded=!0)}))}function dontOpenLikePopUp(){jQuery.cookie(cookiename,!0,{expires:cookie_expiration_like,path:"/"})}function dontOpenSharePopUp(){jQuery.cookie("mashvipo_share",!0,{expires:cookie_expiration_share})}function is_like_popup(){return 0==cookie_support?!0:"true"!==jQuery.cookie(cookiename)?!0:!1}function is_share_popup(){return 0==cookie_support?!0:"true"!==jQuery.cookie("mashvipo_share")?!0:!1}function mashvipoAnalytics(a,b,c,d){"undefined"!=typeof ga&&ga("send","event",a,b,c,d),"undefined"!=typeof _gaq&&_gaq.push(["_trackEvent"],a,b,c,d),"undefined"!=typeof __gaTracker&&__gaTracker("send","event",a,b,c,d)}function mashvipoTWShare(){if("undefined"!=typeof mashsu&&"undefined"!=typeof mashsu.shorturl)var a=mashsu.shorturl;else var a=location.href;var b=document.title;window.open("https://twitter.com/intent/tweet?text="+encodeURIComponent(b)+"&url="+encodeURIComponent(a)+"&via="+viatwitter,"mashshare","toolbar=0,status=0,width=626,height=436"),mashvipoAnalytics("VideoPost Share from popup","VideoPost Twitter Share",a),"1"===likepopupactive&&likemodal(),disablemodal()}function mashvipoFBShare(){var a=location.href,b=document.title,c=626,d=436,e=window.screen.height/2-(d/2+50),f=window.screen.width/2-(c/2+10);window.open("http://www.facebook.com/sharer.php?u="+encodeURIComponent(a)+"&t="+encodeURIComponent(b),"mashshare","toolbar=0,status=0,width="+c+",height="+d+",left="+f+",top="+e,",screenX="+f+",screenY="+e),mashvipoAnalytics("VideoPost Share from popup","VideoPost Facebook Share",a),"1"===likepopupactive&&likemodal(),disablemodal()}function loadPopup(a){0==popupactive&&0==popup_fired&&(jQuery(".mashviposhare_inner").html(a),jQuery(".mashviposhare").fadeIn(500),jQuery(".mashvipo_bg").css("opacity","0.7"),jQuery(".mashvipo_bg").fadeIn(1),popupactive=1)}function loadlikemodal(a){0==like_popup_fired&&0==popup_fired&&(jQuery(".mashvipolike_inner").html(a),jQuery(".mashvipolike").fadeIn(500),jQuery(".mashvipo_bg").css("opacity","0.7"),jQuery(".mashvipo_bg").fadeIn(1),like_popup_fired=1,popup_fired=1)}function disablemodal(){1==popupactive&&(jQuery(".mashviposhare").fadeOut("normal"),popupactive=0,dontOpenSharePopUp(),"1"===likepopupactive&&is_like_popup()?likemodal():(jQuery(".mashvipo_bg").fadeOut("normal"),popup_fired=1))}function disablelikemodal(){1==like_popup_fired&&(dontOpenLikePopUp(),jQuery(".mashvipolike").fadeOut("normal"),jQuery(".mashvipo_bg").fadeOut("normal"),like_popup_fired=0)}function startmashvipo(){if("1"===imageactive)var a='<div class="mashvipoimage">\n                                <img src="'+imagesrc+'" style="max-width:100%;">\n                            </div>\n                            ';else var a="";"1"===sharepopupactive&&is_share_popup()&&loadPopup("1"===twitterbtn?'<div class="mashvipopopup">\n                    <div class="mashvipoinner">\n                        <div class="mashvipotitle">'+sharetext+"</div>\n                        "+a+'<div class="mashvipobuttons">\n                            <a class="mashvipo_fbbtn mashvipo_halfbtn" rel="nofollow" href="#"  onclick="mashvipoFBShare(); return false;" target="_blank" style="text-decoration:none;"><span class="icon"></span>'+sharebuttonfb+'</a>\n                            <a class="mashvipo_twbtn mashvipo_halfbtn" rel="nofollow" href="#"  onclick="mashvipoTWShare(); return false;" target="_blank" style="text-decoration:none;"><span class="icon"></span>'+sharebuttontw+'</a>\n                        </div>\n                        <div class="mashvipoclose"><a href="#" onclick="disablemodal(); return false;">'+closebutton+"</a></div>\n                    </div>\n                </div>":'<div class="mashvipopopup">\n                    <div class="mashvipoinner">\n                        <div class="mashvipotitle">'+sharetext+"</div>\n                        "+a+'<div class="mashvipobuttons"><a class="mashvipo_fbbtn mashvipo_fullbtn" rel="nofollow" href="#"  onclick="mashvipoFBShare(); return false;" target="_blank" style="text-decoration:none;"><span class="icon"></span>'+sharebuttonfb+'</a></div>\n                        <div class="mashvipoclose"><a href="#" onclick="disablemodal(); return false;">'+closebutton+"</a></div>\n                    </div>\n                </div>")}function likemodal(){"1"===likepopupactive&&is_like_popup()&&loadlikemodal('<div class="mashvipopopup">\n                        <div class="mashvipoinner">\n                            <div class="mashvipotitle">'+likepopuptext+'</div>\n                            <div class="mashvipolikebutton">\n                                <iframe src="//www.facebook.com/plugins/like.php?href='+likeurl+'&amp;width=95px&amp;layout=button_count&amp;action=like&amp;show_faces=false&amp;share=false&amp;height=21" scrolling="no" frameborder="0" allowTransparency="true"></iframe>\n                            </div>\n                            <div class="mashvipocustom">'+customtext+'</div>\n                            <div class="mashvipoclose"><a href="#" onclick="disablelikemodal(); return false;">'+closebutton+"</a></div> \n                        </div>\n                    </div>")}function loadPopupCheck(){return"1"===sharepopupactive&&"1"===likepopupactive?void setTimeout(function(){startmashvipo()},delaytime):"1"===sharepopupactive&&"0"===likepopupactive?void setTimeout(function(){startmashvipo()},delaytime):"0"===sharepopupactive&&"1"===likepopupactive?void setTimeout(function(){likemodal()},delaytime):void 0}function getDocHeight(){var a=document;return Math.max(a.body.scrollHeight,a.documentElement.scrollHeight,a.body.offsetHeight,a.documentElement.offsetHeight,a.body.clientHeight,a.documentElement.clientHeight)}var cookiename="likedfb",videoID=mashvipo.videoID,delaytime=mashvipo.delay,likeurl=mashvipo.like_url,sharetext=mashvipo.share_text,sharebuttonfb=mashvipo.share_button_fb,sharebuttontw=mashvipo.share_button_tw,likepopuptext=mashvipo.like_popup_text,closebutton=mashvipo.close_button,topposition=mashvipo.top_position,popupwidth=mashvipo.popup_width,popupmaxwidth=mashvipo.popup_max_width,likepopupactive=mashvipo.like_popup,sharepopupactive=mashvipo.share_popup,imageactive=mashvipo.featured_image,imagesrc=mashvipo.image,disable_video_popup=mashvipo.no_video_popup,disable_scrolling_popup=mashvipo.no_page_popup,twitterbtn=mashvipo.twitterbtn,percentage=mashvipo.percentage,viatwitter="undefined"!=typeof mashsb?mashsb.hashtag:"",videopopuponly=mashvipo.videopopuponly,customtext=mashvipo.customtext,cookie_expiration_share=1,cookie_expiration_like=365,cookie_support=mashvipo.cookie_support,popup_html_elem=mashvipo.html_elem,popupactive=0,like_popup_fired=0,popup_fired=0,halfmargin=popupwidth/2,windowwidth=window.innerWidth;if(popupwidth>=windowwidth&&(halfmargin=(window.innerWidth-10)/2,popupwidth=window.innerWidth-10),"0"!==topposition)var toppos="top:"+topposition+"px;";else var toppos="";var struct='<div class="mashviposhare" style="width:'+popupwidth+"px; margin-left:-"+halfmargin+"px;"+toppos+'">\n                <div class="mashviposhare_inner"></div>\n            </div>\n            <div class="mashvipolike" style="width:'+popupwidth+"px; margin-left:-"+halfmargin+"px;max-width:"+popupmaxwidth+"%;"+toppos+'">\n                <div class="mashvipolike_inner"></div> \n            </div>\n                <div class="mashvipo_bg"></div>\n';jQuery(document).ready(function(){jQuery("body").append(struct),mashvipo_custom_html_scrolling_popup(),mashvipo_percentage_scrolling_poup()});var scrolled=!1,popuploaded=!1;!function(a){function b(){f=!1;for(var b=0,c=d.length;c>b;b++){var e=a(d[b]).filter(function(){return a(this).is(":appeared")});if(e.trigger("appear",[e]),i[b]){var g=i[b].not(e);g.trigger("disappear",[g])}i[b]=e}}function c(a){d.push(a),i.push()}var d=[],e=!1,f=!1,g={interval:250,force_process:!1},h=a(window),i=[];a.expr[":"].appeared=function(b){var c=a(b);if(!c.is(":visible"))return!1;var d=h.scrollLeft(),e=h.scrollTop(),f=c.offset(),g=f.left,i=f.top;return i+c.height()>=e&&i-(c.data("appear-top-offset")||0)<=e+h.height()&&g+c.width()>=d&&g-(c.data("appear-left-offset")||0)<=d+h.width()?!0:!1},a.fn.extend({appear:function(d){var h=a.extend({},g,d||{}),i=this.selector||this;if(!e){var j=function(){f||(f=!0,setTimeout(b,h.interval))};a(window).scroll(j).resize(j),e=!0}return h.force_process&&setTimeout(b,h.interval),c(i),a(i)}}),a.extend({force_appear:function(){return e?(b(),!0):!1}})}(function(){return"undefined"!=typeof module?require("jquery"):jQuery}());
;!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){function b(a){return h.raw?a:encodeURIComponent(a)}function c(a){return h.raw?a:decodeURIComponent(a)}function d(a){return b(h.json?JSON.stringify(a):String(a))}function e(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return a=decodeURIComponent(a.replace(g," ")),h.json?JSON.parse(a):a}catch(b){}}function f(b,c){var d=h.raw?b:e(b);return a.isFunction(c)?c(d):d}var g=/\+/g,h=a.cookie=function(e,g,i){if(arguments.length>1&&!a.isFunction(g)){if(i=a.extend({},h.defaults,i),"number"==typeof i.expires){var j=i.expires,k=i.expires=new Date;k.setTime(+k+864e5*j)}return document.cookie=[b(e),"=",d(g),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}for(var l=e?void 0:{},m=document.cookie?document.cookie.split("; "):[],n=0,o=m.length;o>n;n++){var p=m[n].split("="),q=c(p.shift()),r=p.join("=");if(e&&e===q){l=f(r,g);break}e||void 0===(r=f(r))||(l[q]=r)}return l};h.defaults={},a.removeCookie=function(b,c){return void 0===a.cookie(b)?!1:(a.cookie(b,"",a.extend({},c,{expires:-1})),!a.cookie(b))}});