import App from '../App';
import Home from '../views/Home';
import TestA from '../views/testa/TestA';
import TestADetailOne from '../views/testa/children/DetailOne';
import TestADetailTwo from '../views/testa/children/DetailTwo';

const routes = [
    {
        path: '/',
        component: App,
        exact: true,
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
        component: TestA,
        exact: false,
        meta:{title:"test-a",icon:''},
        children:[
            {
                path: '/testa/testadetailone',
                name:"testadetailone",
                component: TestADetailOne,
                exact: false,
                meta:{title:"detail-one"},
            },
            {
                path: '/testa/testadetailtwo',
                name:"testadetailtwo",
                component: TestADetailTwo,
                exact: false,
                meta:{title:"detail-two"}
            },
        ]
    }
]

export default routes