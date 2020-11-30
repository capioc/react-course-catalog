import React from "react";
import { Card, Typography, Spin, Row, Col, Button } from "antd";
import { Link } from "react-router-dom";
import { CheckOutlined } from '@ant-design/icons';
import useCourses from "./useCourses";

const { Title } = Typography;

const CoursesList = () => {
  const [courses, isLoading] = useCourses({
    url: "http://localhost:3001",
    format: "json",
    resource: "courses"
  });

  return (
    <div>
      <Title>All Courses</Title>
      <hr />
      <div className="courses-container">
      <Row gutter={[16,16]}>
        
        {isLoading ? (
          <Spin size="large" />
        ) : (
          courses.map((course, index) => (
            <Col md={{ span: 6 }} xs={{ span: 12 }} key={index}>
            <Card
              title={course.title}
              headStyle={{color:"white"}}
              cover={ <img alt="example" src={course.imagePath} /> }
              className="site-card"
            >
              <p>
                Price: <strong>{course.price.normal}</strong> | 
                Bookable: <strong>{(course.open ? <CheckOutlined style={{color:"green"}} /> : 'No')}</strong>
              </p>
              <p>Duration: <strong>{course.duration}</strong> </p>
              <p>Dates: <strong>{course.dates.start_date} - {course.dates.end_date}</strong></p>
              <Link to={`/courses/${course.id}`}><Button type="primary">View details</Button></Link>
            </Card>
            </Col>
          ))
        )}
        </Row>
      </div>
    </div>
  );
};

export default CoursesList;