import VueRouter from 'vue-router'
import index from '../../components/index.vue'
import mainbox from '../../components/mainbox.vue'
import classify from '../../components/classify.vue'
import mine from '../../components/mine.vue'
import shopcar from '../../components/shopcar.vue'
import phonelogin from '../../components/phonelogin.vue'
import register from '../../components/register.vue'
import s360login from '../../components/s360login.vue'
import select from '../../components/select.vue'
import list from '../../components/list.vue'
import detail from '../../components/detail.vue'
var router = new VueRouter({
    routes: [
        {
            path: '/',
            component: mainbox,
            children: [
                {
                    path: '/index',
                    component: index
                }, {
                    path: '/classify',
                    component: classify
                }, {
                    path: '/mine',
                    component: mine
                }
            ],
            redirect: '/index'
        }, {
            path: '/phonelogin',
            component: phonelogin
        }, {
            path: '/register',
            component: register
        }, {
            path: '/s360login',
            component: s360login
        }, {
            path: '/select',
            component: select
        }, {
            path: '/list',
            component: list
        }, {
            path: '/detail',
            component: detail
        }, {
            path: '/shopcar',
            component: shopcar
        }, {
            path: '/*',
            redirect: '/index'
        }
    ]
})
export default router;