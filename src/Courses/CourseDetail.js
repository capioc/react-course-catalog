import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Col, Card, Row, Spin, Typography } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import useCourse from './useCourse';
const { Title }= Typography;

const CourseDetails = () => {
    const { id } = useParams();
    const [course, isLoading] = useCourse({
        url: "http://localhost:3001",
        format: "json",
        resource: "courses",
        id: id
      });

    return (
        <>{isLoading ? (<Spin size="large" />) : (
            <>
            <Title>{course.title}</Title>
            <Row gutter={[16,16]}>
             <Col span={6}>
                <Card
                    cover={ <img alt="course" src={course.imagePath} /> }
                />

             </Col>
             <Col span={18}>
                <p>Price: {course.price.normal}</p>
                <p>Bookable: {course.open ? (<CheckOutlined style={{color:"green"}} />) : ('No')}</p>
                <p>Duration: {course.duration}</p>
                <p>Dates: {course.dates.start_date} - {course.dates.end_date}</p>
                <p dangerouslySetInnerHTML={{ __html: course.description}}></p>
                <Title level={4}>Instructors</Title>
                { course.instructors.map((i) => {
                    return (
                        <>
                        <p><strong>{i.name.first} {i.name.last}</strong> ({i.dob})</p>
                        <p>Email: <a href={i.email}>{i.email}</a> | <a href={i.linkedin}>LinkedIn</a></p>
                        <p>{i.bio}</p>
                        </>
                    )
                })}
             </Col>
            </Row>
            </>
         )}</>
    )
};


export default CourseDetails;