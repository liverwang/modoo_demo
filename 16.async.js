(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[16],{BOD2:function(e,t,a){e.exports={container:"antd-pro\\layouts\\-user-layout-container",lang:"antd-pro\\layouts\\-user-layout-lang",content:"antd-pro\\layouts\\-user-layout-content",top:"antd-pro\\layouts\\-user-layout-top",header:"antd-pro\\layouts\\-user-layout-header",logo:"antd-pro\\layouts\\-user-layout-logo",title:"antd-pro\\layouts\\-user-layout-title",desc:"antd-pro\\layouts\\-user-layout-desc"}},Kkfi:function(e,t,a){e.exports={menu:"antd-pro\\components\\-select-lang\\index-menu",dropDown:"antd-pro\\components\\-select-lang\\index-dropDown"}},bfXr:function(e,t,a){"use strict";var l=a("284h"),n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("qVdP");var r=n(a("jsC+"));a("Pwec");var o=n(a("CtXQ"));a("lUTK");var u=n(a("BvKs")),d=n(a("lwsE")),s=n(a("W8MJ")),f=n(a("a1gu")),c=n(a("Nsbk")),i=n(a("7W2i")),m=l(a("q1tI")),p=a("LLXN"),g=n(a("TSYQ")),y=n(a("Kkfi")),h=function(e){function t(){var e,a;(0,d.default)(this,t);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return a=(0,f.default)(this,(e=(0,c.default)(t)).call.apply(e,[this].concat(n))),a.changeLang=function(e){var t=e.key;(0,p.setLocale)(t)},a}return(0,i.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){var e=this.props.className,t=(0,p.getLocale)(),a=m.default.createElement(u.default,{className:y.default.menu,selectedKeys:[t],onClick:this.changeLang},m.default.createElement(u.default.Item,{key:"zh-CN"},m.default.createElement("span",{role:"img","aria-label":"\u7b80\u4f53\u4e2d\u6587"},"\ud83c\udde8\ud83c\uddf3")," ","\u7b80\u4f53\u4e2d\u6587"),m.default.createElement(u.default.Item,{key:"zh-TW"},m.default.createElement("span",{role:"img","aria-label":"\u7e41\u4f53\u4e2d\u6587"},"\ud83c\udded\ud83c\uddf0")," ","\u7e41\u4f53\u4e2d\u6587"),m.default.createElement(u.default.Item,{key:"en-US"},m.default.createElement("span",{role:"img","aria-label":"English"},"\ud83c\uddec\ud83c\udde7")," ","English"),m.default.createElement(u.default.Item,{key:"pt-BR"},m.default.createElement("span",{role:"img","aria-label":"Portugu\xeas"},"\ud83c\uddf5\ud83c\uddf9")," ","Portugu\xeas"));return m.default.createElement(r.default,{overlay:a,placement:"bottomRight"},m.default.createElement(o.default,{type:"global",className:(0,g.default)(y.default.dropDown,e),title:(0,p.formatMessage)({id:"navBar.lang"})}))}}]),t}(m.PureComponent);t.default=h},ggcP:function(e,t,a){"use strict";var l=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a("q1tI")),r=l(a("TSYQ")),o=l(a("wNoj")),u=function(e){var t=e.className,a=e.links,l=e.copyright,u=(0,r.default)(o.default.globalFooter,t);return n.default.createElement("footer",{className:u},a&&n.default.createElement("div",{className:o.default.links},a.map(function(e){return n.default.createElement("a",{key:e.key,title:e.key,target:e.blankTarget?"_blank":"_self",href:e.href},e.title)})),l&&n.default.createElement("div",{className:o.default.copyright},l))},d=u;t.default=d},jH8a:function(e,t,a){"use strict";var l=a("284h"),n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("lwsE")),o=n(a("W8MJ")),u=n(a("a1gu")),d=n(a("Nsbk")),s=n(a("7W2i"));a("Pwec");var f=n(a("CtXQ")),c=l(a("q1tI")),i=a("LLXN"),m=n(a("mOP9")),p=n(a("ggcP")),g=n(a("bfXr")),y=n(a("BOD2")),h=n(a("mxmt")),v=[{key:"help",title:(0,i.formatMessage)({id:"layout.user.link.help"}),href:""},{key:"privacy",title:(0,i.formatMessage)({id:"layout.user.link.privacy"}),href:""},{key:"terms",title:(0,i.formatMessage)({id:"layout.user.link.terms"}),href:""}],E=c.default.createElement(c.Fragment,null,"Copyright ",c.default.createElement(f.default,{type:"copyright"})," 2018 \u8682\u8681\u91d1\u670d\u4f53\u9a8c\u6280\u672f\u90e8\u51fa\u54c1"),k=function(e){function t(){return(0,r.default)(this,t),(0,u.default)(this,(0,d.default)(t).apply(this,arguments))}return(0,s.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=this.props.children;return c.default.createElement("div",{className:y.default.container},c.default.createElement("div",{className:y.default.lang},c.default.createElement(g.default,null)),c.default.createElement("div",{className:y.default.content},c.default.createElement("div",{className:y.default.top},c.default.createElement("div",{className:y.default.header},c.default.createElement(m.default,{to:"/"},c.default.createElement("img",{alt:"logo",className:y.default.logo,src:h.default}),c.default.createElement("span",{className:y.default.title},"\u6469\u90fd\u8d2d"))),c.default.createElement("div",{className:y.default.desc},"\u6469\u90fd\u8d2d \u7efc\u5408\u4f53\u8fd0\u8425\u5e73\u53f0")),e),c.default.createElement(p.default,{links:v,copyright:E}))}}]),t}(c.default.PureComponent),b=k;t.default=b},wNoj:function(e,t,a){e.exports={globalFooter:"antd-pro\\components\\-global-footer\\index-globalFooter",links:"antd-pro\\components\\-global-footer\\index-links",copyright:"antd-pro\\components\\-global-footer\\index-copyright"}}}]);