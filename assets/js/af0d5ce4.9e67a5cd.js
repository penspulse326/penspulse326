"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7329],{4158:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>o});var s=t(4848),l=t(8453);const r={title:"useState",description:"useState \u7684\u7528\u6cd5",date:new Date("2022-10-18T21:33:41.000Z"),keywords:["\u7a0b\u5f0f\u8a9e\u8a00","JavaScript","React","JSX","Hooks"],slug:"react-usestate"},c=void 0,a={id:"react/hooks/2022-10-18-react-useState",title:"useState",description:"useState \u7684\u7528\u6cd5",source:"@site/docs/react/hooks/2022-10-18-react-useState.md",sourceDirName:"react/hooks",slug:"/react/hooks/react-usestate",permalink:"/react/hooks/react-usestate",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"useState",description:"useState \u7684\u7528\u6cd5",date:"2022-10-18T21:33:41.000Z",keywords:["\u7a0b\u5f0f\u8a9e\u8a00","JavaScript","React","JSX","Hooks"],slug:"react-usestate"},sidebar:"tutorialSidebar",previous:{title:"\u74b0\u5883\u67b6\u69cb",permalink:"/react/hooks/react-env"},next:{title:"useEffect",permalink:"/react/hooks/react-useeffect"}},i={},o=[{value:"\u7a0b\u5f0f\u7684\u8d77\u9ede\u662f\u300c\u72c0\u614b\u300d",id:"\u7a0b\u5f0f\u7684\u8d77\u9ede\u662f\u72c0\u614b",level:2},{value:"The First Hook\uff1auseState",id:"the-first-hookusestate",level:2},{value:"\u8868\u9054\u5f0f",id:"\u8868\u9054\u5f0f",level:3},{value:"setAction \u4e2d\u7684 callback",id:"setaction-\u4e2d\u7684-callback",level:2},{value:"\u7e3d\u7d50",id:"\u7e3d\u7d50",level:2},{value:"\u53c3\u8003\u8cc7\u6599",id:"\u53c3\u8003\u8cc7\u6599",level:3}];function d(e){const n={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"\u5728\u958b\u59cb\u4e4b\u524d\uff0c\u53ef\u4ee5\u8a66\u8457\u56de\u60f3\u770b\u770b\uff0c\u7528\u539f\u751f JavaScript \u5beb todo list\uff0c \xa0\n\u5927\u6982\u6703\u6709\u4ec0\u9ebc\u6b65\u9a5f\u5462\uff1f"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u53ef\u80fd\u6703\u6709 input\u3001button\u3001ul \u9019\u4e9b\u6a19\u7c64"}),"\n",(0,s.jsx)(n.li,{children:"\u76e3\u807d button \u7684 click\u3001submit \u6216 input \u7684 Enter \u7684\u4e8b\u4ef6"}),"\n",(0,s.jsx)(n.li,{children:"\u4e8b\u4ef6\u89f8\u767c\u5f8c\u628a input \u7684\u5167\u5bb9\u6293\u51fa\u4f86\u5b58\u5230\u4e00\u500b\u9663\u5217"}),"\n",(0,s.jsx)(n.li,{children:"\u5229\u7528\u9663\u5217\u65b9\u6cd5\u7522\u751f\u4e00\u4e32 HTML \u5b57\u4e32"}),"\n",(0,s.jsx)(n.li,{children:"\u628a\u525b\u525b\u7522\u751f\u7684\u5b57\u4e32\u8ce6\u503c\u5230 ul \u7684 innerHTML"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u6b65\u9a5f\u770b\u8d77\u4f86\u4e0d\u6703\u592a\u591a\uff0c\u4f46\u4e00\u822c\u7db2\u7ad9\u4e0d\u6703\u53ea\u6709 todo list \u9019\u9ebc\u4e00\u584a\u5730\u65b9\u8981\u5beb\u908f\u8f2f\uff0c \xa0\n\u800c\u4e14\u9801\u9762\u6703\u66f4\u591a\uff0c\u6240\u4ee5\u8981\u5448\u73fe\u7684\u8cc7\u6599\u4e5f\u6703\u66f4\u8907\u96dc\uff0c\u9019\u6642\u539f\u751f\u7684\u7a0b\u5f0f\u78bc\u5c31\u6703\u958b\u59cb\u8b8a\u5f97\u6df7\u4e82\uff0c \xa0\n\u5229\u7528 React\u3001Vue \u7b49\u7b49\u7684\u524d\u7aef\u6846\u67b6\u5c31\u53ef\u4ee5\u66f4\u7c21\u6f54\u5730\u8655\u7406\u9019\u4e9b\u756b\u9762\u7684\u908f\u8f2f\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u7a0b\u5f0f\u7684\u8d77\u9ede\u662f\u72c0\u614b",children:"\u7a0b\u5f0f\u7684\u8d77\u9ede\u662f\u300c\u72c0\u614b\u300d"}),"\n",(0,s.jsxs)(n.p,{children:["\u4f7f\u7528\u8005\u611f\u89ba\u5230\u6709\u300c\u4e92\u52d5\u300d\uff0c\u662f\u56e0\u70ba\u756b\u9762\u7684\u5167\u5bb9\u6539\u8b8a\u4e86\uff0c \xa0\n\u539f\u56e0\u4f86\u81ea\u65bc\u900f\u904e innerHTML \u8ce6\u503c\u7684\u884c\u70ba\uff0c\u90a3\u8981\u600e\u9ebc\u6c7a\u5b9a\u4ec0\u9ebc\u6642\u5019\u6539\u8b8a\u756b\u9762\uff1f",(0,s.jsx)(n.br,{}),"\n","\u662f\u8cc7\u6599\u7684\u300c",(0,s.jsx)(n.strong,{children:"\u72c0\u614b"}),"\u300d\uff0c\u4e5f\u5c31\u662f\u6240\u6709 React \u6559\u5b78\u90fd\u6703\u5f37\u8abf\u7684\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5177\u9ad4\u4f86\u8aaa\u6211\u5011\u53ef\u4ee5\u81ea\u5df1\u6c7a\u5b9a\u8981\u89c0\u5bdf\u300c\u8ab0\u7684\u72c0\u614b\u300d\uff0c \xa0\n\u4ee5\u525b\u525b\u7684 todo list \u70ba\u4f8b\uff0c\u6211\u5011\u662f\u5728 input \u7684\u503c\u5b58\u9032\u9663\u5217\u5f8c\u7522\u751f\u65b0\u7684\u5217\u8868\uff0c \xa0\n\u6240\u4ee5\u9019\u500b\u9663\u5217\u5c31\u662f\u6211\u5011\u8981\u89c0\u5bdf\u7684",(0,s.jsx)(n.strong,{children:"\u72c0\u614b"}),"\uff0c",(0,s.jsx)(n.br,{}),"\n","list \u7684\u8cc7\u6599\u5167\u5bb9\u88ab\u6539\u8b8a\u4e86\uff0c\u5c31\u662f\u72c0\u614b\u6539\u8b8a\uff0c\u56e0\u6b64\u7522\u751f\u65b0\u7684\u756b\u9762\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"React \u7684\u904b\u4f5c\u5927\u81f4\u4e0a\u662f\u570d\u7e5e\u9019\u500b\u6982\u5ff5\uff0c\n\u6240\u4ee5\u51fa bug \u7684\u7b2c\u4e00\u6b65\u901a\u5e38\u4e5f\u662f\u53bb\u8ffd\u6eaf\u662f\u54ea\u500b\u6771\u897f\u7684\u72c0\u614b\u6709\u554f\u984c\uff01"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"the-first-hookusestate",children:"The First Hook\uff1auseState"}),"\n",(0,s.jsxs)(n.p,{children:["\u4e0a\u4e00\u7bc7\u7b46\u8a18\u6709\u793a\u7bc4\u5230\u5143\u4ef6\u53ef\u4ee5\u5728\u6307\u5b9a\u7684\u5730\u65b9\u7528 root.render \u5448\u73fe\u51fa\u4f86\uff0c",(0,s.jsx)(n.br,{}),"\n","root.render \u662f\u525b\u8f09\u5165\u7db2\u9801\u6642\u505a\u7684\u4e8b\uff0c\u6703\u628a\u8a31\u591a\u5143\u4ef6\u505a\u6210\u4e00\u5305\u53eb\u505a ",(0,s.jsx)(n.code,{children:"<App />"}),"\u7684\u5143\u4ef6\uff0c",(0,s.jsx)(n.br,{}),"\n","\u518d\u7528 root.render \u6e32\u67d3\u51fa\u4f86\uff0c\u9019\u500b\u51fd\u5f0f\u901a\u5e38\u4e5f\u53ea\u6703\u57f7\u884c\u4e00\u6b21\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4e4b\u5f8c\u91cd\u65b0\u6e32\u67d3\u756b\u9762\u7684\u5de5\u4f5c\u90fd\u6703\u4ea4\u7d66 React \u7684\u5167\u5efa\u51fd\u5f0f\u4f86\u6c7a\u5b9a\uff0c\u4e5f\u5c31\u662f useState\uff0c",(0,s.jsx)(n.br,{}),"\n","\u539f\u672c\u7528\u4f86\u5132\u5b58\u8b8a\u6578\u7684\u65b9\u6cd5\uff0c\u73fe\u5728\u8981\u6539\u70ba\u7528 useState \u7684\u65b9\u6cd5\u4f86\u7ba1\u7406\u8b8a\u6578\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"const [value, setValue] = useState(0);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u900f\u904e\u89e3\u69cb\u7684\u8a9e\u6cd5\u5ba3\u544a\u51fa\u8981\u64cd\u4f5c\u7684\u8b8a\u6578\uff0c\u547c\u53eb useState \u6642\u8981\u50b3\u5165\u4e00\u500b\u503c\u4f5c\u70ba value \u7684\u521d\u59cb\u503c\u3002",(0,s.jsx)(n.br,{}),"\n","\u7136\u5f8c\u5c31\u8ddf\u525b\u525b\u5728\u6a21\u64ec todo list \u7684\u6b65\u9a5f\u4e00\u6a23\uff0c\u6211\u5011\u9700\u8981\u76e3\u807d\u67d0\u500b\u5143\u7d20\u7576\u4f5c\u89f8\u767c\u9ede\uff0c \xa0\n\u9019\u908a\u4f7f\u7528 button \u4f86\u5be6\u4f5c\u8a08\u6578\u5668\u7684\u884c\u70ba\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"<button onClick={() => setValue((state) => state + 1)}>\u52a01</button>\n<button onClick={() => setValue((state) => state - 1)}>\u6e1b1</button>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u8981\u7279\u5225\u6ce8\u610f\u9019\u908a\u7684 onClick \u662f React \u5c01\u88dd\u597d\u7684\u76e3\u807d\u65b9\u5f0f\uff0c\u800c",(0,s.jsx)(n.strong,{children:"\u4e0d\u662f JS \u4e2d\u7684 addEventListener"}),"\uff01"]}),"\n",(0,s.jsxs)(n.p,{children:["onClick \u88e1\u9762\u9810\u8a2d\u662f\u4e00\u500b callback\uff0c\u548c addEventListener \u4e00\u6a23\u53ef\u4ee5\u62ff\u5230\u9810\u8a2d\u7684 event \u53c3\u6578\uff0c",(0,s.jsx)(n.br,{}),"\n","\u6240\u4ee5\u4e0d\u80fd\u76f4\u63a5\u57f7\u884c\u51fd\u5f0f ",(0,s.jsx)(n.code,{children:"onClick={setValue(state => state + 1)}"}),"\uff0c\n\u5fc5\u9808\u900f\u904e\u50cf\u4e0a\u9762 button \u7684\u7bc4\u4f8b callback \u7684\u5beb\u6cd5\u624d\u80fd\u6b63\u78ba\u57f7\u884c setValue\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u8868\u9054\u5f0f",children:"\u8868\u9054\u5f0f"}),"\n",(0,s.jsxs)(n.p,{children:["\u9084\u8a18\u5f97\u8868\u9054\u5f0f\u55ce\uff1fJSX \u4e2d\u4efb\u4f55\u8ddf\u8b8a\u6578\u6709\u95dc\u7684\u6771\u897f\u90fd\u8981\u7528\u5927\u62ec\u865f\u5305\u4f4f\uff0c",(0,s.jsx)(n.br,{}),"\n","\u5927\u62ec\u865f\u7684\u5167\u5bb9\u6703\u662f\u4e00\u500b\u8868\u9054\u5f0f\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u96d6\u7136 onClick \u88e1\u9762\u4e0d\u9700\u8981\u771f\u7684\u56de\u50b3\u4e00\u500b\u503c\uff0c\u53ea\u9700\u8981\u5b9a\u7fa9\u597d\u4e00\u500b callback function\uff0c",(0,s.jsx)(n.br,{}),"\n","\u4f46\u5982\u679c\u50cf\u525b\u525b\u8aaa\u5230\u7684\u932f\u8aa4\u793a\u7bc4 ",(0,s.jsx)(n.code,{children:"onClick={setValue(state => state + 1)}"})," \u9019\u6a23\u5beb\u7684\u8a71\uff0c",(0,s.jsx)(n.br,{}),"\n","\u4ee3\u8868\u5143\u4ef6\u5728\u6e32\u67d3\u7684\u6642\u5019\u5df2\u7d93\u540c\u6642\u57f7\u884c\u4e86\u5927\u62ec\u865f\u88e1\u9762\u7684\u7a0b\u5f0f\u78bc\u4e86\uff0c\u525b\u597d\u57f7\u884c\u7684\u53c8\u662f setAction\uff0c",(0,s.jsx)(n.br,{}),"\n","\u65bc\u662f\u6703\u8b8a\u6210\uff1a"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u5143\u4ef6\u5728\u7b2c\u4e00\u6b21\u6e32\u67d3\u6642\u57f7\u884c\u4e86 setValue"}),"\n",(0,s.jsx)(n.li,{children:"setValue \u6539\u8b8a\u4e86 value \u6240\u4ee5\u91cd\u65b0\u6e32\u67d3"}),"\n",(0,s.jsx)(n.li,{children:"\u91cd\u65b0\u6e32\u67d3\u6642\u53c8\u57f7\u884c\u4e86 setValue"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u9019\u6642\u756b\u9762\u5c31\u6703\u76f4\u63a5\u7206\u70b8\uff0cconsole \u4e5f\u6703\u6536\u5230 ",(0,s.jsx)(n.strong,{children:"Too many re-renders"})," \u7684\u8b66\u544a\uff0c",(0,s.jsx)(n.br,{}),"\n","\u4ee3\u8868\u6211\u5011\u4e0d\u5c0f\u5fc3\u5beb\u51fa\u7121\u9650\u8ff4\u5708\u4e86\u3002"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"setaction-\u4e2d\u7684-callback",children:"setAction \u4e2d\u7684 callback"}),"\n",(0,s.jsxs)(n.p,{children:["\u900f\u904e\u547c\u53eb useState \u5ba3\u544a\u51fa\u4f86\u7684 setXXX \u88ab\u7a31\u4f5c ",(0,s.jsx)(n.strong,{children:"setAction"}),"\uff0c",(0,s.jsx)(n.br,{}),"\n","\u5728 React \u88e1\u9762\u53ea\u80fd\u900f\u904e setAction \u6539\u8b8a state \u8b8a\u6578\uff0c",(0,s.jsx)(n.br,{}),"\n","\u6240\u4ee5\u57f7\u884c setAction \u901a\u5e38\u4e5f\u6703\u5f15\u767c\u756b\u9762\u91cd\u65b0\u6e32\u67d3\u7684\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["setAction \u9664\u4e86\u50cf\u9019\u6a23 ",(0,s.jsx)(n.code,{children:"setValue(123)"})," \u7d66\u4e00\u500b\u7d14\u503c\u4e4b\u5916\uff0c",(0,s.jsx)(n.br,{}),"\n","\u4e5f\u7d93\u5e38\u50cf\u4e0a\u9762 button \u7684\u7bc4\u4f8b\u4e00\u6a23\uff0c\u7528 callback \u7684\u65b9\u5f0f\u50b3\u5165\u503c\uff0c",(0,s.jsx)(n.br,{}),"\n","callback \u9810\u8a2d\u7684\u53c3\u6578\u6703\u662f\u7576\u4e0b\u7684 state\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"<button\n  onClick={() => {\n    setValue((state) => {\n      console.log(state);\n      return state - 1;\n    });\n  }}\n>\n  \u6e1b1\n</button>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5047\u5982\u8f09\u5165\u756b\u9762\u5f8c\u9084\u6c92\u6709\u9032\u884c\u904e\u4efb\u4f55\u64cd\u4f5c\uff0c\u9019\u6642\u5019 value \u61c9\u8a72\u662f\u521d\u59cb\u503c 0\uff0c",(0,s.jsx)(n.br,{}),"\n","\u6211\u5728 onClick \u4e8b\u4ef6\u88e1\u9762\u57f7\u884c setAction \u6642\u7528 callback \u7684\u65b9\u5f0f\u53d6\u51fa state\uff0c",(0,s.jsx)(n.br,{}),"\n","\u518d\u7528 console.log \u5370\u51fa\u4f86\u770b\uff0c\u78ba\u5be6\u662f 0 \u6c92\u932f\uff01"]}),"\n",(0,s.jsxs)(n.p,{children:["\u7576\u6211\u5011\u8981\u4f9d\u64da\u524d\u4e00\u6b21\u72c0\u614b\u4f86\u505a\u8a08\u7b97\u6642\uff0c",(0,s.jsx)(n.br,{}),"\n","\u901a\u5e38\u5efa\u8b70\u4f7f\u7528 callback \u4f86\u8655\u7406 setAction \u7684\u908f\u8f2f\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"// \u50b3\u7d14\u503c\nconst badAddValue = () => {\n  setValue(value + 1);\n  setValue(value + 1);\n  setValue(value + 1);\n};\n\n// \u50b3 callback\nconst goodAddValue = () => {\n  setValue((prev) => prev + 1);\n  setValue((prev) => prev + 1);\n  setValue((prev) => prev + 1);\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u57f7\u884c badAddValue \u7684\u8a71 value \u5728\u4e0b\u6b21\u6e32\u67d3\u6642\u6703\u662f 1 \u800c\u4e0d\u662f 3\uff0c",(0,s.jsx)(n.br,{}),"\n","\u9019\u662f\u56e0\u70ba\u5b83\u53d6\u51fa\u7684 value \u9084\u662f\u524d\u4e00\u6b21\u6e32\u67d3\u6642\u7684\u521d\u59cb\u503c 0\uff0c",(0,s.jsx)(n.br,{}),"\n","\u7b49\u65bc\u53ea\u662f\u9023\u7e8c\u57f7\u884c\u4e86 3 \u6b21\u4e26\u4e14\u7528 ",(0,s.jsx)(n.code,{children:"0 + 1"})," \u6539\u8b8a value \u800c\u5df2\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["goodAddValue \u6703\u5f97\u5230 3 \u662f\u56e0\u70ba setAction \u7684 callback \u5728\u4e0b\u6b21\u6e32\u67d3\u4e4b\u524d\uff0c",(0,s.jsx)(n.br,{}),"\n","\u6bcf\u6b21\u57f7\u884c\u90fd\u6703\u66f4\u65b0 state\uff0c\u6240\u4ee5\u53d6\u5230\u7684\u4e5f\u662f\u66f4\u65b0\u5f8c\u7684 state\uff0c",(0,s.jsx)(n.br,{}),"\n","\u6240\u4ee5\u6700\u5f8c\u5f97\u5230\u7684 value \u5df2\u7d93\u662f\u5728 callback \u57f7\u884c\u671f\u9593\u8655\u7406\u597d\u7684 state \u4e86\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u8981\u6ce8\u610f\u7684\u662f setAction \u672c\u8eab\u662f\u975e\u540c\u6b65\u7684\u884c\u70ba\uff0c",(0,s.jsx)(n.br,{}),"\n","\u6240\u4ee5\u5728\u4e0a\u9762\u7bc4\u4f8b\u9023\u7e8c\u57f7\u884c\u7684\u6642\u96d6\u7136\u6c92\u4ec0\u9ebc\u554f\u984c\uff0c",(0,s.jsx)(n.br,{}),"\n","\u4f46\u5982\u679c\u8981\u7cbe\u6e96\u63a7\u5236\u57f7\u884c\u9806\u5e8f\uff0c\u9084\u662f\u6703\u7528",(0,s.jsx)(n.code,{children:"useEffect"})," \u78ba\u4fdd\u9806\u5e8f\u662f\u6b63\u78ba\u7684\u3002"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"\u7e3d\u7d50",children:"\u7e3d\u7d50"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u300c",(0,s.jsx)(n.strong,{children:"\u53ef\u64cd\u4f5c"}),"\u300d\u4e26\u4e14\u8981\u300c",(0,s.jsx)(n.strong,{children:"\u986f\u793a\u5728\u756b\u9762\u4e0a"}),"\u300d\u7684\u8cc7\u6599\u5c31\u9700\u8981\u900f\u904e state \u5132\u5b58"]}),"\n",(0,s.jsx)(n.li,{children:"useState \u7684 setAction \u6703\u89f8\u767c\u756b\u9762\u66f4\u65b0"}),"\n",(0,s.jsx)(n.li,{children:"\u6ce8\u610f\u9023\u7e8c\u547c\u53eb setAction \u6642\u7684\u554f\u984c"}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"\u53c3\u8003\u8cc7\u6599",children:"\u53c3\u8003\u8cc7\u6599"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.youtube.com/watch?v=q0C5g4WIrKU",children:"\u8d70\u6b6a\u7684\u5de5\u7a0b\u5e2b James\uff1a\u4e00\u500b\u7bc4\u4f8b\u8b93\u4f60\u641e\u61c2 useState, useRef, useEffect"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>a});var s=t(6540);const l={},r=s.createContext(l);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);