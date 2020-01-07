(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a(53)},29:function(e,t,a){},30:function(e,t,a){},49:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(22),o=a.n(r),c=a(56),i=a(58),s=a(57),u=a(11),m=a(5),h=a(6),d=a(8),E=a(7),k=a(9);a(29);a(30);var b=function(){return l.a.createElement("div",{className:"jumbotron text-center"})},f=a(10),v=a.n(f),p={getBookSearch:function(e){return v.a.get("https://www.googleapis.com/books/v1/volumes?q="+e)},getBooks:function(){return v.a.get("/api/books")},getBook:function(e){return v.a.get("/api/books/"+e)},deleteBook:function(e){return v.a.delete("/api/books/"+e)},saveBook:function(e){return v.a.post("/api/books",e)}};function g(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}function N(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}function B(e){var t=e.size,a=e.children;return l.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},a)}a(49);function y(e){var t=e.children;return l.a.createElement("div",{className:"list-overflow-container"},l.a.createElement("ul",{className:"list-group"},t))}function S(e){var t=e.children;return l.a.createElement("li",{className:"list-group-item"},t)}var j=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(l)))).state={booksCall:[],bookCallSearch:"",books:[],authors:"",description:"",image:"",link:"",title:""},a.loadBooks=function(){p.getBooks().then(function(e){return a.setState({books:e.data,authors:"",description:"",image:"",link:"",title:""})}).catch(function(e){return console.log(e)})},a.deleteBook=function(e){p.deleteBook(e).then(function(e){return a.loadBooks()}).catch(function(e){return console.log(e)})},a.handleInputChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(u.a)({},n,l))},a.handleFormSubmit=function(e){e.preventDefault(),a.state.title&&a.state.authors&&p.saveBook({authors:a.state.authors,description:a.state.description,image:a.state.image,link:a.state.link,title:a.state.title}).then(function(e){return a.loadBooks()}).catch(function(e){return console.log(e)})},a}return Object(k.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.loadBooks()}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(b,null,l.a.createElement("h1",null,"Books On My List")),l.a.createElement(g,{fluid:!0},l.a.createElement(N,null,this.state.books.length?l.a.createElement(y,null,this.state.books.map(function(t){return l.a.createElement(S,{key:t._id},l.a.createElement(N,{className:"SearchResult row",id:t.title+"Card",key:t._id},l.a.createElement(B,{size:"2",className:"bookImage"},l.a.createElement("img",{src:t.image,alt:t.title})),l.a.createElement(B,{size:"1",className:"emptyCol"}),l.a.createElement(B,{size:"9",className:"bookInfo"},l.a.createElement(N,null,l.a.createElement("h3",{className:"bookTitle"},t.title)),l.a.createElement(N,null,l.a.createElement("h4",{className:"bookAuthor"},t.authors)),l.a.createElement(N,null,l.a.createElement("p",{className:"bookDescription"},t.description)))),l.a.createElement("br",null),l.a.createElement(N,{className:"buttonDiv "},l.a.createElement("button",{className:"saveBook btn btn-primary",id:t.id,onClick:function(){return e.deleteBook(t._id)}},"Delete Book"),l.a.createElement("a",{href:t.link,target:"_blank"},l.a.createElement("button",{className:"viewBook btn btn-success"},"View Book"))))})):l.a.createElement("h3",null,"No Results to Display"))))}}]),t}(n.Component),w=a(55);var C=function(e){var t=e.children;return l.a.createElement("div",{style:{height:300,clear:"both",paddingTop:120,textAlign:"center"},className:"jumbotron"},t)},O=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(l)))).state={book:{}},a}return Object(k.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.getBook(this.props.match.params.id).then(function(t){return e.setState({book:t.data})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return l.a.createElement(g,{fluid:!0},l.a.createElement(N,null,l.a.createElement(B,{size:"md-12"},l.a.createElement(C,null,l.a.createElement("h1",null,this.state.book.title," by ",this.state.book.author)))),l.a.createElement(N,null,l.a.createElement(B,{size:"md-10 md-offset-1"},l.a.createElement("article",null,l.a.createElement("h1",null,"Synopsis"),l.a.createElement("p",null,this.state.book.synopsis)))),l.a.createElement(N,null,l.a.createElement(B,{size:"md-2"},l.a.createElement(w.a,{to:"/"},"\u2190 Back to Authors"))))}}]),t}(n.Component);var z=function(){return l.a.createElement(g,{fluid:!0},l.a.createElement(N,null,l.a.createElement(B,{size:"md-12"},l.a.createElement(C,null,l.a.createElement("h1",null,"404 Page Not Found"),l.a.createElement("h1",null,l.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))))};function I(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}function D(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}function x(e){var t=e.size,a=e.children;return l.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},a)}var A=function(e){return l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body player"},l.a.createElement("div",{className:"article"},l.a.createElement("h3",null,"Search Results"),e.books.map(function(t){return l.a.createElement("li",{className:"search-list list-group-item"},l.a.createElement(D,{className:"SearchResult row",id:t.title+"Card",key:t._id},l.a.createElement(x,{size:"2",className:"bookImage"},l.a.createElement("img",{src:t.image,alt:t.title})),l.a.createElement(x,{size:"1",className:"emptyCol"}),l.a.createElement(x,{size:"9",className:"bookInfo"},l.a.createElement(D,null,l.a.createElement("h3",{className:"bookTitle"},t.title)),l.a.createElement(D,null,l.a.createElement("h4",{className:"bookAuthor"},t.authors)),l.a.createElement(D,null,l.a.createElement("p",{className:"bookDescription"},t.description)))),l.a.createElement("br",null),l.a.createElement(D,{className:"buttonDiv "},l.a.createElement("button",{className:"saveBook btn btn-primary",id:t.id,onClick:function(t){return e.handleSaveButton(t)}},"Save Book"),l.a.createElement("a",{href:t.link,target:"_blank"},l.a.createElement("button",{className:"viewBook btn btn-success"},"View Book"))))}))))};var F=function(e){var t=e.type,a=void 0===t?"default":t,n=e.className,r=e.children,o=e.onClick;return l.a.createElement("button",{onClick:o,className:["btn btn-lg","btn-".concat(a),n].join(" ")},r)};var R=function(e){return l.a.createElement("div",{className:"input-group input-group-lg"},l.a.createElement("input",Object.assign({className:"form-control",type:"text"},e)))},_=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(l)))).state={booksCall:[],bookSearch:"",books:[],authors:"",description:"",image:"",link:"",title:""},a.handleFormSubmit=function(e){e.preventDefault(),p.getBookSearch(a.state.bookSearch).then(function(e){if("error"===e.data.items)throw new Error(e.data.items);var t=e.data.items;t=t.map(function(e){return e={key:e.id,id:e.id,title:e.volumeInfo.title,authors:e.volumeInfo.authors,description:e.volumeInfo.description,image:e.volumeInfo.imageLinks.thumbnail,link:e.volumeInfo.infoLink}}),a.setState({books:t,error:""})}).catch(function(e){return a.setState({error:e.items})})},a.handleSaveButton=function(e){e.preventDefault();var t=a.state.books.filter(function(t){return t.id===e.target.id});console.log(t[0]);var n=t[0];n.title&&n.authors&&p.saveBook({authors:n.authors,description:n.description,image:n.image,link:n.link,title:n.title}).catch(function(e){return console.log(e)})},a.handleInputChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(u.a)({},n,l)),console.log(l)},a}return Object(k.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(b,null),l.a.createElement(I,null,l.a.createElement(D,null,l.a.createElement(x,{size:"md-12"},l.a.createElement("form",null,l.a.createElement(I,null,l.a.createElement(D,null,l.a.createElement(x,{size:"xs-9 sm-10"},l.a.createElement(R,{name:"bookSearch",value:this.state.bookSearch,onChange:this.handleInputChange,placeholder:"Search For a Book"})),l.a.createElement(x,{size:"xs-3 sm-2"},l.a.createElement(F,{onClick:this.handleFormSubmit,type:"success",className:"input-lg"},"Search"))))))),l.a.createElement(D,null,l.a.createElement(A,{books:this.state.books,handleSaveButton:this.handleSaveButton}))))}}]),t}(n.Component);var L=function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},l.a.createElement("h1",null,"Google Books React"),l.a.createElement("a",{className:"navbar-brand",href:"/"},"Search Books"),l.a.createElement("a",{className:"navbar-brand",href:"/books"},"Saved Books"))};var M=function(){return l.a.createElement(c.a,null,l.a.createElement("div",null,l.a.createElement(L,null),l.a.createElement(i.a,null,l.a.createElement(s.a,{exact:!0,path:"/",component:_}),l.a.createElement(s.a,{exact:!0,path:"/books",component:j}),l.a.createElement(s.a,{exact:!0,path:"/books/:id",component:O}),l.a.createElement(s.a,{component:z}))))};o.a.render(l.a.createElement(M,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.78877e70.chunk.js.map