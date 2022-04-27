import { Menu } from 'antd';
import routers from '@/views'
import logo from '@/assets/logo.svg'
import {Link} from 'react-router-dom'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

export default ({value,onChange}) => {
    return (
        <div className="sider">
            <div className='logo'>
                <img src={logo} style={{width:value?'30px':'60px'}}/>
            </div>
            <Menu mode="inline" theme='dark'>
                 {
                    routers.map(ele=>(
                    <Menu.SubMenu key={ele.id} title={ele.title} icon={ele.icon}>
                            {
                                ele.children.map(ele=>(
                                    !ele.notMenu &&
                                    <Menu.Item key={ele.id}>
                                        <Link to={ele.path}>{ele.title}</Link>
                                    </Menu.Item>
                              ))
                            } 
                    </Menu.SubMenu>
                    ))
                 }
            </Menu>
            <div onClick={onChange} className='toggle'>
                 {value ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </div>  
        </div>
    )
}