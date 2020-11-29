import React, { useState } from 'react';
import {
  Form,
  Typography,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  Checkbox,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from 'antd';
import axios from 'axios';
const { Title } = Typography;

const AddCourse = () => {
//   const [componentSize, setComponentSize] = useState('default');

//   const onFormLayoutChange = ({ size }) => {
//     setComponentSize(size);
//   };

  const onFinish = values => {
    console.log(values);
    const url = "http://localhost:3001/courses"
    axios.post(url, values)
         .then( (res) => console.log('success', res))
         .catch( (error) => console.log('couldn\'t create course'))
  };

  return (
    <>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 24,
        }}
        layout="vertical"
        onFinish={onFinish}
      >
        <Title level={2}>Add Course</Title>
        <Form.Item name="title" label="Title">
          <Input />
        </Form.Item>
        <Form.Item name="duration" label="Duration">
          <Input />
        </Form.Item>
        <Form.Item name="imagePath" label="Image Path">
          <Input />
        </Form.Item>
        <Form.Item name="open" label="Bookable">
          <Switch />
        </Form.Item>
        <hr />

        <Title level={3}>Instructors</Title>
        <Form.Item name="instructors" label="">
          <Checkbox.Group>
          <Checkbox value="01">
              John Tsevdos
          </Checkbox>
          <Checkbox value="02">
              John Tsevdos
          </Checkbox>
          </Checkbox.Group>
        </Form.Item>
        <hr/> 
        <Form.Item name="description" label="Description">
          <Input.TextArea />
        </Form.Item>
        <hr/>
        <Title level={3}>Dates</Title>
        <Form.Item name={['dates','start_date']} label="Start date">
            <Input />
        </Form.Item>
        <Form.Item name={['dates','end_date']} label="End date">
          <Input />
        </Form.Item>
        <hr/>

        <Title level={3}>Price</Title>
        <Form.Item name={['price','early_bird']} label="Early Bird">
          <InputNumber />
        </Form.Item>
        <Form.Item name={['price','normal']} label="Normal Price">
          <InputNumber />
        </Form.Item>
        <hr/>

        <Form.Item label="Button">
          <Button htmlType="submit">Button</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AddCourse;