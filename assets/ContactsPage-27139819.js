import{N as w,u as j,a as y,r as c,j as e,B as h,b as E,s as u,c as I,d as S,n as F,e as A,f as z,g as D,L as M}from"./index-2408311a.js";import{n as v,F as O,i as $,W as P,M as T,T as Z}from"./commom.styled-5aa00168.js";const k=t=>t.contacts.items,q=t=>t.contacts.isLoading,J=t=>t.contacts.error;w.Notify.init({position:"center-top"});const R=()=>{const t=j(k),a=y(),[n,s]=c.useState(""),[o,l]=c.useState(""),d=v(),p=v(),i=x=>{const{value:b,name:m}=x.currentTarget;switch(m){case"name":s(b);break;case"number":l(b);break;default:return}},r=()=>{s(""),l("")},C=x=>{x.preventDefault();const b=x.target,{name:m,number:f}=b.elements,g=m.value,N=f.value;if(t.find(B=>B.name.toLowerCase()===g.toLowerCase())){w.Notify.warning(`${m.value} is already in contacts`),s("");return}else r(),a(E({name:g,number:N}))};return e.jsxs(O,{onSubmit:C,children:[e.jsx("label",{htmlFor:d,children:"Name:"}),e.jsx("input",{id:d,type:"text",name:"name",pattern:"^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:n,onChange:i}),e.jsx("label",{htmlFor:p,children:"Number:"}),e.jsx("input",{id:p,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:o,onChange:i}),e.jsx(h,{type:"submit",variant:"addBtn",children:"Add contact"})]})},W=u.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 16px;
`,H=u.ul`
display: flex;
align-items: center;
justify-content: space-between;
gap: 16px;


`,K=u.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  background-color: rgb(200, 200, 200, 0.5);
  overflow-y: auto;
`,Y=u.div`
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

`,G=u.svg`
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

`,Q=document.getElementById("modal-root"),L=({toggleModal:t,children:a})=>{c.useEffect(()=>{const s=o=>{o instanceof KeyboardEvent&&o.code==="Escape"&&t()};return window.addEventListener("keydown",s),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",s)}},[t]);const n=s=>{s.target===s.currentTarget&&t()};return I.createPortal(e.jsx(K,{onClick:n,children:e.jsxs(Y,{children:[e.jsx(G,{onClick:t,children:e.jsx("use",{xlinkHref:`${$}#close`})}),a]})}),Q)},U=u.ul`
display: flex;
justify-content: space-around;
align-items: center;
padding: 16px;
`,V=({id:t,name:a,toggleModal:n})=>{const s=y(),o=()=>{s(S(t)),n()};return e.jsxs(e.Fragment,{children:[e.jsxs("h3",{children:['Do you really want to delete contact "',a,'"?']}),e.jsxs(U,{children:[e.jsx("li",{children:e.jsx(h,{type:"button",variant:"delBtn",onClick:o,children:"Yes"})}),e.jsx("li",{children:e.jsx(h,{type:"button",variant:"logOutBtn",onClick:n,children:"Cancel"})})]})]})},X=u.form`
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
`,ee=({toggleModal:t,contact:a})=>{const[n,s]=c.useState(a.name),[o,l]=c.useState(a.number),[d]=c.useState(a.id),p=F(),i=F(),r=y(),C=j(k),x=m=>{const{value:f,name:g}=m.currentTarget;switch(g){case"name":s(f);break;case"number":l(f);break;default:return}},b=m=>{m.preventDefault();const f={id:d,item:{name:n,number:o}};if(C.find(g=>g.name.toLowerCase()===n.toLowerCase())){w.Notify.warning(`${n} is already in contacts`);return}else r(A(f));t()};return e.jsxs(X,{onSubmit:b,children:[e.jsx("label",{htmlFor:p,children:"Name:"}),e.jsx("input",{id:p,type:"text",name:"name",pattern:"^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:n,onChange:x}),e.jsx("label",{htmlFor:i,children:"Number:"}),e.jsx("input",{id:i,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:o,onChange:x}),e.jsxs(_,{children:[e.jsx("li",{children:e.jsx(h,{type:"submit",variant:"addBtn",children:"Done"})}),e.jsx("li",{children:e.jsx(h,{type:"button",variant:"logOutBtn",onClick:t,children:"Cancel"})})]})]})},te=({contact:t})=>{const[a,n]=c.useState(!1),[s,o]=c.useState(!1),l=()=>{n(!1)},d=()=>{o(!1)},{id:p,name:i,number:r}=t;return e.jsxs(e.Fragment,{children:[e.jsxs(W,{children:[i," : ",r,e.jsxs(H,{children:[e.jsx("li",{children:e.jsx(h,{variant:"delBtn",type:"button",onClick:()=>n(!0),children:"Delete"})}),e.jsx("li",{children:e.jsx(h,{variant:"logOutBtn",type:"button",onClick:()=>o(!0),children:"Edit"})})]})]}),a&&e.jsx(L,{toggleModal:l,children:e.jsx(V,{name:i,id:p,toggleModal:l})}),s&&e.jsx(L,{toggleModal:d,children:e.jsx(ee,{contact:t,toggleModal:d})})]})},ne=({contacts:t})=>{const a=j(q);return e.jsx("ul",{children:a?e.jsx("p",{children:"Loading..."}):t&&t.map(n=>e.jsx(te,{contact:n},n.id))})},se=u.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 16px;
  padding: 16px;
  border: 2px solid black;
  border-radius: 4px;
`,ae=({onChangeFilter:t,value:a})=>{const n=v();return e.jsxs(se,{children:[e.jsx("label",{htmlFor:n,children:"Find contacts by name:"}),e.jsx("input",{type:"text",name:"filter",value:a,onChange:t,id:n})]})},ie=()=>{const t=j(k),a=j(z),n=j(J),s=y(),[o,l]=c.useState("");c.useEffect(()=>{s(D())},[s]);const d=r=>{l(r.target.value.trim().toLowerCase())},i=[...t.filter(r=>r.name.toLowerCase().includes(o))].sort((r,C)=>r.name.localeCompare(C.name));return e.jsxs(P,{children:[e.jsx(T,{className:"title",children:"Phonebook"}),a&&!n&&e.jsx(M,{}),e.jsx(R,{}),e.jsx(Z,{className:"title",children:"Contacts"}),e.jsx(ae,{value:o,onChangeFilter:d}),!!t&&e.jsx(ne,{contacts:i})]})};export{ie as default};
