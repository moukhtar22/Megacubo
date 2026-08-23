import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Megacubo/pt-BR/markdown-page',
    component: ComponentCreator('/Megacubo/pt-BR/markdown-page', '7cd'),
    exact: true
  },
  {
    path: '/Megacubo/pt-BR/docs',
    component: ComponentCreator('/Megacubo/pt-BR/docs', '60f'),
    routes: [
      {
        path: '/Megacubo/pt-BR/docs',
        component: ComponentCreator('/Megacubo/pt-BR/docs', '645'),
        routes: [
          {
            path: '/Megacubo/pt-BR/docs',
            component: ComponentCreator('/Megacubo/pt-BR/docs', 'c5e'),
            routes: [
              {
                path: '/Megacubo/pt-BR/docs/building',
                component: ComponentCreator('/Megacubo/pt-BR/docs/building', 'b50'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Megacubo/pt-BR/docs/community-mode',
                component: ComponentCreator('/Megacubo/pt-BR/docs/community-mode', '7b1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Megacubo/pt-BR/docs/configuring',
                component: ComponentCreator('/Megacubo/pt-BR/docs/configuring', '700'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Megacubo/pt-BR/docs/contributing',
                component: ComponentCreator('/Megacubo/pt-BR/docs/contributing', '657'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Megacubo/pt-BR/docs/developing',
                component: ComponentCreator('/Megacubo/pt-BR/docs/developing', '4dd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Megacubo/pt-BR/docs/faq',
                component: ComponentCreator('/Megacubo/pt-BR/docs/faq', 'e9f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Megacubo/pt-BR/docs/hotkeys',
                component: ComponentCreator('/Megacubo/pt-BR/docs/hotkeys', '49c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Megacubo/pt-BR/docs/installation',
                component: ComponentCreator('/Megacubo/pt-BR/docs/installation', '592'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Megacubo/pt-BR/docs/introduction',
                component: ComponentCreator('/Megacubo/pt-BR/docs/introduction', '3ce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Megacubo/pt-BR/docs/legal',
                component: ComponentCreator('/Megacubo/pt-BR/docs/legal', '33c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Megacubo/pt-BR/docs/performance',
                component: ComponentCreator('/Megacubo/pt-BR/docs/performance', '62f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Megacubo/pt-BR/docs/recommendations',
                component: ComponentCreator('/Megacubo/pt-BR/docs/recommendations', 'ed3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Megacubo/pt-BR/docs/setup-wizard',
                component: ComponentCreator('/Megacubo/pt-BR/docs/setup-wizard', '8b6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Megacubo/pt-BR/docs/support',
                component: ComponentCreator('/Megacubo/pt-BR/docs/support', '2bf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Megacubo/pt-BR/docs/troubleshooting',
                component: ComponentCreator('/Megacubo/pt-BR/docs/troubleshooting', '107'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Megacubo/pt-BR/docs/ui-overview',
                component: ComponentCreator('/Megacubo/pt-BR/docs/ui-overview', '928'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Megacubo/pt-BR/docs/using-iptv-lists',
                component: ComponentCreator('/Megacubo/pt-BR/docs/using-iptv-lists', '7fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Megacubo/pt-BR/docs/watching-live-tv',
                component: ComponentCreator('/Megacubo/pt-BR/docs/watching-live-tv', 'e5f'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/Megacubo/pt-BR/',
    component: ComponentCreator('/Megacubo/pt-BR/', 'a43'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
