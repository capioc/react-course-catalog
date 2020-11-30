import { React, useState } from 'react';
import "./App.css";
import { Layout, Menu } from 'antd';
// import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from './Dashboard/Dashboard';
import CoursesList from './Courses/CoursesList';
import AddCourse from './Courses/AddCourse';
import CourseDetails from './Courses/CourseDetail';

const { Header, Content } = Layout;

const App = () => {
  const [current, setCurrent] = useState('1');

  const handleClick = e => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <div className="App">
      <Router>

        <Layout className="site-layout-background">
          <Header className="header">


              <div className="logo">CodeHub</div>


            <Menu theme="dark" mode="horizontal" onClick={handleClick} selectedKeys={[current]}>
              <Menu.Item key="1">
              <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="2">
              <Link to="/courses">Courses</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/courses/add">Add Course</Link>
              </Menu.Item>
            </Menu>

          </Header>

          <Layout className="site-layout-background" style={{ width:'80%', margin:'auto', minWidth:'70%', padding: '0 24px 24px' }}>
            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >

              <Switch>
                <Route exact path="/courses/add">
                  <AddCourse></AddCourse>
                </Route>
                <Route path="/courses/:id">
                  <CourseDetails />
                </Route>
                <Route path="/courses">
                  <CoursesList />
                </Route>
                <Route exact path="/">
                  <Dashboard />
                </Route>
              </Switch>

            </Content>
          </Layout>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
