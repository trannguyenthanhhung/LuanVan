(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{157:function(e,t,n){"use strict";n.r(t);var a=n(2),o=n.n(a),r=n(25),c=n.n(r),i=(n(64),n(45)),l=n(46),s=n(51),u=n(47),h=n(52),m=(n(66),n(181)),d=n(156),f=n(177),p=n(179),g=n(178),w=n(171),b=n(175),E=n(172),v=n(48),x=n.n(v),y=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={input:"",data:[],isShown:!1,content:{},token:[]},n.change=function(e){n.setState({input:e.target.value})},n.submit=function(e){e.preventDefault();var t=n.state.input;fetch("http://localhost:5500/?query=".concat(t)).then(function(e){return e.json()}).then(function(e){n.setState({data:e.data,token:e.token})}).catch(function(e){return console.log(e)})},n.showContent=function(e){fetch("http://localhost:5500/content?file=".concat(e)).then(function(e){return e.json()}).then(function(t){var a=t.data,o={value:e,data:a};n.setState({content:o,isShown:!0})}).catch(function(e){return console.log(e)})},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.input,a=t.data,r=t.isShown,c=t.content,i=t.token,l=i&&i.join("|").replace(/['"]+/g,"/");return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"App"},o.a.createElement("h1",{"data-shadow":"Mr.Lazy"},"Mr.Lazy"),o.a.createElement("div",{style:{marginTop:25}},o.a.createElement("form",{onSubmit:this.submit},o.a.createElement(m.a,{onChange:this.change,value:n,height:55,placeholder:"Nh\u1eadp t\u1eeb t\xecm ki\u1ebfm...",style:{fontSize:16,boxShadow:"0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08)"},width:"100%"})),o.a.createElement("span",{style:{position:"absolute",top:15,right:20}},"C\xf3 ",a.length," k\u1ebft qu\u1ea3")),o.a.createElement(d.a,{style:{borderRadius:2,margin:"25px 0",backgroundColor:"#ffffff",boxShadow:"0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08)"}},o.a.createElement(f.a.Body,{height:240},a.map(function(t,n){return o.a.createElement(f.a.Row,{key:n,isSelectable:!0,onSelect:function(){return e.showContent(t.file)}},o.a.createElement(f.a.Cell,null,o.a.createElement(p.a,{icon:"sim-card",color:"success",marginRight:10}),t.file),o.a.createElement(f.a.TextCell,{isNumber:!0},t.cosine.toFixed(2)))})))),c&&o.a.createElement(g.a,{isShown:r,onCloseComplete:function(){return e.setState({isShown:!1})},containerProps:{display:"flex",flex:"1",flexDirection:"column"}},o.a.createElement(d.a,{zIndex:1,flexShrink:0,elevation:0,backgroundColor:"white"},o.a.createElement(d.a,{padding:16},o.a.createElement(w.a,{size:600},c.value))),o.a.createElement(d.a,{flex:"1",overflowY:"scroll",background:"tint1",padding:16},o.a.createElement(b.a,{backgroundColor:"white",elevation:0,display:"flex",alignItems:"center",justifyContent:"center"},o.a.createElement(E.a,{style:{whiteSpace:"pre-line",padding:20}},o.a.createElement(x.a,{search:new RegExp(l)},c.data))))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},59:function(e,t,n){e.exports=n(157)},64:function(e,t,n){},66:function(e,t,n){}},[[59,2,1]]]);
//# sourceMappingURL=main.bffee3d0.chunk.js.map