(this["webpackJsonpsanchez-jennifer"]=this["webpackJsonpsanchez-jennifer"]||[]).push([[0],{37:function(e,t,c){},39:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){"use strict";c.r(t);var a=c(2),s=c.n(a),n=c(29),r=c.n(n),i=(c(37),c(4)),l=c(5),o=(c(38),c(39),c(18)),d=c.n(o),j=c(1),b=function(){return Object(a.useEffect)((function(){var e=document.querySelectorAll(".carousel.carousel-slider");d.a.Carousel.init(e,{indicators:!0,fullWidth:!0,duration:150}),setTimeout((function(){d.a.Carousel.getInstance(e[0]).next()}),4e3)}),[]),Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"carousel carousel-slider",children:[Object(j.jsx)(i.c,{className:"carousel-item",to:"/productos",children:Object(j.jsx)("img",{src:"/assets/image/portada.jpg",alt:"MarketBA"})}),Object(j.jsx)(i.c,{className:"carousel-item",to:"/productos",children:Object(j.jsx)("img",{src:"/assets/image/portada2.jpg",alt:"MarketBA"})})]}),Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("h1",{className:"categoriaTitle",children:"Ofertas Especiales"})})})]})},m=c(12),u=c(7),O=c(16),h=O.a.initializeApp({apiKey:"AIzaSyCVhTcQ9sFFeuKSLrJZiVSHL8fREIqs63U",authDomain:"react-jennifer.firebaseapp.com",projectId:"react-jennifer",storageBucket:"react-jennifer.appspot.com",messagingSenderId:"262726968128",appId:"1:262726968128:web:cb5036082bafd8331190a5"});function x(){return O.a.firestore(h)}var f=c(13),p=function(e){var t=e.initial,c=e.stock,s=e.onAdd,n=Object(a.useState)(t),r=Object(u.a)(n,2),i=r[0],l=r[1];return Object(j.jsxs)("div",{className:"count",children:[Object(j.jsxs)("div",{className:"quantity-input",children:[Object(j.jsx)("button",{className:"minus",onClick:function(){i>1&&l(i-1)},children:"-"}),Object(j.jsx)("span",{className:"number-input",children:i}),Object(j.jsx)("span",{className:"plus",onClick:function(){i<c&&l(i+1)},children:"+"})]}),Object(j.jsx)("div",{className:"agregarCarrito",children:Object(j.jsx)("button",{className:"addtocart",onClick:function(){return s(i)},children:Object(j.jsxs)("div",{className:"pretext",children:[Object(j.jsx)("i",{className:"material-icons",children:"shopping_cart"})," AGREGAR"]})})})]})},v=c(32),N=Object(a.createContext)(),g=function(){return Object(a.useContext)(N)},w=function(e){var t=e.children,c=Object(a.useState)([0]),s=Object(u.a)(c,2),n=s[0],r=s[1],i=Object(a.useState)(""),l=Object(u.a)(i,2),o=l[0],d=l[1],b=Object(a.useState)((function(){return JSON.parse(localStorage.getItem("cart"))||[]})),m=Object(u.a)(b,2),O=m[0],h=m[1],x=Object(a.useState)({nombre:"",telefono:"",email:""}),f=Object(u.a)(x,2),p=f[0],g=f[1],w=Object(a.useState)({}),y=Object(u.a)(w,2),S=y[0],C=y[1],k=Object(a.useState)(),I=Object(u.a)(k,2),A=I[0],D=I[1];return Object(j.jsx)(N.Provider,{value:{cartList:O,cantidadUnidades:n,dataOrder:S,formData:p,detalleOrden:A,message:o,setMessage:d,itemsCart:function(){return O.reduce((function(e,t){return e+t.cantidad}),0)},guardarDetalle:D,setFormData:g,setOrderData:C,addItems:function(e){var t=O.find((function(t){return t.id===e.id}));if(t){var c=t.cantidad+e.cantidad;if(e.stock>c){r(t.cantidad=c),h(O);var a=JSON.stringify(O);localStorage.setItem("cart",a)}else d("No se ha podido agregar al carrito. Cantidades disponibles en stock: "+e.stock),setTimeout((function(){d("")}),8e3)}else{var s=[].concat(Object(v.a)(O),[e]);h(s);var n=JSON.stringify(s);localStorage.setItem("cart",n)}},deleteItem:function(e){var t=O.filter((function(t){return t.id!==e}));h(t);var c=JSON.stringify(t);localStorage.setItem("cart",c)},deleteAll:function(){h([]),localStorage.removeItem("cart")},formatNumber:function(e){return Object(j.jsx)("span",{children:new Intl.NumberFormat("ES-AR",{style:"currency",currency:"ARS"}).format(e)})},precioTotal:function(){return O.reduce((function(e,t){return e+t.cantidad*t.price}),0)}},children:t})},y=(c(48),function(e){var t=e.prod,c=g(),s=c.message,n=c.addItems,r=c.formatNumber,l=Object(a.useState)("input"),o=Object(u.a)(l,2),d=o[0],b=o[1];return Object(j.jsx)("div",{className:"col s12 m12 l12 flex",children:Object(j.jsxs)("div",{className:"card",children:[Object(j.jsxs)("div",{className:"card-image waves-effect waves-block waves-light",children:[Object(j.jsx)("div",{className:"col s12 m6 l6",children:Object(j.jsx)("div",{children:Object(j.jsx)("img",{alt:t.nombre,className:"imgDetail",src:t.urlImagen})})}),Object(j.jsxs)("div",{className:"col s12 m5 l5 detalleProducto",children:[Object(j.jsx)("h5",{className:"producto",children:t.nombre}),Object(j.jsx)("span",{className:"price",children:r(t.price)}),"input"===d?Object(j.jsx)(p,{initial:1,stock:t.stock,onAdd:function(e){n(Object(m.a)(Object(m.a)({},t),{},{cantidad:e})),b("button")}}):Object(j.jsx)(i.b,{to:"/cart",className:"pretext comprar",children:"Ir a Carrito"}),Object(j.jsxs)("span",{className:"stockDisponible",children:["Stock Disponible: ",t.stock]}),Object(j.jsx)("p",{className:"error",children:s})]})]}),Object(j.jsxs)("div",{className:"m-20",children:[Object(j.jsx)("h5",{children:"Descripci\xf3n"}),t.descripcion]})]})},t.id)}),S=function(){return Object(j.jsxs)("div",{className:"spinner",children:[Object(j.jsx)("div",{className:"bounce1"}),Object(j.jsx)("div",{className:"bounce2"}),Object(j.jsx)("div",{className:"bounce3"})]})},C=function(){var e=Object(f.useState)({}),t=Object(u.a)(e,2),c=t[0],a=t[1],s=Object(f.useState)(!0),n=Object(u.a)(s,2),r=n[0],i=n[1],o=Object(l.h)().id;return Object(f.useEffect)((function(){var e=x().collection("items");o&&e.doc(o).get().then((function(e){a(Object(m.a)({id:e.id},e.data()))})).catch((function(e){return console.log(e)})).finally((function(){return i(!1)}))}),[o]),r?Object(j.jsx)(S,{}):Object(j.jsx)("div",{className:"full",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"row",children:Object(j.jsx)(y,{prod:c})})})})},k=function(e){var t=g(),c=t.formatNumber,a=t.deleteItem,s=e.prod;return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)("img",{src:s.urlImagen,className:"cart",alt:s.nombre})}),Object(j.jsx)("td",{children:Object(j.jsxs)(i.b,{to:"/item/".concat(s.id),children:[Object(j.jsx)("p",{children:"".concat(s.nombre)}),Object(j.jsxs)("p",{children:["x ",s.cantidad]})]})}),Object(j.jsx)("td",{children:Object(j.jsx)("p",{children:c(s.price)})}),Object(j.jsx)("td",{children:Object(j.jsx)("p",{className:"strong",children:c(s.cantidad*s.price)})}),Object(j.jsx)("td",{className:"borrar",children:Object(j.jsx)("button",{onClick:function(){return a(s.id)},children:Object(j.jsx)("i",{className:"tiny material-icons",children:"delete"})})})]})},I=(c(49),c(28),c(21)),A=function(e){var t=e.cambio,c=e.envio,a=g().formData;return Object(j.jsxs)("form",{className:"formulario",onChange:t,onSubmit:c,children:[Object(j.jsx)("h4",{children:"Tus Datos"}),Object(j.jsxs)("div",{className:"input-field",children:[Object(j.jsx)("input",{id:"first_name",type:"text",name:"nombre",className:"validate",required:!0,defaultValue:a.nombre}),Object(j.jsx)("label",{htmlFor:"first_name","data-error":"wrong","data-success":"right",children:"Nombre"})]}),Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"input-field col s12",children:[Object(j.jsx)("input",{id:"phone",type:"tel",required:!0,name:"telefono",className:"validate",defaultValue:a.telefono}),Object(j.jsx)("label",{htmlFor:"phone","data-error":"wrong","data-success":"right",children:"Telefono"})]})}),Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"input-field col s12",children:[Object(j.jsx)("input",{id:"email",type:"email",required:!0,name:"email",className:"validate",defaultValue:a.email}),Object(j.jsx)("label",{htmlFor:"email","data-error":"wrong","data-success":"right",children:"Email"})]})}),Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"input-field col s12",children:[Object(j.jsx)("input",{id:"emailRepetir",type:"email",required:!0,className:"validate",name:"email_validate"}),Object(j.jsx)("label",{htmlFor:"emailRepetir","data-error":"wrong","data-success":"right",children:"Confirmar Email"})]})}),Object(j.jsxs)("button",{className:"btn waves-effect waves-light",disabled:""===a.nombre||""===a.telefono||a.email!==a.email_validate,children:["Confirmar ",Object(j.jsx)("i",{className:"material-icons right",children:"send"})]})]})},D=function(){var e=g(),t=e.formData,c=e.cartList,a=e.deleteAll,s=e.precioTotal,n=e.setFormData,r=e.setOrderData;return Object(j.jsx)("div",{children:0===c.length&&""!==t.nombre?Object(j.jsx)(l.a,{to:{pathname:"/sucess"}}):c.length>0?Object(j.jsx)(A,{cambio:function(e){n(Object(m.a)(Object(m.a)({},t),{},Object(I.a)({},e.target.name,e.target.value)))},envio:function(e){e.preventDefault();var i={};i.date=O.a.firestore.Timestamp.fromDate(new Date),i.buyer=t,i.total=s(),i.items=c.map((function(e){var t=e.id,c=e.nombre,a=e.cantidad,s=e.urlImagen;return{id:t,nombre:c,price:e.price,subtotal:e.price*e.cantidad,cantidad:a,urlImagen:s}}));var l=x();l.collection("orders").add(i).then((function(e){return r(Object(m.a)({id:e.id},e.data))})).catch((function(e){return console.log(e)})).finally((function(){return n({nombre:"",telefono:"",email:""})}),a());var o=l.collection("items").where(O.a.firestore.FieldPath.documentId(),"in",c.map((function(e){return e.id}))),d=l.batch();o.get().then((function(e){e.docs.forEach((function(e){d.update(e.ref,{stock:e.data().stock-c.find((function(t){return t.id===e.id})).cantidad})})),d.commit().catch((function(e){return console.log(e)}))}))}}):""})},T=function(){var e=g(),t=e.cartList,c=e.deleteAll,a=e.formatNumber,s=e.precioTotal;return Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"col s12",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col s12 l8",children:t.length?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{children:"Carrito"}),Object(j.jsx)("table",{className:"responsive-table",children:Object(j.jsx)("tbody",{children:t.map((function(e){return Object(j.jsx)(k,{prod:e},e.id)}))})}),Object(j.jsxs)("h5",{className:"total",children:["Total:",a(s())]}),Object(j.jsx)("button",{onClick:function(){return c()},children:"Vaciar Carrito"})]}):Object(j.jsxs)("div",{className:"container full",children:[Object(j.jsx)("h3",{children:"Tu carrito est\xe1 vac\xedo"}),Object(j.jsx)("h5",{children:"\xbfNo sab\xe9s qu\xe9 comprar? \xa1Miles de productos te esperan !"}),Object(j.jsx)(i.b,{to:"/productos",className:"waves-effect waves-light btn",children:"Ir a Productos"})]})}),Object(j.jsx)("div",{className:"col s12 m12 l4",children:Object(j.jsx)(D,{})})]})})})},F=function(e){var t=e.prod,c=g().formatNumber;return Object(j.jsx)(i.b,{to:"/item/".concat(t.id),children:Object(j.jsx)("div",{className:"col s12 m6 l4",children:Object(j.jsxs)("div",{className:"card hoverable",children:[Object(j.jsx)("div",{className:"card-image waves-effect waves-block waves-light",children:Object(j.jsx)("img",{src:t.urlImagen,alt:t.nombre})}),Object(j.jsxs)("div",{className:"card-content",children:[Object(j.jsx)("span",{children:"".concat(t.nombre.slice(0,30)+"...")}),Object(j.jsx)("p",{className:"mayuscula prod-categoria",children:"".concat(t.categoria)}),Object(j.jsx)("div",{className:"prod-price",children:c(t.price)})]})]})},t.id)})},E=Object(a.memo)((function(e){return e.prod.map((function(e){return Object(j.jsx)(F,{prod:e},e.id)}))})),q=(c(51),function(){var e=Object(f.useState)([]),t=Object(u.a)(e,2),c=t[0],a=t[1],s=Object(f.useState)(!0),n=Object(u.a)(s,2),r=n[0],i=n[1],o=Object(l.h)().id,d=Object(l.g)();return Object(f.useEffect)((function(){var e=!0,t=x().collection("items");return o?t=t.where("categoria","==",o):"/"===d.pathname&&(t=t.where("ofertaEspecial","==",!0)),t.get().then((function(t){e&&a(t.docs.map((function(e){return Object(m.a)({id:e.id},e.data())})))})).catch((function(e){return console.log(e)})).finally((function(){return i(!1)})),function(){e=!1}}),[o,d]),r?Object(j.jsx)(S,{}):Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"row",children:[o?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{className:"categoriaTitle",children:o}),Object(j.jsxs)("p",{className:"resultadosCantidad",children:[c.length," Resultados"]})]}):"",Object(j.jsx)(E,{prod:c},c.id)]})})}),B=(c(52),function(){var e=g(),t=e.dataOrder,c=e.detalleOrden,s=e.guardarDetalle,n=e.formatNumber;return Object(a.useEffect)((function(){x().collection("orders").doc(t.id).get().then((function(e){return s(e.data())})).catch((function(e){return console.log(e)}))}),[t,s]),Object(j.jsx)("div",{className:"row",children:c?Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{className:"col s12",children:[Object(j.jsxs)("h3",{className:"orden",children:["Orden: #",t.id]}),Object(j.jsx)("hr",{}),Object(j.jsxs)("h4",{children:["\xa1Muchas gracias ",c.buyer.nombre,"!"]}),Object(j.jsx)("h5",{children:"Datos de contacto"}),Object(j.jsx)("p",{children:c.buyer.email}),Object(j.jsx)("p",{children:c.buyer.telefono}),Object(j.jsx)("br",{}),Object(j.jsxs)("p",{className:"totalSucess",children:["Total: ",n(c.total)]})]}),Object(j.jsxs)("div",{className:"col s12",children:[Object(j.jsx)("h4",{children:"Detalle de orden"}),Object(j.jsx)("table",{className:"sucess responsive-table",children:Object(j.jsx)("tbody",{children:c.items.map((function(e){return Object(j.jsx)(k,{prod:e},e.id)}))})})]})]}):Object(j.jsx)(S,{})})}),R=c(27),M=function(e){var t=e.nombre;return Object(j.jsx)("li",{className:"tab",children:Object(j.jsx)(i.c,{to:"/categoria/"+t,className:"mayuscula",children:t},t)})},J=function(e){var t=e.categorias;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"nav-wrapper container",children:Object(j.jsxs)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down mayuscula",children:[Object(j.jsx)("li",{children:Object(j.jsx)(i.c,{exact:!0,to:"/",children:"Home"})}),Object(j.jsx)("li",{children:Object(j.jsx)(i.c,{exact:!0,to:"/productos",children:"Productos"})})]})}),Object(j.jsx)("div",{className:"nav-content  hide-on-med-and-down ",children:Object(j.jsx)("ul",{className:"tabs tabs-transparent",children:t.map((function(e){return Object(j.jsx)(M,{nombre:e},e)}))})})]})},V=function(e){var t=e.categorias;return Object(a.useEffect)((function(){var e=document.querySelectorAll(".sidenav");d.a.Sidenav.init(e,{})}),[]),Object(j.jsxs)("ul",{className:"sidenav",id:"mobile-demo",children:[Object(j.jsx)("li",{className:"sidenav-header red lighten-2",children:Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col s4",children:[Object(j.jsx)("img",{alt:"logo",src:"https://img.icons8.com/fluency/48/000000/tesla-supercharger-pin.png"}),Object(j.jsx)("span",{className:"white-text text-darken-2",children:"Bienvenido"})]})})}),Object(j.jsx)("li",{children:Object(j.jsx)(i.c,{className:"mayuscula",exact:!0,to:"/",children:"Home"})}),Object(j.jsx)("li",{children:Object(j.jsx)(i.c,{className:"mayuscula",exact:!0,to:"/productos",children:"Todos"})}),t.map((function(e){return Object(j.jsx)(M,{nombre:e},e)})),")"]})},L=function(){var e=g().itemsCart;return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"iconCantidad",children:[Object(j.jsx)("div",{className:e()>0?"mostrar":"ocultar",children:Object(j.jsx)("span",{className:"widgetCantidad",children:e()})}),Object(j.jsx)("i",{className:"large material-icons",children:"shopping_cart"})]})})},P=(c(55),function(){var e=["notebook","celulares","televisores","tablet"];return Object(j.jsx)("nav",{className:"nav-extended",children:Object(j.jsxs)("div",{className:"nav-wrapper container",children:[Object(j.jsx)(i.c,{to:"/",className:"brand-logo",children:Object(j.jsx)("span",{className:"hide-on-small-only",children:Object(j.jsx)("span",{className:"led",children:" MARKET BA"})})}),Object(j.jsx)(i.c,{to:"#","data-target":"mobile-demo",className:"sidenav-trigger",children:Object(j.jsx)("i",{className:"material-icons",children:"menu"})}),Object(j.jsx)(i.c,{to:"/cart",className:"right",children:Object(j.jsx)(L,{})}),Object(j.jsx)(R.BrowserView,{children:Object(j.jsx)(J,{categorias:e})}),Object(j.jsx)(R.MobileView,{children:Object(j.jsx)(V,{categorias:e})})]})})});function X(){return Object(j.jsxs)("footer",{className:"page-footer grey",children:[Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsxs)("div",{className:"col l6 s12",children:[Object(j.jsx)("h5",{className:"white-text",children:"MARKET BA"}),Object(j.jsx)("p",{className:"grey-text text-lighten-4",children:"Somos un equipo de estudiantes que trabajan en este proyecto como si fuera nuestro trabajo de tiempo completo."})]}),Object(j.jsxs)("div",{className:"col l6 s12",children:[Object(j.jsx)("h5",{className:"white-text",children:"CONTACTO"}),Object(j.jsxs)("p",{children:[Object(j.jsx)("i",{className:"tiny material-icons",children:"local_phone"})," 11-XXX-XXXX"]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("i",{className:"tiny material-icons",children:"email"})," contacto@marketba.ar"]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("i",{className:"tiny material-icons",children:"place"})," Av. Cantilo 000 - Buenos Aires "]})]})]})}),Object(j.jsx)("div",{className:"footer-copyright",children:Object(j.jsxs)("div",{className:"container",children:["Hecho por ",Object(j.jsx)("span",{className:"blue-text text-lighten-3",children:"Jennifer"})]})})]})}var _=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(w,{children:Object(j.jsxs)(i.a,{basename:"/react-jennifer",children:[Object(j.jsx)(P,{}),Object(j.jsxs)(l.d,{children:[Object(j.jsxs)(l.b,{exact:!0,path:"/",children:[Object(j.jsx)(b,{}),Object(j.jsx)(q,{})]}),Object(j.jsx)(l.b,{path:"/productos",component:q}),Object(j.jsx)(l.b,{path:"/categoria/:id",component:q}),Object(j.jsx)(l.b,{path:"/item/:id",component:C}),Object(j.jsx)(l.b,{path:"/cart",component:T}),Object(j.jsx)(l.b,{path:"/sucess",component:B})]}),Object(j.jsx)(X,{})]})})})},z=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,57)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),a(e),s(e),n(e),r(e)}))};r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(_,{})}),document.getElementById("root")),z()}},[[56,1,2]]]);
//# sourceMappingURL=main.e7509f4d.chunk.js.map