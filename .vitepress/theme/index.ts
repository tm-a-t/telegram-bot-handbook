// https://vitepress.dev/guide/custom-theme
import Theme from 'vitepress/theme'
import './vars.css'
import './custom.css'
import CodeTab from '../../components/CodeTab.vue'
import TGPy from '../../components/TGPy.vue'
import HelpNeeded from '../../components/HelpNeeded.vue'
import Layout from './layout/Layout.vue'
import '@nolebase/vitepress-plugin-highlight-targeted-heading/client/style.css'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'

export default {
    extends: Theme,
    Layout: Layout,
    enhanceApp({app, router, siteData}) {
        app.component('CodeTab', CodeTab);
        app.component('TGPy', TGPy);
        app.component('HelpNeeded', HelpNeeded);
        enhanceAppWithTabs(app)
    }
}
