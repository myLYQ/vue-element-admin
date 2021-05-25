(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b5590222"],{1799:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-pagination",{attrs:{"page-sizes":[10,20,30,50],"page-size":t.limit,"current-page":t.page,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handlePageChange}})},l=[],n=(i("a9e3"),{name:"Pagination",props:{total:Number,layout:{type:String,default:function(){}},pageSizes:Array,limit:Number,page:Number},methods:{handleSizeChange:function(t){this.$emit("update:limit",t),this.emitPagination()},handlePageChange:function(t){this.$emit("update:page",t),this.emitPagination()},emitPagination:function(){this.$emit("pagination")}}}),r=n,s=i("2877"),o=Object(s["a"])(r,a,l,!1,null,"8da01fb2",null);e["a"]=o.exports},5108:function(t,e,i){},a434:function(t,e,i){"use strict";var a=i("23e7"),l=i("23cb"),n=i("a691"),r=i("50c4"),s=i("7b0b"),o=i("65f0"),c=i("8418"),u=i("1dde"),d=i("ae40"),p=u("splice"),g=d("splice",{ACCESSORS:!0,0:0,1:2}),m=Math.max,f=Math.min,b=9007199254740991,h="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!p||!g},{splice:function(t,e){var i,a,u,d,p,g,v=s(this),D=r(v.length),y=l(t,D),k=arguments.length;if(0===k?i=a=0:1===k?(i=0,a=D-y):(i=k-2,a=f(m(n(e),0),D-y)),D+i-a>b)throw TypeError(h);for(u=o(v,a),d=0;d<a;d++)p=y+d,p in v&&c(u,d,v[p]);if(u.length=a,i<a){for(d=y;d<D-a;d++)p=d+a,g=d+i,p in v?v[g]=v[p]:delete v[g];for(d=D;d>D-a+i;d--)delete v[d-1]}else if(i>a)for(d=D-a;d>y;d--)p=d+a-1,g=d+i-1,p in v?v[g]=v[p]:delete v[g];for(d=0;d<i;d++)v[d+y]=arguments[d+2];return v.length=D-a+i,u}})},a600:function(t,e,i){"use strict";i("5108")},acd6:function(t,e,i){"use strict";i.d(e,"d",(function(){return l})),i.d(e,"c",(function(){return n})),i.d(e,"e",(function(){return r})),i.d(e,"a",(function(){return s})),i.d(e,"f",(function(){return o})),i.d(e,"b",(function(){return c}));var a=i("1bab");function l(t){return Object(a["a"])({url:"/article/list",method:"get",params:t})}function n(t){return Object(a["a"])({url:"/article/detail",method:"get",params:{id:t}})}function r(t){return Object(a["a"])({url:"/article/pv",method:"get",params:{id:t}})}function s(t){return Object(a["a"])({url:"/article/create",method:"post",data:t})}function o(t){return Object(a["a"])({url:"/article/update",method:"post",data:t})}function c(t){return Object(a["a"])({url:"/article/delete",method:"post",data:t})}},fbb4:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"query"},[i("div",{staticClass:"query-input"},[i("el-input",{staticClass:"input-lg",attrs:{type:"text",placeholder:"标题",size:"small"},model:{value:t.listQuery.title,callback:function(e){t.$set(t.listQuery,"title",e)},expression:"listQuery.title"}}),i("el-select",{staticClass:"input-sm",attrs:{placeholder:"重要性",size:"small",clearable:""},model:{value:t.listQuery.importance,callback:function(e){t.$set(t.listQuery,"importance",e)},expression:"listQuery.importance"}},t._l(t.importanceOptions,(function(t){return i("el-option",{key:t,attrs:{label:t,value:t}})})),1),i("el-select",{staticClass:"input-md",attrs:{placeholder:"类型",size:"small",clearable:""},model:{value:t.listQuery.type,callback:function(e){t.$set(t.listQuery,"type",e)},expression:"listQuery.type"}},t._l(t.typeOptions,(function(t){return i("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1),i("el-select",{staticClass:"input-md",attrs:{size:"small"},on:{change:t.handleFilter},model:{value:t.listQuery.sort,callback:function(e){t.$set(t.listQuery,"sort",e)},expression:"listQuery.sort"}},t._l(t.sortOptions,(function(t){return i("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),i("div",{staticClass:"query-btn"},[i("el-button",{attrs:{icon:"el-icon-search",type:"primary",size:"medium"},on:{click:t.handleFilter}},[t._v(" 搜索 ")]),i("el-button",{attrs:{icon:"el-icon-edit",type:"primary",size:"medium"},on:{click:t.appendArticleClick}},[t._v(" 添加 ")]),i("el-button",{attrs:{icon:"el-icon-download",type:"primary",size:"medium"}},[t._v(" 导出 ")]),i("el-checkbox",{attrs:{label:"审核人"},model:{value:t.reviewerColVisible,callback:function(e){t.reviewerColVisible=e},expression:"reviewerColVisible"}})],1)]),i("div",{staticClass:"table"},[i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],key:t.reviewerColVisible,attrs:{data:t.listData,border:"",size:"small"},on:{"sort-change":t.sortChange}},[i("el-table-column",{attrs:{prop:"id",label:"ID",width:"70px",align:"center",sortable:"custom"}}),i("el-table-column",{attrs:{label:"Date",width:"140px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[t._v(" "+t._s(t._f("parseTime")(i.timestamp))+" ")]}}])}),i("el-table-column",{attrs:{label:"Title"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row,l=(e.column,e.$index);return[i("span",{staticClass:"text-link",attrs:{type:"text"},on:{click:function(e){return t.editArticleClick(a,l)}}},[t._v(" "+t._s(a.title)+" "),i("el-tag",{attrs:{type:"primary"}},[t._v(" "+t._s(t._f("getTypeValue")(a.type))+" ")])],1)]}}])}),i("el-table-column",{attrs:{prop:"author",label:"Author",width:"100px",align:"center"}}),t.reviewerColVisible?i("el-table-column",{attrs:{label:"Reviewer",width:"100px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[i("strong",{style:{color:"red"}},[t._v(" "+t._s(a.reviewer)+" ")])]}}],null,!1,3159723042)}):t._e(),i("el-table-column",{attrs:{label:"Importance",width:"90px"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return t._l(a.importance,(function(t){return i("svg-icon",{key:t,attrs:{"icon-class":"star"}})}))}}])}),i("el-table-column",{attrs:{label:"Readings",width:"80px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[i("span",{staticClass:"text-link",on:{click:function(e){return t.readingBtnClick(a.id)}}},[t._v(" "+t._s(a.pageviews)+" ")])]}}])}),i("el-table-column",{attrs:{label:"Status",width:"100px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[i("el-tag",{attrs:{type:t._f("getTagtypeFromStatus")(a.status)}},[t._v(" "+t._s(a.status)+" ")])]}}])}),i("el-table-column",{attrs:{label:"Actions",align:"center",width:"250px"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row,l=(e.column,e.$index);return[i("div",{staticClass:"action-btns"},[i("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.editArticleClick(a,l)}}},[t._v(" Edit ")]),"published"===a.status?i("el-button",{attrs:{size:"mini"},on:{click:function(e){return t.draftBtnClick(a)}}},[t._v(" Draft ")]):i("el-button",{attrs:{type:"success",size:"mini"},on:{click:function(e){return t.publishBtnClick(a)}}},[t._v(" Publish ")]),"deleted"!==a.status?i("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(e){return t.deleteBtnClick(l)}}},[t._v(" Delete ")]):i("el-button",{attrs:{size:"mini"},on:{click:function(e){return t.draftBtnClick(a)}}},[t._v(" Draft ")])],1)]}}])})],1)],1),i("Pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total > 0"}],attrs:{total:t.total,limit:t.listQuery.limit,page:t.listQuery.page},on:{"update:limit":function(e){return t.$set(t.listQuery,"limit",e)},"update:page":function(e){return t.$set(t.listQuery,"page",e)},pagination:t.getListData}}),i("el-dialog",{attrs:{visible:t.readingDialog.visible,"lock-scroll":!1},on:{"update:visible":function(e){return t.$set(t.readingDialog,"visible",e)}}},[i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.readingDialog.loading,expression:"readingDialog.loading"}],attrs:{data:t.readingDialog.pvData,border:""}},[i("el-table-column",{attrs:{prop:t.readingDialog.key,label:"Channel"}}),i("el-table-column",{attrs:{prop:t.readingDialog.value,label:"PV"}})],1)],1),i("el-dialog",{attrs:{visible:t.editArticleDialogData.visible,"lock-scroll":!1},on:{"update:visible":function(e){return t.$set(t.editArticleDialogData,"visible",e)}},scopedSlots:t._u([{key:"footer",fn:function(){return[i("el-button",{on:{click:function(e){t.editArticleDialogData={}}}},[t._v(" Cancel ")]),i("el-button",{attrs:{type:"primary",loading:t.updatingArticle},on:{click:t.editArticleDialogConfirm}},[t._v(" Confirm ")])]},proxy:!0}])},[i("el-form",{ref:"editArticleDialogForm",attrs:{"label-width":"150px",size:"medium",model:t.editArticleDialogData}},[i("el-form-item",{attrs:{prop:"type",label:"Type",required:""}},[i("el-select",{model:{value:t.editArticleDialogData.type,callback:function(e){t.$set(t.editArticleDialogData,"type",e)},expression:"editArticleDialogData.type"}},t._l(t.typeOptions,(function(t){return i("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),i("el-form-item",{attrs:{prop:"timestamp",label:"Date",required:""}},[i("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间"},model:{value:t.editArticleDialogData.timestamp,callback:function(e){t.$set(t.editArticleDialogData,"timestamp",e)},expression:"editArticleDialogData.timestamp"}})],1),i("el-form-item",{attrs:{prop:"title",label:"Title",required:""}},[i("el-input",{attrs:{type:"text"},model:{value:t.editArticleDialogData.title,callback:function(e){t.$set(t.editArticleDialogData,"title",e)},expression:"editArticleDialogData.title"}})],1),i("el-form-item",{attrs:{label:"Status"}},[i("el-select",{model:{value:t.editArticleDialogData.status,callback:function(e){t.$set(t.editArticleDialogData,"status",e)},expression:"editArticleDialogData.status"}},t._l(t.statusOptions,(function(t){return i("el-option",{key:t,attrs:{label:t,value:t}})})),1)],1),i("el-form-item",{attrs:{label:"Importance"}},[i("el-rate",{attrs:{max:3},model:{value:t.editArticleDialogData.importance,callback:function(e){t.$set(t.editArticleDialogData,"importance",e)},expression:"editArticleDialogData.importance"}})],1),i("el-form-item",{attrs:{label:"Remark"}},[i("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:4}},model:{value:t.editArticleDialogData.remark,callback:function(e){t.$set(t.editArticleDialogData,"remark",e)},expression:"editArticleDialogData.remark"}})],1)],1)],1)],1)},l=[],n=i("1da1"),r=i("5530"),s=(i("96cf"),i("d81d"),i("b64b"),i("a434"),i("1799")),o=i("acd6"),c={page:1,limit:20,importance:"",title:"",type:"",sort:"+id"},u={CN:"China",US:"USA",JP:"Japan",EU:"Eurozone"},d={published:"success",draft:"info",deleted:"danger"},p={name:"ComplexTable",components:{Pagination:s["a"]},data:function(){return{importanceOptions:[1,2,3],typeOptions:Object.keys(u).map((function(t){return{label:u[t],value:t}})),sortOptions:[{label:"ID Descending",value:"-id"},{label:"ID Ascending",value:"+id"}],statusOptions:Object.keys(d),listQuery:Object(r["a"])({},c),listLoading:null,listData:[],tableDefaultSort:[{prop:"id",order:"+id"}],readingDialog:{},editArticleDialogData:{},updatingArticle:!1,reviewerColVisible:!1,total:0}},filters:{getTagtypeFromStatus:function(t){return d[t]},getTypeValue:function(t){return u[t]}},created:function(){this.getListData()},methods:{deleteBtnClick:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function i(){var a,l,n;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return a=e.editArticleDialogData,l=e.listData,n=e.$message({message:"正在删除...",iconClass:"el-icon-loading"}),i.prev=2,i.next=5,Object(o["b"])(a);case 5:n.close(),e.showNotification("success","成功","删除成功"),l.splice(t,1),i.next=13;break;case 10:i.prev=10,i.t0=i["catch"](2),n.close();case 13:case"end":return i.stop()}}),i,null,[[2,10]])})))()},sortChange:function(t){var e=t.prop,i=t.order;"id"===e&&this.sortByID(i)},sortByID:function(t){this.listQuery.sort="ascending"===t?"+id":"-id",this.handleFilter()},handleFilter:function(){this.listQuery.page=1,this.getListData()},appendArticleClick:function(){this.editArticleDialogData={visible:!0,timestamp:Date.now(),importance:1,author:"LuZhiHao",status:"published",pageviews:0,id:parseInt(100*Math.random())+1024},this.editDialogMode="create",this.editArticleConfirmCb=this.getEditArticleConfirmCb(0,0)},editArticleDialogConfirm:function(){this.editArticleConfirmCb()},getEditArticleConfirmCb:function(t,e){return function(){var i=this,a=this.listData,l=this.editArticleDialogData,s=this.showNotification,c=this.showMessage,u=this.editDialogMode;this.$refs.editArticleDialogForm.validate(function(){var d=Object(n["a"])(regeneratorRuntime.mark((function n(d){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!d){n.next=23;break}if(i.updatingArticle=!0,n.prev=2,"create"!==u){n.next=8;break}return n.next=6,Object(o["a"])(l);case 6:n.next=11;break;case 8:if("edit"!==u){n.next=11;break}return n.next=11,Object(o["f"])(l);case 11:i.updatingArticle=!1,a.splice(t,e,l),i.editArticleDialogData=Object(r["a"])(Object(r["a"])({},l),{},{visible:!1}),s("success","成功","更新成功"),n.next=21;break;case 17:n.prev=17,n.t0=n["catch"](2),i.updatingArticle=!1,c("更新文章失败,请稍后重试!","error");case 21:n.next=24;break;case 23:c("存在不合法字段,请修改后再保存!","error");case 24:case"end":return n.stop()}}),n,null,[[2,17]])})));return function(t){return d.apply(this,arguments)}}())}},editArticleClick:function(t,e){this.editArticleDialogData=Object(r["a"])({visible:!0},t),this.editDialogMode="edit",this.editArticleConfirmCb=this.getEditArticleConfirmCb(e,1)},readingBtnClick:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function i(){var a,l;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return e.readingDialog=Object(r["a"])(Object(r["a"])({},e.readingDialog),{},{visible:!0,title:"Reading statistics",loading:!0}),i.next=3,Object(o["e"])(t);case 3:a=i.sent,l=a.data.pvData,e.readingDialog=Object(r["a"])(Object(r["a"])({},e.readingDialog),{},{loading:!1,key:"key",value:"pv",pvData:l});case 6:case"end":return i.stop()}}),i)})))()},showNotification:function(t,e,i){this.$notify[t]({title:e,message:i})},showMessage:function(t,e){this.$message({message:t,type:e,duration:1500})},draftBtnClick:function(t){t.status="draft",this.showMessage("操作成功","success")},publishBtnClick:function(t){t.status="published",this.showMessage("操作成功","success")},getListData:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var i,a,l,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.listLoading=!0,e.next=3,Object(o["d"])(t.listQuery);case 3:i=e.sent,a=i.data,l=a.items,n=a.total,console.log("items --- ",l),t.listLoading=!1,t.listData=l,t.total=n;case 11:case"end":return e.stop()}}),e)})))()}}},g=p,m=(i("a600"),i("2877")),f=Object(m["a"])(g,a,l,!1,null,"f64f80cc",null);e["default"]=f.exports}}]);