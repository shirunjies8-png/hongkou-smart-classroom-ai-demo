import { Card, Descriptions, Space, Tag, Typography } from 'antd';
import { StatusTag } from './StatusTag';
import type { RunStatus } from '../data/demoData';

export function RunTraceCard({ status }: { status: RunStatus }) {
  return (
    <Card className="trace-card" title="Run Trace · 受控 AI 任务">
      <Descriptions column={{ xs: 1, sm: 2 }} size="small">
        <Descriptions.Item label="Run ID"><Typography.Text code>run_demo_20260811_001</Typography.Text></Descriptions.Item>
        <Descriptions.Item label="Trace ID"><Typography.Text code>trc_8f61a1d7_demo</Typography.Text></Descriptions.Item>
        <Descriptions.Item label="模型"><Tag color="blue">Local Model v1.3</Tag></Descriptions.Item>
        <Descriptions.Item label="数据等级"><Tag color="gold">内部 · 无学生数据</Tag></Descriptions.Item>
        <Descriptions.Item label="策略结果"><Tag color="green">ALLOWED</Tag></Descriptions.Item>
        <Descriptions.Item label="验证结果"><Tag color="green">PASSED_WITH_EVIDENCE</Tag></Descriptions.Item>
        <Descriptions.Item label="运行状态"><StatusTag status={status} /></Descriptions.Item>
        <Descriptions.Item label="隐私保护"><Tag color="green">开启</Tag></Descriptions.Item>
      </Descriptions>
      <Space wrap className="trace-steps">
        {['Identity', 'Permission', 'Policy', 'AI Gateway', 'Validator', 'Evidence', 'Teacher'].map((item) => <Tag key={item}>{item}</Tag>)}
      </Space>
    </Card>
  );
}
