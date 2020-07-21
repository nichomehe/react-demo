import Home from '../views/Home';
import Blank from '../views/Blank';
import TestADetailOne from '../views/testa/children/DetailOne';
import TestADetailTwo from '../views/testa/children/DetailTwo';
import Emitter from '../views/eventEmitter/Emitter';
import Producer from '../views/context/Producer';
import ReduxPageOne from '../views/reduxViews/ReduxPageOne';


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
        exact: true,
        redirect:'/home'
    },
    {
        path: '/testa',
        name:"testa",
        component: Blank,
        exact: true,
        meta:{title:"test-a",icon:''},
        children:[
            {
                path: '/testa/testadetailone',
                name:"testadetailone",
                component: TestADetailOne,
                exact: true,
                meta:{title:"detail-one"},
            },
            {
                path: '/testa/testadetailtwo',
                name:"testadetailtwo",
                component: TestADetailTwo,
                exact: true,
                meta:{title:"detail-two"}
            },
        ]
    },
    {
        path: '/communicate',
        name:"communicate",
        component: Blank,
        exact: true,
        meta:{title:"组件通信",icon:''},
        children:[
            {
                path: '/communicate/emitter',
                name:"emitter",
                component: Emitter,
                exact: true,
                meta:{title:"发布订阅者模式"}
            },
            {
                path: '/communicate/producer',
                name:"producer",
                component: Producer,
                exact: true,
                meta:{title:"生产消费者模式context"}
            },
            {
                path: '/communicate/redux',
                name:"reduxpageone",
                component: Blank,
                exact: true,
                meta:{title:"redux"},
                children:[
                    {
                        path: '/communicate/redux/reduxpageone',
                        name:"reduxpageone",
                        component: ReduxPageOne,
                        exact: true,
                        meta:{title:"redux-demo-one"}
                    }
                ]
            }
        ]
    }

]

export default routes