import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b2f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', '4a1'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', 'a68'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '704'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '858'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '299'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '00d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/my-markdown-page',
    component: ComponentCreator('/my-markdown-page', '438'),
    exact: true
  },
  {
    path: '/my-react-page',
    component: ComponentCreator('/my-react-page', '849'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'cbf'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'c4f'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '7f2'),
            routes: [
              {
                path: '/docs/blind-75/AMZN Dialogue Count',
                component: ComponentCreator('/docs/blind-75/AMZN Dialogue Count', '508'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/blind-75/AMZN Elevation',
                component: ComponentCreator('/docs/blind-75/AMZN Elevation', '10e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/blind-75/Amzn PingGroup',
                component: ComponentCreator('/docs/blind-75/Amzn PingGroup', '006'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/blind-75/AMZN Product Reviews',
                component: ComponentCreator('/docs/blind-75/AMZN Product Reviews', '146'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/blind-75/Basic Calculator',
                component: ComponentCreator('/docs/blind-75/Basic Calculator', '3f8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/blind-75/Binary Tree Level Order Traversal',
                component: ComponentCreator('/docs/blind-75/Binary Tree Level Order Traversal', '997'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/blind-75/Climbing Stairs',
                component: ComponentCreator('/docs/blind-75/Climbing Stairs', '3b9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/blind-75/congratulations',
                component: ComponentCreator('/docs/blind-75/congratulations', 'acd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/blind-75/Contains Duplicate',
                component: ComponentCreator('/docs/blind-75/Contains Duplicate', '921'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/blind-75/Convert Sorted Array to Binary Search Tree',
                component: ComponentCreator('/docs/blind-75/Convert Sorted Array to Binary Search Tree', 'd10'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/blind-75/Count And Say',
                component: ComponentCreator('/docs/blind-75/Count And Say', 'a5b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/blind-75/course-schedule-II',
                component: ComponentCreator('/docs/blind-75/course-schedule-II', 'a02'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/blind-75/create-a-document',
                component: ComponentCreator('/docs/blind-75/create-a-document', '372'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/blind-75/create-a-page',
                component: ComponentCreator('/docs/blind-75/create-a-page', '774'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/blind-75/Days Until Warmer Temperature',
                component: ComponentCreator('/docs/blind-75/Days Until Warmer Temperature', '6ae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/blind-75/deploy-your-site',
                component: ComponentCreator('/docs/blind-75/deploy-your-site', '649'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/blind-75/Design Add and Search Words Data Structure',
                component: ComponentCreator('/docs/blind-75/Design Add and Search Words Data Structure', 'dd0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/blind-75/Group Anagrams',
                component: ComponentCreator('/docs/blind-75/Group Anagrams', '100'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/blind-75/Longest Common Prefix',
                component: ComponentCreator('/docs/blind-75/Longest Common Prefix', '0fd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/blind-75/Longest Palindromic Substring',
                component: ComponentCreator('/docs/blind-75/Longest Palindromic Substring', 'a13'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/blind-75/LRU Cache',
                component: ComponentCreator('/docs/blind-75/LRU Cache', '425'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/blind-75/markdown-features',
                component: ComponentCreator('/docs/blind-75/markdown-features', 'ffc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/blind-75/Merge Intervals',
                component: ComponentCreator('/docs/blind-75/Merge Intervals', '05d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/blind-75/Merge K Sorted List',
                component: ComponentCreator('/docs/blind-75/Merge K Sorted List', '65c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/blind-75/Merge Two Sorted Lists',
                component: ComponentCreator('/docs/blind-75/Merge Two Sorted Lists', '8bc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/blind-75/Min Stack',
                component: ComponentCreator('/docs/blind-75/Min Stack', '9c7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/blind-75/Move Zeros',
                component: ComponentCreator('/docs/blind-75/Move Zeros', 'd6c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/blind-75/reate-a-blog-post',
                component: ComponentCreator('/docs/blind-75/reate-a-blog-post', '6de'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/blind-75/Remove Duplicates from Sorted Array',
                component: ComponentCreator('/docs/blind-75/Remove Duplicates from Sorted Array', 'b2f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/blind-75/Reorder Data In Log Files',
                component: ComponentCreator('/docs/blind-75/Reorder Data In Log Files', '55c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/blind-75/Reorganize String',
                component: ComponentCreator('/docs/blind-75/Reorganize String', '7bd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/blind-75/Rotate List',
                component: ComponentCreator('/docs/blind-75/Rotate List', '15f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/blind-75/Search Suggestions System',
                component: ComponentCreator('/docs/blind-75/Search Suggestions System', 'dd0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/blind-75/Time Based Key and Value Store',
                component: ComponentCreator('/docs/blind-75/Time Based Key and Value Store', '5b8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/blind-75/Valid Parenthesis',
                component: ComponentCreator('/docs/blind-75/Valid Parenthesis', '1f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/blind-75/Valid Suduko',
                component: ComponentCreator('/docs/blind-75/Valid Suduko', '7e6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/blind-75/Word Ladder',
                component: ComponentCreator('/docs/blind-75/Word Ladder', '7ce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/blind-75/Word Search',
                component: ComponentCreator('/docs/blind-75/Word Search', '246'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/tutorial---basics',
                component: ComponentCreator('/docs/category/tutorial---basics', '20e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/tutorial---extras',
                component: ComponentCreator('/docs/category/tutorial---extras', '9ad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions', '978'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/docs/tutorial-extras/translate-your-site', 'f9a'),
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
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
