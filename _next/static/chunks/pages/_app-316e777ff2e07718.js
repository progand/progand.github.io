(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(1802)}])},1802:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var a=n(5893),r=n(7294);let s=["light","dark"],l="(prefers-color-scheme: dark)",o="undefined"==typeof window,i=(0,r.createContext)(void 0),c=e=>(0,r.useContext)(i)?r.createElement(r.Fragment,null,e.children):r.createElement(d,e),m=["light","dark"],d=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:a=!0,storageKey:o="theme",themes:c=m,defaultTheme:d=n?"system":"light",attribute:g="data-theme",value:y,children:v,nonce:w})=>{let[$,b]=(0,r.useState)(()=>h(o,d)),[k,_]=(0,r.useState)(()=>h(o)),E=y?Object.values(y):c,S=(0,r.useCallback)(e=>{let r=e;if(!r)return;"system"===e&&n&&(r=p());let l=y?y[r]:r,o=t?f():null,i=document.documentElement;if("class"===g?(i.classList.remove(...E),l&&i.classList.add(l)):l?i.setAttribute(g,l):i.removeAttribute(g),a){let e=s.includes(d)?d:null,t=s.includes(r)?r:e;i.style.colorScheme=t}null==o||o()},[]),T=(0,r.useCallback)(e=>{b(e);try{localStorage.setItem(o,e)}catch(e){}},[e]),C=(0,r.useCallback)(t=>{let a=p(t);_(a),"system"===$&&n&&!e&&S("system")},[$,e]);(0,r.useEffect)(()=>{let e=window.matchMedia(l);return e.addListener(C),C(e),()=>e.removeListener(C)},[C]),(0,r.useEffect)(()=>{let e=e=>{e.key===o&&T(e.newValue||d)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[T]),(0,r.useEffect)(()=>{S(null!=e?e:$)},[e,$]);let x=(0,r.useMemo)(()=>({theme:$,setTheme:T,forcedTheme:e,resolvedTheme:"system"===$?k:$,themes:n?[...c,"system"]:c,systemTheme:n?k:void 0}),[$,T,e,k,n,c]);return r.createElement(i.Provider,{value:x},r.createElement(u,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:n,enableColorScheme:a,storageKey:o,themes:c,defaultTheme:d,attribute:g,value:y,children:v,attrs:E,nonce:w}),v)},u=(0,r.memo)(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:a,enableColorScheme:o,defaultTheme:i,value:c,attrs:m,nonce:d})=>{let u="system"===i,h="class"===n?`var d=document.documentElement,c=d.classList;c.remove(${m.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${n}',s='setAttribute';`,f=o?s.includes(i)&&i?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",p=(e,t=!1,a=!0)=>{let r=c?c[e]:e,l=t?e+"|| ''":`'${r}'`,i="";return o&&a&&!t&&s.includes(e)&&(i+=`d.style.colorScheme = '${e}';`),"class"===n?i+=t||r?`c.add(${l})`:"null":r&&(i+=`d[s](n,${l})`),i},g=e?`!function(){${h}${p(e)}}()`:a?`!function(){try{${h}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${l}',m=window.matchMedia(t);if(m.media!==t||m.matches){${p("dark")}}else{${p("light")}}}else if(e){${c?`var x=${JSON.stringify(c)};`:""}${p(c?"x[e]":"e",!0)}}${u?"":"else{"+p(i,!1,!1)+"}"}${f}}catch(e){}}()`:`!function(){try{${h}var e=localStorage.getItem('${t}');if(e){${c?`var x=${JSON.stringify(c)};`:""}${p(c?"x[e]":"e",!0)}}else{${p(i,!1,!1)};}${f}}catch(t){}}();`;return r.createElement("script",{nonce:d,dangerouslySetInnerHTML:{__html:g}})},()=>!0),h=(e,t)=>{let n;if(!o){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},f=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},p=e=>(e||(e=window.matchMedia(l)),e.matches?"dark":"light");var g=n(4298),y=n.n(g);function v(e){let{Component:t,pageProps:n}=e;return(0,a.jsxs)(c,{attribute:"class",children:[(0,a.jsx)(y(),{id:"matomo-vitalsigns",children:"\n            var _paq = window._paq = window._paq || [];\n            /* tracker methods like \"setCustomDimension\" should be called before \"trackPageView\" */\n            _paq.push(['trackPageView']);\n            _paq.push(['enableLinkTracking']);\n            (function() {\n              var u=\"https://analytics.vitalsignstracker.com/\";\n              _paq.push(['setTrackerUrl', u+'js/tracker.php']);\n              _paq.push(['setSiteId', '21']);\n              var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];\n              g.async=true; g.src=u+'js/tracker.php'; s.parentNode.insertBefore(g,s);\n            })();\n        "}),(0,a.jsx)(t,{...n})]})}n(3814)},3814:function(){},4298:function(e,t,n){e.exports=n(5442)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(6885)}),_N_E=e.O()}]);