import React from 'react';
import { Layout, Breadcrumb } from 'antd';

import App from '../App';
import Menu from '../Menu/Menu';

import './Root.scss';

const { Content, Footer } = Layout;

const Root = React.memo((props: any) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Menu />
      <Layout>
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Web3</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, background: '#fff', minHeight: '89vh' }}>
            <App />
          </div>
        </Content>
        <Footer style={{ padding: '0 0 12px 0', textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
});

export default Root;
