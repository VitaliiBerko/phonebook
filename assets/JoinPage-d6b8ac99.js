import{a as C,u as F,f as k,r as t,j as e,L as B,B as J,h as z}from"./index-ac797db2.js";import{n as l,F as L,B as N,S as x,i as j,W as q,T}from"./commom.styled-14702061.js";const Z=()=>{const w=C(),g=F(k),[b,n]=t.useState(""),[y,d]=t.useState(""),[f,c]=t.useState(""),[r,u]=t.useState(!0),m=l(),p=l(),h=l(),o=s=>{const{value:a,name:i}=s.currentTarget;switch(i){case"name":n(a);break;case"email":d(a);break;case"password":c(a);break;default:return}},v=s=>{s.preventDefault();const a=s.target,{name:i,email:P,password:S}=a.elements,E=i.value,I=P.value,A=S.value;w(z({name:E,email:I,password:A})),n(""),n(""),d(""),c("")};return g?e.jsx(B,{}):e.jsxs(L,{onSubmit:v,children:[e.jsx("label",{htmlFor:m,children:"Name"}),e.jsx("input",{id:m,type:"text",name:"name",pattern:"^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:b,onChange:o}),e.jsx("label",{htmlFor:p,children:"Email"}),e.jsx("input",{id:p,type:"email",name:"email",title:"Email must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:y,onChange:o}),e.jsx("label",{htmlFor:h,children:"Password"}),e.jsx("input",{id:h,type:r?"password":"text",name:"password",title:"Password must be digits and have more then 7 characters and can contain spaces, dashes, parentheses and can start with +",placeholder:"Your password must be 7 characters or longer.",required:!0,value:f,onChange:o}),e.jsx(N,{type:"button",onClick:()=>u(!r),children:r?e.jsx(x,{children:e.jsx("use",{xlinkHref:`${j}#closed-eye`})}):e.jsxs(x,{children:[" ",e.jsx("use",{xlinkHref:`${j}#opened-eye`})]})}),e.jsx(J,{type:"submit",variant:"addBtn",children:"Join"})]})},H=()=>e.jsxs(q,{children:[e.jsx(T,{children:"Please, join to us!"}),e.jsx(Z,{})]});export{H as default};