import{N as w,u as f,a as C,r as d,j as e,B as p,b as B,s as m,c as L,d as S,n as v,e as z,f as M,L as D}from"./index-50947c2e.js";import{n as g,F as O,i as P,W as T,M as Z,T as $}from"./commom.styled-d8113ce2.js";const F=t=>t.contacts.items,q=t=>t.contacts.isLoading,J=t=>t.contacts.error;w.Notify.init({position:"center-top"});const R=()=>{const t=f(F),a=C(),[n,s]=d.useState(""),[o,c]=d.useState(""),i=g(),l=g(),r=u=>{const{value:x,name:j}=u.currentTarget;switch(j){case"name":s(x);break;case"number":c(x);break;default:return}},h=()=>{s(""),c("")},b=u=>{u.preventDefault();const x=u.target,{name:j,number:E}=x.elements,y=j.value,I=E.value;if(t.find(A=>A.name===y)){w.Notify.info(`${j.value} is already in contacts`),s("");return}else h(),a(B({name:y,number:I}))};return e.jsxs(O,{onSubmit:b,children:[e.jsx("label",{htmlFor:i,children:"Name:"}),e.jsx("input",{id:i,type:"text",name:"name",pattern:"^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:n,onChange:r}),e.jsx("label",{htmlFor:l,children:"Number:"}),e.jsx("input",{id:l,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:o,onChange:r}),e.jsx(p,{type:"submit",variant:"addBtn",children:"Add contact"})]})},W=m.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 16px;
`,H=m.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  background-color: rgb(200, 200, 200, 0.5);
  overflow-y: auto;
`,K=m.div`
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

`,Y=m.svg`
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

`,N=document.getElementById("modal-root");console.log(N);const k=({toggleModal:t,children:a})=>{d.useEffect(()=>{const s=o=>{o instanceof KeyboardEvent&&o.code==="Escape"&&t()};return window.addEventListener("keydown",s),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",s)}},[t]);const n=s=>{s.target===s.currentTarget&&t()};return L.createPortal(e.jsx(H,{onClick:n,children:e.jsxs(K,{children:[e.jsx(Y,{onClick:t,children:e.jsx("use",{xlinkHref:`${P}#close`})}),a]})}),N)},G=m.ul`
display: flex;
justify-content: space-around;
align-items: center;
padding: 16px;
`,Q=({id:t,name:a,toggleModal:n})=>{const s=C(),o=()=>{s(S(t)),n()};return e.jsxs(e.Fragment,{children:[e.jsxs("h3",{children:['Do you really want to delete contact "',a,'"?']}),e.jsxs(G,{children:[e.jsx("li",{children:e.jsx(p,{type:"button",variant:"delBtn",onClick:o,children:"Yes"})}),e.jsx("li",{children:e.jsx(p,{type:"button",variant:"logOutBtn",onClick:n,children:"Cancel"})})]})]})},U=m.form`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 16px;
  margin-bottom: 16px;
  padding: 16px;
  width: 500px;
  border: 2px solid black;
  border-radius: 4px;
`,V=({toggleModal:t,contact:a})=>{const[n,s]=d.useState(a.name),[o,c]=d.useState(a.number),i=v(),l=v(),r=b=>{const{value:u,name:x}=b.currentTarget;switch(x){case"name":s(u);break;case"number":c(u);break;default:return}},h=b=>{b.preventDefault(),t()};return e.jsxs(U,{onSubmit:h,children:[e.jsx("label",{htmlFor:i,children:"Name:"}),e.jsx("input",{id:i,type:"text",name:"name",pattern:"^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:n,onChange:r}),e.jsx("label",{htmlFor:l,children:"Number:"}),e.jsx("input",{id:l,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:o,onChange:r}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(p,{type:"submit",variant:"addBtn",children:"Add"})}),e.jsx("li",{children:e.jsx(p,{type:"button",variant:"logOutBtn",onClick:t,children:"Cancel"})})]})]})},X=({contact:t})=>{const[a,n]=d.useState(!1),[s,o]=d.useState(!1),c=()=>{n(!1)},i=()=>{o(!1)},{id:l,name:r,number:h}=t;return e.jsxs(e.Fragment,{children:[e.jsxs(W,{children:[r," : ",h,e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(p,{variant:"delBtn",type:"button",onClick:()=>n(!0),children:"Delete"})}),e.jsx("li",{children:e.jsx(p,{variant:"addBtn",type:"button",onClick:()=>o(!0),children:"Edit"})})]})]}),a&&e.jsx(k,{toggleModal:c,children:e.jsx(Q,{name:r,id:l,toggleModal:c})}),s&&e.jsx(k,{toggleModal:i,children:e.jsx(V,{contact:t,toggleModal:i})})]})},_=({contacts:t})=>{const a=f(q);return e.jsx("ul",{children:a?e.jsx("p",{children:"Loading..."}):t&&t.map(n=>e.jsx(X,{contact:n},n.id))})},ee=m.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 16px;
  padding: 16px;
  border: 2px solid black;
  border-radius: 4px;
`,te=({onChangeFilter:t,value:a})=>{const n=g();return e.jsxs(ee,{children:[e.jsx("label",{htmlFor:n,children:"Find contacts by name:"}),e.jsx("input",{type:"text",name:"filter",value:a,onChange:t,id:n})]})},ae=()=>{const t=f(F),a=f(z),n=f(J),s=C(),[o,c]=d.useState("");d.useEffect(()=>{s(M())},[s]);const i=r=>{c(r.target.value.trim().toLowerCase())},l=t.filter(r=>r.name.toLowerCase().includes(o));return e.jsxs(T,{children:[e.jsx(Z,{className:"title",children:"Phonebook"}),a&&!n&&e.jsx(D,{}),e.jsx(R,{}),e.jsx($,{className:"title",children:"Contacts"}),e.jsx(te,{value:o,onChangeFilter:i}),!!t&&e.jsx(_,{contacts:l})]})};export{ae as default};
