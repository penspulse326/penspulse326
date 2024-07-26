"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8544],{9732:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var t=n(4848),o=n(8453);const s={title:"\u4e8b\u524d\u6e96\u5099",description:"\u8a2d\u8a08 UI \u5eab\u7684\u4e8b\u524d\u6e96\u5099",date:new Date("2024-07-24T00:00:00.000Z"),keywords:["\u7a0b\u5f0f\u8a9e\u8a00","JavaScript","React","custom-component","component-design","storybook"],slug:"react-custom-ui-prepare"},i=void 0,c={id:"react/react_ui/prepare",title:"\u4e8b\u524d\u6e96\u5099",description:"\u8a2d\u8a08 UI \u5eab\u7684\u4e8b\u524d\u6e96\u5099",source:"@site/docs/react/react_ui/0.prepare.md",sourceDirName:"react/react_ui",slug:"/react/react_ui/react-custom-ui-prepare",permalink:"/react/react_ui/react-custom-ui-prepare",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"\u4e8b\u524d\u6e96\u5099",description:"\u8a2d\u8a08 UI \u5eab\u7684\u4e8b\u524d\u6e96\u5099",date:"2024-07-24T00:00:00.000Z",keywords:["\u7a0b\u5f0f\u8a9e\u8a00","JavaScript","React","custom-component","component-design","storybook"],slug:"react-custom-ui-prepare"},sidebar:"tutorialSidebar",previous:{title:"UI \u5143\u4ef6\u5927\u6311\u6230",permalink:"/category/ui-\u5143\u4ef6\u5927\u6311\u6230"},next:{title:"Button",permalink:"/react/react_ui/react-custom-ui-button"}},a={},l=[{value:"\u5c55\u793a\u5143\u4ef6",id:"\u5c55\u793a\u5143\u4ef6",level:2},{value:"\u5f15\u5165\u4e3b\u984c\u8272",id:"\u5f15\u5165\u4e3b\u984c\u8272",level:2},{value:"\u578b\u5225",id:"\u578b\u5225",level:2},{value:"\u53c3\u8003\u8cc7\u6599",id:"\u53c3\u8003\u8cc7\u6599",level:2}];function d(e){const r={a:"a",br:"br",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:["\u672c\u6b21\u6311\u6230\u53c3\u8003 ",(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"https://ithelp.ithome.com.tw/articles/10263591",children:"30 \u5929\u64c1\u6709\u4e00\u5957\u81ea\u5df1\u624b\u523b\u7684 React UI \u5143\u4ef6\u5eab"})}),"\r\n\u7684\u51fa\u7248\u53e2\u66f8 ",(0,t.jsx)(r.code,{children:"\u54ce\u5440\uff01\u4e0d\u5c0f\u5fc3\u523b\u4e86\u4e00\u5957 React UI \u5143\u4ef6\u5eab"})," \u5be6\u4f5c\u3002"]}),"\n",(0,t.jsx)(r.p,{children:"\u5be6\u4f5c\u524d\u9700\u8981\u5b89\u88dd\u597d\uff1a"}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsx)(r.li,{children:"styled-components"}),"\n",(0,t.jsx)(r.li,{children:"storybook"}),"\n",(0,t.jsx)(r.li,{children:"TypeScript\uff08\u6211\u60f3\u7df4\u7fd2\u6240\u4ee5\u6709\u52a0\uff09"}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"\u5c55\u793a\u5143\u4ef6",children:"\u5c55\u793a\u5143\u4ef6"}),"\n",(0,t.jsxs)(r.p,{children:["\u56e0\u70ba\u66f8\u4e2d\u4e0d\u6703\u793a\u7bc4\u600e\u9ebc\u8a2d\u5b9a storybook\uff0c\u4f46\u662f\u5728\u5be6\u4f5c\u7b2c\u4e00\u500b\u5143\u4ef6\u6642\u53c8\u5f88\u60f3\u770b\u6548\u679c\uff0c",(0,t.jsx)(r.br,{}),"\n","\u6240\u4ee5\u4e00\u958b\u59cb\u82b1\u4e86\u4e00\u4e9b\u6642\u9593\u641e\u61c2\u600e\u9ebc\u8a2d\u5b9a storybook\u3002"]}),"\n",(0,t.jsx)(r.p,{children:"\u4ee5 Button \u5143\u4ef6\u70ba\u4f8b\uff1a"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-tsx",children:"import type { Meta, StoryObj } from '@storybook/react';\r\nimport { fn } from '@storybook/test';\r\nimport Button from '../components/Button';\r\n\r\n/**\r\n * Meta \u6703\u5f9e Button \u88e1\u9762\u64f7\u53d6\u6cdb\u578b\r\n * args \u8868\u793a Button \u7684 props\r\n * argTypes \u8868\u793a\u5728 Storybook \u4e0a\u7684\u64cd\u4f5c\u5f62\u5f0f\r\n */\r\nconst meta = {\r\n\xa0 title: 'Inputs/Button',\r\n\r\n\xa0 component: Button,\r\n\r\n\xa0 parameters: {\r\n\xa0 \xa0 layout: 'centered',\r\n\xa0 },\r\n\r\n\xa0 tags: ['autodocs'],  // \u4f7f\u7528 autodocs \u81ea\u52d5\u7522\u751f\u6587\u4ef6\u7684\u8a71\u8981\u81f3\u5c11 export \u4e00\u500b Story \u7269\u4ef6\r\n\xa0 \r\n  argTypes: {\r\n\xa0 \xa0 variant: {\r\n\xa0 \xa0 \xa0 control: { type: 'radio' },\r\n\xa0 \xa0 \xa0 options: ['contained', 'outlined', 'text'],\r\n\xa0 \xa0 },\r\n\xa0 \xa0 themeColor: {\r\n\xa0 \xa0 \xa0 control: 'color',\r\n\xa0 \xa0 },\r\n\xa0 \xa0 onClick: {\r\n\xa0 \xa0 \xa0 table: {\r\n\xa0 \xa0 \xa0 \xa0 disable: true,\r\n\xa0 \xa0 \xa0 },\r\n\xa0 \xa0 },\r\n\xa0 },\r\n\r\n\xa0 args: {\r\n\xa0 \xa0 children: 'Button',\r\n\xa0 \xa0 isDisabled: false,\r\n\xa0 \xa0 isLoading: false,\r\n\xa0 \xa0 themeColor: 'black',\r\n\xa0 \xa0 onClick: fn(),\r\n\xa0 },\r\n} satisfies Meta<typeof Button>;\r\n\r\n\r\nexport default meta;\r\ntype Story = StoryObj<typeof meta>;\r\n\r\nexport const Contained: Story = {\r\n\xa0 args: {\r\n\xa0 \xa0 variant: 'contained',\r\n\xa0 },\r\n};\r\n\r\nexport const Outlined: Story = {\r\n\xa0 args: {\r\n\xa0 \xa0 variant: 'outlined',\r\n\xa0 },\r\n};\r\n\r\nexport const Text: Story = {\r\n\xa0 args: {\r\n\xa0 \xa0 variant: 'text',\r\n\xa0 },\r\n};\r\n\r\nexport const Custom: Story = {\r\n\xa0 args: {\r\n\xa0 \xa0 variant: 'contained',\r\n\xa0 \xa0 style: {\r\n\xa0 \xa0 \xa0 background: 'linear-gradient(0deg, #16309b 30%, #16a8e2 90%)',\r\n\xa0 \xa0 \xa0 borderRadius: 50,\r\n\xa0 \xa0 },\r\n\xa0 },\r\n};\n"})}),"\n",(0,t.jsx)(r.h2,{id:"\u5f15\u5165\u4e3b\u984c\u8272",children:"\u5f15\u5165\u4e3b\u984c\u8272"}),"\n",(0,t.jsxs)(r.p,{children:["\u5982\u679c\u4f7f\u7528 ThemeProvider \u4f86\u7ba1\u7406\u4e3b\u984c\u8272\u7684\u8a71\u53ef\u80fd\u6703\u9047\u5230\u4e00\u4e9b\u5831\u932f\uff0c",(0,t.jsx)(r.br,{}),"\n","\u539f\u56e0\u662f Storybook \u6c92\u8fa6\u6cd5\u76f4\u63a5\u5f15\u7528 ThemeProvider\uff0c",(0,t.jsx)(r.br,{}),"\n","\u5b98\u65b9\u7d66\u7684\u89e3\u6c7a\u65b9\u6848\uff1a",(0,t.jsx)(r.a,{href:"https://storybook.js.org/recipes/styled-components",children:"# Integrate\xa0Styled Components\xa0with Storybook"})]}),"\n",(0,t.jsx)(r.p,{children:"\u5831\u932f\u5167\u5bb9\uff1a"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"# ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`\n"})}),"\n",(0,t.jsx)(r.h2,{id:"\u578b\u5225",children:"\u578b\u5225"}),"\n",(0,t.jsxs)(r.p,{children:["styled-components \u70ba\u4e86\u9810\u9632\u547d\u540d\u885d\u7a81\uff0c\u81ea\u5b9a\u7fa9\u7684\u5c6c\u6027\u524d\u9762\u90fd\u8981\u52a0\u4e0a ",(0,t.jsx)(r.code,{children:"$"})," \u9019\u500b\u524d\u7db4\uff0c",(0,t.jsx)(r.br,{}),"\n","\u800c\u5728 styled \u5143\u4ef6\u88e1\u9762\u8981\u5f15\u7528\u9019\u4e9b\u5c6c\u6027\u7684\u8a71\u5fc5\u9808\u52a0\u4e0a\u6cdb\u578b\uff0c",(0,t.jsx)(r.br,{}),"\n","\u4f46\u6211\u4e0d\u60f3\u8981\u5916\u5c64\u7684 ",(0,t.jsx)(r.code,{children:"index.ts"})," \u548c\u5167\u5c64\u7684 ",(0,t.jsx)(r.code,{children:"styled"})," \u5143\u4ef6\u90fd\u5404\u81ea\u8a2d\u8a08\u4e00\u500b\u578b\u5225\uff0c",(0,t.jsx)(r.br,{}),"\n","\u56e0\u6b64\u7d71\u4e00\u4f7f\u7528 ",(0,t.jsx)(r.code,{children:"index.ts"})," \u88e1\u9762\u7d66\u5916\u5c64\u7528\u7684\u578b\u5225\uff0c\u4e26\u4e14\u5728\u90e8\u5206\u5c6c\u6027\u52a0\u4e0a ",(0,t.jsx)(r.code,{children:"$"}),"\uff0c",(0,t.jsx)(r.br,{}),"\n","\u9019\u6a23\u6211\u4e5f\u80fd\u5728\u4f7f\u7528\u5143\u4ef6\u6642\u5c31\u5340\u5225\u51fa ",(0,t.jsx)(r.code,{children:"$variant"})," \u662f\u4e00\u500b\u6703\u50b3\u5165\u5230\u5167\u5c64 styled \u4f7f\u7528\u7684\u5c6c\u6027\u3002"]}),"\n",(0,t.jsx)(r.h2,{id:"\u53c3\u8003\u8cc7\u6599",children:"\u53c3\u8003\u8cc7\u6599"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://ithelp.ithome.com.tw/articles/10263591",children:"30 \u5929\u64c1\u6709\u4e00\u5957\u81ea\u5df1\u624b\u523b\u7684 React UI \u5143\u4ef6\u5eab"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://storybook.js.org/recipes/styled-components",children:"Integrate\xa0Styled Components\xa0with Storybook"})}),"\n"]})]})}function p(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>c});var t=n(6540);const o={},s=t.createContext(o);function i(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);