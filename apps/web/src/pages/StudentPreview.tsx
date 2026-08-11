import { Alert, Card, Col, Row, Tag, Typography } from 'antd';

export function StudentPreview() {
  return <div className="page"><div className="page-heading"><div><Typography.Title level={2}>学生学习空间</Typography.Title><Typography.Text type="secondary">展示边界：AI 辅助学习，不替代学生完成作业</Typography.Text></div><Tag color="blue">DEMO</Tag></div>
    <Alert type="info" showIcon message="无真实学生数据" description="本演示页不连接真实账号、作业、成绩或学习画像。" />
    <Row gutter={[16, 16]} className="top-gap"><Col xs={24} md={8}><Card title="学习任务"><Typography.Paragraph>查看教师已发布的学习任务与资源。</Typography.Paragraph></Card></Col><Col xs={24} md={8}><Card title="AI 学习伙伴"><Typography.Paragraph>提供提示和解释，不提供可直接提交的作业答案。</Typography.Paragraph></Card></Col><Col xs={24} md={8}><Card title="成长记录"><Typography.Paragraph>仅学生本人和授权教师可访问。</Typography.Paragraph></Card></Col></Row>
  </div>;
}
