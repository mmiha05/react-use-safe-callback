!function(e,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r(require("react"));else if("function"==typeof define&&define.amd)define(["react"],r);else{var t="object"==typeof exports?r(require("react")):r(e.react);for(var o in t)("object"==typeof exports?exports:e)[o]=t[o]}}(self,(function(e){return(()=>{"use strict";var r={156:r=>{r.exports=e}},t={};function o(e){var n=t[e];if(void 0!==n)return n.exports;var u=t[e]={exports:{}};return r[e](u,u.exports,o),u.exports}var n={};return(()=>{var e=n;Object.defineProperty(e,"__esModule",{value:!0}),e.useSafeCallback=void 0;var r=o(156);function t(e,t){var o=(0,r.useRef)(!1);return(0,r.useEffect)((function(){return o.current=!0,function(){o.current=!1}}),[]),(0,r.useCallback)((function(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];if(o.current)return e.apply(void 0,r)}),[t])}e.useSafeCallback=t,e.default=t})(),n})()}));