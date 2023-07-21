import{N as g,u as l,a as b,r as h,j as t,B as j,b as A,s as C,d as S,c as k,f as w,L as B}from"./index-da424ec1.js";import{n as x,F as z,W as D,M as E,T as P}from"./commom.styled-86e0f7a2.js";const y=e=>e.contacts.items,T=e=>e.contacts.isLoading,M=e=>e.contacts.error;g.Notify.init({position:"center-top"});const Z=()=>{const e=l(y),s=b(),[n,a]=h.useState(""),[o,r]=h.useState(""),c=x(),d=x(),i=m=>{const{value:u,name:p}=m.currentTarget;switch(p){case"name":a(u);break;case"number":r(u);break;default:return}},F=()=>{a(""),r("")},N=m=>{m.preventDefault();const u=m.target,{name:p,number:v}=u.elements,f=p.value,L=v.value;if(e.find(I=>I.name===f)){g.Notify.info(`${p.value} is already in contacts`),a("");return}else F(),s(A({name:f,number:L}))};return t.jsxs(z,{onSubmit:N,children:[t.jsx("label",{htmlFor:c,children:"Name:"}),t.jsx("input",{id:c,type:"text",name:"name",pattern:"^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:n,onChange:i}),t.jsx("label",{htmlFor:d,children:"Number:"}),t.jsx("input",{id:d,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:o,onChange:i}),t.jsx(j,{type:"submit",variant:"addBtn",children:"Add contact"})]})},q=C.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 16px;
`,W=({contact:e})=>{const s=b(),n=c=>{s(S(c))},{id:a,name:o,number:r}=e;return t.jsxs(q,{children:[o," : ",r,t.jsx(j,{variant:"delBtn",type:"button",onClick:()=>n(a),children:"Delete"})]})},$=({contacts:e})=>{const s=l(T);return t.jsx("ul",{children:s?t.jsx("p",{children:"Loading..."}):e&&e.map(n=>t.jsx(W,{contact:n},n.id))})},J=C.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 16px;
  padding: 16px;
  border: 2px solid black;
  border-radius: 4px;
`,O=({onChangeFilter:e,value:s})=>{const n=x();return t.jsxs(J,{children:[t.jsx("label",{htmlFor:n,children:"Find contacts by name:"}),t.jsx("input",{type:"text",name:"filter",value:s,onChange:e,id:n})]})},H=()=>{const e=l(y),s=l(k),n=l(M),a=b(),[o,r]=h.useState("");h.useEffect(()=>{a(w())},[a]);const c=i=>{r(i.target.value.trim().toLowerCase())},d=e.filter(i=>i.name.toLowerCase().includes(o));return t.jsxs(D,{children:[t.jsx(E,{className:"title",children:"Phonebook"}),s&&!n&&t.jsx(B,{}),t.jsx(Z,{}),t.jsx(P,{className:"title",children:"Contacts"}),t.jsx(O,{value:o,onChangeFilter:c}),!!e&&t.jsx($,{contacts:d})]})};export{H as default};
