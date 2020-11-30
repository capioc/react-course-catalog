import { Card, Col, Row, Tag, Spin } from "antd";
import useStats from "./useStats";

const Widgets = () => {
    const [stats, isLoading] = useStats({
        url: "http://localhost:3001",
        format: "json",
        resource: "stats"
      });
    

    return (
        <>
        {isLoading ? (
            <Spin size="large" />
          ) : (
        <Row gutter={[16, 16]}>
        <Col span={6}>
          <Card className="site-card" bordered={true}>
            <h3 className="widget-title">{stats[0].title.toUpperCase()}:</h3>
            <Tag color="geekblue">
              {stats[0].amount}
            </Tag>
          </Card>
        </Col>
        <Col span={6}>
          <Card className="site-card" bordered={true}>
            <h3 className="widget-title">{stats[1].title.toUpperCase()}:</h3>
            <Tag color="geekblue">
              {stats[1].amount}
            </Tag>
          </Card>
        </Col>
        <Col span={6}>
          <Card className="site-card" bordered={true}>
            <h3 className="widget-title">{stats[2].title.toUpperCase()}:</h3>
            <Tag color="geekblue">
              {stats[2].amount}
            </Tag>
          </Card>
        </Col>
        <Col span={6}>
          <Card className="site-card" bordered={true}>
            <h3 className="widget-title">{stats[3].title.toUpperCase()}:</h3>
            <Tag color="geekblue">
              {stats[3].amount}
            </Tag>
          </Card>
        </Col>
      </Row>
          )}
      </>
    )
}

export default Widgets;