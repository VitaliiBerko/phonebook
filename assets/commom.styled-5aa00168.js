import{s as t}from"./index-2408311a.js";let s=(n=21)=>crypto.getRandomValues(new Uint8Array(n)).reduce((e,o)=>(o&=63,o<36?e+=o.toString(36):o<62?e+=(o-26).toString(36).toUpperCase():o>62?e+="-":e+="_",e),"");const a=t.form`
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
  top: 69%;
  left: 90%;  
`,r=t.button`
  position: absolute;
  top: 59%;
  left: 90%;  
`,l=t.svg`
  width: 18px;
  height: 20px;
  fill: grey;
`,c="/phonebook/assets/icons.sprite-202fccc7.svg",g=t.h1`
  text-align: center;
  padding: 8px;
`,x=t.h2`
  text-align: center;
  padding: 8px;
`,d=t.div`    
    margin: auto;    
    max-width: 500px;
    min-height: 100vh;
  
`;export{p as B,a as F,g as M,l as S,x as T,d as W,r as a,c as i,s as n};
