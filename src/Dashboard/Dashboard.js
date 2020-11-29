import { Card, Col, Row, Typography } from "antd";
import CoursesTable from "../Courses/CoursesTable";
import Widgets from "./Widgets";
const { Title } = Typography;


const Dashboard = () => {
  
  return (
    <div className="">
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Card>
            <Title>
              Welcome to CodeHub
             </Title>
          </Card>
        </Col>
      </Row>
      <Widgets></Widgets>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <CoursesTable></CoursesTable>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
