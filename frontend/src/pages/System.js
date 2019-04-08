import { Card, Col, Row, Icon, Avatar, Empty } from 'antd';

const { Meta } = Card;


export default () => (
  <div style={{ padding: '30px' }}>
    <Row gutter={16}>
        <Col span={8}>
        <Card
    cover={<Empty />}
    actions={[<Icon type="login" />, <Icon type="ellipsis" />]}
        >
        <Meta
    avatar={<Avatar>V</Avatar>}
    title="Voyage"
    description="流程"
        />
        </Card>
      </Col>
      <Col span={8}>
        <Card
    cover={<Empty />}
    actions={[<Icon type="login" />, <Icon type="ellipsis" />]}
        >
        <Meta
    avatar={<Avatar>A</Avatar>}
    title="Aslan"
    description="信息"
        />
        </Card>
      </Col>
      <Col span={8}>
        <Card
    cover={<Empty />}
    actions={[<Icon type="login" />, <Icon type="ellipsis" />]}
        >
        <Meta
    avatar={<Avatar>J</Avatar>}
    title="Jadis"
    description="自动化"
        />
        </Card>
      </Col>
    </Row>
    <Row gutter={16}>
      <Col span={8}>
        <Card
    cover={<Empty />}
    actions={[<Icon type="login" />, <Icon type="ellipsis" />]}
        >
        <Meta
    avatar={<Avatar>T</Avatar>}
    title="Tash"
    description="监控"
        />
        </Card>
      </Col>
      <Col span={8}>
        <Card
    cover={<Empty />}
    actions={[<Icon type="login" />, <Icon type="ellipsis" />]}
        >
        <Meta
    avatar={<Avatar>R</Avatar>}
    title="Reepicheep"
    description="AIOps"
        />
        </Card>
      </Col>
    </Row>
  </div>
);
