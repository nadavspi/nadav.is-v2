const React = require('react');
const stripIndent = require('common-tags').stripIndent;

exports.onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  setHeadComponents([
    <script
      key="farnham-font"
      dangerouslySetInnerHTML={{
        __html: stripIndent`
            !function(){"use strict";function b(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent&&a.attachEvent("on"+b,c)}function c(a){return window.localStorage&&localStorage.font_css_cache&&localStorage.font_css_cache_file===a}function d(){if(window.localStorage&&window.XMLHttpRequest)if(c(a))e(localStorage.font_css_cache);else{var d=new XMLHttpRequest;d.open("GET",a,!0),d.onreadystatechange=function(){4===d.readyState&&(e(d.responseText),localStorage.font_css_cache=d.responseText,localStorage.font_css_cache_file=a)},d.send()}else{var b=document.createElement("link");b.href=a,b.rel="stylesheet",b.type="text/css",document.getElementsByTagName("head")[0].appendChild(b),document.cookie="font_css_cache"}}function e(a){var b=document.createElement("style");b.setAttribute("type","text/css"),b.styleSheet?b.styleSheet.cssText=a:b.innerHTML=a,document.getElementsByTagName("head")[0].appendChild(b)}var a="//cloud.webtype.com/css/002bf925-b452-4d90-882e-f63fc7d4e8d0.css";window.localStorage&&localStorage.font_css_cache||document.cookie.indexOf("font_css_cache")>-1?d():b(window,"load",d)}();`,
      }}
    />
  ])
}
