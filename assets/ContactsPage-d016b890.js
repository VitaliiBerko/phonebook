import{N as k,u as g,a as y,r as i,j as e,B as x,b as L,s as u,c as S,d as A,n as F,e as z,f as D,g as M,L as O}from"./index-ac797db2.js";import{n as v,F as $,i as P,W as T,M as Z,T as q}from"./commom.styled-14702061.js";const w=t=>t.contacts.items,J=t=>t.contacts.isLoading,R=t=>t.contacts.error;k.Notify.init({position:"center-top"});const W=()=>{const t=g(w),a=y(),[n,s]=i.useState(""),[o,c]=i.useState(""),l=v(),d=v(),r=m=>{const{value:h,name:p}=m.currentTarget;switch(p){case"name":s(h);break;case"number":c(h);break;default:return}},j=()=>{s(""),c("")},C=m=>{m.preventDefault();const h=m.target,{name:p,number:b}=h.elements,f=p.value,E=b.value;if(t.find(I=>I.name===f)){k.Notify.warning(`${p.value} is already in contacts`),s("");return}else j(),a(L({name:f,number:E}))};return e.jsxs($,{onSubmit:C,children:[e.jsx("label",{htmlFor:l,children:"Name:"}),e.jsx("input",{id:l,type:"text",name:"name",pattern:"^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:n,onChange:r}),e.jsx("label",{htmlFor:d,children:"Number:"}),e.jsx("input",{id:d,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:o,onChange:r}),e.jsx(x,{type:"submit",variant:"addBtn",children:"Add contact"})]})},H=u.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 16px;
`,K=u.ul`
display: flex;
align-items: center;
justify-content: space-between;
gap: 16px;


`,Y=u.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  background-color: rgb(200, 200, 200, 0.5);
  overflow-y: auto;
`,G=u.div`
position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  min-width: 360px;
  max-width: 1200px;
  max-height: 90%;
  padding: 40px 18px;
  border: 1px solid  rgba(220, 227, 229, 0.8);
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0px 0px 16px 4px rgba(17, 17, 17, 0.4);

`,Q=u.svg`
position: absolute;
  top: 14px;
  right: 14px;
  display: block;
  width: 20px;
  height: 20px;
  padding: 0;
  margin: 0;
  border: none;
  stroke: black;
  fill: transparent;
  cursor: pointer;
  transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  :focus {
    stroke: #2b78ef;
  }

`,B=document.getElementById("modal-root");console.log(B);const N=({toggleModal:t,children:a})=>{i.useEffect(()=>{const s=o=>{o instanceof KeyboardEvent&&o.code==="Escape"&&t()};return window.addEventListener("keydown",s),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",s)}},[t]);const n=s=>{s.target===s.currentTarget&&t()};return S.createPortal(e.jsx(Y,{onClick:n,children:e.jsxs(G,{children:[e.jsx(Q,{onClick:t,children:e.jsx("use",{xlinkHref:`${P}#close`})}),a]})}),B)},U=u.ul`
display: flex;
justify-content: space-around;
align-items: center;
padding: 16px;
`,V=({id:t,name:a,toggleModal:n})=>{const s=y(),o=()=>{s(A(t)),n()};return e.jsxs(e.Fragment,{children:[e.jsxs("h3",{children:['Do you really want to delete contact "',a,'"?']}),e.jsxs(U,{children:[e.jsx("li",{children:e.jsx(x,{type:"button",variant:"delBtn",onClick:o,children:"Yes"})}),e.jsx("li",{children:e.jsx(x,{type:"button",variant:"logOutBtn",onClick:n,children:"Cancel"})})]})]})},X=u.form`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 16px;
  margin-bottom: 16px;
  padding: 16px;
  width: 500px;
  border: 2px solid black;
  border-radius: 4px;
`,_=u.ul`
display: flex;
justify-content: space-around;
align-items: center;
`,ee=({toggleModal:t,contact:a})=>{const[n,s]=i.useState(a.name),[o,c]=i.useState(a.number),[l]=i.useState(a.id),d=F(),r=F(),j=y(),C=g(w),m=p=>{const{value:b,name:f}=p.currentTarget;switch(f){case"name":s(b);break;case"number":c(b);break;default:return}},h=p=>{p.preventDefault();const b={id:l,item:{name:n,number:o}};if(C.find(f=>f.name===n)){k.Notify.warning(`${n} is already in contacts`);return}else j(z(b));t()};return e.jsxs(X,{onSubmit:h,children:[e.jsx("label",{htmlFor:d,children:"Name:"}),e.jsx("input",{id:d,type:"text",name:"name",pattern:"^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:n,onChange:m}),e.jsx("label",{htmlFor:r,children:"Number:"}),e.jsx("input",{id:r,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:o,onChange:m}),e.jsxs(_,{children:[e.jsx("li",{children:e.jsx(x,{type:"submit",variant:"addBtn",children:"Done"})}),e.jsx("li",{children:e.jsx(x,{type:"button",variant:"logOutBtn",onClick:t,children:"Cancel"})})]})]})},te=({contact:t})=>{const[a,n]=i.useState(!1),[s,o]=i.useState(!1),c=()=>{n(!1)},l=()=>{o(!1)},{id:d,name:r,number:j}=t;return e.jsxs(e.Fragment,{children:[e.jsxs(H,{children:[r," : ",j,e.jsxs(K,{children:[e.jsx("li",{children:e.jsx(x,{variant:"delBtn",type:"button",onClick:()=>n(!0),children:"Delete"})}),e.jsx("li",{children:e.jsx(x,{variant:"logOutBtn",type:"button",onClick:()=>o(!0),children:"Edit"})})]})]}),a&&e.jsx(N,{toggleModal:c,children:e.jsx(V,{name:r,id:d,toggleModal:c})}),s&&e.jsx(N,{toggleModal:l,children:e.jsx(ee,{contact:t,toggleModal:l})})]})},ne=({contacts:t})=>{const a=g(J);return e.jsx("ul",{children:a?e.jsx("p",{children:"Loading..."}):t&&t.map(n=>e.jsx(te,{contact:n},n.id))})},se=u.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 16px;
  padding: 16px;
  border: 2px solid black;
  border-radius: 4px;
`,ae=({onChangeFilter:t,value:a})=>{const n=v();return e.jsxs(se,{children:[e.jsx("label",{htmlFor:n,children:"Find contacts by name:"}),e.jsx("input",{type:"text",name:"filter",value:a,onChange:t,id:n})]})},ie=()=>{const t=g(w),a=g(D),n=g(R),s=y(),[o,c]=i.useState("");i.useEffect(()=>{s(M())},[s]);const l=r=>{c(r.target.value.trim().toLowerCase())},d=t.filter(r=>r.name.toLowerCase().includes(o));return e.jsxs(T,{children:[e.jsx(Z,{className:"title",children:"Phonebook"}),a&&!n&&e.jsx(O,{}),e.jsx(W,{}),e.jsx(q,{className:"title",children:"Contacts"}),e.jsx(ae,{value:o,onChangeFilter:l}),!!t&&e.jsx(ne,{contacts:d})]})};export{ie as default};
