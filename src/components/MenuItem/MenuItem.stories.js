import { createNavMenuItem } from './MenuItem.js';

export default {
  title: 'Components/NavMenuItem',
  parameters: {
    docs: {
      description: {
        component: 'LNB 네비게이션 메뉴 항목 — 라벨, 카운트 뱃지, 활성 상태를 지원합니다.',
      },
    },
  },
};

export const Default = {
  render: () => createNavMenuItem({ label: '진행중인 요청업무', count: 7 }),
};

export const Active = {
  render: () => createNavMenuItem({ label: '진행중인 요청업무', count: 7, active: true }),
};

export const DangerCount = {
  render: () => createNavMenuItem({ label: '거절/보류된 나의요청', count: 8, countVariant: 'danger' }),
};

export const WithIcon = {
  render: () => createNavMenuItem({ label: '플래그 업무', count: 3, icon: '🚩' }),
};

export const AllVariants = {
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'display:flex;flex-direction:column;width:230px;background:#F8FAFC;padding:8px 16px;border-radius:8px';
    wrap.appendChild(createNavMenuItem({ label: '대기중인 요청업무', count: 3 }));
    wrap.appendChild(createNavMenuItem({ label: '진행중인 요청업무', count: 7, active: true }));
    wrap.appendChild(createNavMenuItem({ label: '완료된 요청업무' }));
    wrap.appendChild(createNavMenuItem({ label: '거절/보류된 나의요청', count: 8, countVariant: 'danger' }));
    return wrap;
  },
};
