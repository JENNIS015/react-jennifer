(this["webpackJsonpsanchez-jennifer"]=this["webpackJsonpsanchez-jennifer"]||[]).push([[0],{36:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){},55:function(e,t,c){"use strict";c.r(t);var a=c(2),s=c.n(a),n=c(27),r=c.n(n),i=(c(36),c(4)),l=c(5),o=c(1),d=function(){return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"carousel carousel-slider",children:[Object(o.jsx)(i.c,{className:"carousel-item",to:"/productos",children:Object(o.jsx)("img",{src:"assets/image/portada.jpg",alt:"MarketBA"})}),Object(o.jsx)(i.c,{className:"carousel-item",to:"/productos",children:Object(o.jsx)("img",{src:"assets/image/portada2.jpg",alt:"MarketBA"})})]}),Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("h1",{className:"categoriaTitle",children:"Ofertas Especiales"})})})]})},j=c(12),b=c(7),m=c(15),u=m.a.initializeApp({apiKey:"AIzaSyCVhTcQ9sFFeuKSLrJZiVSHL8fREIqs63U",authDomain:"react-jennifer.firebaseapp.com",projectId:"react-jennifer",storageBucket:"react-jennifer.appspot.com",messagingSenderId:"262726968128",appId:"1:262726968128:web:cb5036082bafd8331190a5"});function O(){return m.a.firestore(u)}var h=function(e){var t=e.initial,c=e.stock,s=e.onAdd,n=Object(a.useState)(t),r=Object(b.a)(n,2),i=r[0],l=r[1];return Object(o.jsxs)("div",{className:"count",children:[Object(o.jsxs)("div",{className:"quantity-input",children:[Object(o.jsx)("button",{className:"minus",onClick:function(){i>1&&l(i-1)},children:"-"}),Object(o.jsx)("span",{className:"number-input",children:i}),Object(o.jsx)("span",{className:"plus",onClick:function(){i<c&&l(i+1)},children:"+"})]}),Object(o.jsx)("div",{className:"agregarCarrito",children:Object(o.jsx)("button",{className:"addtocart",onClick:function(){return s(i)},children:Object(o.jsxs)("div",{className:"pretext",children:[Object(o.jsx)("i",{className:"material-icons",children:"shopping_cart"})," AGREGAR"]})})})]})},x=c(31),f=Object(a.createContext)(),p=function(){return Object(a.useContext)(f)},v=function(e){var t=e.children,c=Object(a.useState)([0]),s=Object(b.a)(c,2),n=s[0],r=s[1],i=Object(a.useState)(""),l=Object(b.a)(i,2),d=l[0],j=l[1],m=Object(a.useState)((function(){return JSON.parse(localStorage.getItem("cart"))||[]})),u=Object(b.a)(m,2),O=u[0],h=u[1],p=Object(a.useState)({nombre:"",telefono:"",email:""}),v=Object(b.a)(p,2),N=v[0],g=v[1],w=Object(a.useState)({}),y=Object(b.a)(w,2),S=y[0],C=y[1],k=Object(a.useState)(),I=Object(b.a)(k,2),A=I[0],D=I[1];return Object(o.jsx)(f.Provider,{value:{cartList:O,cantidadUnidades:n,dataOrder:S,formData:N,detalleOrden:A,message:d,setMessage:j,itemsCart:function(){return O.reduce((function(e,t){return e+t.cantidad}),0)},guardarDetalle:D,setFormData:g,setOrderData:C,addItems:function(e){var t=O.find((function(t){return t.id===e.id}));if(t){var c=t.cantidad+e.cantidad;if(e.stock>c){r(t.cantidad=c),h(O);var a=JSON.stringify(O);localStorage.setItem("cart",a)}else j("No se ha podido agregar al carrito. Cantidades disponibles en stock: "+e.stock),setTimeout((function(){j("")}),8e3)}else{var s=[].concat(Object(x.a)(O),[e]);h(s);var n=JSON.stringify(s);localStorage.setItem("cart",n)}},deleteItem:function(e){var t=O.filter((function(t){return t.id!==e}));h(t);var c=JSON.stringify(t);localStorage.setItem("cart",c)},deleteAll:function(){h([]),localStorage.removeItem("cart")},formatNumber:function(e){return Object(o.jsx)("span",{children:new Intl.NumberFormat("ES-AR",{style:"currency",currency:"ARS"}).format(e)})},precioTotal:function(){return O.reduce((function(e,t){return e+t.cantidad*t.price}),0)}},children:t})},N=(c(45),function(e){var t=e.prod,c=p(),s=c.message,n=c.addItems,r=c.formatNumber,l=Object(a.useState)("input"),d=Object(b.a)(l,2),m=d[0],u=d[1];return Object(o.jsx)("div",{className:"col s12 m12 l12 flex",children:Object(o.jsxs)("div",{className:"card",children:[Object(o.jsxs)("div",{className:"card-image waves-effect waves-block waves-light",children:[Object(o.jsx)("div",{className:"col s12 m6 l6",children:Object(o.jsx)("div",{children:Object(o.jsx)("img",{alt:t.nombre,className:"imgDetail",src:t.urlImagen})})}),Object(o.jsxs)("div",{className:"col s12 m5 l5 detalleProducto",children:[Object(o.jsx)("h5",{className:"producto",children:t.nombre}),Object(o.jsx)("span",{className:"price",children:r(t.price)}),"input"===m?Object(o.jsx)(h,{initial:1,stock:t.stock,onAdd:function(e){n(Object(j.a)(Object(j.a)({},t),{},{cantidad:e})),u("button")}}):Object(o.jsx)(i.b,{to:"/cart",className:"pretext comprar",children:"Ir a Carrito"}),Object(o.jsxs)("span",{className:"stockDisponible",children:["Stock Disponible: ",t.stock]}),Object(o.jsx)("p",{className:"error",children:s})]})]}),Object(o.jsxs)("div",{className:"m-20",children:[Object(o.jsx)("h5",{children:"Descripci\xf3n"}),t.descripcion]})]})},t.id)}),g=function(){return Object(o.jsxs)("div",{className:"spinner",children:[Object(o.jsx)("div",{className:"bounce1"}),Object(o.jsx)("div",{className:"bounce2"}),Object(o.jsx)("div",{className:"bounce3"})]})},w=function(){var e=Object(a.useState)({}),t=Object(b.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(!0),r=Object(b.a)(n,2),i=r[0],d=r[1],m=Object(l.h)().id;return Object(a.useEffect)((function(){var e=O().collection("items");m&&e.doc(m).get().then((function(e){s(Object(j.a)({id:e.id},e.data()))})).catch((function(e){return console.log(e)})).finally((function(){return d(!1)}))}),[m]),i?Object(o.jsx)(g,{}):Object(o.jsx)("div",{className:"full",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsx)(N,{prod:c})})})})},y=function(e){var t=p(),c=t.formatNumber,a=t.deleteItem,s=e.prod;return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:Object(o.jsx)("img",{src:s.urlImagen,className:"cart",alt:s.nombre})}),Object(o.jsx)("td",{children:Object(o.jsxs)(i.b,{to:"/item/".concat(s.id),children:[Object(o.jsx)("p",{children:"".concat(s.nombre)}),Object(o.jsxs)("p",{children:["x ",s.cantidad]})]})}),Object(o.jsx)("td",{children:Object(o.jsx)("p",{children:c(s.price)})}),Object(o.jsx)("td",{children:Object(o.jsx)("p",{className:"strong",children:c(s.cantidad*s.price)})}),Object(o.jsx)("td",{className:"borrar",children:Object(o.jsx)("button",{onClick:function(){return a(s.id)},children:Object(o.jsx)("i",{className:"tiny material-icons",children:"delete"})})})]})},S=(c(46),c(26),c(19)),C=function(e){var t=e.cambio,c=e.envio,a=p().formData;return Object(o.jsxs)("form",{className:"formulario",onChange:t,onSubmit:c,children:[Object(o.jsx)("h4",{children:"Tus Datos"}),Object(o.jsxs)("div",{className:"input-field",children:[Object(o.jsx)("input",{id:"first_name",type:"text",name:"nombre",className:"validate",required:!0,defaultValue:a.nombre}),Object(o.jsx)("label",{htmlFor:"first_name","data-error":"wrong","data-success":"right",children:"Nombre"})]}),Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"input-field col s12",children:[Object(o.jsx)("input",{id:"phone",type:"tel",required:!0,name:"telefono",className:"validate",defaultValue:a.telefono}),Object(o.jsx)("label",{htmlFor:"phone","data-error":"wrong","data-success":"right",children:"Telefono"})]})}),Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"input-field col s12",children:[Object(o.jsx)("input",{id:"email",type:"email",required:!0,name:"email",className:"validate",defaultValue:a.email}),Object(o.jsx)("label",{htmlFor:"email","data-error":"wrong","data-success":"right",children:"Email"})]})}),Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"input-field col s12",children:[Object(o.jsx)("input",{id:"emailRepetir",type:"email",required:!0,className:"validate",name:"email_validate"}),Object(o.jsx)("label",{htmlFor:"emailRepetir","data-error":"wrong","data-success":"right",children:"Confirmar Email"})]})}),Object(o.jsxs)("button",{className:"btn waves-effect waves-light",disabled:""===a.nombre||""===a.telefono||a.email!==a.email_validate,children:["Confirmar ",Object(o.jsx)("i",{className:"material-icons right",children:"send"})]})]})},k=function(){var e=p(),t=e.formData,c=e.cartList,a=e.deleteAll,s=e.precioTotal,n=e.setFormData,r=e.setOrderData;return Object(o.jsx)("div",{children:0===c.length&&""!==t.nombre?Object(o.jsx)(l.a,{to:{pathname:"/sucess"}}):c.length>0?Object(o.jsx)(C,{cambio:function(e){n(Object(j.a)(Object(j.a)({},t),{},Object(S.a)({},e.target.name,e.target.value)))},envio:function(e){e.preventDefault();var i={};i.date=m.a.firestore.Timestamp.fromDate(new Date),i.buyer=t,i.total=s(),i.items=c.map((function(e){var t=e.id,c=e.nombre,a=e.cantidad,s=e.urlImagen;return{id:t,nombre:c,price:e.price,subtotal:e.price*e.cantidad,cantidad:a,urlImagen:s}}));var l=O();l.collection("orders").add(i).then((function(e){return r(Object(j.a)({id:e.id},e.data))})).catch((function(e){return console.log(e)})).finally((function(){return n({nombre:"",telefono:"",email:""})}),a());var o=l.collection("items").where(m.a.firestore.FieldPath.documentId(),"in",c.map((function(e){return e.id}))),d=l.batch();o.get().then((function(e){e.docs.forEach((function(e){d.update(e.ref,{stock:e.data().stock-c.find((function(t){return t.id===e.id})).cantidad})})),d.commit().catch((function(e){return console.log(e)}))}))}}):""})},I=function(){var e=p(),t=e.cartList,c=e.deleteAll,a=e.formatNumber,s=e.precioTotal;return Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"col s12",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col s12 l8",children:t.length?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{children:"Carrito"}),Object(o.jsx)("table",{className:"responsive-table",children:Object(o.jsx)("tbody",{children:t.map((function(e){return Object(o.jsx)(y,{prod:e},e.id)}))})}),Object(o.jsxs)("h5",{className:"total",children:["Total:",a(s())]}),Object(o.jsx)("button",{onClick:function(){return c()},children:"Vaciar Carrito"})]}):Object(o.jsxs)("div",{className:"container full",children:[Object(o.jsx)("h3",{children:"Tu carrito est\xe1 vac\xedo"}),Object(o.jsx)("h5",{children:"\xbfNo sab\xe9s qu\xe9 comprar? \xa1Miles de productos te esperan !"}),Object(o.jsx)(i.b,{to:"/productos",className:"waves-effect waves-light btn",children:"Ir a Productos"})]})}),Object(o.jsx)("div",{className:"col s12 m12 l4",children:Object(o.jsx)(k,{})})]})})})},A=function(e){var t=e.prod,c=p().formatNumber;return Object(o.jsx)(i.b,{to:"/item/".concat(t.id),children:Object(o.jsx)("div",{className:"col s12 m6 l4",children:Object(o.jsxs)("div",{className:"card hoverable",children:[Object(o.jsx)("div",{className:"card-image waves-effect waves-block waves-light",children:Object(o.jsx)("img",{src:"."+t.urlImagen,alt:t.nombre})}),Object(o.jsxs)("div",{className:"card-content",children:[Object(o.jsx)("span",{children:"".concat(t.nombre.slice(0,30)+"...")}),Object(o.jsx)("p",{className:"mayuscula prod-categoria",children:"".concat(t.categoria)}),Object(o.jsx)("div",{className:"prod-price",children:c(t.price)})]})]})},t.id)})},D=Object(a.memo)((function(e){return e.prod.map((function(e){return Object(o.jsx)(A,{prod:e},e.id)}))})),T=(c(48),function(){var e=Object(a.useState)([]),t=Object(b.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(!0),r=Object(b.a)(n,2),i=r[0],d=r[1],m=Object(l.h)().id,u=Object(l.g)();return Object(a.useEffect)((function(){var e=!0,t=O().collection("items");return m?t=t.where("categoria","==",m):"/"===u.pathname&&(t=t.where("ofertaEspecial","==",!0)),t.get().then((function(t){e&&s(t.docs.map((function(e){return Object(j.a)({id:e.id},e.data())})))})).catch((function(e){return console.log(e)})).finally((function(){return d(!1)})),function(){e=!1}}),[m,u]),i?Object(o.jsx)(g,{}):Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"row",children:[m?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{className:"categoriaTitle",children:m}),Object(o.jsxs)("p",{className:"resultadosCantidad",children:[c.length," Resultados"]})]}):"",Object(o.jsx)(D,{prod:c},c.id)]})})}),F=(c(49),function(){var e=p(),t=e.dataOrder,c=e.detalleOrden,s=e.guardarDetalle,n=e.formatNumber;return Object(a.useEffect)((function(){O().collection("orders").doc(t.id).get().then((function(e){return s(e.data())})).catch((function(e){return console.log(e)}))}),[t,s]),Object(o.jsx)("div",{className:"row",children:c?Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)("div",{className:"col s12",children:[Object(o.jsxs)("h3",{className:"orden",children:["Orden: #",t.id]}),Object(o.jsx)("hr",{}),Object(o.jsxs)("h4",{children:["\xa1Muchas gracias ",c.buyer.nombre,"!"]}),Object(o.jsx)("h5",{children:"Datos de contacto"}),Object(o.jsx)("p",{children:c.buyer.email}),Object(o.jsx)("p",{children:c.buyer.telefono}),Object(o.jsx)("br",{}),Object(o.jsxs)("p",{className:"totalSucess",children:["Total: ",n(c.total)]})]}),Object(o.jsxs)("div",{className:"col s12",children:[Object(o.jsx)("h4",{children:"Detalle de orden"}),Object(o.jsx)("table",{className:"sucess responsive-table",children:Object(o.jsx)("tbody",{children:c.items.map((function(e){return Object(o.jsx)(y,{prod:e},e.id)}))})})]})]}):Object(o.jsx)(g,{})})}),E=c(25),q=function(e){var t=e.nombre;return Object(o.jsx)("li",{className:"tab",children:Object(o.jsx)(i.c,{to:"/categoria/"+t,className:"mayuscula",children:t},t)})},B=function(e){var t=e.categorias;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"nav-wrapper container",children:Object(o.jsxs)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down mayuscula",children:[Object(o.jsx)("li",{children:Object(o.jsx)(i.c,{exact:!0,to:"/",children:"Home"})}),Object(o.jsx)("li",{children:Object(o.jsx)(i.c,{exact:!0,to:"/productos",children:"Productos"})})]})}),Object(o.jsx)("div",{className:"nav-content  hide-on-med-and-down ",children:Object(o.jsx)("ul",{className:"tabs tabs-transparent",children:t.map((function(e){return Object(o.jsx)(q,{nombre:e},e)}))})})]})},R=c(30),M=c.n(R),J=function(e){var t=e.categorias;return Object(a.useEffect)((function(){var e=document.querySelectorAll(".sidenav");M.a.Sidenav.init(e,{})}),[]),Object(o.jsxs)("ul",{className:"sidenav",id:"mobile-demo",children:[Object(o.jsx)("li",{className:"sidenav-header red lighten-2",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"col s4",children:[Object(o.jsx)("img",{alt:"logo",src:"https://img.icons8.com/fluency/48/000000/tesla-supercharger-pin.png"}),Object(o.jsx)("span",{className:"white-text text-darken-2",children:"Bienvenido"})]})})}),Object(o.jsx)("li",{children:Object(o.jsx)(i.c,{className:"mayuscula",exact:!0,to:"/",children:"Home"})}),Object(o.jsx)("li",{children:Object(o.jsx)(i.c,{className:"mayuscula",exact:!0,to:"/productos",children:"Todos"})}),t.map((function(e){return Object(o.jsx)(q,{nombre:e},e)})),")"]})},V=function(){var e=p().itemsCart;return Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"iconCantidad",children:[Object(o.jsx)("div",{className:e()>0?"mostrar":"ocultar",children:Object(o.jsx)("span",{className:"widgetCantidad",children:e()})}),Object(o.jsx)("i",{className:"large material-icons",children:"shopping_cart"})]})})},L=(c(52),function(){var e=["notebook","celulares","televisores","tablet"];return Object(o.jsx)("nav",{className:"nav-extended",children:Object(o.jsxs)("div",{className:"nav-wrapper container",children:[Object(o.jsx)(i.c,{to:"/",className:"brand-logo",children:Object(o.jsx)("span",{className:"hide-on-small-only",children:Object(o.jsx)("span",{className:"led",children:" MARKET BA"})})}),Object(o.jsx)(i.c,{to:"#","data-target":"mobile-demo",className:"sidenav-trigger",children:Object(o.jsx)("i",{className:"material-icons",children:"menu"})}),Object(o.jsx)(i.c,{to:"/cart",className:"right",children:Object(o.jsx)(V,{})}),Object(o.jsx)(E.BrowserView,{children:Object(o.jsx)(B,{categorias:e})}),Object(o.jsx)(E.MobileView,{children:Object(o.jsx)(J,{categorias:e})})]})})});function P(){return Object(o.jsxs)("footer",{className:"page-footer grey",children:[Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsxs)("div",{className:"col l6 s12",children:[Object(o.jsx)("h5",{className:"white-text",children:"MARKET BA"}),Object(o.jsx)("p",{className:"grey-text text-lighten-4",children:"Somos un equipo de estudiantes que trabajan en este proyecto como si fuera nuestro trabajo de tiempo completo."})]}),Object(o.jsxs)("div",{className:"col l6 s12",children:[Object(o.jsx)("h5",{className:"white-text",children:"CONTACTO"}),Object(o.jsxs)("p",{children:[Object(o.jsx)("i",{className:"tiny material-icons",children:"local_phone"})," 11-XXX-XXXX"]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("i",{className:"tiny material-icons",children:"email"})," contacto@marketba.ar"]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("i",{className:"tiny material-icons",children:"place"})," Av. Cantilo 000 - Buenos Aires "]})]})]})}),Object(o.jsx)("div",{className:"footer-copyright",children:Object(o.jsxs)("div",{className:"container",children:["Hecho por ",Object(o.jsx)("span",{className:"blue-text text-lighten-3",children:"Jennifer"})]})})]})}c(53),c(54);var X=function(){return Object(o.jsx)("div",{children:Object(o.jsx)(v,{children:Object(o.jsxs)(i.a,{basename:"/react-jennifer",children:[Object(o.jsx)(L,{}),Object(o.jsxs)(l.d,{children:[Object(o.jsxs)(l.b,{exact:!0,path:"/",children:[Object(o.jsx)(d,{}),Object(o.jsx)(T,{})]}),Object(o.jsx)(l.b,{path:"/productos",component:T}),Object(o.jsx)(l.b,{path:"/categoria/:id",component:T}),Object(o.jsx)(l.b,{path:"/item/:id",component:w}),Object(o.jsx)(l.b,{path:"/cart",component:I}),Object(o.jsx)(l.b,{path:"/sucess",component:F})]}),Object(o.jsx)(P,{})]})})})},_=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,56)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),a(e),s(e),n(e),r(e)}))};r.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(X,{})}),document.getElementById("root")),_()}},[[55,1,2]]]);
//# sourceMappingURL=main.2762b9ad.chunk.js.map