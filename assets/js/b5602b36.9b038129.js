"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1253],{1569:(n,s,e)=>{e.r(s),e.d(s,{assets:()=>x,contentTitle:()=>t,default:()=>j,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=e(4848),i=e(8453);const l={title:"[CSS] \u7db2\u683c\u7cfb\u7d71\u6982\u5ff5",description:"\u5229\u7528\u7db2\u683c\u7cfb\u7d71\u7684\u57fa\u672c\u6982\u5ff5\u5e6b\u52a9\u5207\u7248",date:new Date("2023-08-21T12:03:39.000Z"),keywords:["CSS","Grid System","\u7db2\u683c\u7cfb\u7d71","\u5207\u7248"],slug:"css-grid-system"},t=void 0,c={id:"css/2023-08-21-layout-hell",title:"[CSS] \u7db2\u683c\u7cfb\u7d71\u6982\u5ff5",description:"\u5229\u7528\u7db2\u683c\u7cfb\u7d71\u7684\u57fa\u672c\u6982\u5ff5\u5e6b\u52a9\u5207\u7248",source:"@site/docs/css/2023-08-21-layout-hell.md",sourceDirName:"css",slug:"/css/css-grid-system",permalink:"/css/css-grid-system",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"[CSS] \u7db2\u683c\u7cfb\u7d71\u6982\u5ff5",description:"\u5229\u7528\u7db2\u683c\u7cfb\u7d71\u7684\u57fa\u672c\u6982\u5ff5\u5e6b\u52a9\u5207\u7248",date:"2023-08-21T12:03:39.000Z",keywords:["CSS","Grid System","\u7db2\u683c\u7cfb\u7d71","\u5207\u7248"],slug:"css-grid-system"},sidebar:"tutorialSidebar",previous:{title:"CSS",permalink:"/category/css"},next:{title:"[PostCSS] \u5c0e\u5165 PostCSS",permalink:"/css/install-postcss"}},x={},d=[{value:"\u70ba\u4f55\u9700\u8981\u7db2\u683c\u7cfb\u7d71",id:"\u70ba\u4f55\u9700\u8981\u7db2\u683c\u7cfb\u7d71",level:2},{value:"Container",id:"container",level:2},{value:"Column",id:"column",level:2},{value:"Row",id:"row",level:2},{value:"\u5efa\u7acb\u64b0\u5beb\u898f\u5247",id:"\u5efa\u7acb\u64b0\u5beb\u898f\u5247",level:2},{value:"\u53c3\u8003\u8cc7\u6599\uff1a",id:"\u53c3\u8003\u8cc7\u6599",level:2}];function o(n){const s={a:"a",br:"br",code:"code",del:"del",h2:"h2",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:["\u5728 2022 \u5e74\u6211\u6c7a\u5b9a\u4ee5\u524d\u7aef\u5de5\u7a0b\u5e2b\u4f5c\u70ba\u8f49\u8077\u76ee\u6a19\u5f8c\uff0c\u5c31\u958b\u59cb\u4e86\u9019\u6bb5",(0,r.jsx)(s.del,{children:"\u4e0d\u6b78\u8def"}),"\u6f2b\u6f2b\u9577\u8def\u3002",(0,r.jsx)(s.br,{}),"\n","\u6211\u4e00\u958b\u59cb\u9078\u7528\u7684\u6559\u6750\u662f Huli \u5927\u5927\u958b\u8a2d\u7684 Lidemy \u7db2\u7ad9\u8ab2\u7a0b\uff0c",(0,r.jsx)(s.br,{}),"\n","\u4ee5\u53ca\u53c3\u8003\u4ed6 bootcamp \u7684\u8ab2\u7db1\uff0c\u6309\u8868\u64cd\u8ab2\u81ea\u5b78\uff0c\u53ea\u662f\u6c92\u6709\u8001\u5e2b\u6279\u6539......"]}),"\n",(0,r.jsxs)(s.p,{children:["\u7d93\u6b77\u516d\u89d2\u5b78\u9662\u5728 2022 \u5e74\u672b\u8209\u8fa6\u7684\u7cbe\u795e\u6642\u5149\u5c4b\u6d3b\u52d5\u5f8c\uff0c\u632b\u6298\u9084\u883b\u5927\u7684\uff0c",(0,r.jsx)(s.br,{}),"\n","\u6bcf\u9031\u4e3b\u984c\u6211\u90fd\u5617\u8a66\u7528 React \u958b\u767c\uff0c\u60f3\u85c9\u6b64\u719f\u6089 React\uff0c",(0,r.jsx)(s.br,{}),"\n","\u4f46\u6c92\u6709\u4f7f\u7528\u904e\u5176\u4ed6\u53ef\u4ee5\u642d\u914d\u7684 CSS \u6846\u67b6\uff0c\u50c5\u4f7f\u7528\u5728\u8ab2\u7db1\u5167\u5b78\u904e\u7684 styled-components\uff0c",(0,r.jsx)(s.br,{}),"\n","\u6240\u4ee5\u5e7e\u4e4e\u662f\u4ee5\u7d14\u624b\u523b\u7684\u65b9\u5f0f\u505a\u958b\u767c\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:["\u56e0\u70ba\u6c92\u6709\u524d\u671f\u898f\u5283\u7684\u6982\u5ff5\uff0c\u5c0e\u81f4\u4e09\u9031\u7684\u6311\u6230\u90fd\u6c92\u6709\u6642\u9650\u5167\u5b8c\u6210\uff0c",(0,r.jsx)(s.br,{}),"\n","\u7d93\u5e38\u9700\u8981\u908a\u6539\u6a23\u5f0f\u908a\u6574\u5408 React \u908f\u8f2f\uff0c\u65e2\u6c92\u6709\u6548\u7387\uff0c\u6700\u7d42\u5448\u73fe\u4e5f\u4e0d\u76e1\u4eba\u610f\uff0c",(0,r.jsx)(s.br,{}),"\n","\u7b49\u65bc\u7248\u9762\u8207\u529f\u80fd\u6211\u90fd\u6c92\u6709\u517c\u9867\u597d\u3002 \xa0"]}),"\n",(0,r.jsx)(s.h2,{id:"\u70ba\u4f55\u9700\u8981\u7db2\u683c\u7cfb\u7d71",children:"\u70ba\u4f55\u9700\u8981\u7db2\u683c\u7cfb\u7d71"}),"\n",(0,r.jsxs)(s.p,{children:["\u5f8c\u4f86\u6211\u9084\u662f\u6709\u88dc\u5b8c\u7cbe\u795e\u6642\u5149\u5c4b\u7684\u984c\u76ee\uff0c\u4f46\u5c0d\u65bc\u5207\u7248\u7684\u56f0\u60d1\u9084\u662f\u6c92\u6709\u505c\u6b62\uff0c",(0,r.jsx)(s.br,{}),"\n","\u76f4\u5230\u6211\u770b\u5230\u5361\u65af\u4f2f\u8001\u5e2b\u65bc\u53bb\u5e74\u7dda\u4e0a\u76f4\u64ad\u5206\u4eab\u7684\u4e3b\u984c\uff1a",(0,r.jsx)(s.a,{href:"https://www.youtube.com/watch?v=qRZLtIcPdls&t=5256s&ab_channel=%E5%85%AD%E8%A7%92%E5%AD%B8%E9%99%A2",children:"\u5f9e Figma \u5230 VSCode\uff0c\u8a2d\u8a08\u505a\u5230\u7db2\u9801\u5207\u7248"}),"\uff0c",(0,r.jsx)(s.br,{}),"\n","\u624d\u77e5\u9053\u5207\u7248\u7684\u524d\u671f\u898f\u5283\u4e2d\uff0c\u6709\u4e00\u4ef6\u975e\u5e38\u91cd\u8981\u7684\u4e8b\u88ab\u6211\u5ffd\u7565\u4e86\uff1a"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"\u7db2\u683c\u7cfb\u7d71"})}),"\n",(0,r.jsxs)(s.p,{children:["\u5927\u90e8\u5206\u8a2d\u8a08\u7a3f\u6703\u7167\u7db2\u683c\u7cfb\u7d71\u505a\u51fa\u4f86\uff0c\u6240\u4ee5\u7db2\u9801\u5167\u8a31\u591a\u5143\u7d20\u7684\u6392\u5217\u5176\u5be6\u662f\u6709\u898f\u5f8b\u7684\uff0c",(0,r.jsx)(s.br,{}),"\n","\u6c92\u6709\u9019\u4e9b\u524d\u5099\u77e5\u8b58\u7684\u8a71\uff0c \u62ff\u5230\u8a2d\u8a08\u7a3f\u53ef\u80fd\u6703\u6beb\u7121\u982d\u7dd2\u5f9e\u4f55\u958b\u59cb\uff0c",(0,r.jsx)(s.br,{}),"\n","\u6bd4\u5982\u5404\u500b\u5340\u584a\u7684\u5927\u5c0f\u3001\u9593\u8ddd\u3001RWD \u8b8a\u5316\u65b9\u5f0f\u7b49\u7b49\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:["\u6216\u662f\u5beb\u4e86\u4e00\u5361\u8eca\u5c6c\u6027\uff0c\u4f46\u4e0d\u77e5\u5f9e\u4f55\u6574\u7406\uff0c",(0,r.jsx)(s.br,{}),"\n","\u5e38\u5e38\u60f3\u5230\u4ec0\u9ebc\u5c31\u5beb\u4ec0\u9ebc\uff0c\u6700\u5f8c\u767c\u73fe\u660e\u660e\u662f\u76f8\u4f3c\u7684\u7d50\u69cb\uff0c",(0,r.jsx)(s.br,{}),"\n","\u537b\u91cd\u8907\u5beb\u4e86\u597d\u5e7e\u500b\u5dee\u4e0d\u591a\u7684 class..."]}),"\n",(0,r.jsxs)(s.p,{children:["\u4ee5\u7db2\u683c\u7cfb\u7d71\u7684\u6982\u5ff5\u62c6\u89e3\u8a2d\u8a08\u7a3f\u7684\u5404\u500b\u5340\u584a\uff0c\u5be6\u4f5c\u904e\u7a0b\u5c31\u5177\u5099\u898f\u5f8b\uff0c\u5f8c\u7e8c\u4fee\u6539\u4e5f\u6bd4\u8f03\u5bb9\u6613\uff0c",(0,r.jsx)(s.br,{}),"\n","\u5982\u679c\u8a2d\u8a08\u7a3f\u672c\u8eab\u662f\u6c92\u6709\u7db2\u683c\u7cfb\u7d71\u7684\uff0c\u4e5f\u53ef\u4ee5\u81ea\u5df1\u52a0\u5165\uff0c\u65b9\u4fbf\u958b\u767c\u4e0a\u7684\u7ba1\u7406\uff0c",(0,r.jsx)(s.br,{}),"\n","\u5c08\u6848\u958b\u767c\u7684\u5e38\u7528\u7684 CSS \u6846\u67b6\u6216\u662f UI \u5eab\u5927\u591a\u4e5f\u90fd\u6709\u5167\u5efa\u7db2\u683c\u7cfb\u7d71\uff0c",(0,r.jsx)(s.br,{}),"\n","\u5982 Bootstrap\u3001Tailwind \u7b49\u7b49\uff0c\u4e0d\u904e\u6211\u5011\u53ef\u4ee5\u5148\u60f3\u60f3\u770b :"]}),"\n",(0,r.jsx)(s.p,{children:"**\u7d14\u624b\u523b\u8981\u600e\u9ebc\u505a\u5230\u7db2\u683c\u7cfb\u7d71? \xa0"}),"\n",(0,r.jsxs)(s.p,{children:["\u5617\u8a66\u5beb\u51fa\u7c21\u55ae\u7684\u7db2\u683c\u7cfb\u7d71\u5f8c\uff0c\u4f7f\u7528\u6846\u67b6\u6642\u4e5f\u6703\u66f4\u6709\u6982\u5ff5\uff0c",(0,r.jsx)(s.br,{}),"\n","\u6211\u81ea\u5df1\u4f7f\u7528\u7684\u9019\u5957\u908f\u8f2f\u4e5f\u662f\u56e0\u70ba\u5927\u5b78\u4e0a\u8ab2\u66fe\u7d93\u4f7f\u7528\u904e Bootstrap \u800c\u53c3\u8003\u5b83\u505a\u51fa\u4f86\u7684 XD",(0,r.jsx)(s.br,{}),"\n","\u4f46\u624b\u523b\u904e\u4e00\u904d\u518d\u904b\u7528\u5230\u5207\u7248\u4f5c\u696d\u4e0a\uff0c\u4e5f\u8b8a\u5f97\u6bd4\u8f03\u6e05\u695a\u7db2\u683c\u7cfb\u7d71\u80cc\u5f8c\u7684\u8a2d\u8a08\u8108\u7d61\u3002"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h2,{id:"container",children:"Container"}),"\n",(0,r.jsxs)(s.p,{children:["\u4ee5 PCHOME \u9996\u9801\u70ba\u4f8b\uff0c\u53ef\u4ee5\u767c\u73fe\u5f9e\u756b\u9762\u6700\u9802\u7aef\u5c0e\u89bd\u5217\u7684\u6587\u5b57\uff0c",(0,r.jsx)(s.br,{}),"\n","\u5230\u4e0b\u9762\u7684\u5716\u5361\u3001\u6587\u5b57\u7b49\uff0c\u5b83\u5011\u8ddd\u96e2\u756b\u9762\u5de6\u53f3\u908a\u754c\u7684\u8ddd\u96e2\u662f\u4e00\u6a23\u7684\uff0c",(0,r.jsx)(s.br,{}),"\n","\u9019\u662f\u56e0\u70ba\u9019\u4e9b\u5143\u7d20\u90fd\u653e\u5728",(0,r.jsx)(s.strong,{children:"\u5bb9\u5668"}),"\uff08container\uff09\u88e1\u9762\uff1a"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:"https://raw.githubusercontent.com/penspulse326/penspulse326.github.io/images/2023/202317132893520007hjrlf.png",alt:"PCHOME \u9996\u9801"})}),"\n",(0,r.jsxs)(s.p,{children:["\u5728\u9047\u5230\u87a2\u5e55\u8f03\u5bec\u7684\u60c5\u6cc1\u4e0b\uff0c\u8a2d\u8a08\u4e0a\u6703\u5e0c\u671b\u5167\u5bb9\u4e0d\u6703\u56e0\u70ba\u87a2\u5e55\u7684\u5bec\u5ea6\u8b8a\u5bec\uff0c",(0,r.jsx)(s.br,{}),"\n","\u5c0e\u81f4\u5716\u7247\u6216\u5340\u584a\u7684\u7de8\u6392\u4e5f\u88ab\u6a6b\u5411\u62c9\u626f\uff0c\u9019\u6642\u6703\u8a2d\u5b9a\u6700\u5927\u5bec\u5ea6\u4f86\u4fdd\u8b49\u5143\u7d20\u4e0d\u6703\u8d85\u51fa\u9019\u500b\u7bc4\u570d\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:["\u5982\u8a2d\u8a08\u7a3f\u684c\u6a5f\u958b\u7248\u70ba 1920px\u3001\u5e73\u677f 768px\u3001\u624b\u6a5f 375px\uff0c",(0,r.jsx)(s.br,{}),"\n","\u8a2d\u8a08\u5e2b\u5c31\u53ef\u80fd\u5c31\u6703\u7d66\u5bb9\u5668\u7684\u6700\u5927\u5bec\u5ea6\u70ba\uff1a1296px\u3001696px\u3001348px \u7b49\u7b49\u7684\uff0c",(0,r.jsx)(s.br,{}),"\n","\u5e38\u898b\u7684\u6578\u5b57\u5927\u591a\u662f Bootstrap\u3001Tailwind \u9019\u4e9b\u6846\u67b6\u7684\u65b7\u9ede\uff0c\u65b9\u4fbf\u524d\u7aef\u76f4\u63a5\u5957\u7528\u958b\u767c\u3002"]}),"\n",(0,r.jsx)(s.p,{children:"\u5047\u5982\u6211\u5f9e\u624b\u6a5f\u756b\u9762\u958b\u59cb\u5207\u7248\uff0c\u5bb9\u5668\u5c31\u6703\u9019\u6a23\u5beb\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-scss",children:"// \u5728 767px \u4ee5\u524d\u90fd\u986f\u793a\u624b\u6a5f\u756b\u9762\n.container {\n\xa0 margin: 0 auto;\n\xa0 max-width: 348px;\n}\n\n// 768px ~ 1199px \u70ba\u5e73\u677f\u756b\u9762\n@media (min-width: 768px) {\n\xa0 max-width: 696px;\n}\n  \n// 1400px \u958b\u59cb\u70ba\u684c\u6a5f\u756b\u9762\n@media (min-width: 1400px) {\n\xa0 max-width: 1296px;\n}\n"})}),"\n",(0,r.jsx)(s.p,{children:"\u65b7\u9ede\u7684\u5beb\u6cd5\u5c31\u56e0\u4eba\u800c\u7570\uff0c\u4e0d\u904e\u539f\u5247\u90fd\u662f\u4e00\u6a23\u7684\uff1a"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsx)(s.li,{children:"\u5982\u679c\u80fd\u7528\u6700\u5c11\u7684\u65b7\u9ede\u4f5c\u51fa\u6240\u6709\u7248\u578b\u662f\u6700\u597d\u7684"}),"\n",(0,r.jsx)(s.li,{children:"\u7121\u8ad6\u600e\u9ebc\u5207\u6700\u5f8c\u90fd\u8981\u5728\u8a2d\u8a08\u7a3f\u6307\u5b9a\u7684\u89e3\u6790\u5ea6\u4e0a\u5448\u73fe\u4e00\u6a23\u7684\u7d50\u679c"}),"\n",(0,r.jsxs)(s.li,{children:["\u65b7\u9ede\u4e4b\u9593\u4e2d\u9593\u7684\u904e\u5ea6\u7bc4\u570d\u904e\u5927\uff0c\u8981\u8ddf\u8a2d\u8a08\u5e2b\u78ba\u8a8d\u4e00\u4e0b\u9700\u4e0d\u9700\u8981\u63d0\u65e9\u8b8a\u7248",(0,r.jsx)(s.br,{}),"\n","\uff08\u50cf\u4e0a\u9762\u5e73\u677f 768px \u8ddf\u684c\u6a5f 1920px \u4e2d\u9593\u5340\u9593\u6709\u9ede\u5927\uff0c\u56e0\u6b64\u6211\u8a2d\u5728 1400px \u958b\u59cb\u8b8a\u70ba\u684c\u6a5f\u7248\u672c\uff09"]}),"\n"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h2,{id:"column",children:"Column"}),"\n",(0,r.jsxs)(s.p,{children:["\u6c7a\u5b9a\u597d\u5bb9\u5668\u7684\u5bec\u5ea6\u5f8c\uff0c\u5bb9\u5668\u5167\u6703\u4f9d\u7248\u578b\u5206\u6210 12 \u683c\uff5e 4 \u683c\uff08column\uff09\u7b49\u7b49\uff0c",(0,r.jsx)(s.br,{}),"\n","\u624b\u6a5f\u901a\u5e38\u662f 4 \u683c\u3001\u684c\u6a5f 12 \u683c\uff0c\u5e73\u677f\u5c31\u6bd4\u8f03\u4e0d\u4e00\u5b9a\uff0c\u5404\u7a2e\u683c\u6578\u90fd\u6709\u4eba\u8a2d\u8a08\u904e\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:["\u6709\u63a1\u7528\u7db2\u683c\u7cfb\u7d71\u7684\u7a3f\u4ef6\uff0c\u5143\u7d20\u5bec\u5ea6\u5927\u591a\u6578\u4e5f\u6703\u4f9d\u5faa\u683c\u5b50\u6578\u91cf\u505a\u8a2d\u5b9a\u6216\u6392\u5217\uff0c",(0,r.jsx)(s.br,{}),"\n","\u6bd4\u5982\u4e0b\u9762\u7684\u8a2d\u8a08\u7a3f\u53ef\u4ee5\u770b\u5230\uff0c\u5c0e\u89bd\u5217\u7684 logo \u8a2d\u5b9a\u70ba 1 \u683c\u5bec\uff0c",(0,r.jsx)(s.br,{}),"\n","\u756b\u9762\u53f3\u908a\u7684\u5927 logo \u8207\u6309\u9215\u5247\u662f\u4f54\u4e86 4 \u683c\uff0c\u4e26\u4e14\u8981\u5728\u7b2c 8 \u683c\u51fa\u73fe\uff1a"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:"https://raw.githubusercontent.com/penspulse326/penspulse326.github.io/images/2023/20231713289176000p3tk0v.png",alt:"2022F2E UI \u7d44\u5c0f\u83dc\u7684\u7a3f\u4ef6"})}),"\n",(0,r.jsxs)(s.p,{children:["\u683c\u5b50\u4e4b\u9593\u6703\u6709\u4e00\u500b\u9593\u8ddd\u800c\u4e0d\u662f\u7dca\u7dca\u76f8\u9023\u7684\uff0c\u8a2d\u8a08\u7a3f\u901a\u5e38\u4e5f\u6703\u8a2d\u5b9a\u9019\u500b\u9593\u8ddd\u7684\u5927\u5c0f\uff0c",(0,r.jsx)(s.br,{}),"\n","\u7a31\u70ba gutter\uff0cgutter \u5728\u4e0d\u540c\u7684\u7248\u9762\u8a2d\u8a08\u4e0a\u6709\u53ef\u80fd\u662f\u4e0d\u540c\u5bec\u5ea6\u7684\uff0c\u6240\u4ee5\u5728\u64b0\u5beb\u6642\u8981\u6ce8\u610f\u3002"]}),"\n",(0,r.jsx)(s.p,{children:"\u77e5\u9053\u9019\u4e9b\u6982\u5ff5\u4e4b\u5f8c\uff0c\u6211\u5011\u5c31\u53ef\u4ee5\u8a2d\u5b9a\u683c\u5b50\u7684 class\uff0c \xa0\n\u4ee5\u4e0b\u662f\u684c\u6a5f\u548c\u624b\u6a5f\u7248\u578b\u7684\u5927\u6982\u793a\u7bc4\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-scss",children:"// \u683c\u5b50\u9593\u8ddd\n$gutter: 20px;\n  \n// \u8a2d\u5b9a\u624b\u6a5f\u7248\u7684\u683c\u5b50\u5bec\u5ea6 \u7e3d\u5171 4 \u683c\n@for $i from 1 through 4 {\n\xa0 .col-sm-#{$i} {\n\xa0 \xa0 width: calc((100%-($gutter * 3)) / 4 * $i + $gutter * ($i-1));\n\xa0 }\n}\n\n// \u8a2d\u5b9a\u684c\u6a5f\u7248\u7684\u683c\u5b50\u5bec\u5ea6 \u7e3d\u5171 12 \u683c\n// \u5beb\u5728 media query \u88e1\u9762\u4fdd\u8b49\u5b83\u53ea\u6703\u5728\u67d0\u500b\u5bec\u5ea6\u4e0b\u4f5c\u7528\n@media (min-width: 1400px) {\n\xa0 @for $i from 1 through 12 {\n\xa0 \xa0 .col-lg-#{$i} {\n\xa0 \xa0 \xa0 width: calc((100% - ($gutter * 11)) / 12 * $i + $gutter * ($i - 1));\n\xa0 \xa0 }\n\xa0 }\n}\n"})}),"\n",(0,r.jsx)(s.p,{children:"\u683c\u5b50\u5bec\u5ea6\u7684\u8a2d\u5b9a\u8ddf\u6578\u5b78\u8ab2\u7684\u7a2e\u6a39\u554f\u984c\u662f\u985e\u4f3c\u7684\uff0c \xa0\n\u5927\u5bb6\u4e0d\u8981\u7dca\u5f35\uff0c\u6211\u99ac\u4e0a\u89e3\u91cb......"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsx)(s.li,{children:"for \u8ff4\u5708\u4f86\u7522\u751f\u4e00\u9023\u4e32\u7684 class \u540d\u7a31"}),"\n",(0,r.jsx)(s.li,{children:"width \u9019\u500b CSS \u5c6c\u6027\u53ef\u4ee5\u900f\u904e calc() \u505a\u767e\u5206\u6bd4\u548c px \u7b49\u5404\u7a2e\u55ae\u4f4d\u7684\u6df7\u5408\u8a08\u7b97"}),"\n",(0,r.jsx)(s.li,{children:"100% \u4ee3\u8868\u6574\u500b\u5bb9\u5668\u7684\u5bec\u5ea6"}),"\n",(0,r.jsx)(s.li,{children:"\u6240\u4ee5\u5206\u6563\u6210 12 \u683c\u4e26\u4e0d\u662f\u76f4\u63a5\u7528 100% \u9664\u4ee5 12\uff0c\u8981\u5148\u6263\u6389\u683c\u5b50\u4e4b\u9593\u7684\u9593\u8ddd gutter"}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.del,{children:"\u770b\u4e0d\u61c2\u76f4\u63a5\u6284\u6c92\u95dc\u4fc2"})}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["\u4ee5\u684c\u6a5f\u70ba\u4f8b\uff0c\u6709 12 \u500b\u683c\u5b50\u6703\u6709 11 \u500b\u9593\u8ddd\uff0c",(0,r.jsx)(s.br,{}),"\n","\u6263\u6389\u5168\u90e8\u9593\u8ddd\u4f54\u7528\u7684\u5bec\u5ea6 $gutter * 11\uff0c\u518d\u9664\u4ee5 12\uff0c",(0,r.jsx)(s.br,{}),"\n","\u5c31\u662f\u5bb9\u5668\u7684\u5bec\u5ea6\u4e0b\u6bcf\u500b\u683c\u5b50\u771f\u6b63\u7684\u5bec\u5ea6\uff0c",(0,r.jsx)(s.br,{}),"\n","\u518d\u4f9d\u7167\u76ee\u524d\u8ff4\u5708\u57f7\u884c\u7684\u6578\u5b57\u4f86\u7b97\u51fa 1 ~ 12 \u683c\u500b\u5225\u6709\u591a\u5bec\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:["\u5047\u5982\u73fe\u5728\u8ff4\u5708\u8dd1\u5230 $i = 6\uff0c\u4e5f\u5c31\u662f\u6b63\u5728\u751f\u6210 .col-lg-6 \u9019\u500b class\uff0c",(0,r.jsx)(s.br,{}),"\n","\u5f9e\u525b\u525b\u7b97\u51fa\u7684\u6bcf\u683c\u5bec\u5ea6 ( 100% - ( $gutter * 11 )) / 12\uff0c",(0,r.jsx)(s.br,{}),"\n","\u4e58\u4e0a 6 \u518d\u52a0\u4e0a 5 \u500b\u9593\u8ddd\uff0c\u5c31\u662f .col-lg-6 \u5be6\u969b\u4e0a\u5728\u756b\u9762\u4f54\u7528\u7684\u5bec\u5ea6\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:["\u900f\u904e for \u8ff4\u5708\u52a0\u4e0a\u4e00\u4e9b\u7c21\u55ae\u7684\u6578\u5b78\u8a08\u7b97\uff0c",(0,r.jsx)(s.br,{}),"\n","\u5c31\u5b8c\u6210\u4e86 1 \u5230 12 \u683c\u5bec\u5ea6\u8a08\u7b97\uff0c\u4e26\u4e14\u53ef\u4ee5\u4f7f\u7528 class \u8a2d\u5b9a\u5bec\u5ea6\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:["\u56e0\u70ba\u900f\u904e @media \u9650\u5236\u4e86\u6bcf\u7a2e\u7248\u578b\u4e0b\u6703\u4f5c\u7528\u7684\u683c\u5b50\uff0c",(0,r.jsx)(s.br,{}),"\n","\u6240\u4ee5\u4e00\u500b\u5143\u7d20\u4e0a\u53ef\u4ee5\u52a0 ",(0,r.jsx)(s.strong,{children:".col-lg-4"}),"\u3001 ",(0,r.jsx)(s.strong,{children:"col-md-6"})," \u7b49\u7b49\u591a\u7a2e class\uff0c",(0,r.jsx)(s.br,{}),"\n","\u4f7f\u5b83\u5011\u53ef\u4ee5\u7b26\u5408\u8a2d\u8a08\u7a3f\u4e0a\u4e0d\u540c\u7248\u578b\u4e0b\u7684\u5bec\u5ea6\u8b8a\u5316\uff01 \xa0"]}),"\n",(0,r.jsxs)(s.p,{children:["\u4f46\u8981\u6ce8\u610f\u7684\u662f\u5982\u679c\u8a72\u5143\u7d20\u5df2\u7d93\u6709 col \u7684 class\uff0c",(0,r.jsx)(s.br,{}),"\n","\u5728 CSS \u88e1\u9762\u5c31\u4e0d\u8981\u518d\u70ba\u9019\u500b\u5143\u7d20\u8a2d\u8207\u5bec\u5ea6\u6709\u95dc\u7684\u5c6c\u6027\uff0c",(0,r.jsx)(s.br,{}),"\n","\u5426\u5247\u6703\u56e0\u70ba\u8907\u5beb\u7684\u95dc\u4fc2\uff0c\u4f7f col \u8a08\u7b97\u597d\u7684\u5bec\u5ea6\u5931\u6548\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:["\u56e0\u70ba\u5bb9\u5668\u6709\u8a2d\u5b9a max-width\uff0c\u6240\u4ee5\u756b\u9762\u5bec\u5ea6\u5728\u4e0d\u8d85\u904e\u5bb9\u5668\u7684\u6700\u5927\u5bec\u5ea6\u4e0b\u4f38\u7e2e\u6642\uff0c",(0,r.jsx)(s.br,{}),"\n","\u5bb9\u5668\u672c\u8eab\u7684\u5bec\u5ea6\u4e5f\u6703\u4e0d\u65b7\u6539\u8b8a\uff0c\u800c\u6211\u5011\u525b\u525b\u5728\u8a08\u7b97\u683c\u5b50\u5bec\u5ea6\u6642\u662f\u4ee5\u5bb9\u5668\u7684 100% \u70ba\u57fa\u6e96\uff0c",(0,r.jsx)(s.br,{}),"\n","\u6240\u4ee5\u9019\u4e9b\u6709 col \u7684\u5143\u7d20\u4e5f\u6703\u7b49\u6bd4\u4f8b\u62c9\u4f38\u3002"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h2,{id:"row",children:"Row"}),"\n",(0,r.jsxs)(s.p,{children:["\u6709\u4e86\u5bb9\u5668\u8207\u683c\u5b50\u5f8c\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528 flex \u4f86\u8f15\u9b06\u8655\u7406\u7d50\u69cb\u6bd4\u8f03\u55ae\u7d14\u7684 RWD \u8b8a\u7248\uff0c",(0,r.jsx)(s.br,{}),"\n","\u719f\u6089 Bootstrap \u7684\u4eba\u61c9\u8a72\u77e5\u9053\uff0c\u64c1\u6709 col \u7684\u5143\u7d20\u90fd\u8981\u653e\u5728 row \u88e1\u9762\uff1a"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-scss",children:".row {\n\xa0 display: flex;\n\xa0 flex-wrap: wrap;\n}\n"})}),"\n",(0,r.jsxs)(s.p,{children:["row \u5c31\u662f\u4e00\u500b\u6709 flex \u5c6c\u6027\u7684\u5bb9\u5668\uff0c\u5fc5\u9808\u642d\u914d\u4e0a ",(0,r.jsx)(s.code,{children:"flex-wrap: wrap"})," \u7684\u5c6c\u6027\uff0c",(0,r.jsx)(s.br,{}),"\n","\u624d\u80fd\u4f7f\u6211\u5011\u8a2d\u5b9a\u597d\u7684\u5143\u7d20\u4f54\u6709\u6b63\u78ba\u7684\u683c\u5b50\u5bec\u5ea6\u4e26\u6210\u529f\u63db\u884c\u3002 \xa0\n\uff08\u6c92\u6709\u52a0\u5165 wrap \u6703\u5168\u90e8\u64e0\u5728\u540c\u4e00\u884c\uff09"]}),"\n",(0,r.jsx)(s.p,{children:"\u4f8b\u5982\u6211\u5011\u8a2d\u5b9a\u56db\u500b\u4e00\u6392\u7684\u5143\u7d20\uff0c\u6bcf\u500b\u5143\u7d20\u5b83\u5011\u5728\u684c\u6a5f\u3001\u624b\u6a5f\u4e0a\u5404\u4f54 3 \u683c\u30014 \u683c\uff0c \xa0\n\u5728\u756b\u9762\u4e0a\u770b\u8d77\u4f86\u662f\uff1a"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"\u684c\u6a5f\u4e0a\u56db\u500b\u5143\u7d20\u6392\u4e00\u6a6b\u5217\u4f54\u6eff\u4e86 12 \u683c\u3002"}),"\n",(0,r.jsx)(s.li,{children:"\u624b\u6a5f\u4e0a\u6bcf\u500b\u5143\u7d20\u90fd\u6eff\u7248\uff0c\u5448\u73fe\u76f4\u884c\u6392\u5217\u3002 \xa0"}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"\uff08\u56e0\u70ba\u524d\u9762\u8a2d\u5b9a\u624b\u6a5f\u662f 4 \u683c\uff0c\u6240\u4ee5\u5982\u679c\u5143\u7d20\u662f 4 \u683c\u5bec\u5c31\u662f\u6eff\u7248\u4e86\uff09"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:"https://raw.githubusercontent.com/penspulse326/penspulse326.github.io/images/2023/20231713289256000933swj.png",alt:"\u5169\u500b\u7248\u578b\u7684 row \u8b8a\u5316"})}),"\n",(0,r.jsxs)(s.p,{children:["\u9019\u6642 row \u6216\u662f\u5176\u4ed6\u5177\u6709 flex \u5c6c\u6027\u7684\u5bb9\u5668\uff0c\u642d\u914d gap \u5c6c\u6027\u5c31\u53ef\u4ee5\u8d77\u5230\u5f88\u597d\u7684\u5206\u9694\u6548\u679c\uff0c",(0,r.jsx)(s.br,{}),"\n","\u9019\u4e9b\u5143\u7d20\u6703\u4f9d\u7167 gap \u7684\u6578\u503c\u5206\u958b\uff0c\u4e26\u4e14\u982d\u5c3e\u5143\u7d20\u4e5f\u4e0d\u6703\u7522\u751f\u984d\u5916\u7684\u9593\u8ddd\u3002 \xa0"]}),"\n",(0,r.jsx)(s.p,{children:"\uff08gap \u7684\u5de6\u53f3\u9593\u9694\u901a\u5e38\u5c31\u662f\u7db2\u683c\u7684 gutter\uff0c\u4e0a\u4e0b\u9593\u9694\u5c31\u770b\u7a3f\u4ef6\u600e\u9ebc\u8a2d\u5b9a\uff09"}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h2,{id:"\u5efa\u7acb\u64b0\u5beb\u898f\u5247",children:"\u5efa\u7acb\u64b0\u5beb\u898f\u5247"}),"\n",(0,r.jsxs)(s.p,{children:["\u7d14\u624b\u523b\u7684\u6a21\u5f0f\u4e0b\uff0c\u7576\u6211\u5011\u5beb\u7684\u5340\u584a\u8d8a\u4f86\u8d8a\u591a\uff0c",(0,r.jsx)(s.br,{}),"\n","CSS \u6a94\u4e5f\u6703\u8b8a\u5f97\u5197\u9577\uff0c\u5373\u4f7f\u7528 mixin \u7684\u65b9\u5f0f\u628a\u91cd\u8907\u7684\u5c6c\u6027\u529f\u80fd\u6253\u5305\u8d77\u4f86\uff0c",(0,r.jsx)(s.br,{}),"\n","\u6709\u53ef\u80fd\u9084\u662f\u6574\u7406\u4e0d\u5b8c\uff0c\u9019\u6642\u5019\u5982\u679c\u6709\u4e00\u5957\u64b0\u5beb\u898f\u5247\uff0c\u5c31\u80fd\u8b93\u95b1\u8b80\u7684\u96e3\u5ea6\u7a0d\u5fae\u964d\u4f4e\uff01",(0,r.jsx)(s.br,{}),"\n","\u5982\u679c\u662f\u591a\u4eba\u5354\u4f5c\u7684\u8a71\uff0c\u8a02\u88fd\u4e00\u500b\u5927\u5bb6\u5fc5\u9808\u9075\u5b88\u7684\u898f\u5247\u5373\u53ef\u3002 \xa0"]}),"\n",(0,r.jsx)(s.p,{children:"\u5982\u50cf\u6211\u81ea\u5df1\u64b0\u5beb\u6642\uff0c\u901a\u5e38\u662f\u4f9d\u5c6c\u6027\u7684\u6027\u8cea\uff0c\u4e0b\u500b\u7a7a\u884c\u5340\u5206\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-scss",children:"div {\n\xa0 // \u8ddf position \u6709\u95dc\u7684\u5beb\u5728\u4e00\u8d77\n\xa0 position: relative;\n\xa0 top: 100px;\n\xa0 left: 50px;\n\n\xa0 // \u8ddf display \u6709\u95dc\u7684\n\xa0 display: flex;\n\xa0 flex-direction: column;\n\xa0 justify-content: center;\n\n\xa0 // \u8ddf box model \u6709\u95dc\u7684\n\xa0 margin: 0 auto;\n\xa0 padding: 12px 20px;\n\xa0 width: 50%;\n\n\t// \u8ddf border \u6709\u95dc\u7684\n\xa0 border: 1px solid red;\n  \n\xa0 // \u8ddf background \u6709\u95dc\u7684\n\xa0 background-color: grey;\n\xa0 opacity: 0.8;\n\n\xa0 // \u8ddf font \u6709\u95dc\u7684\n\xa0 color: white;\n\xa0 font-size: 20px;\n\xa0 text-align: right;\n\n\xa0 // \u8ddf transform \u6709\u95dc\u7684\n\xa0 transform: scaleX(0.5);\n\xa0 transition: 0.3s;\n\n\xa0 // \u5176\u4ed6\u6709\u7684\u6c92\u7684\n\xa0 object-fit: cover;\n}\n"})}),"\n",(0,r.jsx)(s.p,{children:"\u9019\u662f\u6211\u500b\u4eba\u7684\u64b0\u5beb\u7fd2\u6163\uff0c\u50c5\u4f9b\u53c3\u8003\uff5e\u53ea\u8981\u6709\u4e00\u5957\u65b9\u4fbf\u81ea\u5df1\u7ba1\u7406\u548c\u4fee\u6539\u7684\u5beb\u6cd5\u5373\u53ef\u3002"}),"\n",(0,r.jsxs)(s.p,{children:["\u8981\u6ce8\u610f\u7684\u662f\u7576\u7528",(0,r.jsx)(s.strong,{children:"\u5de2\u72c0\u9078\u64c7\u5668"}),"\u7684\u65b9\u5f0f\u4f86\u5beb\u5c6c\u6027\u6642\uff0c",(0,r.jsx)(s.br,{}),"\n","\u76e1\u91cf\u63a7\u5236\u5728 3 \u5c64\u4ee5\u5167\uff0c\u5426\u5247\u6703\u9020\u6210\u7db2\u9801\u7684\u6548\u80fd\u554f\u984c\uff0c",(0,r.jsx)(s.br,{}),"\n","\u5143\u7d20\u6027\u8cea\u6bd4\u8f03\u7279\u5225\u6216\u662f\u4f5c\u7528\u7bc4\u570d\u8f03\u5927\u7684\uff0c",(0,r.jsx)(s.br,{}),"\n","\u4f8b\u5982\u8cc7\u8a0a\u7d50\u69cb\u8f03\u591a\u7684\u5716\u5361\u3001\u6216\u662f\u5927\u5340\u584a\u88e1\u9762\u7684\u5143\u7d20\u6709\u4e92\u52d5\u529f\u80fd\u7b49\u7b49\uff0c",(0,r.jsx)(s.br,{}),"\n","\u6700\u597d\u4e5f\u8981\u53e6\u5916\u547d\u540d\u4e00\u500b class \u4f86\u76f4\u63a5\u9078\u53d6\u5b83\uff0c",(0,r.jsx)(s.br,{}),"\n","\u4ee5\u4e0a\u5169\u9ede\u4e5f\u6703\u90fd\u6703\u5f71\u97ff\u95b1\u8b80\u7a0b\u5f0f\u78bc\u7684\u56f0\u96e3\u5ea6\u3002"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h2,{id:"\u53c3\u8003\u8cc7\u6599",children:"\u53c3\u8003\u8cc7\u6599\uff1a"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://www.figma.com/file/sPyo1NZ2zYyUQ0Z7VAj3et/%E5%B0%8F%E8%8F%9C_WEEK2?type=design&node-id=61-6099&mode=design&t=YGd0glcr7ZgfqXIy-0",children:"\u5c0f\u83dc\u5c0f\u59d0\u7684\u7a3f\u4ef6"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://medium.com/ivycodefive/5-bootstrap-%E7%B6%B2%E6%A0%BC%E7%B3%BB%E7%B5%B1-grid-be5779287231",children:"Bootstrap \u7db2\u683c\u7cfb\u7d71"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://www.youtube.com/watch?v=qRZLtIcPdls&t=5256s&ab_channel=%E5%85%AD%E8%A7%92%E5%AD%B8%E9%99%A2",children:"\u5f9e Figma \u5230 VSCode\uff0c\u8a2d\u8a08\u505a\u5230\u7db2\u9801\u5207\u7248"})}),"\n"]})]})}function j(n={}){const{wrapper:s}={...(0,i.R)(),...n.components};return s?(0,r.jsx)(s,{...n,children:(0,r.jsx)(o,{...n})}):o(n)}},8453:(n,s,e)=>{e.d(s,{R:()=>t,x:()=>c});var r=e(6540);const i={},l=r.createContext(i);function t(n){const s=r.useContext(l);return r.useMemo((function(){return"function"==typeof n?n(s):{...s,...n}}),[s,n])}function c(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:t(n.components),r.createElement(l.Provider,{value:s},n.children)}}}]);