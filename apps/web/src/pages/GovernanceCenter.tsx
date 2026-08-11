import { Alert, Card, Col, Row, Table, Tag, Typography } from 'antd';
import { GovernanceFlow } from '../components/GovernanceFlow';
import { RunTraceCard } from '../components/RunTraceCard';
import { auditItems } from '../data/demoData';

const pillars = [
  ['Permission', '任课教师与资源范围校验', 'PASS'], ['Policy Engine', '外发与教学发布策略判断', 'ALLOWED'],
  ['AI Gateway', '唯一模型入口 · Local First', 'LOCAL'], ['Validator', '安全、格式、来源验证', 'PASSED'],
  ['Evidence', '来源、版本、知识点证据', 'ATTACHED'], ['Audit', '责任主体与结果记录', 'RECORDED'], ['Recovery', '失败显式化与安全重试', 'READY'],
];

export function GovernanceCenter() {
  return <div className="page"><div className="page-heading"><div><Typography.Title level={2}>AI 治理中心</Typography.Title><Typography.Text type="secondary">每一次 AI 任务必须经过受控链路</Typography.Text></div><Tag color="green">DEMO SAFE MODE</Tag></div>
    <GovernanceFlow />
    <Row gutter={[16, 16]}>{pillars.map(([title, desc, result]) => <Col xs={24} sm={12} lg={8} key={title}><Card className="pillar-card"><Typography.Text type="secondary">{title}</Typography.Text><Typography.Title level={4}>{desc}</Typography.Title><Tag color="green">{result}</Tag></Card></Col>)}</Row>
    <Row gutter={[20, 20]} className="top-gap"><Col xs={24} lg={14}><RunTraceCard status="PENDING_TEACHER_APPROVAL" /></Col><Col xs={24} lg={10}><Card title="安全决策"><Alert showIcon type="success" message="学生隐私保护：开启" /><Alert showIcon type="warning" className="top-gap-small" message="外部模型：默认禁止" description="DeepSeek 仅作为受控外部模型展示，不含 API Key。" /><Alert showIcon type="info" className="top-gap-small" message="教师确认：必需" /></Card></Col></Row>
    <Card className="top-gap" title="最近 Audit 记录"><Table rowKey="time" size="small" pagination={false} dataSource={auditItems} columns={[{ title: '动作', dataIndex: 'action' }, { title: '主体', dataIndex: 'actor' }, { title: '数据', dataIndex: 'data' }, { title: '结果', dataIndex: 'result', render: (value: string) => <Tag>{value}</Tag> }, { title: '时间', dataIndex: 'time' }]} scroll={{ x: 680 }} /></Card>
  </div>;
}
