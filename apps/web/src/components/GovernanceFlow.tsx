import { Steps } from 'antd';

export function GovernanceFlow() {
  return <Steps className="governance-flow" responsive size="small" current={6} items={[
    { title: '身份认证' }, { title: '权限判断' }, { title: '数据分类' },
    { title: 'AI Gateway' }, { title: 'Validator' }, { title: 'Evidence' }, { title: '教师确认' }, { title: 'Audit Trace' },
  ]} />;
}
