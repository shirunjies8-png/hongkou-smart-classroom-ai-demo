import { Card, List, Tag, Typography } from 'antd';

export function EvidenceCard() {
  const rows = [
    ['来源文件', '语文五年级上册 · 第三单元（授权样例）'],
    ['知识点来源', '课程标准 · 阅读与表达 / 单元目标'],
    ['生成时间', '2026-08-11 10:42:18'],
    ['模型版本', 'Local Model v1.3 · Prompt v1.2'],
  ];
  return <Card title="Evidence · 证据链" className="evidence-card">
    <List size="small" dataSource={rows} renderItem={([label, value]) => <List.Item><Typography.Text type="secondary">{label}</Typography.Text><span>{value}</span></List.Item>} />
    <Tag color="green">来源与版本可追溯</Tag>
  </Card>;
}
