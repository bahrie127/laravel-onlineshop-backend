!function(){var aa=this;function h(a,c){var b=a.split("."),d=aa;b[0]in d||!d.execScript||d.execScript("var "+b[0]);for(var f;b.length&&(f=b.shift());)b.length||void 0===c?d[f]?d=d[f]:d=d[f]={}:d[f]=c}function l(a,c){function b(){}b.prototype=c.prototype;a.M=c.prototype;a.prototype=new b;a.prototype.constructor=a;a.N=function(a,b,e){for(var g=Array(arguments.length-2),k=2;k<arguments.length;k++)g[k-2]=arguments[k];return c.prototype[b].apply(a,g)}};function n(a,c){null!=a&&this.a.apply(this,arguments)}n.prototype.b="";n.prototype.set=function(a){this.b=""+a};n.prototype.a=function(a,c,b){this.b+=String(a);if(null!=c)for(var d=1;d<arguments.length;d++)this.b+=arguments[d];return this};function p(a){a.b=""}n.prototype.toString=function(){return this.b};function ba(a,c){a.sort(c||ca)}function ca(a,c){return a>c?1:a<c?-1:0};function da(a){var c=[],b=0,d;for(d in a)c[b++]=a[d];return c};function ea(a,c){this.b=a;this.a={};for(var b=0;b<c.length;b++){var d=c[b];this.a[d.b]=d}}function fa(a){a=da(a.a);ba(a,function(a,b){return a.b-b.b});return a};function ga(a,c){this.b=a;this.g=!!c.v;this.a=c.c;this.i=c.type;this.h=!1;switch(this.a){case ha:case ia:case ja:case ka:case la:case ma:case na:this.h=!0}this.f=c.defaultValue}var na=1,ma=2,ha=3,ia=4,ja=6,ka=16,la=18;function q(){this.a={};this.f=this.j().a;this.b=this.g=null}q.prototype.set=function(a,c){r(this,a.b,c)};function u(a,c){for(var b=fa(a.j()),d=0;d<b.length;d++){var f=b[d],e=f.b;if(null!=c.a[e]){a.b&&delete a.b[f.b];var g=11==f.a||10==f.a;if(f.g)for(var f=v(c,e)||[],k=0;k<f.length;k++){var m=a,t=e,ta=g?f[k].clone():f[k];m.a[t]||(m.a[t]=[]);m.a[t].push(ta);m.b&&delete m.b[t]}else f=v(c,e),g?(g=v(a,e))?u(g,f):r(a,e,f.clone()):r(a,e,f)}}}
q.prototype.clone=function(){var a=new this.constructor;a!=this&&(a.a={},a.b&&(a.b={}),u(a,this));return a};function v(a,c){var b=a.a[c];if(null==b)return null;if(a.g){if(!(c in a.b)){var d=a.g,f=a.f[c];if(null!=b)if(f.g){for(var e=[],g=0;g<b.length;g++)e[g]=d.b(f,b[g]);b=e}else b=d.b(f,b);return a.b[c]=b}return a.b[c]}return b}function w(a,c,b){var d=v(a,c);return a.f[c].g?d[b||0]:d}
function x(a,c){var b;if(null!=a.a[c])b=w(a,c,void 0);else a:{b=a.f[c];if(void 0===b.f){var d=b.i;if(d===Boolean)b.f=!1;else if(d===Number)b.f=0;else if(d===String)b.f=b.h?"0":"";else{b=new d;break a}}b=b.f}return b}function y(a,c){return a.f[c].g?null!=a.a[c]?a.a[c].length:0:null!=a.a[c]?1:0}function r(a,c,b){a.a[c]=b;a.b&&(a.b[c]=b)}function z(a,c){var b=[],d;for(d in c)0!=d&&b.push(new ga(d,c[d]));return new ea(a,b)};/*

 Protocol Buffer 2 Copyright 2008 Google Inc.
 All other code copyright its respective owners.
 Copyright (C) 2010 The Libphonenumber Authors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function A(){q.call(this)}l(A,q);var B=null;function C(){q.call(this)}l(C,q);var D=null;function E(){q.call(this)}l(E,q);var F=null;
A.prototype.j=function(){var a=B;a||(B=a=z(A,{0:{name:"NumberFormat",I:"i18n.phonenumbers.NumberFormat"},1:{name:"pattern",required:!0,c:9,type:String},2:{name:"format",required:!0,c:9,type:String},3:{name:"leading_digits_pattern",v:!0,c:9,type:String},4:{name:"national_prefix_formatting_rule",c:9,type:String},6:{name:"national_prefix_optional_when_formatting",c:8,defaultValue:!1,type:Boolean},5:{name:"domestic_carrier_code_formatting_rule",c:9,type:String}}));return a};A.j=A.prototype.j;
C.prototype.j=function(){var a=D;a||(D=a=z(C,{0:{name:"PhoneNumberDesc",I:"i18n.phonenumbers.PhoneNumberDesc"},2:{name:"national_number_pattern",c:9,type:String},9:{name:"possible_length",v:!0,c:5,type:Number},10:{name:"possible_length_local_only",v:!0,c:5,type:Number},6:{name:"example_number",c:9,type:String}}));return a};C.j=C.prototype.j;
E.prototype.j=function(){var a=F;a||(F=a=z(E,{0:{name:"PhoneMetadata",I:"i18n.phonenumbers.PhoneMetadata"},1:{name:"general_desc",c:11,type:C},2:{name:"fixed_line",c:11,type:C},3:{name:"mobile",c:11,type:C},4:{name:"toll_free",c:11,type:C},5:{name:"premium_rate",c:11,type:C},6:{name:"shared_cost",c:11,type:C},7:{name:"personal_number",c:11,type:C},8:{name:"voip",c:11,type:C},21:{name:"pager",c:11,type:C},25:{name:"uan",c:11,type:C},27:{name:"emergency",c:11,type:C},28:{name:"voicemail",c:11,type:C},
29:{name:"short_code",c:11,type:C},30:{name:"standard_rate",c:11,type:C},31:{name:"carrier_specific",c:11,type:C},33:{name:"sms_services",c:11,type:C},24:{name:"no_international_dialling",c:11,type:C},9:{name:"id",required:!0,c:9,type:String},10:{name:"country_code",c:5,type:Number},11:{name:"international_prefix",c:9,type:String},17:{name:"preferred_international_prefix",c:9,type:String},12:{name:"national_prefix",c:9,type:String},13:{name:"preferred_extn_prefix",c:9,type:String},15:{name:"national_prefix_for_parsing",
c:9,type:String},16:{name:"national_prefix_transform_rule",c:9,type:String},18:{name:"same_mobile_and_fixed_line_pattern",c:8,defaultValue:!1,type:Boolean},19:{name:"number_format",v:!0,c:11,type:A},20:{name:"intl_number_format",v:!0,c:11,type:A},22:{name:"main_country_for_code",c:8,defaultValue:!1,type:Boolean},23:{name:"leading_digits",c:9,type:String},26:{name:"leading_zero_possible",c:8,defaultValue:!1,type:Boolean}}));return a};E.j=E.prototype.j;function G(){}G.prototype.a=function(a){new a.b;throw Error("Unimplemented");};G.prototype.b=function(a,c){if(11==a.a||10==a.a)return c instanceof q?c:this.a(a.i.prototype.j(),c);if(14==a.a){if("string"==typeof c&&H.test(c)){var b=Number(c);if(0<b)return b}return c}if(!a.h)return c;b=a.i;if(b===String){if("number"==typeof c)return String(c)}else if(b===Number&&"string"==typeof c&&("Infinity"===c||"-Infinity"===c||"NaN"===c||H.test(c)))return Number(c);return c};var H=/^-?[0-9]+$/;function I(){}l(I,G);I.prototype.a=function(a,c){var b=new a.b;b.g=this;b.a=c;b.b={};return b};function J(){}l(J,I);J.prototype.b=function(a,c){return 8==a.a?!!c:G.prototype.b.apply(this,arguments)};J.prototype.a=function(a,c){return J.M.a.call(this,a,c)};/*

 Copyright (C) 2010 The Libphonenumber Authors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
var K={357:["CY"]},L={CY:[null,[null,null,"(?:[279]\\d|[58]0)\\d{6}",null,null,null,null,null,null,[8]],[null,null,"2[2-6]\\d{6}",null,null,null,"22345678"],[null,null,"9[4-79]\\d{6}",null,null,null,"96123456"],[null,null,"800\\d{5}",null,null,null,"80001234"],[null,null,"90[09]\\d{5}",null,null,null,"90012345"],[null,null,"80[1-9]\\d{5}",null,null,null,"80112345"],[null,null,"700\\d{5}",null,null,null,"70012345"],[null,null,null,null,null,null,null,null,null,[-1]],"CY",357,"00",null,null,null,null,
null,null,null,[[null,"(\\d{2})(\\d{6})","$1 $2",["[257-9]"]]],null,[null,null,null,null,null,null,null,null,null,[-1]],null,null,[null,null,null,null,null,null,null,null,null,[-1]],[null,null,"(?:50|77)\\d{6}",null,null,null,"77123456"],null,null,[null,null,null,null,null,null,null,null,null,[-1]]]};/*

 Copyright (C) 2010 The Libphonenumber Authors.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function M(){this.a={}}M.b=function(){return M.a?M.a:M.a=new M};
var oa={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9","\uff10":"0","\uff11":"1","\uff12":"2","\uff13":"3","\uff14":"4","\uff15":"5","\uff16":"6","\uff17":"7","\uff18":"8","\uff19":"9","\u0660":"0","\u0661":"1","\u0662":"2","\u0663":"3","\u0664":"4","\u0665":"5","\u0666":"6","\u0667":"7","\u0668":"8","\u0669":"9","\u06f0":"0","\u06f1":"1","\u06f2":"2","\u06f3":"3","\u06f4":"4","\u06f5":"5","\u06f6":"6","\u06f7":"7","\u06f8":"8","\u06f9":"9"},pa=RegExp("[+\uff0b]+"),qa=RegExp("([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9])"),
ra=/^\(?\$1\)?$/;function N(a){return 0==a.length||ra.test(a)}function O(a,c){if(null==c)return null;c=c.toUpperCase();var b=a.a[c];if(null==b){b=L[c];if(null==b)return null;b=(new J).a(E.j(),b);a.a[c]=b}return b}function P(a){a=K[a];return null==a?"ZZ":a[0]};function Q(a){this.H=RegExp("\u2008");this.C="";this.m=new n;this.w="";this.i=new n;this.u=new n;this.l=!0;this.A=this.o=this.F=!1;this.G=M.b();this.s=0;this.b=new n;this.B=!1;this.h="";this.a=new n;this.f=[];this.D=a;this.J=this.g=R(this,this.D)}var S=new E;r(S,11,"NA");
var sa=/\[([^\[\]])*\]/g,ua=/\d(?=[^,}][^,}])/g,va=RegExp("^[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e]*(\\$\\d[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e]*)+$"),T=/[- ]/;
function R(a,c){var b;if(null!=c&&isNaN(c)&&c.toUpperCase()in L){b=O(a.G,c);if(null==b)throw Error("Invalid region code: "+c);b=x(b,10)}else b=0;b=O(a.G,P(b));return null!=b?b:S}
function U(a){for(var c=a.f.length,b=0;b<c;++b){var d=a.f[b],f=x(d,1);if(a.w==f)return!1;var e;e=a;var g=d,k=x(g,1);if(-1!=k.indexOf("|"))e=!1;else{k=k.replace(sa,"\\d");k=k.replace(ua,"\\d");p(e.m);var m;m=e;var g=x(g,2),t="999999999999999".match(k)[0];t.length<m.a.b.length?m="":(m=t.replace(new RegExp(k,"g"),g),m=m.replace(RegExp("9","g"),"\u2008"));0<m.length?(e.m.a(m),e=!0):e=!1}if(e)return a.w=f,a.B=T.test(w(d,4)),a.s=0,!0}return a.l=!1}
function V(a,c){for(var b=[],d=c.length-3,f=a.f.length,e=0;e<f;++e){var g=a.f[e];0==y(g,3)?b.push(a.f[e]):(g=w(g,3,Math.min(d,y(g,3)-1)),0==c.search(g)&&b.push(a.f[e]))}a.f=b}Q.prototype.K=function(){this.C="";p(this.i);p(this.u);p(this.m);this.s=0;this.w="";p(this.b);this.h="";p(this.a);this.l=!0;this.A=this.o=this.F=!1;this.f=[];this.B=!1;this.g!=this.J&&(this.g=R(this,this.D))};Q.prototype.L=function(a){return this.C=wa(this,a)};
function wa(a,c){a.i.a(c);var b=c;if(qa.test(b)||1==a.i.b.length&&pa.test(b)){var b=c,d;"+"==b?(d=b,a.u.a(b)):(d=oa[b],a.u.a(d),a.a.a(d));c=d}else a.l=!1,a.F=!0;if(!a.l){if(!a.F)if(W(a)){if(X(a))return xa(a)}else if(0<a.h.length&&(b=a.a.toString(),p(a.a),a.a.a(a.h),a.a.a(b),b=a.b.toString(),d=b.lastIndexOf(a.h),p(a.b),a.b.a(b.substring(0,d))),a.h!=ya(a))return a.b.a(" "),xa(a);return a.i.toString()}switch(a.u.b.length){case 0:case 1:case 2:return a.i.toString();case 3:if(W(a))a.A=!0;else return a.h=
ya(a),Y(a);default:if(a.A)return X(a)&&(a.A=!1),a.b.toString()+a.a.toString();if(0<a.f.length){b=za(a,c);d=Aa(a);if(0<d.length)return d;V(a,a.a.toString());return U(a)?Ba(a):a.l?Z(a,b):a.i.toString()}return Y(a)}}function xa(a){a.l=!0;a.A=!1;a.f=[];a.s=0;p(a.m);a.w="";return Y(a)}function Aa(a){for(var c=a.a.toString(),b=a.f.length,d=0;d<b;++d){var f=a.f[d],e=x(f,1);if((new RegExp("^(?:"+e+")$")).test(c))return a.B=T.test(w(f,4)),c=c.replace(new RegExp(e,"g"),w(f,2)),Z(a,c)}return""}
function Z(a,c){var b=a.b.b.length;return a.B&&0<b&&" "!=a.b.toString().charAt(b-1)?a.b+" "+c:a.b+c}function Y(a){var c=a.a.toString();if(3<=c.length){for(var b=a.o&&0==a.h.length&&0<y(a.g,20)?v(a.g,20)||[]:v(a.g,19)||[],d=b.length,f=0;f<d;++f){var e=b[f];0<a.h.length&&N(x(e,4))&&!w(e,6)&&null==e.a[5]||(0!=a.h.length||a.o||N(x(e,4))||w(e,6))&&va.test(x(e,2))&&a.f.push(e)}V(a,c);c=Aa(a);return 0<c.length?c:U(a)?Ba(a):a.i.toString()}return Z(a,c)}
function Ba(a){var c=a.a.toString(),b=c.length;if(0<b){for(var d="",f=0;f<b;f++)d=za(a,c.charAt(f));return a.l?Z(a,d):a.i.toString()}return a.b.toString()}
function ya(a){var c=a.a.toString(),b=0,d;1!=w(a.g,10)?d=!1:(d=a.a.toString(),d="1"==d.charAt(0)&&"0"!=d.charAt(1)&&"1"!=d.charAt(1));d?(b=1,a.b.a("1").a(" "),a.o=!0):null!=a.g.a[15]&&(d=new RegExp("^(?:"+w(a.g,15)+")"),d=c.match(d),null!=d&&null!=d[0]&&0<d[0].length&&(a.o=!0,b=d[0].length,a.b.a(c.substring(0,b))));p(a.a);a.a.a(c.substring(b));return c.substring(0,b)}
function W(a){var c=a.u.toString(),b=new RegExp("^(?:\\+|"+w(a.g,11)+")"),b=c.match(b);return null!=b&&null!=b[0]&&0<b[0].length?(a.o=!0,b=b[0].length,p(a.a),a.a.a(c.substring(b)),p(a.b),a.b.a(c.substring(0,b)),"+"!=c.charAt(0)&&a.b.a(" "),!0):!1}
function X(a){if(0==a.a.b.length)return!1;var c=new n,b;a:{b=a.a.toString();if(0!=b.length&&"0"!=b.charAt(0))for(var d,f=b.length,e=1;3>=e&&e<=f;++e)if(d=parseInt(b.substring(0,e),10),d in K){c.a(b.substring(e));b=d;break a}b=0}if(0==b)return!1;p(a.a);a.a.a(c.toString());c=P(b);"001"==c?a.g=O(a.G,""+b):c!=a.D&&(a.g=R(a,c));a.b.a(""+b).a(" ");a.h="";return!0}
function za(a,c){var b=a.m.toString();if(0<=b.substring(a.s).search(a.H)){var d=b.search(a.H),b=b.replace(a.H,c);p(a.m);a.m.a(b);a.s=d;return b.substring(0,a.s+1)}1==a.f.length&&(a.l=!1);a.w="";return a.i.toString()};h("Cleave.AsYouTypeFormatter",Q);h("Cleave.AsYouTypeFormatter.prototype.inputDigit",Q.prototype.L);h("Cleave.AsYouTypeFormatter.prototype.clear",Q.prototype.K);}.call((typeof global==="object"&&global)?global:window);
