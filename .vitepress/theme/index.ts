// https://vitepress.dev/guide/custom-theme
import Theme from 'vitepress/theme'
import './vars.css'
import './custom.css'
import CodeTab from '../../components/CodeTab.vue'
import TGPy from '../../components/TGPy.vue'
import Layout from './layout/Layout.vue'

export default {
    extends: Theme,
    Layout: Layout,
    enhanceApp({app, router, siteData}) {
        app.component('CodeTab', CodeTab);
        app.component('TGPy', TGPy);
    }
}
