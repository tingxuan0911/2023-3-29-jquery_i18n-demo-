var LANGUAGE_CODE = "en_US"; //标识语言

function loadProperties(type) {
    jQuery.i18n.properties({
        name: 'strings', // 资源文件名称
        path: 'static/', // 资源文件所在目录路径
        mode: 'map', // 模式：变量或 Map 
        language: type, // 对应的语言
        cache: false,
        encoding: 'UTF-8',
        callback: function () { // 回调方法    
            for (var i in $.i18n.map) {
                $('[data-lang="' + i + '"]').text($.i18n.map[i]); 
            }
        }
    });
}

function changeLangFn(){
    // console.log($("#changeLang").val());
    loadProperties($("#changeLang").val());
}
// function switchLang(lang) {
//     // LANGUAGE_CODE = LANGUAGE_CODE == 'zh_CN' ? 'en_US' : 'zh_CN';
//     loadProperties(lang);
// }

$(document).ready(function () {
    LANGUAGE_CODE = jQuery.i18n.normaliseLanguageCode({}); //获取浏览器的语言     
    LANGUAGE_CODE = LANGUAGE_CODE == 'zh_CN' ? 'zh_CN' : 'en_US';
    loadProperties(LANGUAGE_CODE);
})