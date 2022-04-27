// import logo from './logo.svg';
import { HashRouter } from 'react-router-dom'
import './style/init.css';
import System from '@/layout/System'
import './style/theme.less'
import './assets/logo.svg'
import zhCN from 'antd/lib/locale/zh_CN';
import { ConfigProvider } from 'antd'

function App() {
    return ( 
    <HashRouter>
        <ConfigProvider locale={zhCN}>
            <System/>
        </ConfigProvider>
    </HashRouter>
    );
}

export default App;