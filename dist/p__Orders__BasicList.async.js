(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{ToBh:function(e,t,a){e.exports={standardList:"antd-pro-pages-orders-basic-list-standardList",headerInfo:"antd-pro-pages-orders-basic-list-headerInfo",listContent:"antd-pro-pages-orders-basic-list-listContent",listContentItem:"antd-pro-pages-orders-basic-list-listContentItem",extraContentSearch:"antd-pro-pages-orders-basic-list-extraContentSearch",listCard:"antd-pro-pages-orders-basic-list-listCard",standardListForm:"antd-pro-pages-orders-basic-list-standardListForm",formResult:"antd-pro-pages-orders-basic-list-formResult"}},Vw3K:function(e,t,a){"use strict";a.r(t);a("IzEo");var n,r,l,o,i=a("bx4M"),s=(a("Mwp2"),a("VXEj")),c=(a("iQDF"),a("+eQT")),d=a("jehZ"),m=a.n(d),u=(a("+L6B"),a("2/Rp")),p=(a("qVdP"),a("jsC+")),E=(a("Pwec"),a("CtXQ")),h=(a("lUTK"),a("BvKs")),f=(a("2qtc"),a("kLXV")),v=a("p0pE"),b=a.n(v),y=a("2Taf"),C=a.n(y),g=a("vZ4D"),w=a.n(g),D=a("l4Ni"),S=a.n(D),k=a("ujKo"),I=a.n(k),x=a("MhPg"),L=a.n(x),M=(a("5NDa"),a("5rEg")),N=(a("OaEy"),a("2fM7")),T=(a("7Kak"),a("9yH6")),V=(a("y8nQ"),a("Vl3Y")),Y=a("q1tI"),K=a.n(Y),O=(a("i8i4"),a("wd/R")),q=a.n(O),A=a("MuoO"),F=a("usdK"),H=a("zHco"),j=a("ALo4"),B=a("ToBh"),R=a.n(B),Q=V["a"].Item,z=T["a"].Button,P=T["a"].Group,X=N["a"].Option,J=M["a"].Search,Z=M["a"].TextArea,_=(n=Object(A["connect"])(function(e){var t=e.orders,a=e.loading;return{orders:t,loading:a.models.orders}}),r=V["a"].create(),n(l=r((o=function(e){function t(){var e,a;C()(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return a=S()(this,(e=I()(t)).call.apply(e,[this].concat(r))),a.state={visible:!1,done:!1},a.formLayout={labelCol:{span:7},wrapperCol:{span:13}},a.showModal=function(){a.setState({visible:!0,current:void 0})},a.showEditModal=function(e){a.setState({visible:!0,current:e})},a.showDetail=function(e){F["a"].push("/orders/".concat(e._id))},a.handleDone=function(){a.setState({done:!1,visible:!1})},a.handleCancel=function(){a.setState({visible:!1})},a.handleSubmit=function(e){e.preventDefault();var t=a.props,n=t.dispatch,r=t.form,l=a.state.current,o=l?l.id:"";r.validateFields(function(e,t){e||(a.setState({done:!0}),n({type:"list/submit",payload:b()({id:o},t)}))})},a.deleteItem=function(e){var t=a.props.dispatch;t({type:"list/submit",payload:{id:e}})},a}return L()(t,e),w()(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e({type:"orders/fetch"})}},{key:"render",value:function(){var e=this,t=this.props,a=t.orders.data,n=a.list,r=(a.pagination,t.loading),l=this.props.form.getFieldDecorator,o=this.state,d=o.visible,v=o.done,b=o.current,y=void 0===b?{}:b,C=function(t,a){"edit"===t?e.showEditModal(a):"delete"===t&&f["a"].confirm({title:"\u5220\u9664\u4efb\u52a1",content:"\u786e\u5b9a\u5220\u9664\u8be5\u4efb\u52a1\u5417\uff1f",okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",onOk:function(){return e.deleteItem(a.id)}})},g=v?{footer:null,onCancel:this.handleDone}:{okText:"\u4fdd\u5b58",onOk:this.handleSubmit,onCancel:this.handleCancel},w=(K.a.createElement("div",{className:R.a.extraContent},K.a.createElement(P,{defaultValue:"all"},K.a.createElement(z,{value:"all"},"\u5168\u90e8"),K.a.createElement(z,{value:"progress"},"\u8fdb\u884c\u4e2d"),K.a.createElement(z,{value:"waiting"},"\u7b49\u5f85\u4e2d")),K.a.createElement(J,{className:R.a.extraContentSearch,placeholder:"\u8bf7\u8f93\u5165",onSearch:function(){return{}}})),function(e){var t=e.data,a=t._id,n=t.onShelve,r=t.created;return K.a.createElement("div",{className:R.a.listContent},K.a.createElement("div",{className:R.a.listContentItem},K.a.createElement("span",null,"\u8ba2\u5355ID"),K.a.createElement("p",null,a)),K.a.createElement("div",{className:R.a.listContentItem},K.a.createElement("span",null,"\u521b\u5efa\u65f6\u95f4"),K.a.createElement("p",null,q()(r).format("YYYY-MM-DD HH:mm"))),K.a.createElement("div",{className:R.a.listContentItem},K.a.createElement("span",null,"\u72b6\u6001"),K.a.createElement("p",null,n)))}),D=function(e){return K.a.createElement(p["a"],{overlay:K.a.createElement(h["a"],{onClick:function(t){var a=t.key;return C(a,e.current)}},K.a.createElement(h["a"].Item,{key:"edit"},"\u7f16\u8f91"),K.a.createElement(h["a"].Item,{key:"delete"},"\u5220\u9664"))},K.a.createElement("a",null,"\u66f4\u591a ",K.a.createElement(E["a"],{type:"down"})))},S=function(){return v?K.a.createElement(j["a"],{type:"success",title:"\u64cd\u4f5c\u6210\u529f",description:"\u4e00\u7cfb\u5217\u7684\u4fe1\u606f\u63cf\u8ff0\uff0c\u5f88\u77ed\u540c\u6837\u4e5f\u53ef\u4ee5\u5e26\u6807\u70b9\u3002",actions:K.a.createElement(u["a"],{type:"primary",onClick:e.handleDone},"\u77e5\u9053\u4e86"),className:R.a.formResult}):K.a.createElement(V["a"],{onSubmit:e.handleSubmit},K.a.createElement(Q,m()({label:"\u4efb\u52a1\u540d\u79f0"},e.formLayout),l("title",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u4efb\u52a1\u540d\u79f0"}],initialValue:y.title})(K.a.createElement(M["a"],{placeholder:"\u8bf7\u8f93\u5165"}))),K.a.createElement(Q,m()({label:"\u5f00\u59cb\u65f6\u95f4"},e.formLayout),l("createdAt",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u5f00\u59cb\u65f6\u95f4"}],initialValue:y.createdAt?q()(y.createdAt):null})(K.a.createElement(c["a"],{showTime:!0,placeholder:"\u8bf7\u9009\u62e9",format:"YYYY-MM-DD HH:mm:ss",style:{width:"100%"}}))),K.a.createElement(Q,m()({label:"\u4efb\u52a1\u8d1f\u8d23\u4eba"},e.formLayout),l("owner",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u4efb\u52a1\u8d1f\u8d23\u4eba"}],initialValue:y.owner})(K.a.createElement(N["a"],{placeholder:"\u8bf7\u9009\u62e9"},K.a.createElement(X,{value:"\u4ed8\u6653\u6653"},"\u4ed8\u6653\u6653"),K.a.createElement(X,{value:"\u5468\u6bdb\u6bdb"},"\u5468\u6bdb\u6bdb")))),K.a.createElement(Q,m()({},e.formLayout,{label:"\u4ea7\u54c1\u63cf\u8ff0"}),l("subDescription",{rules:[{message:"\u8bf7\u8f93\u5165\u81f3\u5c11\u4e94\u4e2a\u5b57\u7b26\u7684\u4ea7\u54c1\u63cf\u8ff0\uff01",min:5}],initialValue:y.subDescription})(K.a.createElement(Z,{rows:4,placeholder:"\u8bf7\u8f93\u5165\u81f3\u5c11\u4e94\u4e2a\u5b57\u7b26"}))))};return K.a.createElement(H["a"],null,K.a.createElement("div",{className:R.a.standardList},K.a.createElement(i["a"],{className:R.a.listCard,bordered:!1,title:"\u8ba2\u5355\u5217\u8868",style:{marginTop:24},bodyStyle:{padding:"0 32px 40px 32px"}},K.a.createElement(s["a"],{size:"large",rowKey:"id",loading:r,dataSource:n,renderItem:function(t){return K.a.createElement(s["a"].Item,{actions:[K.a.createElement("a",{onClick:function(a){a.preventDefault(),e.showEditModal(t)}},"\u7f16\u8f91"),K.a.createElement("a",{onClick:function(a){a.preventDefault(),e.showDetail(t)}},"\u67e5\u770b"),K.a.createElement(D,{current:t})]},K.a.createElement(w,{data:t}))}}))),K.a.createElement(f["a"],m()({title:v?null:"\u8ba2\u5355\u7f16\u8f91",className:R.a.standardListForm,width:640,bodyStyle:v?{padding:"72px 0"}:{padding:"28px 0 0"},destroyOnClose:!0,visible:d},g),S()))}}]),t}(Y["Component"]),l=o))||l)||l);t["default"]=_}}]);