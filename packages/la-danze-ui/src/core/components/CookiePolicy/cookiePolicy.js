if (!window.COOKIES_BLACKLIST) {
  window.COOKIES_BLACKLIST = {};
}

if (!window.COOKIES_BLACKLIST.performance) {
  window.COOKIES_BLACKLIST.performance = []
}

if (!window.COOKIES_BLACKLIST.functionality) {
  window.COOKIES_BLACKLIST.functionality = []
}

if (!window.COOKIES_BLACKLIST.targeting) {
  window.COOKIES_BLACKLIST.targeting = []
}

window.YETT_BLACKLIST = window.COOKIES_BLACKLIST.performance.concat(window.COOKIES_BLACKLIST.functionality).concat(window.COOKIES_BLACKLIST.targeting);
window.YETT_WHITELIST = window.COOKIES_WHITELIST;

const yett = require('yett');

if (getCookie('cookiePolicy_performance') === 'true') {
  setTimeout(() => yett.unblock(...window.COOKIES_BLACKLIST.performance));
}
window.addEventListener('cookieStorage:cookiePolicy_performance', (event) => {
  if (event.detail.value) {
    yett.unblock(...window.COOKIES_BLACKLIST.performance);
  }
});

if (getCookie('cookiePolicy_functionality') === 'true') {
  setTimeout(() => yett.unblock(...window.COOKIES_BLACKLIST.functionality));
}
window.addEventListener('cookieStorage:cookiePolicy_functionality', (event) => {
  if (event.detail.value) {
    yett.unblock(...window.COOKIES_BLACKLIST.functionality);
  }
});

if (getCookie('cookiePolicy_targeting') === 'true') {
  setTimeout(() => yett.unblock(...window.COOKIES_BLACKLIST.targeting));
}
window.addEventListener('cookieStorage:cookiePolicy_targeting', (event) => {
  if (event.detail.value) {
    yett.unblock(...window.COOKIES_BLACKLIST.targeting);
  }
});

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}