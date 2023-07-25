import{N as y,u as p,a as g,r as l,j as e,B as b,b as I,s as d,c as E,d as B,e as A,f as S,L as D}from"./index-8932eae8.js";import{n as f,F as z,i as M,W as O,M as P,T}from"./commom.styled-1d556f97.js";const C=t=>t.contacts.items,Z=t=>t.contacts.isLoading,$=t=>t.contacts.error;y.Notify.init({position:"center-top"});const q=()=>{const t=p(C),a=g(),[n,s]=l.useState(""),[o,r]=l.useState(""),i=f(),u=f(),c=m=>{const{value:x,name:h}=m.currentTarget;switch(h){case"name":s(x);break;case"number":r(x);break;default:return}},k=()=>{s(""),r("")},w=m=>{m.preventDefault();const x=m.target,{name:h,number:F}=x.elements,j=h.value,L=F.value;if(t.find(N=>N.name===j)){y.Notify.info(`${h.value} is already in contacts`),s("");return}else k(),a(I({name:j,number:L}))};return e.jsxs(z,{onSubmit:w,children:[e.jsx("label",{htmlFor:i,children:"Name:"}),e.jsx("input",{id:i,type:"text",name:"name",pattern:"^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:n,onChange:c}),e.jsx("label",{htmlFor:u,children:"Number:"}),e.jsx("input",{id:u,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:o,onChange:c}),e.jsx(b,{type:"submit",variant:"addBtn",children:"Add contact"})]})},R=d.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 16px;
`,W=d.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  background-color: rgb(200, 200, 200, 0.5);
  overflow-y: auto;
`,H=d.div`
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

`,J=d.svg`
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

`,v=document.getElementById("modal-root");console.log(v);const K=({toggleModal:t,children:a})=>{l.useEffect(()=>{const s=o=>{o instanceof KeyboardEvent&&o.code==="Escape"&&t()};return window.addEventListener("keydown",s),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",s)}},[t]);const n=s=>{s.target===s.currentTarget&&t()};return E.createPortal(e.jsx(W,{onClick:n,children:e.jsxs(H,{children:[e.jsx(J,{onClick:t,children:e.jsx("use",{xlinkHref:`${M}#close`})}),a]})}),v)},Y=d.ul`
display: flex;
justify-content: space-around;
align-items: center;
padding: 16px;
`,G=({id:t,name:a,toggleModal:n})=>{const s=g(),o=()=>{s(B(t)),n()};return e.jsxs(e.Fragment,{children:[e.jsxs("h3",{children:['Do you really want to delete contact "',a,'"?']}),e.jsxs(Y,{children:[e.jsx("li",{children:e.jsx(b,{type:"button",variant:"delBtn",onClick:o,children:"Yes"})}),e.jsx("li",{children:e.jsx(b,{type:"button",variant:"logOutBtn",onClick:n,children:"Cancel"})})]})]})},Q=({contact:t})=>{const[a,n]=l.useState(!1),s=()=>{n(!1)},{id:o,name:r,number:i}=t;return e.jsxs(e.Fragment,{children:[e.jsxs(R,{children:[r," : ",i,e.jsx(b,{variant:"delBtn",type:"button",onClick:()=>n(!0),children:"Delete"})]}),a&&e.jsx(K,{toggleModal:s,children:e.jsx(G,{name:r,id:o,toggleModal:s})})]})},U=({contacts:t})=>{const a=p(Z);return e.jsx("ul",{children:a?e.jsx("p",{children:"Loading..."}):t&&t.map(n=>e.jsx(Q,{contact:n},n.id))})},V=d.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 16px;
  padding: 16px;
  border: 2px solid black;
  border-radius: 4px;
`,X=({onChangeFilter:t,value:a})=>{const n=f();return e.jsxs(V,{children:[e.jsx("label",{htmlFor:n,children:"Find contacts by name:"}),e.jsx("input",{type:"text",name:"filter",value:a,onChange:t,id:n})]})},te=()=>{const t=p(C),a=p(A),n=p($),s=g(),[o,r]=l.useState("");l.useEffect(()=>{s(S())},[s]);const i=c=>{r(c.target.value.trim().toLowerCase())},u=t.filter(c=>c.name.toLowerCase().includes(o));return e.jsxs(O,{children:[e.jsx(P,{className:"title",children:"Phonebook"}),a&&!n&&e.jsx(D,{}),e.jsx(q,{}),e.jsx(T,{className:"title",children:"Contacts"}),e.jsx(X,{value:o,onChangeFilter:i}),!!t&&e.jsx(U,{contacts:u})]})};export{te as default};
