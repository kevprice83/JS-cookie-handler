function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    logoLoader();
}

function getCookie(cname) {
    var lang = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(lang) == 0) {
            return c.substring(lang.length, c.length);
        }
    }
    return "";
}
var language = null;
function checkCookie() {
    language = getCookie("browserLanguage");
    console.log("language cookie: " + language);
    return language;
}

function saveLanguage() {
    var sel = document.getElementById('LangSelect');
    
    cookieValue = sel.options[sel.selectedIndex].value;
    console.log('cookieValue: ' + cookieValue);
    setCookie('browserLanguage', cookieValue, 1);
    setLanguage(cookieValue);
    logoLoader(cookieValue);
}