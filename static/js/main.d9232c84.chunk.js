(this["webpackJsonpreact-flask-axios"]=this["webpackJsonpreact-flask-axios"]||[]).push([[0],{164:function(e,t,c){},184:function(e,t,c){},270:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c.n(s),j=c(22),i=c.n(j),a=(c(164),c(29)),r=c(273),l=c(281),o=(c(54),c(107),c(146),c(147),c(108),c.p+"static/media/bp.2d68a791.png"),b=c(272),x=c(49),d=c(284),O=c(285),h=c(286),p=c(5);c(184);var u=c(149),m=(c(157),c(280)),g=c(279),f=c(116),v=c(275),S=c(67),y=c(37),w=c(282),C=c(277),I=c(283),T=c(287),k=c(288),F=c(289);function N(){var e=Object(s.useState)(!1),t=Object(a.a)(e,2),c=t[0],n=t[1],j=f.a.TabPane,i=v.a.Countdown,r=Date.now()+1728e5+3e4;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(x.a,{type:"primary",icon:Object(p.jsx)(T.a,{id:"aud"}),size:"middle",id:"menu",onClick:function(){n(!0)}}),Object(p.jsx)(m.a,{title:"Sample Output",placement:"left",closable:!1,onClose:function(){n(!1)},visible:c,width:1e3,children:Object(p.jsxs)(f.a,{defaultActiveKey:"1",onChange:function(e){console.log(e)},children:[Object(p.jsxs)(j,{tab:"Statitics",children:[Object(p.jsxs)(S.a,{gutter:16,children:[Object(p.jsx)(y.a,{span:12,children:Object(p.jsx)(w.a,{children:Object(p.jsx)(v.a,{title:"Active",value:11.28,precision:2,valueStyle:{color:"#3f8600"},prefix:Object(p.jsx)(k.a,{}),suffix:"%"})})}),Object(p.jsx)(y.a,{span:12,children:Object(p.jsx)(w.a,{children:Object(p.jsx)(v.a,{title:"Idle",value:9.3,precision:2,valueStyle:{color:"#cf1322"},prefix:Object(p.jsx)(F.a,{}),suffix:"%"})})})]}),Object(p.jsxs)(S.a,{gutter:16,children:[Object(p.jsx)(y.a,{span:12,children:Object(p.jsx)(i,{title:"Countdown",value:r,onFinish:function(){console.log("finished!")}})}),Object(p.jsx)(y.a,{span:12,children:Object(p.jsx)(i,{title:"Million Seconds",value:r,format:"HH:mm:ss:SSS"})}),Object(p.jsx)(y.a,{span:12,children:Object(p.jsx)(i,{title:"Countdown",value:Date.now()+1e4,onChange:function(e){4950<e&&e<5e3&&console.log("changed!")}})})]}),","]},"1"),Object(p.jsxs)(j,{tab:"Progress",children:[Object(p.jsx)(C.a,{percent:30}),Object(p.jsx)(C.a,{percent:50,status:"active"}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)(C.a,{percent:70,status:"exception"}),Object(p.jsx)(C.a,{percent:100}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)(C.a,{type:"circle",percent:75}),Object(p.jsx)(C.a,{type:"circle",percent:70,status:"exception"}),Object(p.jsx)(C.a,{type:"circle",percent:100}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)(C.a,{percent:30,steps:5}),Object(p.jsx)(C.a,{percent:50,steps:3})]},"2"),Object(p.jsxs)(j,{tab:"Timeline",children:[Object(p.jsxs)(I.a,{children:[Object(p.jsx)(I.a.Item,{color:"green",children:"Create a services site 2015-09-01"}),Object(p.jsx)(I.a.Item,{color:"green",children:"Create a services site 2015-09-01"}),Object(p.jsxs)(I.a.Item,{color:"red",children:[Object(p.jsx)("p",{children:"Solve initial network problems 1"}),Object(p.jsx)("p",{children:"Solve initial network problems 2"}),Object(p.jsx)("p",{children:"Solve initial network problems 3 2015-09-01"})]}),Object(p.jsxs)(I.a.Item,{children:[Object(p.jsx)("p",{children:"Technical testing 1"}),Object(p.jsx)("p",{children:"Technical testing 2"}),Object(p.jsx)("p",{children:"Technical testing 3 2015-09-01"})]}),Object(p.jsxs)(I.a.Item,{color:"gray",children:[Object(p.jsx)("p",{children:"Technical testing 1"}),Object(p.jsx)("p",{children:"Technical testing 2"}),Object(p.jsx)("p",{children:"Technical testing 3 2015-09-01"})]}),Object(p.jsxs)(I.a.Item,{color:"gray",children:[Object(p.jsx)("p",{children:"Technical testing 1"}),Object(p.jsx)("p",{children:"Technical testing 2"}),Object(p.jsx)("p",{children:"Technical testing 3 2015-09-01"})]})]}),","]},"3")]})})]})}function P(){var e=Object(s.useState)(!1),t=Object(a.a)(e,2),c=t[0],n=t[1],j=Object(s.useState)("waiting"),i=Object(a.a)(j,2),l=i[0],f=i[1],v=Object(s.useState)(!1),S=Object(a.a)(v,2),y=S[0],w=S[1],C=(r.a.Header,r.a.Footer,r.a.Sider,r.a.Content,Object(s.useState)(!1)),I=Object(a.a)(C,2),T=I[0],k=I[1],F=Object(p.jsx)("div",{children:Object(p.jsx)("p",{children:"Don't be shy! say something! "})});return Object(s.useEffect)((function(){}),[]),Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("img",{src:o,className:"App-logo",alt:"logo"}),Object(p.jsx)(b.a,{}),Object(p.jsx)("h2",{children:"Hold to Record Voice Command"}),Object(p.jsx)(u.ReactMic,{record:c,className:"sound-wave",onStop:function(e){f(e.blobURL),w(!0)},onData:function(e){console.log("chunk of real-time data is: ",e)},strokeColor:"green",backgroundColor:"white",mimeType:"audio/mp3"}),Object(p.jsx)("br",{}),Object(p.jsx)(d.a,{content:F,children:Object(p.jsx)(x.a,{shape:"circle",icon:Object(p.jsx)(O.a,{id:"aud"}),size:"large",onMouseDown:function(){n(!0)},onMouseUp:function(){n(!1)}})}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)(N,{}),Object(p.jsx)(d.a,{content:Object(p.jsx)("div",{children:"Help"}),children:Object(p.jsx)(x.a,{type:"primary",shape:"circle",size:"large",id:"help",icon:Object(p.jsx)(h.a,{id:"aud"}),onClick:function(){k(!0)}})}),Object(p.jsxs)(m.a,{title:"Help",placement:"right",closable:!1,onClose:function(){k(!1)},visible:T,children:[Object(p.jsx)("p",{children:"Some contents..."}),Object(p.jsx)("p",{children:"Some contents..."}),Object(p.jsx)("p",{children:"Some contents..."})]}),Object(p.jsx)(g.a,{title:"Voice Command",visible:y,onOk:function(){w(!1)},onCancel:function(){w(!1)},width:1100,children:Object(p.jsx)("iframe",{src:l})})]})}var A=c(278),B=c(274),H=c(276);function D(){var e=Object(s.useState)(""),t=Object(a.a)(e,2),c=t[0],n=t[1],j=Object(s.useState)(""),i=Object(a.a)(j,2),r=i[0],l=i[1],o=Object(s.useState)(""),b=Object(a.a)(o,2),d=b[0],O=b[1];return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("br",{}),Object(p.jsx)("iframe",{frameBorder:"0",src:"http://localhost:8000/",allow:"camera;microphone",id:"map"}),""!==c&&""!==r&&""!==d?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("iframe",{frameBorder:"0",src:"http://localhost:8000/",allow:"camera;microphone",id:"map"}),Object(p.jsxs)("div",{children:["Your BotName: ",c]}),Object(p.jsxs)("div",{children:["Your PoolID: ",r]}),Object(p.jsxs)("div",{children:["Your Region: ",d]})]}):Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(B.a,{name:"basic",initialValues:{remember:!0},onFinish:function(e){n(e.botName),l(e.poolId),O(e.region)},children:[Object(p.jsx)(B.a.Item,{label:"botName",name:"botName",rules:[{required:!0,message:"Please input your botName!"}],children:Object(p.jsx)(H.a,{placeholder:"Wendy"})}),Object(p.jsx)(B.a.Item,{label:"poolId",name:"poolId",rules:[{required:!0,message:"Please input your poolId!"}],children:Object(p.jsx)(H.a,{placeholder:"us-west-2:xxxxx-xxxx-xxxx-xxxx-xxxxxxx"})}),Object(p.jsx)(B.a.Item,{label:"region",name:"region",rules:[{required:!0,message:"Please input your region! ex: us-west-2"}],children:Object(p.jsx)(H.a,{placeholder:"us-west-2"})}),Object(p.jsx)(B.a.Item,{children:Object(p.jsx)(x.a,{type:"primary",htmlType:"submit",children:"Start Lex Bot"})})]})}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{})]})}function M(){var e=Object(s.useState)("awslex"),t=Object(a.a)(e,2),c=t[0],n=t[1],j=r.a.Header,i=r.a.Footer,o=(r.a.Sider,r.a.Content,{height:"90px",color:"#fff",lineHeight:"90px",textAlign:"center",background:"green"});return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsxs)(l.a,{onClick:function(e){n(e.key)},selectedKeys:[c],mode:"horizontal",children:[Object(p.jsx)(l.a.Item,{children:"AWS Lex"},"awslex"),Object(p.jsx)(l.a.Item,{children:"VoiceNote"},"demo")]}),Object(p.jsx)(j,{className:"header",children:Object(p.jsx)("h2",{id:"headerText",children:"BP Voice Interface"})}),"awslex"==c?Object(p.jsx)(D,{}):Object(p.jsx)(P,{}),Object(p.jsxs)(A.a,{autoplay:!0,children:[Object(p.jsx)("div",{children:Object(p.jsx)("h3",{style:o,children:"You can say: Show me the map for Wind Farm"})}),Object(p.jsx)("div",{children:Object(p.jsx)("h3",{style:o,children:"You can say: Show me the Schematics for Wind Turbine"})})]}),Object(p.jsx)(i,{children:"Bestest Microsoft Edgies Team @2021 "})]})}var L=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,290)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,j=t.getLCP,i=t.getTTFB;c(e),s(e),n(e),j(e),i(e)}))};i.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(M,{})}),document.getElementById("root")),L()}},[[270,1,2]]]);
//# sourceMappingURL=main.d9232c84.chunk.js.map