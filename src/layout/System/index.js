import { Layout } from 'antd';
import '../style.scss'
import { useState } from 'react';

import QfHeader from './QfHeader'
import QfSider from './QfSider'
import QfContent from './QfContent'


const { Header, Footer, Sider, Content } = Layout;

export default () => {
  const [collapsed, setCollapsed] = useState(false)
    return (
      <Layout>
        <Sider collapsed={collapsed}>
          <QfSider value={collapsed} onChange={()=>setCollapsed(!collapsed)} />
        </Sider>
      <Layout>
        <Header heught={60}>
          <QfHeader/>
        </Header>
        <Content>
          <QfContent/>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
      
    </Layout>
    )
    
}