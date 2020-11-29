import { Card, Col, Row, Typography, Tag } from "antd";
import CoursesList from "../Courses/CoursesList";
import CoursesTable from "../Courses/CoursesTable";
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
      <Row gutter={[16, 16]}>
        <Col span={6}>
          <Card bordered={true}>
          <h3 className="widget-title">{'Students:'.toUpperCase()}</h3>
          <Tag color="geekblue">
              {'1234'.toUpperCase()}
            </Tag>
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
