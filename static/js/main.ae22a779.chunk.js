(window.webpackJsonpwebsite=window.webpackJsonpwebsite||[]).push([[0],{120:function(e,t,a){e.exports=a.p+"static/media/phone.140a8c8a.png"},122:function(e,t,a){e.exports=a.p+"static/media/Resume.7f20e0e7.pdf"},131:function(e,t,a){e.exports=a.p+"static/media/ES6.830a4a93.jpg"},132:function(e,t,a){e.exports=a.p+"static/media/JSWeird.e67efdc7.jpg"},133:function(e,t,a){e.exports=a.p+"static/media/ReactBootCamp.c0348908.jpg"},134:function(e,t,a){e.exports=a.p+"static/media/github_icon.e2a62886.png"},135:function(e,t,a){e.exports=a.p+"static/media/email_icon.fd99f8e3.png"},147:function(e,t,a){e.exports=a(315)},152:function(e,t,a){},153:function(e,t,a){},154:function(e,t,a){},163:function(e,t){},165:function(e,t){},166:function(e,t){},167:function(e,t){},168:function(e,t){},294:function(e,t,a){},295:function(e,t,a){},315:function(e,t,a){"use strict";a.r(t);var n=a(34),o=a(0),i=a.n(o),r=a(29),l=a.n(r),s=a(119),c=a(120),m=a.n(c),u=(a(152),a(153),a(49),function(){var e=Object(o.useState)("none"),t=Object(n.a)(e,2),a=(t[0],t[1]),r=Object(o.useState)("false"),l=Object(n.a)(r,2),c=l[0],u=l[1];Object(o.useEffect)((function(){a(c?"none":"block")}),[c]);return i.a.createElement("div",{style:{display:"inline-block",flexDirection:"column"}},i.a.createElement("img",{src:m.a,alt:"phone",style:{zIndex:"1",height:"800px"}}),i.a.createElement("div",{onMouseEnter:function(){u(!1)},className:"holds-the-iframe",style:{zIndex:"2",marginLeft:"45px",position:"absolute",left:"200px",top:"105px",padding:"0px",marginBottom:"0",display:"inline-block"}},i.a.createElement(s.a,{url:"https://kat-mac-react.herokuapp.com",width:"305px",height:"555px",display:"initial"})))}),d=i.a.createContext(),p=d.Provider,h=(d.Consumer,d),f=(a(154),function(){var e=Object(o.useContext)(h),t={marginBottom:"50px",color:"#212121"};return i.a.createElement("div",{style:{display:"flex",fontFamily:"Segoe UI",overflow:"hidden"}},i.a.createElement("div",{style:{display:"flex",flexDirection:e.large?"column":"row"}},i.a.createElement("div",{className:"slide-in-bottom",style:{paddingTop:"70px",marginBottom:"80px",paddingLeft:e.large?"100px":"200px",width:"80%",position:"flex",top:"20px"}},i.a.createElement("div",{style:t},i.a.createElement("h1",null,"Current Project",i.a.createElement("span",{style:{color:"#FFEB3B",fontSize:"12"}}," .")),i.a.createElement("p",null,'"The list\u201d is an app for keeping track of my friend and I\u2019s plans that we want to do together. We would always say we would \u201dAdd it to the list!\u201d. ',i.a.createElement("br",null),i.a.createElement("br",null),"I decided to use this as a learning opportunity for the React JavaScript framework. Along with helping me learn React, I have started to learn about other technologies such as Node.JS, Express and MongoDb. The current version of this app is hosted on Heroku with future plans and projects in store!")),i.a.createElement("div",{style:t},i.a.createElement("h1",null,"Features"),i.a.createElement("p",null,"Designed with using React and material Ui and using React Hooks. This app has functionality for Create Read and Delete actions connected to MongoDb using an Express server. GET, POST, DELETE requests through axios. Hosted on Heroku.",i.a.createElement("br",null))),i.a.createElement("div",{style:t},i.a.createElement("h1",null,"Future Updates"),i.a.createElement("p",null,"There are quite a few features and upgrades I am planning on doing with this project. One of the bigger things I will be adding is user authentication. Unauthorized user will no longer be able to mess with the data (If that does happen hopefully it kick my butt into gear!). I am also looking to implement an UPDATE operation with a nice User Interface. There are also some styling issues that I am looking to fix.  "))),i.a.createElement("div",{style:{display:"flex",width:"40%"}},i.a.createElement("div",{className:"slide-in-right",style:{disply:"flex",alignContent:"flex-end",right:"200px"}},i.a.createElement(u,null)))))}),g=a(40),y=a(70),b=a.n(y),w=function(){var e={margin:"20px"},t=Object(o.useContext)(h);return i.a.createElement("div",{style:{marginBottom:"0px",postition:"fixed"}},i.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"flex-end",backgroundColor:(t.medium,"#0288D1")}},i.a.createElement("div",{style:{display:"flex",color:"#fff",alignItems:t.large?"flex-end":"center",justifyContent:"center",fontFamily:"Satisfy, cursive",width:"50%",position:"relative",right:t.large?"":"166px"}},i.a.createElement(g.b,{to:"/",style:{fontSize:"35px",display:"flex",fontFamily:"Satisfy, cursive"}}," Mackenzie Choy ")),i.a.createElement("h3",{className:"links",style:e},i.a.createElement(g.b,{activeStyle:b.a,to:"/"},"About")),i.a.createElement("h3",{className:"links",style:e},i.a.createElement(g.b,{activeStyle:b.a,to:"/projects"},"The List")),i.a.createElement("h3",{className:"links",style:e},i.a.createElement(g.b,{activeStyle:b.a,to:"/resume"},"Resume"))))},E=a(66),v=a(31),x=a(67),I=a(68),k=a(69),S=(a(159),a(330)),j=a(332),O=a(36),T=a(122),C=a.n(T);O.pdfjs.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(O.pdfjs.version,"/pdf.worker.js"),O.pdfjs.externalLinkTarget=O.pdfjs.LinkTarget.BLANK;var R=function(e){function t(){var e,a;Object(E.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(x.a)(this,(e=Object(I.a)(t)).call.apply(e,[this].concat(o)))).state={file:null,numPages:0,pageNumber:1,hidden:!1},a.onDocumentLoadSuccess=function(e){var t=e.numPages;a.setState({numPages:t})},a.nextPage=function(){var e,t=a.state.pageNumber;e=t+1>a.state.numPages?1:t+1,a.setState({pageNumber:e})},a}return Object(k.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this.state,t=e.pageNumber,a=e.numPages;return i.a.createElement("div",{style:{display:"flex",justifyContent:"center",backgroundColor:"#03A9F4",marginTop:"40px",paddingBottom:"50px"}},i.a.createElement(S.a,null,i.a.createElement(j.a,{centered:!0,columns:3},i.a.createElement(j.a.Column,{textAlign:"center",onClick:this.nextPage},i.a.createElement(O.Document,{style:{boxShadow:" 10px 10px 5px grey"},file:C.a,onLoadSuccess:this.onDocumentLoadSuccess,scale:"2"},i.a.createElement(O.Page,{pageNumber:t})),this.state.file?null:i.a.createElement("div",null,i.a.createElement("p",{style:{fontFamily:"Segoe UI",color:"white"}},"Page ",t," of ",a))))))}}]),t}(o.Component),B=a(35),D=(a(294),a(295),["I am a graduate from Red River BIT program","I am an enthusiastic learner","I built this website using React.js","I love to cook!"]),A=function(e){function t(){var e,a;Object(E.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(x.a)(this,(e=Object(I.a)(t)).call.apply(e,[this].concat(o)))).state={titleIndex:0,fadeIn:!0},a.animateTitles=function(){a.titleInterval=setInterval((function(){var e=(a.state.titleIndex+1)%D.length;a.setState({titleIndex:e,fadeIn:!0}),a.setTimeout=setTimeout((function(){return a.setState({fadeIn:!1})}),2e3)}),4e3)},a.componentWillUnmount=function(){clearInterval(a.titleInterval),clearTimeout(a.setTimeout)},a}return Object(k.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setTimeout=setTimeout((function(){return e.setState({fadeIn:!1})}),2e3),this.animateTitles()}},{key:"render",value:function(){var e=this.state,t=e.fadeIn,a=e.titleIndex,n=D[a];return i.a.createElement("p",{className:t?"title-fade-in":"title-fade-out"},n)}}]),t}(o.Component),P=a(331),F=a(33),N=a(130),U=a.n(N),L=a(131),M=a.n(L),W=a(132),z=a.n(W),J=a(133),H=a.n(J),_=[{id:1,title:"The Full JavaScript & ES6 Tutorial - (including ES7 & React)",image:M.a,description:"The most in-depth course on ES6 around. Start with JavaScript, deep-dive into ES6, & even more (Webpack, ES7, & React)!",link:"https://www.udemy.com/share/101ArABUQTdlpSR34=/"},{id:2,title:"JavaScript: Understanding the Weird Parts",image:z.a,description:"An advanced JavaScript course for everyone! Scope, closures, prototypes, this, build your own framework, and more.",link:"https://www.udemy.com/share/101XjUBUQTdlpSR34=/"},{id:3,title:"React JS Web Development - The Essentials Bootcamp",image:H.a,description:"Bootcamp on the React.js essentials. Gain a strong foundation of the core concepts, and build exciting and useful apps!",link:"https://www.udemy.com/share/101v3eBUQTdlpSR34=/"}],Q={display:"flex",alignSelf:"center",width:"70%"},G=function(e){var t=e.Showcase,a=t.title,n=t.description,o=t.image,r=t.link;return i.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignContent:"center"}},i.a.createElement("h3",{style:Q},a),i.a.createElement("img",{src:o,alt:"Showcase",style:Q}),i.a.createElement("h3",{style:{position:"relative",left:"90px"}},"Description:"),i.a.createElement("span",{style:Q},i.a.createElement("p",null,n," ",i.a.createElement("a",{href:r,target:"_blank",rel:"noopener noreferrer"},"Link to course"))))},q=function(){var e,t=(e={dots:!0,infinite:!0,autoplay:!0,slidesToShow:1,slidesToScroll:1},Object(F.a)(e,"autoplay",!0),Object(F.a)(e,"autoplaySpeed",15e3),e);return i.a.createElement("div",{style:{height:"400px",width:"600px"}},i.a.createElement(U.a,t,_.map((function(e){return i.a.createElement(G,{key:e.id,Showcase:e})}))))},K=function(){var e=Object(o.useState)(!1),t=Object(n.a)(e,2),a=t[0],r=t[1],l=Object(o.useState)("more"),s=Object(n.a)(l,2),c=s[0],m=s[1],u=Object(o.useContext)(h);return Object(o.useEffect)((function(){m(a?"less":"more")}),[a]),i.a.createElement("div",{style:{display:"flex",justifyContent:"center",margin:0,padding:0,fontFamily:"Segoe UI",height:"100%",overflow:"auto",paddingBottom:"150px"}},i.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},i.a.createElement("h1",{className:"tracking-in-expand",style:{fontFamily:"Segoe UI",fontSize:"3.5vw",color:"#fff",position:"relative",textAlign:u.large?"center":""}},"Hello!"),i.a.createElement("div",{style:{marginBottom:"100px",position:"relative",left:"5px",textAlign:u.large?"center":""}},i.a.createElement(A,null)),i.a.createElement("div",{style:{display:"flex",flexDirection:u.large?"column":"row"}},i.a.createElement("div",{style:{position:"relative",display:"flex",alignSelf:u.large?"center":"flex-start",width:"50vw",borderLeft:"3px solid #FFEB3B",paddingLeft:"40px",flexWrap:"wrap",justifyContent:"flex-start"}},i.a.createElement("h1",{style:{color:"#fff"}},"Experience"),i.a.createElement("p",null,"I have experience in several languages through Red river and their coding projects such as a C# banking application that used a MVC framework as well as learning design patterns such as singleton and the observer pattern.",i.a.createElement("br",null),i.a.createElement("br",null),"Experience with PHP scripting for login authentication ensuring properly encrypted passwords and sanitization to mitigate SQL injection attacks. ",i.a.createElement("br",null),i.a.createElement("br",null),"Experience with Ruby on Rails web framework building a full stack E-commerce website using PostgresSQL",i.a.createElement("br",null),i.a.createElement("br",null),"I believe some of the best ways to learn is by doing. I have decided to teach myself React and the more I learn the more I discover. Every time I learn discover more tools and ideas to use! ",i.a.createElement("br",null),i.a.createElement("br",null),"Currently I am doing most of my learning through Udemy.com. I have Completed several courses through their website and have gained invaluable knowledge through their courses. I am working on completing my ",i.a.createElement("a",{href:"https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/"},"next course")," \u201cNode.js, Express, MongoDB & More: The Complete Bootcamp 2019\u201d."),i.a.createElement("div",{style:{paddingTop:"40px"}},i.a.createElement("h1",{style:{color:"#fff"}},"About me!"),a?i.a.createElement("p",null,"I am a 24 year old Red River college graduate born and raised in Winnipeg Manitoba. I have tons of hobbies that I am passionate about. One of my biggest interests would have to be music. I have always been someone who will try to learn something by themselves through trial and error. At the age of 15 I started to learn how to play guitar to get girls . . . well that didn\u2019t work but I still play guitar to this day! I have been recently learning more about musical theory to understand why the things I play work. I believe understanding why and how things work are essential to becoming great anything you want to pursue. Of course, music isn\u2019t my only hobby. I am a huge fan of cooking and trying to make anything I cook taste amazing. One of my favorite books on the topic of cooking is \u201cSalt, Fat, Acid, Heat\u201d Written by Samin Nosrat. Samin teaches you how to cook with these four elements to transform any dish from okay to delicious! I have explored new foods and recipes because of this book which I am very grateful for as I love to try new things. A new thing I tried last year was try joining a Salsa dance team. I was lucky enough to be taught by the world champion bachata dancers Harold Rancano and Regan Hirose. After training for months our team ended up doing a live dance performance for a crowd of over 300 people! This was a huge accomplishment for me considering two years prior I didn\u2019t know how to dance at all. This helped me realize that anything is possible with enough determination, effort, and practice. I try to remember this whenever I learn anything new. I\u2019ve also come to realize through in life that failures along the way are not anything to be ashamed of but rather things to learn from. In the future I am going to discover more passions, learn new thing, and fail along the way. I hope some of you reading this will join me for the ride!"):i.a.createElement("p",null,"I am a 24 year old Red River college graduate born and raised in Winnipeg Manitoba. I have tons of hobbies that I am passionate about. One of my biggest interests would have to be music. I have always been someone who will try to learn something by themselves through trial and error. At the age of 15 I started to learn how to play guitar to get girls . . ."),i.a.createElement(P.a,{style:{display:"flex",alignItems:"center",color:"#FFEB3B",width:"100%"},onClick:function(){r(!a)},className:"Primary"},"Show ",c))),i.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",paddingLeft:"40px",paddingTop:u.large?"40px":""}},i.a.createElement("h1",{style:{fontSize:"38px",color:"#fff"}},"Courses I've completed!"),i.a.createElement(q,null),i.a.createElement("br",null)))))},V=a(13),X=a.n(V),Y=a(37),Z=X.a.mark($);function $(){return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,{tiny:Object(Y.useMedia)({maxWidth:480}),extraSmall:Object(Y.useMedia)({maxWidth:600}),small:Object(Y.useMedia)({maxWidth:768}),medium:Object(Y.useMedia)({maxWidth:900}),large:Object(Y.useMedia)({maxWidth:1024}),extraLarge:Object(Y.useMedia)({maxWidth:1199}),massive:Object(Y.useMedia)({minWidth:1200})};case 2:case"end":return e.stop()}}),Z)}var ee=a(134),te=a.n(ee),ae=a(135),ne=[{id:1,link:"mailto:mackenziechoy@gmail.com",image:a.n(ae).a},{id:2,link:"https://github.com/mchoy30",image:te.a}],oe=function(e){var t=e.SocialProfile,a=t.link,n=t.image;return i.a.createElement("span",null,i.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{src:n,alt:"Social Profile",style:{width:30,height:30,margin:8}})))},ie=function(){return i.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",height:"50px",width:"100%",position:"fixed",bottom:"0"}},ne.map((function(e){return i.a.createElement(oe,{key:e.id,SocialProfile:e})})),i.a.createElement("h3",{style:{fontFamily:"Segoe UI"}},"Connect with me!"))};l.a.render(i.a.createElement((function(){var e=$(),t=Object(n.a)(e,1)[0];return i.a.createElement(p,{value:t},i.a.createElement(g.a,{basename:"/",history:i.a},i.a.createElement(w,null),i.a.createElement("div",{style:{top:"50px",backgroundColor:"#03A9F4",width:"100%"}},i.a.createElement(B.c,null,i.a.createElement(B.a,{exact:!0,path:"/",render:function(){return i.a.createElement(K,null)}}),i.a.createElement(B.a,{path:"/resume",render:function(){return i.a.createElement(R,null)}}),i.a.createElement(B.a,{path:"/projects",render:function(){return i.a.createElement(f,null)}})),i.a.createElement(ie,null))))}),null),document.getElementById("root"))},52:function(e,t){function a(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id=52},70:function(e,t,a){}},[[147,1,2]]]);
//# sourceMappingURL=main.ae22a779.chunk.js.map