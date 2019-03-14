import Login from './views/Login.vue'
import Home from './views/Home.vue'
import Table from './views/nav/Table.vue'
let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/',
        component: Home,
        name: '信息管理',
        children: [
            { path: '/table', component: Table, name: '人员信息' },
        ]
    }
];

export default routes;