import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-6ce48554","/contributing.html",{"title":""},["/contributing","/contributing.md"]],
  ["v-8daa1a0e","/",{"title":"Hello Vuepress three"},["/index.html","/README.md"]],
  ["v-fb0f0066","/guide/getting-started.html",{"title":""},["/guide/getting-started","/guide/getting-started.md"]],
  ["v-0978b044","/guide/markdown.html",{"title":""},["/guide/markdown","/guide/markdown.md"]],
  ["v-fffb8e28","/guide/",{"title":""},["/guide/index.html","/guide/README.md"]],
  ["v-5b40dd4c","/high-ctx/",{"title":""},["/high-ctx/index.html","/high-ctx/README.md"]],
  ["v-9b462198","/high-ctx/test1.html",{"title":"test1"},["/high-ctx/test1","/high-ctx/test1.md"]],
  ["v-97dc705a","/high-ctx/test2.html",{"title":"test1"},["/high-ctx/test2","/high-ctx/test2.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
