(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[22],{rVGZ:function(e,t,a){"use strict";var l=a("TqRt"),r=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("IzEo");var d=l(a("bx4M"));a("+L6B");var m=l(a("2/Rp"));a("7Kak");var o=l(a("9yH6"));a("giR+");var u=l(a("fyUT"));a("5Dmo");var f=l(a("3S7+"));a("Pwec");var s=l(a("CtXQ")),i=l(a("pVnL")),n=l(a("lwsE")),c=l(a("W8MJ")),p=l(a("a1gu")),g=l(a("Nsbk")),E=l(a("7W2i"));a("5NDa");var b=l(a("5rEg"));a("iQDF");var M=l(a("+eQT"));a("OaEy");var h=l(a("2fM7"));a("y8nQ");var v,F,y,w=l(a("Vl3Y")),q=r(a("q1tI")),k=a("MuoO"),x=a("LLXN"),R=l(a("zHco")),N=l(a("39K4")),T=w.default.Item,C=h.default.Option,U=M.default.RangePicker,D=b.default.TextArea,L=(v=(0,k.connect)(function(e){var t=e.loading;return{submitting:t.effects["form/submitRegularForm"]}}),F=w.default.create(),v(y=F(y=function(e){function t(){var e,a;(0,n.default)(this,t);for(var l=arguments.length,r=new Array(l),d=0;d<l;d++)r[d]=arguments[d];return a=(0,p.default)(this,(e=(0,g.default)(t)).call.apply(e,[this].concat(r))),a.handleSubmit=function(e){var t=a.props,l=t.dispatch,r=t.form;e.preventDefault(),r.validateFieldsAndScroll(function(e,t){e||l({type:"form/submitRegularForm",payload:t})})},a}return(0,E.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props.submitting,t=this.props.form,a=t.getFieldDecorator,l=t.getFieldValue,r={labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:12},md:{span:10}}},n={wrapperCol:{xs:{span:24,offset:0},sm:{span:10,offset:7}}};return q.default.createElement(R.default,{title:q.default.createElement(x.FormattedMessage,{id:"app.forms.basic.title"}),content:q.default.createElement(x.FormattedMessage,{id:"app.forms.basic.description"})},q.default.createElement(d.default,{bordered:!1},q.default.createElement(w.default,{onSubmit:this.handleSubmit,hideRequiredMark:!0,style:{marginTop:8}},q.default.createElement(T,(0,i.default)({},r,{label:q.default.createElement(x.FormattedMessage,{id:"form.title.label"})}),a("title",{rules:[{required:!0,message:(0,x.formatMessage)({id:"validation.title.required"})}]})(q.default.createElement(b.default,{placeholder:(0,x.formatMessage)({id:"form.title.placeholder"})}))),q.default.createElement(T,(0,i.default)({},r,{label:q.default.createElement(x.FormattedMessage,{id:"form.date.label"})}),a("date",{rules:[{required:!0,message:(0,x.formatMessage)({id:"validation.date.required"})}]})(q.default.createElement(U,{style:{width:"100%"},placeholder:[(0,x.formatMessage)({id:"form.date.placeholder.start"}),(0,x.formatMessage)({id:"form.date.placeholder.end"})]}))),q.default.createElement(T,(0,i.default)({},r,{label:q.default.createElement(x.FormattedMessage,{id:"form.goal.label"})}),a("goal",{rules:[{required:!0,message:(0,x.formatMessage)({id:"validation.goal.required"})}]})(q.default.createElement(D,{style:{minHeight:32},placeholder:(0,x.formatMessage)({id:"form.goal.placeholder"}),rows:4}))),q.default.createElement(T,(0,i.default)({},r,{label:q.default.createElement(x.FormattedMessage,{id:"form.standard.label"})}),a("standard",{rules:[{required:!0,message:(0,x.formatMessage)({id:"validation.standard.required"})}]})(q.default.createElement(D,{style:{minHeight:32},placeholder:(0,x.formatMessage)({id:"form.standard.placeholder"}),rows:4}))),q.default.createElement(T,(0,i.default)({},r,{label:q.default.createElement("span",null,q.default.createElement(x.FormattedMessage,{id:"form.client.label"}),q.default.createElement("em",{className:N.default.optional},q.default.createElement(x.FormattedMessage,{id:"form.optional"}),q.default.createElement(f.default,{title:q.default.createElement(x.FormattedMessage,{id:"form.client.label.tooltip"})},q.default.createElement(s.default,{type:"info-circle-o",style:{marginRight:4}}))))}),a("client")(q.default.createElement(b.default,{placeholder:(0,x.formatMessage)({id:"form.client.placeholder"})}))),q.default.createElement(T,(0,i.default)({},r,{label:q.default.createElement("span",null,q.default.createElement(x.FormattedMessage,{id:"form.invites.label"}),q.default.createElement("em",{className:N.default.optional},q.default.createElement(x.FormattedMessage,{id:"form.optional"})))}),a("invites")(q.default.createElement(b.default,{placeholder:(0,x.formatMessage)({id:"form.invites.placeholder"})}))),q.default.createElement(T,(0,i.default)({},r,{label:q.default.createElement("span",null,q.default.createElement(x.FormattedMessage,{id:"form.weight.label"}),q.default.createElement("em",{className:N.default.optional},q.default.createElement(x.FormattedMessage,{id:"form.optional"})))}),a("weight")(q.default.createElement(u.default,{placeholder:(0,x.formatMessage)({id:"form.weight.placeholder"}),min:0,max:100})),q.default.createElement("span",{className:"ant-form-text"},"%")),q.default.createElement(T,(0,i.default)({},r,{label:q.default.createElement(x.FormattedMessage,{id:"form.public.label"}),help:q.default.createElement(x.FormattedMessage,{id:"form.public.label.help"})}),q.default.createElement("div",null,a("public",{initialValue:"1"})(q.default.createElement(o.default.Group,null,q.default.createElement(o.default,{value:"1"},q.default.createElement(x.FormattedMessage,{id:"form.public.radio.public"})),q.default.createElement(o.default,{value:"2"},q.default.createElement(x.FormattedMessage,{id:"form.public.radio.partially-public"})),q.default.createElement(o.default,{value:"3"},q.default.createElement(x.FormattedMessage,{id:"form.public.radio.private"})))),q.default.createElement(T,{style:{marginBottom:0}},a("publicUsers")(q.default.createElement(h.default,{mode:"multiple",placeholder:(0,x.formatMessage)({id:"form.publicUsers.placeholder"}),style:{margin:"8px 0",display:"2"===l("public")?"block":"none"}},q.default.createElement(C,{value:"1"},q.default.createElement(x.FormattedMessage,{id:"form.publicUsers.option.A"})),q.default.createElement(C,{value:"2"},q.default.createElement(x.FormattedMessage,{id:"form.publicUsers.option.B"})),q.default.createElement(C,{value:"3"},q.default.createElement(x.FormattedMessage,{id:"form.publicUsers.option.C"}))))))),q.default.createElement(T,(0,i.default)({},n,{style:{marginTop:32}}),q.default.createElement(m.default,{type:"primary",htmlType:"submit",loading:e},q.default.createElement(x.FormattedMessage,{id:"form.submit"})),q.default.createElement(m.default,{style:{marginLeft:8}},q.default.createElement(x.FormattedMessage,{id:"form.save"}))))))}}]),t}(q.PureComponent))||y)||y),S=L;t.default=S}}]);