// https://vitepress.dev/guide/custom-theme
import Theme from 'vitepress/theme'
import './vars.css'
import './custom.css'
// @ts-ignore
import Layout from './Layout.vue'
import Comments from './Comments.vue'

export default {
  extends: Theme,
  Layout: Layout,
  enhanceApp({ app, router, siteData }) {
    app.component('Comments', Comments)
  }
}
