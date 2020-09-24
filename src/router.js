import Vue from 'vue'
import Router from 'vue-router'
import top from './pages'
import about from './pages/about'
import works from './pages/works'
import word from './pages/word'
import blog from './pages/blog'


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/portfolio/',
            name: 'top',
            component: top
        },
        {
            path: '/portfolio/about',
            name: 'about',
            component: about
        },
        {
            path: '/portfolio/works',
            name: 'works',
            component: works
        },
        {
            path: '/portfolio/word',
            name: 'word',
            component: word
        },
        {
            path: '/portfolio/blog',
            name: 'blog',
            component: blog
        },
    ],
    scrollBehavior () {
        return { x: 0, y: 0 }
    }
})
