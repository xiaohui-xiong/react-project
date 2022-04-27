import { Row, Col,Input,Select,DatePicker,Table, Button } from 'antd';
import React from 'react';


import { ReloadOutlined, ColumnHeightOutlined, SettingOutlined, PlusOutlined } from '@ant-design/icons'

const { Option } = Select
const { RangePicker } = DatePicker;

const columns = [
        {
        title: '商品',
        dataIndex: 'name',
        render: (text) => <a>{text}</a>,
        },
        {
        title: '商品价格',
        dataIndex: 'age',
        },
        {
        title: '是否热销',
        dataIndex: 'address',
        },
        {
        title: '发布时间',
        dataIndex: 'address',
        },
        {
        title: '是否热销',
        dataIndex: 'address',
        },
    ];
    const data = [
        {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        },
        {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        },
        {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        },
        {
        key: '4',
        name: 'Disabled User',
        age: 99,
        address: 'Sidney No. 1 Lake Park',
        },
    ];


export default () => {
    return (
        <div className='goodlist'>
            <div className='filter'>
                <Row>
                    <Col span={2}>
                        <span>名称搜索：</span>
                    </Col>
                    <Col span={4}>
                        <Input placeholder="请输入商品名称" />
                    </Col>
                    <Col span={2}>
                        <span>商品品类：</span>
                    </Col>
                    <Col span={4}>
                        <Select
                            style={{display:'block'}}
                            placeholder="请输入商品品类"
                        >
                            <Option value="male">全部品类</Option>
                            <Option value="female">手机数码</Option>
                            <Option value="other">汽车用品</Option>
                            <Option value="111">儿童玩具</Option>
                        </Select>
                    </Col>
                    <Col span={2}>
                        <span>日期筛选：</span>
                    </Col>
                    <Col span={6}>
                        <RangePicker />
                    </Col>
                </Row>
            </div> 
            <div className='table'>
                <Table
                    columns={columns}
                    dataSource={data}
                    pagination={{
                        total:85,
                        showTotal: (total) => `总共${total}条`,
                        defaultPageSize:10,
                        defaultCurrent:1, 
                        showSizeChanger: true,    
                        pageSizeOptions: [2,5,10,20]
                    }} 
                    title={()=>(
                        <Row>
                            <Col span={4}>查询表格</Col>
                            <Col offset={14} span={6}>
                               <Button 
                                 type='primary'
                                 icon={<PlusOutlined/>}
                                 //onClick={()=>history.push('/good/from')}
                                 >
                                     新增
                                 </Button>
                                <span>
                                    <ReloadOutlined/>
                                    <ColumnHeightOutlined/>
                                    <SettingOutlined/>
                                </span>
                            </Col>
                        </Row>  
                    )}
                />
            </div>
        </div>
    )
}