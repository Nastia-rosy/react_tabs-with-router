(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{16:function(e,t,a){e.exports=a(27)},21:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(14),r=a.n(c),m=a(6),o=a(1),s=(a(21),function(e){var t=e.tabs;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"Tabs page"),l.a.createElement("nav",null,l.a.createElement("ul",{className:"nav"},t.map((function(e){return l.a.createElement("li",{className:"nav__item"},l.a.createElement(m.b,{to:"/tabs/".concat(e.id),exact:!0,className:"nav__link"},e.title))})))),l.a.createElement(o.c,null,t.map((function(e){return l.a.createElement(o.a,{path:"/tabs/".concat(e.id),exact:!0,component:function(){return l.a.createElement("p",null,e.content)}})}))))}),u=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],i=function(){return l.a.createElement("h2",null,"Home page")},E=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("h1",null,"Tabs with router"),l.a.createElement("nav",null,l.a.createElement("ul",{className:"nav"},l.a.createElement("li",{className:"nav__item"},l.a.createElement(m.b,{to:"/",exact:!0,className:"nav__link"},"Home")),l.a.createElement("li",{className:"nav__item"},l.a.createElement(m.b,{to:"/tabs",className:"nav__link"},"Tabs")))),l.a.createElement(o.c,null,l.a.createElement(o.a,{path:"/",exact:!0,component:i}),l.a.createElement(o.a,{path:"/tabs",render:function(){return l.a.createElement(s,{tabs:u})}})))};r.a.render(l.a.createElement(m.a,null,l.a.createElement(E,null)),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.99a338e8.chunk.js.map