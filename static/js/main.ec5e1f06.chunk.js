(this["webpackJsonpmusic-player"]=this["webpackJsonpmusic-player"]||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),r=n(12),i=n.n(r),s=n(4),o=n.n(s),u=n(6),l=n(3),d=n(8),p=n(0),b=function(e){var t=e.currentSong;return Object(p.jsxs)("div",{className:"song-container",children:[Object(p.jsx)("img",{alt:t.name,src:t.cover}),Object(p.jsx)("h2",{children:t.name}),Object(p.jsx)("h3",{children:t.artist})]})},j=n(7),h=n(5),f=function(e){var t=e.currentSong,n=e.isPlaying,a=e.setIsPlaying,c=e.audioRef,r=e.setSongInfo,i=e.songInfo,s=e.songs,d=e.setCurrentSong,b=e.setSongs,f=function(e){var t=s.map((function(t){return t.id===e.id?Object(l.a)(Object(l.a)({},t),{},{active:!0}):Object(l.a)(Object(l.a)({},t),{},{active:!1})}));b(t)},g=function(e){return Math.floor(e/60)+":"+("0"+Math.floor(e%60)).slice(-2)},m=function(){var e=Object(u.a)(o.a.mark((function e(a){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=s.findIndex((function(e){return e.id===t.id})),"skip-forward"!==a){e.next=5;break}return e.next=4,d(s[(r+1)%s.length]);case 4:f(s[(r+1)%s.length]);case 5:if("skip-back"!==a){e.next=15;break}if((r-1)%s.length!==-1){e.next=12;break}return e.next=9,d(s[s.length-1]);case 9:f(s[s.length-1]),e.next=15;break;case 12:return e.next=14,d(s[(r-1)%s.length]);case 14:f(s[(r-1)%s.length]);case 15:n&&c.current.play();case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v={transform:"translateX(".concat(i.animationPercentage,"%)")};return Object(p.jsxs)("div",{className:"player",children:[Object(p.jsxs)("div",{className:"time-control",children:[Object(p.jsx)("p",{children:g(i.currentTime)}),Object(p.jsxs)("div",{style:{background:"linear-gradient(to right, ".concat(t.color[0],", ").concat(t.color[1],")")},className:"track",children:[Object(p.jsx)("input",{min:0,max:i.duration||0,value:i.currentTime,onChange:function(e){c.current.currentTime=e.target.value,r(Object(l.a)(Object(l.a)({},i),{},{currentTime:e.target.value}))},type:"range"}),Object(p.jsx)("div",{style:v,className:"animate-track"})]}),Object(p.jsx)("p",{children:i.duration?g(i.duration):"0:00"})]}),Object(p.jsxs)("div",{className:"play-control",children:[Object(p.jsx)(j.a,{onClick:function(){return m("skip-back")},className:"skipBack",size:"2x",icon:h.a}),Object(p.jsx)(j.a,{onClick:function(){n?(c.current.pause(),a(!n)):(c.current.play(),a(!n))},className:"play",size:"2x",icon:n?h.d:h.e}),Object(p.jsx)(j.a,{onClick:function(){return m("skip-forward")},className:"skipForward",size:"2x",icon:h.b})]})]})},g=function(e){var t=e.song,n=e.songs,a=e.setCurrentSong,c=e.id,r=e.audioRef,i=e.isPlaying,s=e.setSongs,d=function(){var e=Object(u.a)(o.a.mark((function e(){var t,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.filter((function(e){return e.id===c})),e.next=3,a(t[0]);case 3:u=n.map((function(e){return e.id===c?Object(l.a)(Object(l.a)({},e),{},{active:!0}):Object(l.a)(Object(l.a)({},e),{},{active:!1})})),s(u),i&&r.current.play();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"library-song ".concat(t.active?"selected":""),onClick:d,children:[Object(p.jsx)("img",{alt:t.name,src:t.cover}),Object(p.jsxs)("div",{className:"song-description",children:[Object(p.jsx)("h3",{children:t.name}),Object(p.jsx)("h4",{children:t.artist})]})]})},m=function(e){var t=e.songs,n=e.setCurrentSong,a=e.audioRef,c=e.isPlaying,r=e.setSongs,i=e.libraryStatus;return Object(p.jsxs)("div",{className:"library ".concat(i?"active-library":""),children:[Object(p.jsx)("h2",{children:"Library"}),Object(p.jsx)("div",{className:"library-songs",children:t.map((function(e){return Object(p.jsx)(g,{song:e,setCurrentSong:n,songs:t,id:e.id,audioRef:a,isPlaying:c,setSongs:r},e.id)}))})]})},v=n(27);var O=function(){return[{name:"Beaver Creek",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10075",color:["#205950","#2ab3bf"],id:Object(v.a)(),active:!0},{name:"Daylight",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9272",color:["#EF8EA9","#ab417f"],id:Object(v.a)(),active:!1},{name:"Keep Going",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9222",color:["#CD607D","#c94043"],id:Object(v.a)(),active:!1},{name:"Nightfall",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9148",color:["#EF8EA9","#ab417f"],id:Object(v.a)(),active:!1},{name:"Reflection",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9228",color:["#CD607D","#c94043"],id:Object(v.a)(),active:!1},{name:"Under the City Stars",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10074",color:["#205950","#2ab3bf"],id:Object(v.a)(),active:!1}]},x=(n(24),function(e){var t=e.libraryStatus,n=e.setLibraryStatus;return Object(p.jsxs)("nav",{children:[Object(p.jsx)("h1",{children:"Waves"}),Object(p.jsxs)("button",{onClick:function(){return n(!t)},children:["Library ",Object(p.jsx)(j.a,{icon:h.c})]})]})});var y=function(){var e=Object(a.useRef)("null"),t=Object(a.useState)(O()),n=Object(d.a)(t,2),c=n[0],r=n[1],i=Object(a.useState)(c[0]),s=Object(d.a)(i,2),j=s[0],h=s[1],g=Object(a.useState)(!1),v=Object(d.a)(g,2),y=v[0],S=v[1],k=Object(a.useState)({currentTime:0,duration:0,animationPercentage:0}),w=Object(d.a)(k,2),C=w[0],N=w[1],P=Object(a.useState)(!1),I=Object(d.a)(P,2),T=I[0],A=I[1],M=function(e){var t=e.target.currentTime,n=e.target.duration,a=Math.round(t),c=Math.round(n),r=Math.round(a/c*100);N(Object(l.a)(Object(l.a)({},C),{},{currentTime:t,duration:n,animationPercentage:r}))},R=function(){var t=Object(u.a)(o.a.mark((function t(){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=c.findIndex((function(e){return e.id===j.id})),t.next=3,h(c[(n+1)%c.length]);case 3:y&&e.current.play();case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"App ".concat(T?"library-active":""),children:[Object(p.jsx)(x,{libraryStatus:T,setLibraryStatus:A}),Object(p.jsx)(b,{currentSong:j}),Object(p.jsx)(f,{audioRef:e,isPlaying:y,setIsPlaying:S,currentSong:j,setSongInfo:N,songInfo:C,songs:c,setCurrentSong:h,setSongs:r}),Object(p.jsx)(m,{audioRef:e,songs:c,setCurrentSong:h,isPlaying:y,setSongs:r,libraryStatus:T}),Object(p.jsx)("audio",{onTimeUpdate:M,onLoadedMetadata:M,ref:e,src:null===j||void 0===j?void 0:j.audio,onEnded:R})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(y,{})}),document.getElementById("root")),S()}},[[25,1,2]]]);
//# sourceMappingURL=main.ec5e1f06.chunk.js.map