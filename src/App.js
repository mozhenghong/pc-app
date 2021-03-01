import React  from 'react';
import {Col,Row} from 'antd';
import './App.less';
import NavLeft from './components/navLeft/index'

function App() {
  return (
    <div className="App">
        <Row className="container">
            <Col span={4} className="nav-left">
                <NavLeft/>
            </Col>
            <Col span={20} className="Main">
                <Row>
                    头部区域
                </Row>
                <Row>
                    内容区域
                </Row>
                <Row>
                    尾部区域
                </Row>
            </Col>
        </Row>
    </div>
  );
}

export default App;
