import{s as e}from"./index-a2d1c768.js";let a=(i=21)=>crypto.getRandomValues(new Uint8Array(i)).reduce((o,t)=>(t&=63,t<36?o+=t.toString(36):t<62?o+=(t-26).toString(36).toUpperCase():t>62?o+="-":o+="_",o),"");const r=e.form`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 16px;
  margin-bottom: 16px;
  padding: 16px;
  width: 500px;
  border: 2px solid black;
  border-radius: 4px;
`,s=e.button`
  position: absolute;
  top: 67%;
  left: 90%;  
`,p=e.svg`
  width: 18px;
  height: 20px;

  fill: grey;
`,l=e.h1`
  text-align: center;
  padding: 8px;
`,g=e.h2`
  text-align: center;
  padding: 8px;
`,x=e.div`    
    margin: auto;    
    max-width: 500px;
    min-height: 100vh;
  
`;export{s as B,r as F,l as M,p as S,g as T,x as W,a as n};
