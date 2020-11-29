import { Table, Tag, Space, Button, Spin } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import useCourses from "./useCourses";
import { Link } from 'react-router-dom';

const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    render: text => <a>{text}</a>,
    width: '30%'
  },
  {
    title: 'Bookable',
    dataIndex: 'open',
    key: 'open',
    align: 'center',
    render: (open) => (open ? <CheckOutlined style={{color:"green"}} /> : 'No')
  },
  {
    title: 'Price',
    dataIndex: ['price','normal'],
    key: 'price',
  },
  {
    title: 'Date',
    key: 'dates',
    dataIndex: 'dates',
    width: '30%',
    render: dates => (
      <>
        {dates.start_date} - {dates.end_date} 
      </>
    ),
  },
  {
    title: 'Action',
    key: 'id',
    dataIndex: 'id',
    render: () => (
        <Link to="/courses/${id}"><Button type="primary">View details</Button></Link>
    ),
  },
];

const CoursesTable = () => {
  const [courses, isLoading] = useCourses({
    url: "http://localhost:3001",
    format: "json",
    resource: "courses"
  });

    return (
      <>
        {isLoading ? (
          <Spin size="large" />
        ) : (
        <Table 
          className="courses-table" 
          title={() => {
            return (<h3><strong>Five newest courses</strong></h3>)
          }} 
          columns={columns} 
          dataSource={courses}
          pagination={false} /> 
        )}
      </>
    );
}

export default CoursesTable;