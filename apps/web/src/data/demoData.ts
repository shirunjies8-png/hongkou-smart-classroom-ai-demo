export type RunStatus =
  | 'PENDING'
  | 'RUNNING'
  | 'VALIDATING'
  | 'PENDING_TEACHER_APPROVAL'
  | 'PUBLISHED'
  | 'FAILED'
  | 'BLOCKED';

export const knowledgeAssets = [
  { name: '语文五年级上册 · 第三单元', type: '教材知识库', source: '人民教育出版社（授权样例）', version: '2025.1', permission: '教师可用', updated: '2026-08-08' },
  { name: '义务教育语文课程标准', type: '课程标准', source: '教育部公开文件', version: '2022', permission: '全校可用', updated: '2026-07-20' },
  { name: '项目式学习优秀教案', type: '优秀教案', source: '泓口小学教研组（模拟）', version: '3.2', permission: '教研组可用', updated: '2026-08-05' },
  { name: '阅读理解分层课堂案例', type: '教学案例', source: '校本案例库（模拟）', version: '1.4', permission: '教师可用', updated: '2026-07-28' },
  { name: 'AI 辅助备课对照实验', type: 'AI实验案例', source: '创新实验室（去标识化）', version: '0.9', permission: '教研负责人', updated: '2026-08-09' },
];

export const auditItems = [
  { action: 'AI_PLAN_GENERATED', actor: '演示教师', data: '内部 · 教材样例', result: 'PENDING_TEACHER_APPROVAL', time: '10:42:18' },
  { action: 'POLICY_CHECK', actor: 'Policy Engine', data: '无学生数据', result: 'ALLOWED', time: '10:42:17' },
  { action: 'EXTERNAL_EGRESS', actor: 'Data Guard', data: '学生身份字段', result: 'BLOCKED', time: '10:31:04' },
];

export const experimentItems = [
  { title: 'AI 辅助备课对照实验', status: '实验中', owner: '教研负责人', model: 'Local Model v1.3', scope: '去标识化样例' },
  { title: '课堂互动 Prompt 对照', status: '待审核', owner: '教研组', model: '受控模型沙箱', scope: '模拟课堂状态' },
];
