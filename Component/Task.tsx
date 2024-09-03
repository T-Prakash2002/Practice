import { Row, Col, Button, Input, Modal, Form, DatePicker, TimePicker } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import React, { useState } from "react";

const Task = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);
    const {RangePicker}=DatePicker;

  const showLoading = () => {
    setOpen(true);
    // setLoading(true);
    // setTimeout(() => {
    //   setLoading(false);
    // }, 2000);
  };

  return (
    <div className="container grid gap-5">
      <Row className="flex gap-9 border rounded-lg p-5 overflow-hidden">
        <Col lg={{ span: 10 }} sm={{ span: 10 }} span={24}>
          <Input className="max-w-80" />
        </Col>
        <Col lg={{ span: 10 }} sm={{ span: 10 }} span={24}>
          <Button
            type="dashed"
            className="
                    max-w-80
                     hover:border-green-400
                     hover:bg-green-500
                     
                     "
            onClick={() => {
              showLoading();
            }}
          >
            <PlusOutlined />
            Add Task
          </Button>
        </Col>
      </Row>

      <Modal
        title={<p>Loading Modal</p>}
        closeIcon
        loading={loading}
        open={open}
        onCancel={() => setOpen(false)}
      >
        <Form>
            <Form.Item label="Task Name" name="task_name">
                <Input placeholder="Enter Task Name"/>
            </Form.Item>
            <Form.Item label="Deadline Time" name="deadline">
                <RangePicker />
            </Form.Item>
        </Form>
      </Modal>

      <Row>
        <Col sm={{ span: 5 }} className="border-r-2"></Col>
        <Col sm={{ span: 19 }}></Col>
      </Row>
    </div>
  );
};

export default Task;
