!function(e){var n={};function t(a){if(n[a])return n[a].exports;var i=n[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(a,i,function(n){return e[n]}.bind(null,i));return a},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/dist/",t(t.s=21)}({21:function(e,n,t){"use strict";t.r(n);var a=t(4);async function i(){"undefined"==typeof Binaryen&&importScripts("https://cdn.rawgit.com/AssemblyScript/binaryen.js/v48.0.0/index.js")}async function r(){"undefined"==typeof wabt&&(self.global=self,importScripts("https://cdn.rawgit.com/AssemblyScript/wabt.js/v1.0.0-nightly.20180421/index.js"))}let s=null;async function o(e){await i();const n=Binaryen.readBinary(new Uint8Array(e));return n.optimize(),Promise.resolve(n.emitBinary())}async function m(e){await i();const n=Binaryen.readBinary(new Uint8Array(e));return Promise.resolve(n.validate())}async function l(e){await i();const n=Binaryen.readBinary(new Uint8Array(e)),t=Binaryen.print;let a="";return Binaryen.print=(e=>{a+=e+"\n"}),n.runPasses(["print-call-graph"]),Binaryen.print=t,Promise.resolve(a)}async function c(e){await i();const n=Binaryen.readBinary(new Uint8Array(e));return n.optimize(),Promise.resolve(n.emitAsmjs())}async function y(e){await i();const n=Binaryen.readBinary(new Uint8Array(e));return Promise.resolve(n.emitText())}async function u(e){await i();const n=Binaryen.parseText(e);return Promise.resolve(n.emitBinary())}async function d(e){await r();const n=wabt.readWasm(e,{readDebugNames:!0});return n.generateNames(),n.applyNames(),Promise.resolve(n.toText({foldExprs:!1,inlineExport:!0}))}async function p(e){await r();const n=wabt.parseWat("test.wat",e);return n.resolveNames(),n.validate(),Promise.resolve(n.toBinary({log:!0,write_debug_names:!0}).buffer)}async function f(e){let n;await async function(){s||(importScripts("../lib/twiggy_wasm_api.js"),await wasm_bindgen("../lib/twiggy_wasm_api_bg.wasm"),s={Items:wasm_bindgen.Items,Top:wasm_bindgen.Top,Paths:wasm_bindgen.Paths,Monos:wasm_bindgen.Monos,Dominators:wasm_bindgen.Dominators})}();const t=s.Items.parse(new Uint8Array(e));let a="# Twiggy Analysis\n\nTwiggy is a code size profiler, learn more about it [here](https://github.com/rustwasm/twiggy).\n\n";n=s.Top.new();const i=JSON.parse(t.top(n));a+="## Top\n\n",a+="| Shallow Bytes | Shallow % | Item |\n",a+="| ------------: | --------: | :--- |\n";let r=0;i.forEach(e=>{e.shallow_size_percent>=.1?a+=`| ${e.shallow_size} | ${e.shallow_size_percent.toFixed(2)} | \`${e.name}\` |\n`:r++}),r&&(a+=`\n### Note:\n${r} items had a shallow size percent less than 0.1 and were not listed above.\n`),a+="\n\n## Dominators\n\n",a+="| Retained Bytes | Retained % | Dominator Tree |\n",a+="| ------------: | --------: | :--- |\n";const o=.1;return r=0,n=s.Dominators.new(),function e(n,t){let i="";for(let e=0;e<t-1;e++)i+="   ";t&&(i+="⤷ "),a+=`| ${n.retained_size} | ${n.retained_size_percent.toFixed(2)} | \`${i+n.name}\` |\n`,n.children&&n.children.forEach(n=>{n.retained_size_percent>=o?e(n,t+1):r++})}(JSON.parse(t.dominators(n)),0),r&&(a+=`\n### Note:\n${r} items had a retained size percent less than ${o} and were not listed above.\n`),Promise.resolve(a)}onmessage=(e=>{const n={[a.a.OptimizeWasmWithBinaryen]:o,[a.a.ValidateWasmWithBinaryen]:m,[a.a.CreateWasmCallGraphWithBinaryen]:l,[a.a.ConvertWasmToAsmWithBinaryen]:c,[a.a.DisassembleWasmWithBinaryen]:y,[a.a.AssembleWatWithBinaryen]:u,[a.a.DisassembleWasmWithWabt]:d,[a.a.AssembleWatWithWabt]:p,[a.a.TwiggyWasm]:f}[e.data.command];!function(e,n){if(!e)throw new Error(n)}(n,`Command ${e.data.command} not found.`),async function(e,n){const t={id:e.id,payload:null,success:!0};try{t.payload=await n(e.payload)}catch(e){t.payload={message:e.message},t.success=!1}postMessage(t,void 0)}(e.data,n)})},4:function(e,n,t){"use strict";var a;t.d(n,"a",function(){return a}),function(e){e[e.OptimizeWasmWithBinaryen=0]="OptimizeWasmWithBinaryen",e[e.ValidateWasmWithBinaryen=1]="ValidateWasmWithBinaryen",e[e.CreateWasmCallGraphWithBinaryen=2]="CreateWasmCallGraphWithBinaryen",e[e.ConvertWasmToAsmWithBinaryen=3]="ConvertWasmToAsmWithBinaryen",e[e.DisassembleWasmWithBinaryen=4]="DisassembleWasmWithBinaryen",e[e.AssembleWatWithBinaryen=5]="AssembleWatWithBinaryen",e[e.DisassembleWasmWithWabt=6]="DisassembleWasmWithWabt",e[e.AssembleWatWithWabt=7]="AssembleWatWithWabt",e[e.TwiggyWasm=8]="TwiggyWasm"}(a||(a={}))}});
//# sourceMappingURL=worker.bundle.js.map