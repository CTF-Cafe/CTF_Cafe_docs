import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/CTF_Cafe_docs/__docusaurus/debug',
    component: ComponentCreator('/CTF_Cafe_docs/__docusaurus/debug', '818'),
    exact: true
  },
  {
    path: '/CTF_Cafe_docs/__docusaurus/debug/config',
    component: ComponentCreator('/CTF_Cafe_docs/__docusaurus/debug/config', '37f'),
    exact: true
  },
  {
    path: '/CTF_Cafe_docs/__docusaurus/debug/content',
    component: ComponentCreator('/CTF_Cafe_docs/__docusaurus/debug/content', '267'),
    exact: true
  },
  {
    path: '/CTF_Cafe_docs/__docusaurus/debug/globalData',
    component: ComponentCreator('/CTF_Cafe_docs/__docusaurus/debug/globalData', '544'),
    exact: true
  },
  {
    path: '/CTF_Cafe_docs/__docusaurus/debug/metadata',
    component: ComponentCreator('/CTF_Cafe_docs/__docusaurus/debug/metadata', '90d'),
    exact: true
  },
  {
    path: '/CTF_Cafe_docs/__docusaurus/debug/registry',
    component: ComponentCreator('/CTF_Cafe_docs/__docusaurus/debug/registry', '25d'),
    exact: true
  },
  {
    path: '/CTF_Cafe_docs/__docusaurus/debug/routes',
    component: ComponentCreator('/CTF_Cafe_docs/__docusaurus/debug/routes', 'd05'),
    exact: true
  },
  {
    path: '/CTF_Cafe_docs/blog',
    component: ComponentCreator('/CTF_Cafe_docs/blog', 'b95'),
    exact: true
  },
  {
    path: '/CTF_Cafe_docs/blog/archive',
    component: ComponentCreator('/CTF_Cafe_docs/blog/archive', '313'),
    exact: true
  },
  {
    path: '/CTF_Cafe_docs/blog/first-blog-post',
    component: ComponentCreator('/CTF_Cafe_docs/blog/first-blog-post', 'adf'),
    exact: true
  },
  {
    path: '/CTF_Cafe_docs/blog/tags',
    component: ComponentCreator('/CTF_Cafe_docs/blog/tags', '07e'),
    exact: true
  },
  {
    path: '/CTF_Cafe_docs/blog/tags/hello',
    component: ComponentCreator('/CTF_Cafe_docs/blog/tags/hello', '5e1'),
    exact: true
  },
  {
    path: '/CTF_Cafe_docs/blog/tags/world',
    component: ComponentCreator('/CTF_Cafe_docs/blog/tags/world', 'c2b'),
    exact: true
  },
  {
    path: '/CTF_Cafe_docs/markdown-page',
    component: ComponentCreator('/CTF_Cafe_docs/markdown-page', 'c71'),
    exact: true
  },
  {
    path: '/CTF_Cafe_docs/docs',
    component: ComponentCreator('/CTF_Cafe_docs/docs', 'e2f'),
    routes: [
      {
        path: '/CTF_Cafe_docs/docs/API/admin',
        component: ComponentCreator('/CTF_Cafe_docs/docs/API/admin', '5ef'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/CTF_Cafe_docs/docs/API/global',
        component: ComponentCreator('/CTF_Cafe_docs/docs/API/global', '030'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/CTF_Cafe_docs/docs/API/user',
        component: ComponentCreator('/CTF_Cafe_docs/docs/API/user', '57e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/CTF_Cafe_docs/docs/API/utils/schemas',
        component: ComponentCreator('/CTF_Cafe_docs/docs/API/utils/schemas', 'cc3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/CTF_Cafe_docs/docs/setup',
        component: ComponentCreator('/CTF_Cafe_docs/docs/setup', 'b4e'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/CTF_Cafe_docs/',
    component: ComponentCreator('/CTF_Cafe_docs/', 'f14'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
