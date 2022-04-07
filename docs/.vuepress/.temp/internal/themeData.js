export const themeData = {
  "logo": "https://vuejs.org/images/logo.png",
  "navbar": [
    {
      "text": "首页",
      "link": "/"
    },
    {
      "text": "配置",
      "link": "/guide/"
    }
  ],
  "sidebar": [
    {
      "text": "首页",
      "link": "/"
    },
    {
      "text": "ES6",
      "link": "/high-ctx",
      "children": [
        {
          "text": "高质量内容1111",
          "link": "/high-ctx/test1.html"
        },
        {
          "text": "高质量内容222",
          "link": "/high-ctx/test2.html"
        }
      ]
    },
    {
      "text": "ES7",
      "link": "/high-ctx",
      "children": [
        {
          "text": "高质量内容1",
          "link": "/high-ctx/test1.html"
        },
        {
          "text": "高质量内容22222",
          "link": "/high-ctx/test2.html"
        }
      ]
    },
    {
      "text": "ES2021",
      "link": "/high-ctx",
      "children": [
        {
          "text": "高质量内容1",
          "link": "/high-ctx/test1.html"
        },
        {
          "text": "高质量内容22222",
          "link": "/high-ctx/test2.html"
        }
      ]
    }
  ],
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
