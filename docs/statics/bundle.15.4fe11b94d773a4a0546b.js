(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{156:function(e,t,a){var r={"./bash":142,"./bash.js":142,"./css":143,"./css.js":143,"./htmlbars":144,"./htmlbars.js":144,"./javascript":145,"./javascript.js":145,"./scss":146,"./scss.js":146,"./typescript":147,"./typescript.js":147};function l(e){var t=m(e);return a(t)}function m(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}l.keys=function(){return Object.keys(r)},l.resolve=m,e.exports=l,l.id=156},568:function(e,t,a){"use strict";var r=a(151),l=(a(152),a(153)),m=(a(154),function(){return r.createElement(r.Fragment,{},r.createElement("h1",{id:"formitemgrid",className:"react-demo-h1"},"FormItemGrid"),r.createElement("h2",{id:"介绍",className:"react-demo-h2"},"介绍"),r.createElement("p",{className:"react-demo-p"},"实现表单字段的局部网格布局能力"),r.createElement("h2",{id:"依赖",className:"react-demo-h2"},"依赖"),r.createElement(l,{code:"import { FormItemGrid } from '@uform/next(antd)'\n",justCode:!0,lang:"javascript"}),r.createElement("h2",{id:"api",className:"react-demo-h2"},"API"),r.createElement("table",{className:"react-demo-table"},r.createElement("thead",{className:"react-demo-thead"},r.createElement("tr",{className:"react-demo-tr"},r.createElement("th",{align:null,className:"react-demo-th"},"属性名称"),r.createElement("th",{align:null,className:"react-demo-th"},"属性描述"),r.createElement("th",{align:null,className:"react-demo-th"},"属性类型"),r.createElement("th",{align:null,className:"react-demo-th"},"默认值"))),r.createElement("tbody",{className:"react-demo-tbody"},r.createElement("tr",{className:"react-demo-tr"},r.createElement("td",{align:null,className:"react-demo-td"},"gutter"),r.createElement("td",{align:null,className:"react-demo-td"},"列间距"),r.createElement("td",{align:null,className:"react-demo-td"},"number"),r.createElement("td",{align:null,className:"react-demo-td"},"0")),r.createElement("tr",{className:"react-demo-tr"},r.createElement("td",{align:null,className:"react-demo-td"},"cols"),r.createElement("td",{align:null,className:"react-demo-td"},"内部网格宽度占比"),r.createElement("td",{align:null,className:"react-demo-td"},r.createElement("code",{className:"react-demo-code"},"array<string | object>")),r.createElement("td",{align:null,className:"react-demo-td"},"不传值默认等比分割，可传入类似","[4, 8]","进行不等比分割，如果数组元素传对象，则是",r.createElement("code",{className:"react-demo-code"},"[{span:3,offset:0}]"),"这样的形式")),r.createElement("tr",{className:"react-demo-tr"},r.createElement("td",{align:null,className:"react-demo-td"},"description"),r.createElement("td",{align:null,className:"react-demo-td"},"描述文案"),r.createElement("td",{align:null,className:"react-demo-td"},"string/JSX"),r.createElement("td",{align:null,className:"react-demo-td"})),r.createElement("tr",{className:"react-demo-tr"},r.createElement("td",{align:null,className:"react-demo-td"},"title"),r.createElement("td",{align:null,className:"react-demo-td"},"标题"),r.createElement("td",{align:null,className:"react-demo-td"},"string/JSX"),r.createElement("td",{align:null,className:"react-demo-td"})))),r.createElement("h2",{id:"用例",className:"react-demo-h2"},"用例"),r.createElement(l,{code:'import React from \'react\'\nimport ReactDOM from \'react-dom\'\nimport { SchemaForm, Field, FormCard, FormItemGrid } from \'@uform/next(antd)\'\n\nReactDOM.render(\n  <SchemaForm>\n    <FormCard title="基本信息">\n      ​ <Field name="aaa" type="string" title="字段1" />\n      ​ <Field name="bbb" type="number" title="字段2" />\n      ​ <Field name="ccc" type="date" title="字段3" />​\n    </FormCard>\n    <FormCard title="详细信息">\n      <FormItemGrid title="字段4" gutter={10} cols={[9, 15]}>\n        <Field name="ddd" type="number" />\n        ​ <Field name="eee" type="date" />\n      </FormItemGrid>\n    </FormCard>\n  </SchemaForm>,\n  document.getElementById(\'root\')\n)\n',justCode:!0,lang:"javascript"}))});m.meta={username:"zhili.wzl",email:"wangzhili56@126.com"},e.exports=m}}]);
//# sourceMappingURL=bundle.15.4fe11b94d773a4a0546b.js.map