(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[28],{"/P8h":function(e,t,a){"use strict";var l=a("TqRt"),n=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("Mwp2");var d=l(a("VXEj"));a("Telt");var r=l(a("Tckk"));a("IzEo");var u=l(a("bx4M"));a("14J3");var i=l(a("BMrR"));a("jCWc");var s=l(a("kPKH"));a("iQDF");var o=l(a("+eQT")),c=l(a("pVnL"));a("+L6B");var f=l(a("2/Rp"));a("qVdP");var m=l(a("jsC+"));a("Pwec");var p=l(a("CtXQ"));a("lUTK");var E=l(a("BvKs"));a("MXD1");var v=l(a("CFYs"));a("2qtc");var h=l(a("kLXV")),b=l(a("MVZn")),y=l(a("lwsE")),C=l(a("W8MJ")),g=l(a("a1gu")),w=l(a("Nsbk")),k=l(a("7W2i"));a("5NDa");var x=l(a("5rEg"));a("OaEy");var M=l(a("2fM7"));a("7Kak");var S=l(a("9yH6"));a("y8nQ");var D,I,L,N=l(a("Vl3Y")),T=n(a("q1tI")),O=a("i8i4"),V=l(a("wd/R")),Y=a("MuoO"),B=l(a("zHco")),q=l(a("ALo4")),A=l(a("3xOC")),F=N.default.Item,H=S.default.Button,R=S.default.Group,z=M.default.Option,P=x.default.Search,J=x.default.TextArea,K=(D=(0,Y.connect)(function(e){var t=e.list,a=e.loading;return{list:t,loading:a.models.list}}),I=N.default.create(),D(L=I(L=function(e){function t(){var e,a;(0,y.default)(this,t);for(var l=arguments.length,n=new Array(l),d=0;d<l;d++)n[d]=arguments[d];return a=(0,g.default)(this,(e=(0,w.default)(t)).call.apply(e,[this].concat(n))),a.state={visible:!1,done:!1},a.formLayout={labelCol:{span:7},wrapperCol:{span:13}},a.showModal=function(){a.setState({visible:!0,current:void 0})},a.showEditModal=function(e){a.setState({visible:!0,current:e})},a.handleDone=function(){setTimeout(function(){return a.addBtn.blur()},0),a.setState({done:!1,visible:!1})},a.handleCancel=function(){setTimeout(function(){return a.addBtn.blur()},0),a.setState({visible:!1})},a.handleSubmit=function(e){e.preventDefault();var t=a.props,l=t.dispatch,n=t.form,d=a.state.current,r=d?d.id:"";setTimeout(function(){return a.addBtn.blur()},0),n.validateFields(function(e,t){e||(a.setState({done:!0}),l({type:"list/submit",payload:(0,b.default)({id:r},t)}))})},a.deleteItem=function(e){var t=a.props.dispatch;t({type:"list/submit",payload:{id:e}})},a}return(0,k.default)(t,e),(0,C.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e({type:"list/fetch",payload:{count:5}})}},{key:"render",value:function(){var e=this,t=this.props,a=t.list.list,l=t.loading,n=this.props.form.getFieldDecorator,b=this.state,y=b.visible,C=b.done,g=b.current,w=void 0===g?{}:g,k=function(t,a){"edit"===t?e.showEditModal(a):"delete"===t&&h.default.confirm({title:"\u5220\u9664\u4efb\u52a1",content:"\u786e\u5b9a\u5220\u9664\u8be5\u4efb\u52a1\u5417\uff1f",okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",onOk:function(){return e.deleteItem(a.id)}})},S=C?{footer:null,onCancel:this.handleDone}:{okText:"\u4fdd\u5b58",onOk:this.handleSubmit,onCancel:this.handleCancel},D=function(e){var t=e.title,a=e.value,l=e.bordered;return T.default.createElement("div",{className:A.default.headerInfo},T.default.createElement("span",null,t),T.default.createElement("p",null,a),l&&T.default.createElement("em",null))},I=T.default.createElement("div",{className:A.default.extraContent},T.default.createElement(R,{defaultValue:"all"},T.default.createElement(H,{value:"all"},"\u5168\u90e8"),T.default.createElement(H,{value:"progress"},"\u8fdb\u884c\u4e2d"),T.default.createElement(H,{value:"waiting"},"\u7b49\u5f85\u4e2d")),T.default.createElement(P,{className:A.default.extraContentSearch,placeholder:"\u8bf7\u8f93\u5165",onSearch:function(){return{}}})),L={showSizeChanger:!0,showQuickJumper:!0,pageSize:5,total:50},Y=function(e){var t=e.data,a=t.owner,l=t.createdAt,n=t.percent,d=t.status;return T.default.createElement("div",{className:A.default.listContent},T.default.createElement("div",{className:A.default.listContentItem},T.default.createElement("span",null,"Owner"),T.default.createElement("p",null,a)),T.default.createElement("div",{className:A.default.listContentItem},T.default.createElement("span",null,"\u5f00\u59cb\u65f6\u95f4"),T.default.createElement("p",null,(0,V.default)(l).format("YYYY-MM-DD HH:mm"))),T.default.createElement("div",{className:A.default.listContentItem},T.default.createElement(v.default,{percent:n,status:d,strokeWidth:6,style:{width:180}})))},K=function(e){return T.default.createElement(m.default,{overlay:T.default.createElement(E.default,{onClick:function(t){var a=t.key;return k(a,e.current)}},T.default.createElement(E.default.Item,{key:"edit"},"\u7f16\u8f91"),T.default.createElement(E.default.Item,{key:"delete"},"\u5220\u9664"))},T.default.createElement("a",null,"\u66f4\u591a ",T.default.createElement(p.default,{type:"down"})))},Q=function(){return C?T.default.createElement(q.default,{type:"success",title:"\u64cd\u4f5c\u6210\u529f",description:"\u4e00\u7cfb\u5217\u7684\u4fe1\u606f\u63cf\u8ff0\uff0c\u5f88\u77ed\u540c\u6837\u4e5f\u53ef\u4ee5\u5e26\u6807\u70b9\u3002",actions:T.default.createElement(f.default,{type:"primary",onClick:e.handleDone},"\u77e5\u9053\u4e86"),className:A.default.formResult}):T.default.createElement(N.default,{onSubmit:e.handleSubmit},T.default.createElement(F,(0,c.default)({label:"\u4efb\u52a1\u540d\u79f0"},e.formLayout),n("title",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u4efb\u52a1\u540d\u79f0"}],initialValue:w.title})(T.default.createElement(x.default,{placeholder:"\u8bf7\u8f93\u5165"}))),T.default.createElement(F,(0,c.default)({label:"\u5f00\u59cb\u65f6\u95f4"},e.formLayout),n("createdAt",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u5f00\u59cb\u65f6\u95f4"}],initialValue:w.createdAt?(0,V.default)(w.createdAt):null})(T.default.createElement(o.default,{showTime:!0,placeholder:"\u8bf7\u9009\u62e9",format:"YYYY-MM-DD HH:mm:ss",style:{width:"100%"}}))),T.default.createElement(F,(0,c.default)({label:"\u4efb\u52a1\u8d1f\u8d23\u4eba"},e.formLayout),n("owner",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u4efb\u52a1\u8d1f\u8d23\u4eba"}],initialValue:w.owner})(T.default.createElement(M.default,{placeholder:"\u8bf7\u9009\u62e9"},T.default.createElement(z,{value:"\u4ed8\u6653\u6653"},"\u4ed8\u6653\u6653"),T.default.createElement(z,{value:"\u5468\u6bdb\u6bdb"},"\u5468\u6bdb\u6bdb")))),T.default.createElement(F,(0,c.default)({},e.formLayout,{label:"\u4ea7\u54c1\u63cf\u8ff0"}),n("subDescription",{rules:[{message:"\u8bf7\u8f93\u5165\u81f3\u5c11\u4e94\u4e2a\u5b57\u7b26\u7684\u4ea7\u54c1\u63cf\u8ff0\uff01",min:5}],initialValue:w.subDescription})(T.default.createElement(J,{rows:4,placeholder:"\u8bf7\u8f93\u5165\u81f3\u5c11\u4e94\u4e2a\u5b57\u7b26"}))))};return T.default.createElement(B.default,null,T.default.createElement("div",{className:A.default.standardList},T.default.createElement(u.default,{bordered:!1},T.default.createElement(i.default,null,T.default.createElement(s.default,{sm:8,xs:24},T.default.createElement(D,{title:"\u6211\u7684\u5f85\u529e",value:"8\u4e2a\u4efb\u52a1",bordered:!0})),T.default.createElement(s.default,{sm:8,xs:24},T.default.createElement(D,{title:"\u672c\u5468\u4efb\u52a1\u5e73\u5747\u5904\u7406\u65f6\u95f4",value:"32\u5206\u949f",bordered:!0})),T.default.createElement(s.default,{sm:8,xs:24},T.default.createElement(D,{title:"\u672c\u5468\u5b8c\u6210\u4efb\u52a1\u6570",value:"24\u4e2a\u4efb\u52a1"})))),T.default.createElement(u.default,{className:A.default.listCard,bordered:!1,title:"\u6807\u51c6\u5217\u8868",style:{marginTop:24},bodyStyle:{padding:"0 32px 40px 32px"},extra:I},T.default.createElement(f.default,{type:"dashed",style:{width:"100%",marginBottom:8},icon:"plus",onClick:this.showModal,ref:function(t){e.addBtn=(0,O.findDOMNode)(t)}},"\u6dfb\u52a0"),T.default.createElement(d.default,{size:"large",rowKey:"id",loading:l,pagination:L,dataSource:a,renderItem:function(t){return T.default.createElement(d.default.Item,{actions:[T.default.createElement("a",{onClick:function(a){a.preventDefault(),e.showEditModal(t)}},"\u7f16\u8f91"),T.default.createElement(K,{current:t})]},T.default.createElement(d.default.Item.Meta,{avatar:T.default.createElement(r.default,{src:t.logo,shape:"square",size:"large"}),title:T.default.createElement("a",{href:t.href},t.title),description:t.subDescription}),T.default.createElement(Y,{data:t}))}}))),T.default.createElement(h.default,(0,c.default)({title:C?null:"\u4efb\u52a1".concat(w?"\u7f16\u8f91":"\u6dfb\u52a0"),className:A.default.standardListForm,width:640,bodyStyle:C?{padding:"72px 0"}:{padding:"28px 0 0"},destroyOnClose:!0,visible:y},S),Q()))}}]),t}(T.PureComponent))||L)||L),Q=K;t.default=Q},"3xOC":function(e,t,a){e.exports={standardList:"antd-pro\\pages\\-base-demo\\-list\\-basic-list-standardList",headerInfo:"antd-pro\\pages\\-base-demo\\-list\\-basic-list-headerInfo",listContent:"antd-pro\\pages\\-base-demo\\-list\\-basic-list-listContent",listContentItem:"antd-pro\\pages\\-base-demo\\-list\\-basic-list-listContentItem",extraContentSearch:"antd-pro\\pages\\-base-demo\\-list\\-basic-list-extraContentSearch",listCard:"antd-pro\\pages\\-base-demo\\-list\\-basic-list-listCard",standardListForm:"antd-pro\\pages\\-base-demo\\-list\\-basic-list-standardListForm",formResult:"antd-pro\\pages\\-base-demo\\-list\\-basic-list-formResult"}}}]);