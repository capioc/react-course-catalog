import { Card, Col, Row } from "antd";
import CoursesTable from "./CoursesTable";

const Dashboard = () => {
  return (
    <div className="site-card-wrapper">
      <Row gutter={[16, 16]}>
        <Col span={24}>
            <Card title="Card title">Welcome to CodeHub</Card>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={6}>
          <Card title="Students" bordered={false}>
            Card content
          </Card>
        </Col>
        <Col span={6}>
          <Card title="Courses" bordered={false}>
            Card content
          </Card>
        </Col>
        <Col span={6}>
          <Card title="Instructors" bordered={false}>
            Card content
          </Card>
        </Col>
        <Col span={6}>
          <Card title="Events" bordered={false}>
            Card content
          </Card>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={24}>
            <CoursesTable></CoursesTable>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
