import Link from 'umi/link';
import {Avatar, Col, Icon, Input, Layout, Menu, Row} from "antd";
// import styles from './index.css';
// import mp4 from '@/demo.mp4'

const {Header, Content, Footer} = Layout;

function BasicLayout(props) {
  return (
    <Layout className="layout">
      {/*<div className={styles.bg_video}>*/}
      {/*  <video className={styles.v1} autoPlay muted loop>*/}
      {/*    <source src={mp4}/>*/}
      {/*  </video>*/}
      {/*</div>*/}

      <div align="center">
        <Header style={{background: '#fff', padding: 0}}>
          <Row style={{width: "79%", textAlign: "left"}}>
            <Col span={3} align="left">
              logo
            </Col>
            <Col xs={4} sm={7} lg={9} align="left">
              <Menu
                theme="light"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                style={{lineHeight: '64px'}}
              >
                <Link to="/">
                  <Menu.Item key="1">主页</Menu.Item>
                </Link>
              </Menu>
            </Col>
            <Col xs={10} sm={9} lg={8} align="right">
              <Input.Search
                placeholder="搜索"
                onSearch={value => console.log(value)}
              /></Col>

            <Col span={1} align="left">
              {/*<Icon type="logout"/>*/}
            </Col>
            <Col span={1} align="left">
              <Icon type="bell"/>
            </Col>
            <Col xs={4} sm={2} lg={1} align="right">
              <Avatar icon="user"/>
            </Col>
            <Col span={1} align="left">
              <Icon type="caret-down"/>
            </Col>
          </Row>
        </Header>
        <Content style={{margin: '16px 16px 0', width: "79%", textAlign: "left"}}>
          <div style={{padding: 16, background: '#fff', minHeight: 360, borderRadius: 3}}>
            {props.children}
          </div>
        </Content>
      </div>

      <Footer style={{textAlign: 'center'}}>
        ©2019
      </Footer>

    </Layout>
  );
}

export default BasicLayout;
