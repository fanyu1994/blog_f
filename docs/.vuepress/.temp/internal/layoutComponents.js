import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("E:/ow-project/myProject/ohhh/beggar/src/vue/blog/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("E:/ow-project/myProject/ohhh/beggar/src/vue/blog/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
