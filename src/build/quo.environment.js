// Generated by CoffeeScript 1.3.1

/*
  QuoJS 2.0
  (c) 2011, 2012 Javi Jiménez Villar (@soyjavi)
  http://quojs.tapquo.com
*/


(function() {

  (function($$) {
    var IS_WEBKIT, SUPPORTED_OS, _current, _detectBrowser, _detectEnvironment, _detectOS, _detectScreen;
    _current = null;
    IS_WEBKIT = /WebKit\/([\d.]+)/;
    SUPPORTED_OS = {
      Android: /(Android)\s+([\d.]+)/,
      ipad: /(iPad).*OS\s([\d_]+)/,
      iphone: /(iPhone\sOS)\s([\d_]+)/,
      blackberry: /(BlackBerry).*Version\/([\d.]+)/,
      webos: /(webOS|hpwOS)[\s\/]([\d.]+)/
    };
    $$.isMobile = function() {
      _current = _current || _detectEnvironment();
      return _current.isMobile;
    };
    $$.environment = function() {
      _current = _current || _detectEnvironment();
      return _current;
    };
    $$.isOnline = function() {
      return navigator.onLine;
    };
    _detectEnvironment = function() {
      var environment, user_agent;
      user_agent = navigator.userAgent;
      environment = {};
      environment.browser = _detectBrowser(user_agent);
      environment.os = _detectOS(user_agent);
      environment.isMobile = (environment.os ? true : false);
      environment.screen = _detectScreen();
      return environment;
    };
    _detectBrowser = function(user_agent) {
      var is_webkit;
      is_webkit = user_agent.match(IS_WEBKIT);
      if (is_webkit) {
        return is_webkit[0];
      } else {
        return user_agent;
      }
    };
    _detectOS = function(user_agent) {
      var detected_os, os, supported;
      detected_os = void 0;
      for (os in SUPPORTED_OS) {
        supported = user_agent.match(SUPPORTED_OS[os]);
        if (supported) {
          detected_os = {
            name: (os === "iphone" || os === "ipad" ? "ios" : os),
            version: supported[2].replace("_", ".")
          };
          break;
        }
      }
      return detected_os;
    };
    _detectScreen = function() {
      return {
        width: window.innerWidth,
        height: window.innerHeight
      };
    };
  })(Quo);

}).call(this);