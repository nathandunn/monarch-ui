(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["MonarchLegacy"],{ea7d:function(module,__webpack_exports__,__webpack_require__){"use strict";function loadPathContentAsync(e,t){var n=new XMLHttpRequest,a=e;0===a.indexOf("/")&&(a="/legacy"+a,a="https://localhost:8080".concat(a)),n.addEventListener("loadend",function(){t(this.status,this.responseText,this.responseURL,a)});try{n.open("GET",a),n.send()}catch(o){console.log("loadPathContentAsync exception",e,a,this,o)}}function updatePageLinks(){function e(){return[].slice.call(document.querySelectorAll("[data-monarch-legacy]"))}function t(e){return e.pathname||e.getAttribute("href")}var n=this;e().forEach(function(e){e.hasListenerAttached||(e.addEventListener("click",function(a){var o=t(e);o=o.replace(/\/+$/,"").replace(/^\/+/,"/"),n._destroyed||(a.preventDefault(),n.push(o))}),e.hasListenerAttached=!0)})}var unescapeMap={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#x27;":"'","&#x60;":"`","&#x2F;":"/"};function createEscaper(e){function t(t){return e[t]}var n="(?:"+Object.keys(e).join("|")+")",a=RegExp(n),o=RegExp(n,"g");return function(e){return e=null==e?"":""+e,a.test(e)?e.replace(o,t):e}}var unescape=createEscaper(unescapeMap);function setupLegacyMocks(){window.navbar_search_init=function(){console.log("Mock navbar_search_init")},window.InitMonarchPage=function(){console.log("Mock InitMonarchPage")},window.InitTabs=function(){console.log("Mock InitTabs")},window.InitTables=function(){console.log("Mock InitTables")},window.InitFacetFilters=function(){console.log("Mock InitFacetFilters")},window.makeGeneLandingGraph=function(){console.log("Mock makeGeneLandingGraph")},window.makeGeneDiseaseLandingGraph=function(){console.log("Mock makeGeneDiseaseLandingGraph")},window.makeDiseaseLandingGraph=function(){console.log("Mock makeDiseaseLandingGraph")},window.makePhenotypeLandingGraph=function(){console.log("Mock makePhenotypeLandingGraph")},window.makeModelLandingGraph=function(){console.log("Mock makeModelLandingGraph")}}__webpack_exports__["a"]={name:"Monarchlegacy",data:function(){return{contentScript:"",contentBody:"",progressTimer:null,progressPath:null,path:null}},computed:{transformedScript:function(){return{template:this.contentScript,props:this.$options.props}},transformedBody:function(){return{template:this.contentBody,props:this.$options.props}}},watch:{$route:function(e,t){e.path!==this.path&&this.fetchData()}},created:function(){},mounted:function(){this.fetchData(),this.$on("legacyContentChanged",function(e){console.log("legacyContentChanged:",e)}),setupLegacyMocks()},destroy:function(){},methods:{fetchData:function fetchData(){var that=this,path=that.$route.fullPath;this.path=that.$route.path,that.progressTimer?console.log("leftover progressTimer"):(that.progressPath=null,that.progressTimer=setTimeout(function(){that.progressTimer=null,that.progressPath=path,that.contentBody=null},500));var scriptHeaderPrefix="+++++++++++++++monarch-script",scriptHeaderSuffix="---------------monarch-script";loadPathContentAsync(this.path,function loaded(status,content,responseURL,originalURL){if(200!==status)that.contentBody='\n            <br>\n            <br>\n            <br>\n            <h3 class="text-center">\n              Error accessing legacy server at\n              <a\n                href="'.concat(responseURL,'"\n                target="_blank">\n                ').concat(originalURL,'\n              </a>\n            </h3>\n\n            <h4 class="text-center">Response Code: ').concat(status,'</h4>\n            <hr>\n\n            <h4 class="text-center">\n              <a\n                href="/">\n                Return to Home\n              </a>\n            </h4>\n            '),that.$nextTick(function(){that.progressTimer&&(clearTimeout(that.progressTimer),that.progressTimer=null),that.progressPath=null});else{var scriptHeaderBegin=content.indexOf(scriptHeaderPrefix),scriptHeaderEnd=content.indexOf(scriptHeaderSuffix);0!==scriptHeaderBegin||scriptHeaderEnd<=0?console.log("Invalid script header",scriptHeaderBegin,scriptHeaderEnd,content.slice(0,100)):(that.contentScript=content.slice(scriptHeaderBegin+scriptHeaderPrefix.length,scriptHeaderEnd),that.contentBody=content.slice(scriptHeaderEnd+scriptHeaderSuffix.length),that.$nextTick(function tick(){if(that.progressTimer&&(clearTimeout(that.progressTimer),that.progressTimer=null),that.progressPath=null,responseURL=responseURL.replace(window.location.origin,""),responseURL=responseURL.replace(/\/legacy/g,""),!window.mngLocalServerMode&&responseURL!==path){console.log("path/responseURL",window.location.origin,path,responseURL);var hashIndex=path.indexOf("#");hashIndex>=0&&(responseURL+=path.slice(hashIndex))}that.contentScript&&(eval(that.contentScript),updatePageLinks())}))}})}}}},f6fe:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"monarch-legacy"},[e.progressPath?n("div",[n("br"),n("br"),n("br"),n("div",{staticClass:"progress"},[n("div",{staticClass:"progress-bar progress-bar-striped active",staticStyle:{width:"100%",margin:"auto"},attrs:{role:"progressbar","aria-valuenow":"40","aria-valuemin":"0","aria-valuemax":"100"}},[e._v("Loading "),n("b",[e._v(e._s(e.progressPath))])])])]):e._e(),e.contentBody?n("div",{attrs:{id:"selenium_id_content","xv-bind":"$props"},domProps:{innerHTML:e._s(e.contentBody)}}):e._e()])},o=[],r=n("ea7d"),s=r["a"],c=n("2877"),i=Object(c["a"])(s,a,o,!1,null,null,null);t["default"]=i.exports}}]);
//# sourceMappingURL=MonarchLegacy.428d647f.js.map