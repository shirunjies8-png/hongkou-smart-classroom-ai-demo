import { Alert, Button, Card, Col, Row, Space, Tag, Typography } from 'antd';
import { experimentItems } from '../data/demoData';

const capabilities = ['Agent管理', 'Skill管理', 'Workflow实验', 'Prompt实验', '模型实验', '教学方案模拟'];
export function ExperimentLab() {
  return <div className="page"><div className="page-heading"><div><Typography.Title level={2}>AI 创新实验室</Typography.Title><Typography.Text type="secondary">受控实验空间，不与正式教学数据自动连通</Typography.Text></div><Tag color="purple">ISOLATED LAB</Tag></div>
    <Alert type="warning" showIcon message="实验环境与正式教学隔离" description="实验仅使用模拟或去标识化数据；实验结论须经教研负责人审核，不能自动进入正式教学。" />
    <Row gutter={[16, 16]} className="top-gap">{capabilities.map((item, index) => <Col xs={12} md={8} lg={4} key={item}><Card className="lab-capability"><span>0{index + 1}</span><Typography.Title level={5}>{item}</Typography.Title></Card></Col>)}</Row>
    <Typography.Title level={3}>进行中的实验</Typography.Title><Row gutter={[16, 16]}>{experimentItems.map((item) => <Col xs={24} md={12} key={item.title}><Card title={item.title} extra={<Tag color="gold">{item.status}</Tag>}><p><b>负责人：</b>{item.owner}</p><p><b>模型：</b>{item.model}</p><p><b>数据边界：</b>{item.scope}</p><Space><Button>查看 Evidence</Button><Button type="primary">提交教研审核</Button></Space></Card></Col>)}</Row>
  </div>;
}
