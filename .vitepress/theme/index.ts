// https://vitepress.dev/guide/custom-theme
import Theme from 'vitepress/theme'
import './vars.css'
import './custom.css'
import {h} from 'vue'
import ProjectTitle from './ProjectTitle.vue'
import Metric from './Metric.vue'
import LangCookie from './LangCookie.vue'

export default {
    extends: Theme,
    Layout() {
        return h(Theme.Layout, null, {
            'nav-bar-title-after': () => h(ProjectTitle),
            'layout-bottom': () => h(Metric),
            'layout-top': () => h(LangCookie),
        })
    },
    enhanceApp({app, router, siteData}) {
        // ...
    }
}
