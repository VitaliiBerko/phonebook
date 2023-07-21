import{s as t}from"./index-da424ec1.js";let a=(n=21)=>crypto.getRandomValues(new Uint8Array(n)).reduce((e,o)=>(o&=63,o<36?e+=o.toString(36):o<62?e+=(o-26).toString(36).toUpperCase():o>62?e+="-":e+="_",e),"");const s=t.form`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 16px;
  margin-bottom: 16px;
  padding: 16px;
  width: 500px;
  border: 2px solid black;
  border-radius: 4px;
`,p=t.button`
  position: absolute;
  top: 67%;
  left: 90%;  
`,r=t.button`
  position: absolute;
  top: 56.5%;
  left: 90%;  
`,l=t.svg`
  width: 18px;
  height: 20px;
  fill: grey;
`,g=t.h1`
  text-align: center;
  padding: 8px;
`,x=t.h2`
  text-align: center;
  padding: 8px;
`,d=t.div`    
    margin: auto;    
    max-width: 500px;
    min-height: 100vh;
  
`;export{p as B,s as F,g as M,l as S,x as T,d as W,r as a,a as n};
