import { Card, Col, Input, Row, Table, Tag, Typography } from 'antd';
import { knowledgeAssets } from '../data/demoData';

export function KnowledgeCenter() {
  return <div className="page"><div className="page-heading"><div><Typography.Title level={2}>教育知识库</Typography.Title><Typography.Text type="secondary">来源、版本、权限与使用记录构成可追溯知识资产</Typography.Text></div><Tag color="green">RAG 权限继承</Tag></div>
    <Row gutter={[16, 16]} className="knowledge-summary"><Col xs={12} sm={8} lg={4}><Card><Typography.Text type="secondary">教材知识库</Typography.Text><Typography.Title level={3}>126</Typography.Title></Card></Col><Col xs={12} sm={8} lg={4}><Card><Typography.Text type="secondary">课程标准</Typography.Text><Typography.Title level={3}>18</Typography.Title></Card></Col><Col xs={12} sm={8} lg={4}><Card><Typography.Text type="secondary">优秀教案</Typography.Text><Typography.Title level={3}>342</Typography.Title></Card></Col><Col xs={12} sm={8} lg={4}><Card><Typography.Text type="secondary">教学案例</Typography.Text><Typography.Title level={3}>87</Typography.Title></Card></Col><Col xs={12} sm={8} lg={4}><Card><Typography.Text type="secondary">AI 实验案例</Typography.Text><Typography.Title level={3}>12</Typography.Title></Card></Col></Row>
    <Card title="学校知识资产" extra={<Input.Search placeholder="搜索模拟知识资产" style={{ width: 220 }} />}><Table rowKey="name" scroll={{ x: 760 }} dataSource={knowledgeAssets} pagination={{ pageSize: 5 }} columns={[{ title: '名称', dataIndex: 'name' }, { title: '分类', dataIndex: 'type', render: (v: string) => <Tag color="blue">{v}</Tag> }, { title: '来源', dataIndex: 'source' }, { title: '版本', dataIndex: 'version' }, { title: '权限', dataIndex: 'permission' }, { title: '更新时间', dataIndex: 'updated' }]} /></Card>
  </div>;
}
