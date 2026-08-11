import { useState } from 'react';
import { Button, Drawer, Layout, Menu, Space, Tag, Typography } from 'antd';
import { Dashboard } from './pages/Dashboard';
import { TeacherWorkspace } from './pages/TeacherWorkspace';
import { GovernanceCenter } from './pages/GovernanceCenter';
import { KnowledgeCenter } from './pages/KnowledgeCenter';
import { ExperimentLab } from './pages/ExperimentLab';
import { SecurityOperations } from './pages/SecurityOperations';
import { StudentPreview } from './pages/StudentPreview';
import './styles.css';

const menuItems = [
  { key: 'home', label: '首页' }, { key: 'workspace', label: '教师 AI 工作台' }, { key: 'student', label: '学生学习空间' },
  { key: 'knowledge', label: '教育知识库' }, { key: 'governance', label: 'AI 治理中心' }, { key: 'lab', label: 'AI 创新实验室' }, { key: 'security', label: '安全运营中心' },
];

const titles: Record<string, string> = { home: '首页', workspace: '教师 AI 工作台', student: '学生学习空间', knowledge: '教育知识库', governance: '学校管理端 · AI 治理中心', lab: 'AI 创新实验室', security: '安全运营中心' };

export default function App() {
  const [active, setActive] = useState('home'); const [open, setOpen] = useState(false);
  const navigate = (key: string) => { setActive(key); setOpen(false); };
  const content = active === 'workspace' ? <TeacherWorkspace /> : active === 'student' ? <StudentPreview /> : active === 'knowledge' ? <KnowledgeCenter /> : active === 'governance' ? <GovernanceCenter /> : active === 'lab' ? <ExperimentLab /> : active === 'security' ? <SecurityOperations /> : <Dashboard navigate={navigate} />;
  const navigation = <Menu mode="inline" selectedKeys={[active]} items={menuItems} onClick={({ key }) => navigate(key)} />;
  return <Layout className="app-shell"><Layout.Sider width={248} className="sider" breakpoint="lg" collapsedWidth="0">{navigation}<div className="sider-footer"><Tag color="green">安全模式</Tag><p>Demo 无真实数据</p></div></Layout.Sider><Layout>
    <Layout.Header className="topbar"><Space><Button className="mobile-menu" onClick={() => setOpen(true)}>菜单</Button><div className="brand-mark">HK</div><div><Typography.Text strong>泓口小学智慧课堂</Typography.Text><Typography.Text className="brand-sub">AI 教育平台</Typography.Text></div></Space><Space className="topbar-meta"><Tag color="cyan">Local First</Tag><Tag color="green">隐私保护开启</Tag></Space></Layout.Header>
    <Layout.Content className="content"><div className="crumb">Web Demo V1.0 / {titles[active]}</div>{content}</Layout.Content>
    <Layout.Footer className="footer">泓口小学智慧课堂 AI 教育平台 · 展示级 Demo · AI 建议必须经教师确认</Layout.Footer>
  </Layout><Drawer title="泓口小学智慧课堂" placement="left" open={open} onClose={() => setOpen(false)}><Menu mode="inline" selectedKeys={[active]} items={menuItems} onClick={({ key }) => navigate(key)} /></Drawer></Layout>;
}
