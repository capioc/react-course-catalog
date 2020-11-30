import { Card, Col, Row, Typography } from "antd";
import CoursesTable from "../Courses/CoursesTable";
import Widgets from "./Widgets";
const { Title } = Typography;


const Dashboard = () => {
  
  return (
    <div className="">
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Card className="site-card">
            <Title>
              Welcome to CodeHub Dashboard!
             </Title>
             <Title level={4}>
              Manage everything and have fun
             </Title>
          </Card>
        </Col>
      </Row>
      <Widgets></Widgets>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <CoursesTable className="site-card"></CoursesTable>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
