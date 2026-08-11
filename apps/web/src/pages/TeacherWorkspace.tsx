import { useState } from 'react';
import { Alert, Button, Card, Col, Divider, Form, Input, Row, Space, Typography, Upload } from 'antd';
import { EvidenceCard } from '../components/EvidenceCard';
import { GovernanceFlow } from '../components/GovernanceFlow';
import { RunTraceCard } from '../components/RunTraceCard';
import { StatusTag } from '../components/StatusTag';
import type { RunStatus } from '../data/demoData';

export function TeacherWorkspace() {
  const [generated, setGenerated] = useState(false);
  const [status, setStatus] = useState<RunStatus>('PENDING');
  const generate = () => { setGenerated(true); setStatus('PENDING_TEACHER_APPROVAL'); };
  return <div className="page">
    <div className="page-heading"><div><Typography.Title level={2}>教师 AI 工作台</Typography.Title><Typography.Text type="secondary">AI 备课助手 · 仅生成建议，不自动发布</Typography.Text></div><StatusTag status={status} /></div>
    <GovernanceFlow />
    <Row gutter={[20, 20]}>
      <Col xs={24} lg={10}><Card title="发起受控教学请求">
        <Form layout="vertical"><Form.Item label="模拟上传教材"><Upload beforeUpload={() => false} maxCount={1}><Button>选择本地样例文件</Button></Upload><Typography.Paragraph type="secondary">Demo 不上传、不保存真实文件。</Typography.Paragraph></Form.Item>
          <Form.Item label="教学主题"><Input.TextArea defaultValue="五年级语文 · 阅读理解中的人物描写" rows={4} /></Form.Item>
          <Alert type="info" showIcon message="数据分类：内部教学样例" description="学生隐私保护已开启；数据外发默认禁止；本次使用 Local Model。" />
          <Button type="primary" block size="large" className="action-button" onClick={generate}>AI 生成教学方案</Button>
        </Form>
      </Card></Col>
      <Col xs={24} lg={14}>{generated ? <Card title="AI 教学方案草稿" extra={<StatusTag status={status} />}>
        <section className="plan-section"><h4>教学目标</h4><p>引导学生识别人物描写方法，结合文本证据表达理解。</p></section>
        <section className="plan-section"><h4>核心知识点</h4><Space wrap><span className="knowledge-chip">人物描写</span><span className="knowledge-chip">文本证据</span><span className="knowledge-chip">阅读表达</span></Space></section>
        <section className="plan-section"><h4>课堂活动建议</h4><p>“证据卡片”小组讨论：学生从样例段落中标记人物语言、动作与心理描写，并说明判断依据。</p></section>
        <section className="plan-section"><h4>教学建议</h4><p>建议在小组分享后由教师追问“文本中的哪一句支持你的结论”，避免 AI 建议替代课堂判断。</p></section>
        <Divider />
        <Alert type="warning" showIcon message="发布前必须由教师确认" description="当前草稿不会写入正式教学数据。" />
        <Space wrap className="confirm-actions"><Button onClick={() => setStatus('VALIDATING')}>重新验证</Button><Button type="primary" disabled={status !== 'PENDING_TEACHER_APPROVAL'} onClick={() => setStatus('PUBLISHED')}>教师确认并发布</Button><Button>模拟下载 Word</Button><Button>模拟下载 PPT</Button></Space>
      </Card> : <Card className="empty-panel"><Typography.Title level={4}>等待教师发起教学请求</Typography.Title><Typography.Paragraph>生成后将展示治理链路、Evidence 与人工确认按钮。</Typography.Paragraph></Card>}</Col>
      {generated && <><Col xs={24} lg={14}><RunTraceCard status={status} /></Col><Col xs={24} lg={10}><EvidenceCard /></Col></>}
    </Row>
  </div>;
}
