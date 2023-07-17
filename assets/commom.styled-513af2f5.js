import{s as t}from"./index-88d798f5.js";let i=(n=21)=>crypto.getRandomValues(new Uint8Array(n)).reduce((a,e)=>(e&=63,e<36?a+=e.toString(36):e<62?a+=(e-26).toString(36).toUpperCase():e>62?a+="-":a+="_",a),"");const o=t.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 16px;
  padding: 16px;
  width: 500px;
  border: 2px solid black;
  border-radius: 4px;
`,p=t.h1`
  text-align: center;
  padding: 8px;
`,s=t.h2`
  text-align: center;
  padding: 8px;
`,l=t.div`    
    margin: auto;    
    max-width: 500px;
    min-height: 100vh;
  
`;export{o as F,p as M,s as T,l as W,i as n};
