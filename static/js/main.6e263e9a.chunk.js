(this.webpackJsonptamuhack2020=this.webpackJsonptamuhack2020||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},,,function(e,t,a){e.exports=a.p+"static/media/hamburger-menu.d8325303.svg"},function(e,t,a){e.exports=a.p+"static/media/close.9fd4c592.svg"},function(e,t,a){e.exports=a(25)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),c=a.n(l),i=(a(16),a(6)),o=a.n(i),s=(a(17),a(1)),u=a(2),m=a(4),p=a(3),h=a(5),d=(a(18),a(9)),E=a.n(d),f=a(10),g=a.n(f),b=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={collapsed:!0},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"navCollapse",value:function(){this.setState((function(){return{collapsed:!0}}))}},{key:"navOpen",value:function(){this.setState((function(){return{collapsed:!1}}))}},{key:"render",value:function(){var e=this,t=this.state.collapsed?" collapsed":"";return r.a.createElement("div",{className:"nav"+t},r.a.createElement("aside",null,r.a.createElement("a",{href:"#flight-info"},"Flight Info"),r.a.createElement("a",{href:"#origin-airport"},"Origin Airport"),r.a.createElement("a",{href:"#check-in"},"Check-In / Security"),r.a.createElement("a",{href:"#gate-info"},"Gate Info"),r.a.createElement("a",{href:"#destination-airport"},"Destination Airport"),r.a.createElement("button",{style:{bottom:"0"}},"Start New")),r.a.createElement("span",{className:"navbutton"+t},r.a.createElement("img",{src:E.a,width:"10%",onClick:function(){return e.navOpen()}}),r.a.createElement("img",{src:g.a,width:"10%",onClick:function(){return e.navCollapse()}})))}}]),t}(n.Component),v={position:"fixed",background:"gray",zIndex:"1",textAlign:"left",padding:"7px",height:"5vh",width:"100%",float:"left"},O=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:v},r.a.createElement("span",{style:{fontSize:"150%",verticalAlign:"top",marginLeft:"15%"}},"Depart ",this.props.departure),r.a.createElement("span",{style:{float:"right"}},this.props.flightNumber))}}]),t}(n.Component),j=(a(19),function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"landing-page",className:"card"},r.a.createElement("img",{src:o.a,className:"App-logo"}),r.a.createElement("div",null,"Flight Number",r.a.createElement("br",null),r.a.createElement("input",null),r.a.createElement("button",null,"Search")),r.a.createElement("p",null,"TERMS OF SERVICE",r.a.createElement("br",null),"WE NEED YOUR FLIGHT NUMBER AND LOCATION FOR ALL FEATURES TO WORK",r.a.createElement("br",null),"DO NOT SUE US FOR MISSING YOUR FLIGHT",r.a.createElement("br",null),"IT'S YOUR FAULT"))}}]),t}(n.Component)),y=(a(20),function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"flight-info",className:"card"},r.a.createElement("div",null,this.props.date),r.a.createElement("div",null,"Depart: ",this.props.departure),r.a.createElement("div",null,"Board: ",this.props.boarding),r.a.createElement("div",null,"Gate ",this.props.gate),r.a.createElement("div",null,"Arrival: ",this.props.arrival),r.a.createElement("div",null,"Baggage: ",this.props.baggage))}}]),t}(n.Component)),k=(a(21),function(e){function t(e){return Object(s.a)(this,t),Object(m.a)(this,Object(p.a)(t).call(this,e))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"check-in",className:"card"},r.a.createElement("h1",null,"Check-In and Security Checklist"),r.a.createElement("ul",{style:{textAlign:"left",listStyleType:"square"}},r.a.createElement("input",{type:"checkbox"}),"ID",r.a.createElement("br",null),r.a.createElement("ul",null,r.a.createElement("li",null,"Driver's License"),r.a.createElement("li",null,"Passport"),r.a.createElement("li",null,"Federally Issued License")),r.a.createElement("input",{type:"checkbox"}),"Boarding Pass",r.a.createElement("br",null),r.a.createElement("p",{style:{marginLeft:"40px"}},"Boarding passes are obtainable either by accessing a digital copy via your airline's app, using a self checkout qiosk in the terminal or talking to a check-in operator.")))}}]),t}(n.Component)),N=(a(22),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={going:!0},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"showGoing",value:function(){this.setState((function(){return{going:!0}}))}},{key:"showAt",value:function(){this.setState((function(){return{going:!1}}))}},{key:"render",value:function(){var e=this,t=this.state.going?"":" hidden",a=this.state.going?" hidden":"";return r.a.createElement("div",{id:"gate-info",className:"card"},r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return e.showGoing()}},"Going to Gate"),r.a.createElement("button",{onClick:function(){return e.showAt()}},"At Gate")),r.a.createElement("div",{className:"gate-going"+t},r.a.createElement("iframe",{frameBorder:"0",style:{width:"100vw",height:"80vh",border:"0"},src:"https://www.google.com/maps/embed/v1/place?q=iah&key=...",allowFullScreen:!0})),r.a.createElement("div",{className:"gate-at"+a},"Things to do:",r.a.createElement("ul",null,r.a.createElement("li",null,"a"))))}}]),t}(n.Component)),w=(a(23),function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"takeoff",className:"card"},r.a.createElement("img",{src:o.a,className:"App-logo"}),r.a.createElement("div",null,r.a.createElement("p",null,"ENJOY YOUR",r.a.createElement("br",null),"FLIGHT")))}}]),t}(n.Component)),A=(a(24),function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"thanks",className:"card"},r.a.createElement("img",{src:o.a,className:"App-logo"}),r.a.createElement("div",null,r.a.createElement("p",null,"ENJOY YOUR TRIP TO",r.a.createElement("br",null),this.props.cityname)))}}]),t}(n.Component));var C=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(b,null),r.a.createElement(O,{departure:"10:00am",flightNumber:"DL31"}),r.a.createElement(j,null),r.a.createElement(y,{date:"1/25/2020",departure:"10:00am",boarding:"9:30am",gate:"13B",arrival:"3:00pm",baggage:"41"}),r.a.createElement(k,null),r.a.createElement(N,null),r.a.createElement(w,null),r.a.createElement(A,{cityname:"Rio de Janeiro"}),r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:o.a,className:"App-logo",alt:"logo"}),r.a.createElement("p",null,"Edit ",r.a.createElement("code",null,"src/App.js")," and save to reload."),r.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[11,1,2]]]);
//# sourceMappingURL=main.6e263e9a.chunk.js.map