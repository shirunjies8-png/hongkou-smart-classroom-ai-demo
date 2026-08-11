import { Tag } from 'antd';
import type { RunStatus } from '../data/demoData';

const colors: Record<RunStatus, string> = {
  PENDING: 'default', RUNNING: 'blue', VALIDATING: 'cyan',
  PENDING_TEACHER_APPROVAL: 'gold', PUBLISHED: 'green',
  FAILED: 'red', BLOCKED: 'volcano',
};

export function StatusTag({ status }: { status: RunStatus }) {
  return <Tag color={colors[status]}>{status}</Tag>;
}
