export const data = {
  "key": "v-97dc705a",
  "path": "/high-ctx/test2.html",
  "title": "test1",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1649214180000,
    "contributors": [
      {
        "name": "fanyu",
        "email": "1025153697@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "high-ctx/test2.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
