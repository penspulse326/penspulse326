"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6604],{4212:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>j,frontMatter:()=>i,metadata:()=>t,toc:()=>a});var r=s(4848),c=s(8453);const i={title:"Promise \u8207 async",description:"Promise \u8207 async \u7684\u57fa\u672c\u6982\u5ff5",date:new Date("2023-11-09T12:43:08.000Z"),keywords:["JavaScript","\u7a0b\u5f0f\u8a9e\u8a00","Promise","AJAX","async","\u975e\u540c\u6b65"],slug:"promise-and-async"},o=void 0,t={id:"js/promise-and-async",title:"Promise \u8207 async",description:"Promise \u8207 async \u7684\u57fa\u672c\u6982\u5ff5",source:"@site/docs/js/13.promise-and-async.md",sourceDirName:"js",slug:"/js/promise-and-async",permalink:"/js/promise-and-async",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{title:"Promise \u8207 async",description:"Promise \u8207 async \u7684\u57fa\u672c\u6982\u5ff5",date:"2023-11-09T12:43:08.000Z",keywords:["JavaScript","\u7a0b\u5f0f\u8a9e\u8a00","Promise","AJAX","async","\u975e\u540c\u6b65"],slug:"promise-and-async"},sidebar:"tutorialSidebar",previous:{title:"\u9589\u5305",permalink:"/js/closure"},next:{title:"React",permalink:"/category/react"}},l={},a=[{value:"\u5ba3\u544a\u7269\u4ef6",id:"\u5ba3\u544a\u7269\u4ef6",level:2},{value:"\u72c0\u614b\u8b8a\u5316",id:"\u72c0\u614b\u8b8a\u5316",level:2},{value:"async / await",id:"async--await",level:2},{value:"\u53c3\u8003\u8cc7\u6599",id:"\u53c3\u8003\u8cc7\u6599",level:2}];function d(e){const n={a:"a",br:"br",code:"code",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["\u5148\u524d\u6211\u5011\u5728\u975e\u540c\u6b65\u7db2\u8def\u8acb\u6c42\u6709\u63d0\u5230 Promise \u7269\u4ef6\uff0c",(0,r.jsx)(n.br,{}),"\n","\u9019\u662f\u5728\u7db2\u8def\u8acb\u6c42\u4e2d\u6703\u62ff\u5230\u7684\u56de\u50b3\u503c\uff0c\u6211\u5011\u53ef\u4ee5\u7528\u5f8c\u7db4 then \u6216 catch \u4f86\u89e3\u6790\u503c\uff0c",(0,r.jsx)(n.br,{}),"\n","\u90a3\u9ebc\u5be6\u969b\u4e0a\u5b83\u662f\u600e\u9ebc\u904b\u4f5c\u7684\uff1f"]}),"\n",(0,r.jsx)(n.h2,{id:"\u5ba3\u544a\u7269\u4ef6",children:"\u5ba3\u544a\u7269\u4ef6"}),"\n",(0,r.jsxs)(n.p,{children:["\u6211\u5011\u53ea\u80fd\u900f\u904e then / catch \u53d6\u503c\u662f\u56e0\u70ba Promise \u7684\u683c\u5f0f\u88ab\u56fa\u5b9a\u4f4f\u4e86\uff0c",(0,r.jsx)(n.br,{}),"\n","\u5b83\u8a2d\u8a08\u7684\u76ee\u6a19\u5c31\u662f\u4e0d\u80fd\u8b93\u6211\u5011\u96a8\u4fbf\u53d6\u503c\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u5efa\u7acb Promise \u7269\u4ef6\u6642\uff0c\u662f\u900f\u904e class \u7269\u4ef6\u7684\u65b9\u5f0f\u53bb\u65b0\u589e\u51fa\u5be6\u9ad4\u7684\uff0c",(0,r.jsx)(n.br,{}),"\n","\u6240\u4ee5\u9700\u8981\u7d66\u5b83\u4e00\u500b\u53c3\u6578\u7576\u4f5c\u521d\u59cb\u503c\uff0c\u5b83\u898f\u5b9a\u6211\u5011\u8981\u7d66\u7684\u53c3\u6578\u6703\u662f\u4e00\u500b\u51fd\u5f0f\u3002",(0,r.jsx)(n.br,{}),"\n","\u4e26\u4e14\u9019\u500b\u51fd\u5f0f\u53c8\u5305\u542b\u5169\u500b\u53c3\u6578\uff1a"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7b2c\u4e00\u500b\u53c3\u6578\u70ba resolve\uff0c\u70ba\u5224\u5b9a\u6210\u529f\u6642\u6703\u57f7\u884c\u7684\u52d5\u4f5c\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u7b2c\u4e8c\u500b\u53c3\u6578\u70ba reject\uff0c\u70ba\u5224\u5b9a\u5931\u6557\u6642\u6703\u57f7\u884c\u7684\u52d5\u4f5c\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u9019\u5169\u500b\u53c3\u6578\u4e5f\u662f\u51fd\u5f0f\uff0c\u53ef\u4ee5\u50b3\u7d14\u503c\u6216\u662f\u8868\u9054\u5f0f\uff08\u5c31\u662f\u8981\u8dd1\u51fa\u4e00\u500b\u503c\u7d66\u5b83\u7528\u4f7f\u7528\u5c31\u5c0d\u4e86\uff09\uff0c",(0,r.jsx)(n.br,{}),"\n",'\u6240\u4ee5\u5beb\u8d77\u4f86\u6703\u50cf\u662f resolve("\u6210\u529f")\uff0c\u4ee3\u8868 Promise \u5224\u5b9a\u70ba\u6210\u529f\u6642\u6703\u56de\u50b3 "\u6210\u529f" \u9019\u500b\u5b57\u4e32\u3002']}),"\n",(0,r.jsx)(n.p,{children:"\u807d\u8d77\u4f86\u5f88\u62bd\u8c61\u5427\uff0c\u6211\u5011\u53ef\u4ee5\u642d\u914d\u7a0b\u5f0f\u78bc\u91cd\u73fe\u4e0a\u9762\u8b1b\u7684\u6b65\u9a5f\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const p = new Promise((resolve, reject) => {\n  resolve("\u6210\u529f");\n  reject("\u5931\u6557");\n});\n\np.then((res) => console.log(res)).catch((err) => console.log(err));\n\n// \u53ea\u6703\u5370\u51fa"\u6210\u529f"\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u70ba\u4ec0\u9ebc\u53ea\u6703\u5370\u51fa\u6210\u529f\u5462\uff1f\uff01"}),"\n",(0,r.jsxs)(n.p,{children:['\u539f\u56e0\u662f\u6211\u5011\u6c92\u6709\u7d66\u51fa\u4efb\u4f55\u5224\u65b7\u7684\u65b9\u5f0f\uff0c\u6240\u4ee5\u6700\u5148\u88ab\u5beb\u5165\u7684 resolve("\u6210\u529f") \u5c31\u6703\u76f4\u63a5\u57f7\u884c\uff0c',(0,r.jsx)(n.br,{}),"\n",'\u53cd\u904e\u4f86\u8aaa\u6211\u5011\u5148\u5beb reject("\u5931\u6557") \u4e00\u6a23\u4e5f\u4e0d\u6703\u5370\u51fa\u6210\u529f\uff0c\u985e\u4f3c early return \u7684\u6982\u5ff5\u3002']}),"\n",(0,r.jsxs)(n.p,{children:["\u56e0\u6b64\u901a\u5e38\u6211\u5011\u5728\u5efa\u7acb Promise \u7269\u4ef6\u7684\u6642\u5019\u6703\u53e6\u5916\u547c\u53eb\u51fd\u5f0f\u6216\u900f\u904e",(0,r.jsx)(n.strong,{children:"\u51fd\u5f0f\u8868\u9054\u5f0f"}),"\uff0c",(0,r.jsx)(n.br,{}),"\n","\u5efa\u7acb\u51fa\u4e00\u500b\u7a7a\u9593\u9032\u884c\u5224\u65b7\uff0c\u518d\u56de\u50b3\u5efa\u7acb\u597d\u7684 Promise \u7269\u4ef6\uff5e"]}),"\n",(0,r.jsx)(n.p,{children:"\u91cd\u65b0\u6539\u5beb\u4e00\u4e0b\u525b\u525b\u7684\u7a0b\u5f0f\uff0c\u56de\u50b3\u4e00\u500b\u503c\u5224\u65b7\u8a72\u6578\u5b57\u662f\u4e0d\u662f\u6b63\u6578\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const numPromise = (value) =>\n  new Promise((resolve, reject) => {\n    if (typeof value === "number" && value > 0) {\n      resolve("\u6b63\u6578");\n    }\n    reject("\u8ca0\u6578\u6216\u4e0d\u5408\u6cd5\u7684\u503c");\n  });\n\nnumPromise(3)\n  .then((res) => console.log(res))\n  .catch((err) => console.log(err));\n\nnumPromise(-1)\n  .then((res) => console.log(res))\n  .catch((err) => console.log(err));\n\nnumPromise("\u4f60\u597d")\n  .then((res) => console.log(res))\n  .catch((err) => console.log(err));\n\n// "\u6b63\u6578"\n// "\u8ca0\u6578\u6216\u4e0d\u5408\u6cd5\u7684\u503c"\n// "\u8ca0\u6578\u6216\u4e0d\u5408\u6cd5\u7684\u503c"\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u73fe\u5728\u6211\u5011\u53ef\u4ee5\u5224\u65b7\u8b8a\u6578\u4f86\u6c7a\u5b9a\u8981 resolve \u9084\u662f reject \u4e86\uff01"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"\u72c0\u614b\u8b8a\u5316",children:"\u72c0\u614b\u8b8a\u5316"}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u6211\u5011\u76f4\u63a5\u4f7f\u7528 console.log \u53bb\u67e5\u770b Promise \u7269\u4ef6\u7684\u503c\uff0c",(0,r.jsx)(n.br,{}),"\n","\u6709\u53ef\u80fd\u6703\u51fa\u73fe\u4e09\u7a2e\u72c0\u614b\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"- Promise { pending }\n- Promise { fulfilled }\n- Promise { rejected }\n"})}),"\n",(0,r.jsxs)(n.p,{children:["pending \u5728\u76f4\u63a5 console.log \u67e5\u770b\u7db2\u8def\u8acb\u6c42\u7684\u7d50\u679c\u6642\uff0c",(0,r.jsx)(n.br,{}),"\n","\u901a\u5e38\u6700\u5bb9\u6613\u5f97\u5230\u9019\u500b\u7d50\u679c\uff0c\u5b83\u4ee3\u8868 Promise \u7269\u4ef6\u7684\u5167\u90e8\u9084\u6c92\u6709\u9032\u884c\u4efb\u4f55 resolve \u6216 reject \u7684\u884c\u70ba\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"fulfilled \u4ee3\u8868\u8acb\u6c42\u6210\u529f\uff0crejected \u7576\u7136\u5c31\u4ee3\u8868\u8acb\u6c42\u5931\u6557\u4e86\uff5e"}),"\n",(0,r.jsx)(n.p,{children:"\u6211\u5011\u76f4\u63a5\u67e5\u770b\u525b\u525b\u7684 Promise\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"console.log(numPromise(3)); // Promise\xa0{<fulfilled>: '\u6b63\u6578'}\nconsole.log(numPromise(\"\u4f60\u597d\")); // Promise\xa0{<rejected>: '\u8ca0\u6578\u6216\u4e0d\u5408\u6cd5\u7684\u503c'}\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u7a0d\u5fae\u6539\u5beb\u4e00\u4e0b\uff0c\u52a0\u4e0a setTimeout \u8b93 Promise \u5167\u90e8\u7684\u884c\u70ba\u5ef6\u9072\u8655\u7406\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const numPromise = (value) =>\n  new Promise((resolve, reject) => {\n    setTimeout(() => {\n      if (typeof value === "number" && value > 0) {\n        resolve("\u6b63\u6578");\n      } else {\n        reject("\u8ca0\u6578\u6216\u4e0d\u5408\u6cd5\u7684\u503c");\n      }\n    }, 300);\n  });\n\nconsole.log(numPromise(3)); // Promise\xa0{<pending>}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u9019\u6642\u5019\u5c31\u6703\u51fa\u73fe pending \u72c0\u614b\u4e86\uff5e",(0,r.jsx)(n.br,{}),"\n","\u6240\u4ee5\u4e00\u5982\u5f80\u5e38\uff0c\u6211\u5011\u5fc5\u9808\u53bb then \u6216 catch \u88e1\u9762\u53d6\u5f97\u7d50\u679c\u3002"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"async--await",children:"async / await"}),"\n",(0,r.jsxs)(n.p,{children:["\u975e\u540c\u6b65\u51fd\u5f0f async \u807d\u8d77\u4f86\u597d\u50cf\u5f88\u8271\u6df1\uff0c\u5176\u5be6\u5b83\u5c31\u662f then / catch \u7684\u8b8a\u9ad4\u54e6\uff01",(0,r.jsx)(n.br,{}),"\n","\u539f\u672c\u6211\u5011\u5728\u9032\u884c\u7db2\u8def\u8acb\u6c42\u6642\uff0c\u5b58\u53d6\u7d50\u679c\u90fd\u5fc5\u9808\u5728 then / catch \u88e1\u9762\uff0c",(0,r.jsx)(n.br,{}),"\n","\u6709\u6642\u5019\u7d50\u69cb\u4e0a\u4e0d\u662f\u90a3\u9ebc\u597d\u95b1\u8b80\uff0c\u9019\u6642\u5019\u7528 async / await \u6539\u5beb\uff0c",(0,r.jsx)(n.br,{}),"\n","\u5c31\u662f\u5f88\u4e0d\u932f\u7684\u9078\u64c7\uff0c\u56e0\u70ba\u5b83\u7684\u7d50\u69cb\u63d0\u9ad8\u4e86\u95b1\u8b80\u6027\uff0c",(0,r.jsx)(n.br,{}),"\n","\u770b\u5230 async \u7684\u4eba\u4e5f\u80fd\u99ac\u4e0a\u53bb\u5224\u65b7\u9019\u500b\u51fd\u5f0f\u6709\u53ef\u80fd\u662f\u8655\u7406\u5728\u7db2\u8def\u8acb\u6c42\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u552f\u4e00\u8981\u6ce8\u610f\u7684\u662f\uff0casync / await \u662f\u4f5c\u7528\u5728 Promise \u7269\u4ef6\u7684\u8a9e\u6cd5\uff0c",(0,r.jsx)(n.br,{}),"\n","\u6240\u4ee5\u5c0d\u4e00\u822c\u51fd\u5f0f\u662f\u6c92\u6709\u7528\u7684\uff0c\u4e26\u4e0d\u6703\u6709\u7b49\u5f85\u6548\u679c\uff5e"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"async \u6703\u524d\u7db4\u5728\u51fd\u5f0f\u5b9a\u7fa9\u6700\u524d\u9762\uff0c\u8868\u793a\u8a72\u51fd\u5f0f\u7684\u56de\u50b3\u503c\u6703\u8b8a\u6210\u4e00\u500b Promise \u7269\u4ef6\uff0c"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.strong,{children:"\u800c await \u5fc5\u9808\u5728 async \u51fd\u5f0f\u4e0b\u624d\u80fd\u57f7\u884c\uff0cawait \u5c31\u7b49\u540c\u65bc then \u7684\u4f5c\u7528\uff0c"}),(0,r.jsx)(n.br,{}),"\n","\u53ea\u662f\u53d6\u503c\u7684\u65b9\u5f0f\u6703\u8b8a\u5f97\u4e0d\u592a\u4e00\u6a23\uff01"]}),"\n",(0,r.jsx)(n.p,{children:"\u6211\u5011\u518d\u6539\u5beb\u525b\u525b\u7684\u7a0b\u5f0f\u78bc\uff0c\u9019\u6642\u932f\u8aa4\u6355\u6349\u5c31\u8981\u6539 try / catch \u7684\u65b9\u5f0f\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'// \u9019\u500b\u51fd\u5f0f\u4e0d\u8b8a\nconst numPromise = (value) =>\n  new Promise((resolve, reject) => {\n    setTimeout(() => {\n      if (typeof value === "number" && value > 0) {\n        resolve("\u6b63\u6578");\n      } else {\n        reject("\u8ca0\u6578\u6216\u4e0d\u5408\u6cd5\u7684\u503c");\n      }\n    }, 300);\n  });\n\n// \u65b0\u589e\u4e00\u500b async \u51fd\u5f0f\u4f86\u53d6\u4ee3 then \u53d6\u503c\nasync function getPromiseResult(num) {\n  try {\n    const result = await numPromise(num);\n    console.log("\u8acb\u6c42\u6210\u529f", result);\n  } catch (err) {\n    console.log("\u8acb\u6c42\u932f\u8aa4", err);\n  }\n}\n\ngetPromiseResult(3); // \u8acb\u6c42\u6210\u529f \u6b63\u6578\ngetPromiseResult("\u4f60\u597d"); // \u8acb\u6c42\u5931\u6557 \u8ca0\u6578\u6216\u4e0d\u5408\u6cd5\u7684\u503c\n//\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u73fe\u5728\u6211\u5011\u6539\u7528\u975e\u540c\u6b65\u51fd\u5f0f getPromiseResult \u4f86\u547c\u53eb numPromise\uff0c",(0,r.jsx)(n.br,{}),"\n","\u4e26\u4e14\u900f\u904e await \u4f86\u53d6\u503c\uff0cresolve \u8207 reject \u7684\u7d50\u679c\u90fd\u80fd\u6b63\u78ba\u6355\u6349\u5230\u4e86\uff01"]}),"\n",(0,r.jsxs)(n.p,{children:["\u6709\u6642\u5019\u6211\u5011\u767c\u8d77\u7db2\u8def\u8acb\u6c42\u5f8c\u4e0d\u9700\u8981\u9032\u884c\u53d6\u503c\uff0c",(0,r.jsx)(n.br,{}),"\n","\u4f46\u4ecd\u7136\u9700\u8981\u7b49\u5f85\u5b83\u57f7\u884c\u5b8c\u6210\u624d\u9032\u884c\u4e0b\u9762\u7684\u7a0b\u5f0f\u6642\uff0c",(0,r.jsx)(n.br,{}),"\n","\u9019\u6642\u76f4\u63a5\u52a0\u4e0a await \u5c31\u53ef\u4ee5\uff0c\u800c\u4e0d\u7528\u53e6\u5916\u5ba3\u544a\u8b8a\u6578\u4f86\u5132\u5b58\u503c\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"async function deleteItem() {\n  try {\n    // \u4e0d\u9700\u8981\u53d6\u503c\u6642\u5c31\u4e0d\u7528\u5ba3\u544a\u8b8a\u6578\u5132\u5b58\n    await axios.delete(url, config);\n    renderList();\n  } catch (err) {\n    console.error(err);\n  }\n}\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"\u53c3\u8003\u8cc7\u6599",children:"\u53c3\u8003\u8cc7\u6599"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://5xruby.tw/posts/promise",children:"\u4f60\u4eca\u5929 Promise \u4e86\u55ce\uff1f"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://eyesofkids.gitbooks.io/javascript-start-es6-promise/content/contents/ch4_basic_usage.html",children:"Promise \u7269\u4ef6\u7684\u5efa\u7acb"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://israynotarray.com/javascript/20220513/3060050230/",children:"JavaScript \u6838\u5fc3\u89c0\u5ff5(80)"})}),"\n"]})]})}function j(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>t});var r=s(6540);const c={},i=r.createContext(c);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);