//var navigatorLanguage = null;
function checkNavigatorLang() {
  var windowLang = window.navigator.userLanguage || window.navigator.language;
  var logoLang = windowLang.split("-")[0];
  console.log("logoLang: " + logoLang);
  logoLoader(logoLang);
  if (checkCookie() == ""){
    document.addEventListener("DOMContentLoaded", function(event) {
      var languageLocale = window.navigator.userLanguage || window.navigator.language;
      console.log("languageLocale: " + languageLocale);
      var navigatorLanguage = languageLocale.split("-")[0];
      console.log("navigatorLanguage: " + navigatorLanguage);
      setLanguage(navigatorLanguage);
    });
  } else {
    var cookieLang = checkCookie();
    setLanguage(cookieLang);
  }
}

function logoLoader(language) { 
  var logoElement = document.getElementById('logo');
  var logoData = logoElement.getAttribute("data-lang");
  console.log("logodata: " + logoData);
  
  if (language != logoData && checkCookie() == "") {
    console.log("loading logo language from browser");
    logoElement.dataset.lang = language;
  } else if (checkCookie() != logoData && checkCookie() != "") {
    console.log("loading logo language from cookie");
    logoElement.dataset.lang = checkCookie();
  }
}

function setLanguage(language) {
  var section = document.getElementById('is-visible');
  var sectionLang = section.className.split('-')[1];
  if (language != sectionLang) {
    console.log('sectionLang: ' + sectionLang);
    console.log('language: ' + language);
    section.id = '';
    document.getElementsByClassName('lang-' + language)[0].id="is-visible";
  }
}