import { Button, Card, Col, Row, Space, Statistic, Tag, Typography } from 'antd';

type Props = { navigate: (key: string) => void };
const entryCards = [
  ['教师端', '受控备课、课件、课堂与作业辅助', 'workspace'],
  ['学生端', '学习空间与非代做型学习支持', 'student'],
  ['学校管理端', '组织、权限、数据与 AI 使用治理', 'governance'],
  ['AI创新实验室', '隔离的 Agent、Prompt、Workflow 实验', 'lab'],
];

export function Dashboard({ navigate }: Props) {
  return <div className="page dashboard-page">
    <section className="hero">
      <Tag color="cyan">AI辅助教学操作系统 · Web Demo V1.0</Tag>
      <Typography.Title>让 AI 参与教学，<span>让教师始终掌握决定权。</span></Typography.Title>
      <Typography.Paragraph>这是一个无真实师生数据的展示 Demo。AI 只提供可验证建议，任何正式教学影响均需教师确认。</Typography.Paragraph>
      <Space wrap><Button type="primary" size="large" onClick={() => navigate('workspace')}>进入教师 AI 工作台</Button><Button size="large" onClick={() => navigate('governance')}>查看治理流程</Button></Space>
    </section>
    <Row gutter={[16, 16]} className="metric-row">
      <Col xs={12} md={6}><Statistic title="隐私保护" value="开启" valueStyle={{ color: '#1f9d72' }} /></Col>
      <Col xs={12} md={6}><Statistic title="数据外发" value="默认禁止" valueStyle={{ color: '#d9780e' }} /></Col>
      <Col xs={12} md={6}><Statistic title="模型策略" value="Local First" /></Col>
      <Col xs={12} md={6}><Statistic title="教师确认" value="必须" valueStyle={{ color: '#1f9d72' }} /></Col>
    </Row>
    <Typography.Title level={3}>进入演示空间</Typography.Title>
    <Row gutter={[18, 18]}>{entryCards.map(([title, desc, key], index) => <Col xs={24} sm={12} lg={6} key={key}>
      <Card className={`entry-card entry-${index}`} hoverable onClick={() => navigate(key)}><div className="entry-number">0{index + 1}</div><Typography.Title level={4}>{title}</Typography.Title><Typography.Paragraph>{desc}</Typography.Paragraph><Button type="link">进入模块 →</Button></Card>
    </Col>)}</Row>
    <Card className="principle-card"><Typography.Title level={4}>受控 AI 辅助流程</Typography.Title><div className="principle-flow">教师请求 <b>→</b> 身份认证 <b>→</b> 权限判断 <b>→</b> AI Gateway <b>→</b> Validator <b>→</b> Evidence <b>→</b> 教师确认 <b>→</b> Audit Trace</div></Card>
  </div>;
}
