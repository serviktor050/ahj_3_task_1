!function(e){var n={};function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(i,r,function(n){return e[n]}.bind(null,r));return i},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=1)}([function(e,n,t){},function(e,n,t){"use strict";t.r(n);var i=t.p+"9db02b81747000c55a04edd636f16fcc.png";function r(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var o=function(){function e(n){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.size=Math.pow(n,2),this.previousIndex=0,this.targetIndex=0,this.missedGoblin=0,this.gameField=document.getElementById("gamefield")}var n,t,o;return n=e,(t=[{key:"draw",value:function(){for(var e=0;e<this.size;e+=1){var n=document.createElement("div");n.className="field",n.id="field".concat(e),this.gameField.appendChild(n)}this.movingPicture()}},{key:"movingPicture",value:function(){var e=this;setInterval((function(){do{e.targetIndex=Math.floor(Math.random()*e.size)}while(e.targetIndex===e.previousIndex);e.previousIndex>=0&&(document.getElementById("field".concat(e.previousIndex)).innerHTML=""),document.getElementById("field".concat(e.targetIndex)).innerHTML='<img id="goblin" src="'.concat(i,'">'),e.previousIndex=e.targetIndex,e.missedGoblin+=1,e.gameField.addEventListener("click",(function(){e.missedGoblin=0})),e.missedGoblin>5&&(clearInterval(),alert("Вы проиграли =("),e.missedGoblin=0)}),1e3)}}])&&r(n.prototype,t),o&&r(n,o),e}();function l(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var a=function(){function e(n){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.game=n,this.killGoblin=0,this.looser=0}var n,t,i;return n=e,(t=[{key:"play",value:function(){var e=this,n=document.getElementById("quantity"),t=document.getElementById("looser_goblin");this.game.gameField.addEventListener("click",(function(i){"goblin"===i.target.id?(e.killGoblin+=1,n.innerHTML=e.killGoblin,i.target.parentNode.innerHTML=""):"goblin"!==i.target.id&&(e.looser+=1,t.innerHTML=e.looser),10===e.killGoblin&&(alert("Вы победили!"),e.killGoblin=0,e.looser=0,n.innerText=0,t.innerText=0),e.looser>4&&(alert("Вы проиграли =("),e.killGoblin=0,e.looser=0,n.innerText=0,t.innerText=0)}))}}])&&l(n.prototype,t),i&&l(n,i),e}(),u=new o(4);u.draw(),new a(u).play();t(0)}]);