(this["webpackJsonpns4-itemizer"]=this["webpackJsonpns4-itemizer"]||[]).push([[0],{32:function(n,e,t){"use strict";t.r(e);var r=t(1),a=t(15),o=t.n(a),i=t(19),l=t(2),c=t(9),s=t(7),d=t(20),u=t(0),b=t(3);function f(){var n=Object(l.a)(["\n  padding: 5px;\n\tbackground-color: #20232A;\n\n\twidth: 273px;\n\theight: 30px;\n\n\tbox-shadow: 0 0 3px #20232A, 0 0 10px black inset;\n\tborder-radius: 10px;\n\tborder: 2px solid #20232A;\n\n  font-size: 0.9rem;\n\ttext-align: center;\n\n  color: darkgray;\n\n  ::placeholder {\n    color: #0D0D0D;\n  }\n\n  ::selection {\n    background-color: darkgray;\n    color: #0D0D0D;\n  }\n\n  :focus {\n    outline: none;\n    box-shadow: 0 0 3px #20232A, 0 0 7px black inset;\n  }\n\n  /* :focus::placeholder {\n\t  color: #20232A;\n  } */\n"]);return f=function(){return n},n}function h(){var n=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n\n  padding-top: 3vh;\n  padding-bottom: 3vh;\n  border-bottom: 2px solid #20232A;\n\n  // allows search menu to be sticky\n  position: sticky;\n  top: 0;\n  z-index: 1;\n  background-color: #0D1117;\n"]);return h=function(){return n},n}function p(n){var e=n.query,t=n.onQueryChange;return Object(r.jsx)(x,{id:"query",children:Object(r.jsx)(m,{name:"text",value:e.text,onChange:t,placeholder:"search",spellCheck:"false",autoComplete:"off"})})}var x=b.a.div(h()),m=b.a.input(f());function v(){var n=Object(l.a)(["\n\tmargin: 2.5%;\n  padding: 5%;\n\n  // hack to make info-box not exceed parent dimensions; 'box-sizing: border-box' doesn't work; may mess with card info styling if there's a lot of content to display\n  height: 65%;\n\n  display: flex;\n  flex-direction: column;\n\n  // general styling\n  background-color: #20232A;\n  box-shadow: 0 0 3px #20232A, 0 0 10px black inset;\n\tborder-radius: 10px;\n\tborder: 2px solid #20232A;\n"]);return v=function(){return n},n}function g(){var n=Object(l.a)(["\n  left: 0;\n  top: 50%;\n  transform: translate(-50%, -50%);\n"]);return g=function(){return n},n}function j(){var n=Object(l.a)(["\n  // move level to upper-right of title space\n  position: absolute;\n  // force text to have it's own dynamic area\n  padding: 2%;\n  padding-bottom: 1%;\n\n  // will change with other styling changes often\n  left: 100%;\n  transform: translate(-50%, -50%);\n\n  // centers level to middle of line; px scales equally porportional to level font size\n  min-width: 16.5px;\n  min-height: 16.5px;\n  text-align: center;\n\n  font-size: 0.82rem;\n\n  // general styling\n  background-color: #20232A;\n  box-shadow: 0 0 3px #20232A, 0 0 5px black inset;\n\tborder-radius: 10px;\n\tborder: 2px solid #20232A;\n"]);return j=function(){return n},n}function y(){var n=Object(l.a)(["\n  // force text area to have it's own dynamic area\n  display: inline;\n  padding: 2% 5%;\n\n  background-color: #20232A;\n\n  font-size: 0.66rem;\n\n  // general styling\n  background-color: #20232A;\n  box-shadow: 0 0 3px #20232A, 0 0 4px black inset;\n\tborder-radius: 9px;\n\tborder: 2px solid #20232A;\n"]);return y=function(){return n},n}function w(){var n=Object(l.a)(["\n  // move base to bottom of title space\n  position: absolute;\n  left: 50%;\n  // will change depending on base font size\n  transform: translate(-50%, 300%);\n\n  // centers base to middle of line\n  min-width: 100%;\n  text-align: center;\n"]);return w=function(){return n},n}function O(){var n=Object(l.a)(["\n\t// allows single-line titles to be properly vertically-spaced\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%);\n\n\t// centers title to middle of line\n  min-width: 90%;\n\ttext-align: center;\n"]);return O=function(){return n},n}function k(){var n=Object(l.a)(["\n\tmargin: 2%;\n  \n  // allow all card properties to be displayed over the card name\n  overflow: inset hidden;\n  \n  // required for card name to display properly due to text transforms\n  position: relative;\n\n  // force all card names to consume 2 lines of text\n\theight: 48px;\n\n  // general styling\n  background-color: #20232A;\n  box-shadow: 0 0 3px #20232A, 0 0 10px black inset;\n\tborder-radius: 10px;\n\tborder: 2px solid #20232A;\n"]);return k=function(){return n},n}function A(){var n=Object(l.a)(["\n  margin: 1.5vh;\n\t\n  // size of each card\n\twidth: 185px;\n\theight: 273px;\n\n\tcolor: darkgray; // placeholder\n"]);return A=function(){return n},n}function S(){var n=Object(l.a)(["\n  padding: 2vh;\n\n  // have cards display uniformly & neatly\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n"]);return S=function(){return n},n}var z=[];function C(n){var e=n.query;return z=E.filter((function(n){return n.name.toLowerCase().includes(e.text.toLowerCase())})),Object(r.jsx)(D,{id:"cards",children:z.map((function(n){return Object(r.jsxs)(G,{children:[Object(r.jsxs)(q,{children:[Object(r.jsx)(B,{children:n.name}),Object(r.jsx)(T,{children:Object(r.jsx)(F,{children:n.base})}),Object(r.jsx)(Q,{children:n.level}),Object(r.jsxs)(H,{children:["+",n.enhancement]})]}),Object(r.jsxs)(J,{children:[Object(r.jsxs)("h3",{children:["Keen: ",n.keen?"True":"False"]}),Object(r.jsx)("h3",{children:"Damage:"}),Object(r.jsxs)("h3",{children:["~",n.phys]}),Object(r.jsxs)("h3",{children:["~",n.ele]})]})]},n.id)}))})}var D=b.a.div(S()),G=b.a.div(A()),q=b.a.div(k()),B=b.a.h1(O()),T=b.a.div(w()),F=b.a.h2(y()),Q=b.a.h3(j()),H=Object(b.a)(Q)(g()),J=b.a.div(v()),L=0,E=[{name:"Justice",level:20,base:"Light Hammer",enhancement:4,keen:!0,phys:"2d8 Bludgeoning",ele:"1d8 Positive"},{name:"Voidmind Blade",level:35,base:"Shortsword",enhancement:7},{name:"Crafted Enchanted Two-bladed Sword",level:25,base:"Two-Bladed Sword",enhancement:5},{name:"Crafted Silvery Scimitar",level:20,base:"Scimitar"},{name:"Frozen Cleaver",level:20,base:"Scimitar"},{name:"Halfling's Gift",level:5,base:"Shortbow"},{name:"Feon's Staff of the Forest",level:16,base:"Quarterstaff"},{name:"Staff of the Crashing Surf",level:25,base:"Quarterstaff"},{name:"Githyanki Double Silver Sword",level:40,base:"Two-Bladed Sword",enhancement:7},{name:"Mighty Talon",level:40,base:"Greatsword"},{name:"Githyanki Silver Sword",level:40,base:"Greatsword"},{name:"House Dourden's Will",level:13,base:"Greatsword"},{name:"Alzaara Guardian Greatsword",level:25,base:"Greatsword"}].map((function(n){return L+=1,Object(s.a)({id:L},n)}));function I(){var n=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return I=function(){return n},n}function K(){var n=Object(u.useState)({text:""}),e=Object(d.a)(n,2),t=e[0],a=e[1];return Object(r.jsxs)(M,{id:"app",children:[Object(r.jsx)(p,{query:t,onQueryChange:function(n){a(Object(s.a)(Object(s.a)({},t),{},Object(c.a)({},n.target.name,n.target.value)))}}),Object(r.jsx)(C,{query:t})]})}var M=b.a.div(I());o.a.render(Object(r.jsx)(i.a,{children:Object(r.jsx)(K,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.f794b168.chunk.js.map