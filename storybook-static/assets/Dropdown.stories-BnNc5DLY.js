import{j as e,r as de}from"./index-B_YavJp2.js";import{r as n}from"./index-C2WPW1L7.js";import"./index-DX7rA-C0.js";function ue(t,o){const[c,i]=n.useState(t);return n.useEffect(()=>{const d=setTimeout(()=>{i(t)},o);return()=>{clearTimeout(d)}},[t,o]),c}const ae=({className:t})=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:t,width:"24",height:"24",children:e.jsx("path",{fillRule:"evenodd",d:"M5.47 8.97a.75.75 0 0 1 1.06 0L12 14.44l5.47-5.47a.75.75 0 1 1 1.06 1.06l-6 6a.75.75 0 0 1-1.06 0l-6-6a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"})});ae.__docgenInfo={description:"",methods:[],displayName:"ChevronDown"};const se=({className:t})=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:t,width:"24",height:"24",children:e.jsx("path",{fillRule:"evenodd",d:"M11 3a8 8 0 1 1-5.29 14.04l-3.61 3.61a1 1 0 0 1-1.42-1.42l3.61-3.61A8 8 0 0 1 11 3Zm0 2a6 6 0 1 0 4.24 10.24 1 1 0 0 1 .07-.07A6 6 0 0 0 11 5Z",clipRule:"evenodd"})});se.__docgenInfo={description:"",methods:[],displayName:"Magnifier"};const re=({className:t})=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:t,width:"12",height:"12",children:e.jsx("path",{fillRule:"evenodd",d:"M6.22 6.22a.75.75 0 0 1 1.06 0L12 10.94l4.72-4.72a.75.75 0 1 1 1.06 1.06L13.06 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L12 13.06l-4.72 4.72a.75.75 0 1 1-1.06-1.06L10.94 12 6.22 7.28a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"})});re.__docgenInfo={description:"",methods:[],displayName:"Times"};const pe=(t,o,c,i,d,u)=>{n.useEffect(()=>{const f=r=>{const p=r.target;c&&(i!=null&&i.current)&&i.current.contains(p)||u!=null&&u.current&&u.current.contains(p)||d!=null&&d.current&&d.current.contains(p)||t.current&&t.current.contains(p)||o()},m=r=>{setTimeout(()=>{f(r)},0)};return document.addEventListener("mousedown",m),()=>{document.removeEventListener("mousedown",m)}},[t,o,c,i,d,u])},V=({search:t,handleFilter:o,filtered:c,highlightText:i,handleSelect:d,selected:u,inputRef:f,optionRef:m})=>e.jsxs("div",{id:"options",className:"absolute w-full shadow-xs z-[1000] bg-white",style:t?{marginTop:4}:{},children:[t&&e.jsxs("div",{className:"flex items-center border-[1px] p-1 border-gray-200 w-full",children:[e.jsx("div",{className:"px-1",children:e.jsx(se,{})}),e.jsx("input",{type:"text",className:"outline-none w-full",onChange:o,ref:f})]}),e.jsx("div",{className:"flex flex-col w-full border-x-[1px] border-b-[1px] border-gray-200 text-sm",children:c.map(r=>{const p=u.some(a=>a.value===r.value);return e.jsx("span",{onClick:()=>d(r),className:`p-1.5 w-full cursor-pointer ${p?"bg-blue-200":"hover:bg-green-200"}`,ref:m,children:r.render?r.render:i(r.label)},r.value)})})]}),ne=({items:t=[],maxOptions:o=5,multi:c=!1,search:i=!0,outlined:d=!1,placeholder:u="",maxSelectedOptions:f=3,withPortal:m=!1})=>{const[r,p]=n.useState(""),[a,N]=n.useState([]),x=ue(r,200),[D,W]=n.useState(t),[v,P]=n.useState(!1),k=n.useRef(null),L=n.useRef(null),E=n.useRef(null),q=n.useRef(null),oe=()=>{!v&&r!==""&&p(""),P(!v)},g=n.useCallback(l=>{const s=l.target.value.toLowerCase();p(s);const h=t.filter(w=>w.label.toLowerCase().includes(s));W(h.slice(0,o))},[o]),_=l=>{if(a.some(s=>s.value===l.value))N(a.filter(s=>s.value!==l.value));else{if(c&&a.length>=f)return;N(c?[...a,l]:[l])}c||P(!1)},ie=(l,s)=>{l.stopPropagation(),N(a.filter(h=>h.value!==s.value))},ce=()=>a.length===0?u:a.length===1&&!c?a[0].render?a[0].render:a[0].label:a.map(l=>e.jsxs("div",{className:"flex items-center gap-1 px-2.5 bg-gray-200 text-sm rounded-full",onClick:s=>s.stopPropagation(),children:[l.render?l.render:l.label," ",e.jsx("span",{id:`chip_${l.value}`,className:"cursor-pointer text-white bg-black rounded-full z-[20]",onClick:s=>ie(s,l),children:e.jsx(re,{})})]},l.value)),A=l=>{if(!x)return[e.jsx("span",{children:l},"0")];const s=new RegExp(`(${x})`,"gi");return l.split(s).map((h,w)=>h.toLowerCase()===x.toLowerCase()?e.jsx("span",{className:"bg-green-300",children:h},w):e.jsx("span",{children:h},w))};return n.useEffect(()=>{x!==""?g({target:{value:x}}):W(t.slice(0,o))},[x,g,t,o]),pe(k,()=>P(!1),m,L,E,q),e.jsxs("div",{className:"relative",ref:k,children:[e.jsxs("div",{className:"flex justify-between items-center border-[1px] p-1 border-gray-200 cursor-pointer z-[10] shadow-sm",style:d?{backgroundColor:"#d1d5dc"}:{},onClick:oe,children:[e.jsx("div",{className:"text-sm px-1 flex items-center gap-1 select-none",children:ce()}),e.jsx(ae,{})]}),v&&m&&de.createPortal(e.jsx(V,{filtered:D,handleFilter:g,highlightText:A,search:i,handleSelect:_,selected:a,inputRef:E,optionRef:q}),L.current||document.body),e.jsx("div",{ref:L}),v&&!m&&e.jsx(V,{filtered:D,handleFilter:g,highlightText:A,search:i,handleSelect:_,selected:a})]})};ne.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{items:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  label: string;\r
  value: string;\r
  render?: ReactNode;\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"render",value:{name:"ReactNode",required:!1}}]}}],raw:"DropdownList[]"},description:"",defaultValue:{value:"[]",computed:!1}},search:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},multi:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},maxOptions:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"5",computed:!1}},outlined:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},maxSelectedOptions:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3",computed:!1}},withPortal:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const fe={title:"Components/Dropdown",component:ne,argTypes:{items:{control:"object"},search:{control:"boolean"},multi:{control:"boolean"},maxOptions:{control:{type:"number",min:1,max:10,step:1}},outlined:{control:"boolean"},placeholder:{control:"text"},maxSelectedOptions:{control:{type:"number",min:1,max:10,step:1}},withPortal:{control:"boolean"}}},M=[{label:"Aji Pangestu",value:"option1",render:e.jsx("div",{className:"text-red-400",children:"👨🏻 Aji Pangestu"})},{label:"Boy William",value:"option2",render:e.jsx("div",{className:"text-blue-400",children:"👦🏻 Boy William"})},{label:"One Direction",value:"option3",render:e.jsx("div",{className:"text-amber-400",children:"🩹 One Direction"})},{label:"Cut Hawa",value:"option4",render:e.jsx("div",{className:"text-purple-400",children:"👩🏻‍🦰 Cut Hawa"})},{label:"Cut Sarah",value:"option5",render:e.jsx("div",{className:"text-green-400",children:"👩🏻 Cut Sarah"})},{label:"Cut Rumaisha Cut",value:"option6",render:e.jsx("div",{className:"text-pink-400",children:"👶🏻 Cut Rumaisha Cut"})},{label:"Brad Pitt",value:"option7",render:e.jsx("div",{className:"text-yellow-400",children:"👨🏻‍🦰 Brad Pitt"})},{label:"Foxy Shazam",value:"option8",render:e.jsx("div",{className:"text-rose-400",children:"🤡 Foxy Shazam"})},{label:"Yoshi 2.0",value:"option9",render:e.jsx("div",{className:"text-blue-400",children:"👨🏻‍🦱 Yoshi 2.0"})},{label:"Mario & Yoshi",value:"option10",render:e.jsx("div",{className:"text-green-400",children:"🍄 Mario & Yoshi"})}],T=[{label:"Aji Pangestu",value:"option1"},{label:"Boy William",value:"option2"},{label:"One Direction",value:"option3"},{label:"Cut Hawa",value:"option4"},{label:"Cut Sarah",value:"option5"},{label:"Cut Rumaisha Cut",value:"option6"},{label:"Brad Pitt",value:"option7"},{label:"Foxy Shazam",value:"option8"},{label:"Yoshi 2.0",value:"option9"},{label:"Mario & Yoshi",value:"option10"}],b={args:{items:M,search:!1,multi:!1,maxOptions:5,outlined:!1,placeholder:"Single Select Default",maxSelectedOptions:5,withPortal:!1}},S={args:{items:T,search:!0,multi:!1,maxOptions:5,outlined:!1,placeholder:"Single Select with Search",maxSelectedOptions:5,withPortal:!1}},j={args:{items:M,search:!1,multi:!0,maxOptions:5,outlined:!1,placeholder:"Multiple Selection without Search",maxSelectedOptions:5,withPortal:!1}},y={args:{items:T,search:!0,multi:!0,maxOptions:5,outlined:!1,placeholder:"Multiple Selection with Search",maxSelectedOptions:5,withPortal:!1}},O={args:{items:M,search:!1,multi:!1,maxOptions:5,outlined:!0,placeholder:"Outlined",maxSelectedOptions:5,withPortal:!1}},C={args:{items:T,search:!0,multi:!0,maxOptions:10,outlined:!0,placeholder:"All Props TRUE with Portal",maxSelectedOptions:10,withPortal:!0}};var B,R,z;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    items: ddList,
    search: false,
    multi: false,
    maxOptions: 5,
    outlined: false,
    placeholder: 'Single Select Default',
    maxSelectedOptions: 5,
    withPortal: false
  }
}`,...(z=(R=b.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};var Y,F,I;S.parameters={...S.parameters,docs:{...(Y=S.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    items: ddListWithoutRender,
    search: true,
    multi: false,
    maxOptions: 5,
    outlined: false,
    placeholder: 'Single Select with Search',
    maxSelectedOptions: 5,
    withPortal: false
  }
}`,...(I=(F=S.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var Z,H,$;j.parameters={...j.parameters,docs:{...(Z=j.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    items: ddList,
    search: false,
    multi: true,
    maxOptions: 5,
    outlined: false,
    placeholder: 'Multiple Selection without Search',
    maxSelectedOptions: 5,
    withPortal: false
  }
}`,...($=(H=j.parameters)==null?void 0:H.docs)==null?void 0:$.source}}};var K,U,G;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    items: ddListWithoutRender,
    search: true,
    multi: true,
    maxOptions: 5,
    outlined: false,
    placeholder: 'Multiple Selection with Search',
    maxSelectedOptions: 5,
    withPortal: false
  }
}`,...(G=(U=y.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var J,Q,X;O.parameters={...O.parameters,docs:{...(J=O.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    items: ddList,
    search: false,
    multi: false,
    maxOptions: 5,
    outlined: true,
    placeholder: 'Outlined',
    maxSelectedOptions: 5,
    withPortal: false
  }
}`,...(X=(Q=O.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var ee,te,le;C.parameters={...C.parameters,docs:{...(ee=C.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    items: ddListWithoutRender,
    search: true,
    multi: true,
    maxOptions: 10,
    outlined: true,
    placeholder: 'All Props TRUE with Portal',
    maxSelectedOptions: 10,
    withPortal: true
  }
}`,...(le=(te=C.parameters)==null?void 0:te.docs)==null?void 0:le.source}}};const ve=["Default","WithSearch","WithMultiple","MultipleWithSearch","Outlined","AllWithPortal"];export{C as AllWithPortal,b as Default,y as MultipleWithSearch,O as Outlined,j as WithMultiple,S as WithSearch,ve as __namedExportsOrder,fe as default};
