import loadable from '@loadable/component'

import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
  } from '@ant-design/icons';

const GoodFrom = loadable(()=>import('./good/GoodFrom'))
const GoodList = loadable(()=>import('./good/GoodList'))
const UserInfo = loadable(()=>import('./user/UserInfo'))
const UserList = loadable(()=>import('./user/UserList'))

export default [
    {
        id:10,
        title:'商品管理',
        icon:<AppstoreOutlined/>,
        children:[
            {
                id:1001,
                title:'商品详情',
                path:'/good/list',
                component:GoodList
            },
            {
                id:1002,
                title:'商品新增',
                path:'/good/from',
                component:GoodFrom,
                notMenu:true
            }
        ]
    },
    {
        id:11,
        title:'用户管理',
        icon:<MenuUnfoldOutlined/>,
        children:[
            {
                id:2001,
                title:'用户管理',
                path:'/user/list',
                component:UserList
            },
            {
                id:2002,
                title:'用户新增',
                path:'/user/info',
                component:UserInfo
            }
        ]  
    }
]
