import{N as w,u as f,a as y,r as d,j as e,B as m,b as L,s as u,c as A,d as S,n as v,e as z,f as M,L as D}from"./index-4263025b.js";import{n as j,F as O,i as P,W as T,M as Z,T as $}from"./commom.styled-f66eb4ff.js";const F=t=>t.contacts.items,q=t=>t.contacts.isLoading,J=t=>t.contacts.error;w.Notify.init({position:"center-top"});const R=()=>{const t=f(F),a=y(),[n,s]=d.useState(""),[o,c]=d.useState(""),i=j(),l=j(),r=p=>{const{value:x,name:g}=p.currentTarget;switch(g){case"name":s(x);break;case"number":c(x);break;default:return}},h=()=>{s(""),c("")},b=p=>{p.preventDefault();const x=p.target,{name:g,number:E}=x.elements,C=g.value,I=E.value;if(t.find(B=>B.name===C)){w.Notify.info(`${g.value} is already in contacts`),s("");return}else h(),a(L({name:C,number:I}))};return e.jsxs(O,{onSubmit:b,children:[e.jsx("label",{htmlFor:i,children:"Name:"}),e.jsx("input",{id:i,type:"text",name:"name",pattern:"^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:n,onChange:r}),e.jsx("label",{htmlFor:l,children:"Number:"}),e.jsx("input",{id:l,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:o,onChange:r}),e.jsx(m,{type:"submit",variant:"addBtn",children:"Add contact"})]})},W=u.li`
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

`,N=document.getElementById("modal-root");console.log(N);const k=({toggleModal:t,children:a})=>{d.useEffect(()=>{const s=o=>{o instanceof KeyboardEvent&&o.code==="Escape"&&t()};return window.addEventListener("keydown",s),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",s)}},[t]);const n=s=>{s.target===s.currentTarget&&t()};return A.createPortal(e.jsx(K,{onClick:n,children:e.jsxs(Y,{children:[e.jsx(G,{onClick:t,children:e.jsx("use",{xlinkHref:`${P}#close`})}),a]})}),N)},Q=u.ul`
display: flex;
justify-content: space-around;
align-items: center;
padding: 16px;
`,U=({id:t,name:a,toggleModal:n})=>{const s=y(),o=()=>{s(S(t)),n()};return e.jsxs(e.Fragment,{children:[e.jsxs("h3",{children:['Do you really want to delete contact "',a,'"?']}),e.jsxs(Q,{children:[e.jsx("li",{children:e.jsx(m,{type:"button",variant:"delBtn",onClick:o,children:"Yes"})}),e.jsx("li",{children:e.jsx(m,{type:"button",variant:"logOutBtn",onClick:n,children:"Cancel"})})]})]})},V=u.form`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 16px;
  margin-bottom: 16px;
  padding: 16px;
  width: 500px;
  border: 2px solid black;
  border-radius: 4px;
`,X=({toggleModal:t,contact:a})=>{const[n,s]=d.useState(a.name),[o,c]=d.useState(a.number),i=v(),l=v(),r=b=>{const{value:p,name:x}=b.currentTarget;switch(x){case"name":s(p);break;case"number":c(p);break;default:return}},h=b=>{b.preventDefault(),t()};return e.jsxs(V,{onSubmit:h,children:[e.jsx("label",{htmlFor:i,children:"Name:"}),e.jsx("input",{id:i,type:"text",name:"name",pattern:"^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:n,onChange:r}),e.jsx("label",{htmlFor:l,children:"Number:"}),e.jsx("input",{id:l,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:o,onChange:r}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(m,{type:"submit",variant:"addBtn",children:"Add"})}),e.jsx("li",{children:e.jsx(m,{type:"button",variant:"logOutBtn",onClick:t,children:"Cancel"})})]})]})},_=({contact:t})=>{const[a,n]=d.useState(!1),[s,o]=d.useState(!1),c=()=>{n(!1)},i=()=>{o(!1)},{id:l,name:r,number:h}=t;return e.jsxs(e.Fragment,{children:[e.jsxs(W,{children:[r," : ",h,e.jsxs(H,{children:[e.jsx("li",{children:e.jsx(m,{variant:"delBtn",type:"button",onClick:()=>n(!0),children:"Delete"})}),e.jsx("li",{children:e.jsx(m,{variant:"addBtn",type:"button",onClick:()=>o(!0),children:"Edit"})})]})]}),a&&e.jsx(k,{toggleModal:c,children:e.jsx(U,{name:r,id:l,toggleModal:c})}),s&&e.jsx(k,{toggleModal:i,children:e.jsx(X,{contact:t,toggleModal:i})})]})},ee=({contacts:t})=>{const a=f(q);return e.jsx("ul",{children:a?e.jsx("p",{children:"Loading..."}):t&&t.map(n=>e.jsx(_,{contact:n},n.id))})},te=u.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 16px;
  padding: 16px;
  border: 2px solid black;
  border-radius: 4px;
`,ne=({onChangeFilter:t,value:a})=>{const n=j();return e.jsxs(te,{children:[e.jsx("label",{htmlFor:n,children:"Find contacts by name:"}),e.jsx("input",{type:"text",name:"filter",value:a,onChange:t,id:n})]})},oe=()=>{const t=f(F),a=f(z),n=f(J),s=y(),[o,c]=d.useState("");d.useEffect(()=>{s(M())},[s]);const i=r=>{c(r.target.value.trim().toLowerCase())},l=t.filter(r=>r.name.toLowerCase().includes(o));return e.jsxs(T,{children:[e.jsx(Z,{className:"title",children:"Phonebook"}),a&&!n&&e.jsx(D,{}),e.jsx(R,{}),e.jsx($,{className:"title",children:"Contacts"}),e.jsx(ne,{value:o,onChangeFilter:i}),!!t&&e.jsx(ee,{contacts:l})]})};export{oe as default};
