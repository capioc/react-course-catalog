import { React } from 'react';
import "./App.css";
import { Layout, Menu } from 'antd';
// import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from './Dashboard/Dashboard';
import CoursesList from './Courses/CoursesList';
import AddCourse from './Courses/AddCourse';

const { Header, Content } = Layout;

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Header className="header">
          <Router>
            <Link to="/">
              <div className="logo" />
            </Link>

            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key="1">
                <Link to="/courses">Courses</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/courses/add">Add Course</Link>
              </Menu.Item>
            </Menu>
{/* 
            <Switch>
                  <Route path="/courses">
                    <CoursesList />
                  </Route>
                  <Route path="/courses/add">

                  </Route>
                  <Route exact path="/">
                    <Dashboard />
                  </Route>
                </Switch> */}
          </Router>
        </Header>

          <Layout style={{ padding: '0 24px 24px' }}>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Router>
                <Switch>
                  <Route path="/courses/add">
                    <AddCourse></AddCourse>
                  </Route>
                  <Route path="/courses">
                    <CoursesList />
                  </Route>
                  <Route exact path="/">
                    <Dashboard />
                  </Route>
                </Switch>
              </Router>

            </Content>
          </Layout>
        </Layout>
    </div>
  );
}

export default App;
