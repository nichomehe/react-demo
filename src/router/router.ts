import Home from '../views/Home';
import Blank from '../views/Blank';
import TestADetailOne from '../views/routersPage/children/DetailOne';
import TestADetailTwo from '../views/routersPage/children/DetailTwo';
import ChildOne from '../views/routersPage/children/ChildOne';

import DetailQueryState from '../views/routersPage/children/DetailQueryState';
import DetailUrl from '../views/routersPage/children/DetailUrl';
import Emitter from '../views/eventEmitter/Emitter';
import Producer from '../views/context/Producer';
import PageOne from '../views/reduxViews/PageOne';
import List from '../views/mock/List';
import CssModule from '../views/cssModules/CssModule';

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
                path: '/routers/testadetailone',
                name:"testadetailone",
                component: TestADetailOne,
                // exact: true,
                meta:{title:"组件内嵌套子路由"},
                
            },
            {
                path: '/routers/testadetailone/one',
                name:"testadetailoneone",
                component: ChildOne,
                // exact: true
            },
            {
                path: '/routers/testadetailtwo',
                name:"testadetailtwo",
                component: TestADetailTwo,
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
                path: '/communicate/producer',
                name:"producer",
                component: Producer,
                // exact: true,
                meta:{title:"生产消费者模式context"}
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