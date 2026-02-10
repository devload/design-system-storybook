import { createTabs } from './Tabs.js';

export default {
  title: 'Atoms/Tabs',
  render: (args) => createTabs(args),
  parameters: {
    docs: {
      description: {
        component: '탭 네비게이션 컴포넌트. 상세 패널의 요청내용/진행상태/의견/업무이력 전환에 사용됩니다. 카운트 배지를 지원합니다.',
      },
    },
  },
};

export const Default = {
  args: {
    items: [
      { key: 'request', label: '요청내용' },
      { key: 'status', label: '진행상태' },
      { key: 'comment', label: '의견' },
      { key: 'history', label: '업무이력' },
    ],
    activeKey: 'history',
  },
};

export const WithCounts = {
  args: {
    items: [
      { key: 'all', label: '전체', count: 120 },
      { key: 'progress', label: '진행중', count: 45 },
      { key: 'hold', label: '보류', count: 8 },
      { key: 'complete', label: '완료', count: 67 },
    ],
    activeKey: 'all',
  },
};

export const TwoTabs = {
  args: {
    items: [
      { key: 'received', label: '받은 업무' },
      { key: 'sent', label: '보낸 업무' },
    ],
    activeKey: 'received',
  },
};
