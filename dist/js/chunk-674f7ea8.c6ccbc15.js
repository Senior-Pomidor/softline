(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-674f7ea8"],{"177f":function(e,n,t){},"54ce":function(e,n,t){"use strict";t.r(n);var i=function(){var e=this,n=e._self._c;return n("section",{staticClass:"section-tree"},[n("h2",[e._v(" Бинарная структура ")]),n("div",{staticClass:"tree"},e._l(e.tree,(function(e){return n("Branch",{key:e.id,attrs:{info:e}})})),1)])},r=[],l=function(){var e=this,n=e._self._c;return n("div",{ref:"branch",staticClass:"branch",class:"branch--"+e.info.type},[e.info.children&&e.info.children.length>0?n("button",{staticClass:"branch__btn",class:{opened:e.isSubtreeOpened},on:{click:function(n){return n.stopPropagation(),e.toggleOpenFolder()}}}):e._e(),n("p",{staticClass:"branch__name"},[e._v(" "+e._s(e.level)+" "+e._s(e.info.type)+" "+e._s(e.info.name)+" ")]),"folder"===e.info.type&&e.info.children.length>0?[e.isSubtreeOpened?n("div",{staticClass:"branch__subtree"},e._l(e.info.children,(function(t){return n("branch",{key:t.id,attrs:{info:t,level:e.level+1}})})),1):e._e()]:e._e()],2)},a=[],s={name:"branch",props:{info:{type:Object,default(){return{id:null,type:null,children:[]}}},level:{type:Number,default(){return 0}}},data(){return{isSubtreeOpened:!1}},methods:{toggleOpenFolder(){this.$refs.branch.classList.toggle("opened"),this.isSubtreeOpened=!this.isSubtreeOpened}}},c=s,o=(t("c559"),t("0c7c")),d=Object(o["a"])(c,l,a,!1,null,null,null),f=d.exports,u={name:"tree",components:{Branch:f},data(){return{tree:[{id:1,type:"folder",children:[{id:10,type:"file",name:"Item 1.1"}]},{id:2,type:"folder",name:"Folder 2",children:[{id:20,type:"folder",name:"Subfolder 2.1",children:[{id:201,type:"file",name:"File 2.1.1"},{id:202,type:"file",name:"File 2.1.2"}]},{id:21,type:"file",name:"File 2.2"}]},{id:3,type:"folder",name:"Folder 3 (closed at start)",children:[]},{id:4,type:"file",name:"File 4"}]}}},p=u,h=(t("df32"),Object(o["a"])(p,i,r,!1,null,null,null));n["default"]=h.exports},"5a6a":function(e,n,t){},c559:function(e,n,t){"use strict";t("177f")},df32:function(e,n,t){"use strict";t("5a6a")}}]);
//# sourceMappingURL=chunk-674f7ea8.c6ccbc15.js.map