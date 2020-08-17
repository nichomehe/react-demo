// import React from 'react'
import Home from '../views/Home';
import Blank from '../views/Blank';
import RouterOne from '../views/routersPage/RouterOne';
import RouterTwo from '../views/routersPage/RouterTwo';
import ChildOne from '../views/routersPage/children/ChildOne';

import DetailQueryState from '../views/routersPage/children/DetailQueryState';
import DetailUrl from '../views/routersPage/children/DetailUrl';
import Emitter from '../views/eventEmitter/Emitter';
import OldProducer from '../views/context/OldProducer';
import NewProducer from '../views/context/NewProducer';
import PageOne from '../views/reduxPage/PageOne';
import List from '../views/mock/List';
import MixinPage from '../views/mixinPage/MixinPage';

import CssModule from '../views/cssModules/CssModule';


// const Home = React.lazy(() => import('../views/Home'));

// const Home = () => import(/* webpackChunkName: "home" */ '../views/Home')

// const Home = (r:any) => require.ensure([], () => r(require('../views/Home')), 'Home');
const routes = [
    {
        path: '/',
        exact: true,
        component: Home,
        redirect:'/home'
    },
    {
        path: '/home',
        name:"home",
        component: Home,
        exact: true,
        meta:{title:"Home",icon:""}
    },
    {
        path: '/index',
        component: Home,
        redirect:'/home'
    },
    {
        path: '/mock',
        component: List,
        exact: true,
        meta:{title:"mock",icon:""}
    },
    {
        path: '/mixin',
        component: MixinPage,
        exact: true,
        meta:{title:"自定义装饰器mixin",icon:""}
    },
    {
        path: '/css',
        name:"css",
        component: Blank,
        meta:{title:"css",icon:''},
        children:[
            {
                path: '/css/cssmodule',
                name:"cssmodule",
                component: CssModule,
                meta:{title:"css模块化"},
            }
        ]
    },
    {
        path: '/routers',
        name:"routers",
        component: Blank,
        // exact: true,
        meta:{title:"路由",icon:''},
        children:[
            {
                path: '/routers/routerone',
                name:"routerone",
                component: RouterOne,
                // exact: true,
                meta:{title:"组件内嵌套子路由"},
                
            },
            {
                path: '/routers/routerone/one',
                name:"routeroneone",
                component: ChildOne,
                // exact: true
            },
            {
                path: '/routers/routertwo',
                name:"routertwo",
                component: RouterTwo,
                // exact: true,
                meta:{title:"路由传参"},
            },
            {
                path: '/routers/detailquerystate',
                name:"detailquerystate",
                component: DetailQueryState,
                // exact: true
            },
            {
                path: '/routers/detailurl/:name',
                name:"detailurl",
                component: DetailUrl,
                // exact: true
            },
        ]
    },
    {
        path: '/communicate',
        name:"communicate",
        component: Blank,
        // exact: true,
        meta:{title:"组件通信",icon:''},
        children:[
            {
                path: '/communicate/emitter',
                name:"emitter",
                component: Emitter,
                // exact: true,
                meta:{title:"发布订阅者模式emit"}
            },
            {
                path: '/communicate/context',
                name:"context",
                component: Blank,
                // exact: true,
                meta:{title:"context(生产消费者模式)"},
                children:[
                    {
                        path: '/communicate/context/old',
                        name:"oldcontext",
                        component: OldProducer,
                        meta:{title:"老版context"}
                    },
                    {
                        path: '/communicate/context/new',
                        name:"newcontext",
                        component: NewProducer,
                        meta:{title:"新版context"}
                    },
                ]
            },
            {
                path: '/communicate/redux',
                name:"reduxpageone",
                component: Blank,
                // exact: true,
                meta:{title:"redux"},
                children:[
                    {
                        path: '/communicate/redux/pageone',
                        name:"reduxpageone",
                        component: PageOne,
                        // exact: true,
                        meta:{title:"demo-one"}
                    }
                ]
            }
        ]
    }

]

export default routes