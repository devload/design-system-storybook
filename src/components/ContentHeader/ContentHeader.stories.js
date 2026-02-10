import { createContentHeader } from './ContentHeader.js';

export default {
  title: 'Components/ContentHeader',
  parameters: {
    docs: {
      description: {
        component: '콘텐츠 영역 상단 헤더 — 제목, 카운터, 새로고침 버튼을 포함합니다.',
      },
    },
  },
};

export const Default = {
  render: () => createContentHeader({ title: '진행중인 요청업무', current: 8, total: 450 }),
};

export const WithoutReload = {
  render: () => createContentHeader({ title: '완료된 요청업무', current: 15, total: 120, showReload: false }),
};

export const AllVariants = {
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'display:flex;flex-direction:column;gap:8px;max-width:500px;border:1px solid #EBEBEB;border-radius:8px;overflow:hidden';
    wrap.appendChild(createContentHeader({ title: '진행중인 요청업무', current: 8, total: 450 }));
    wrap.appendChild(createContentHeader({ title: '페이지명', current: 3, total: 50 }));
    wrap.appendChild(createContentHeader({ title: '완료된 요청업무', current: 120, total: 120, showReload: false }));
    return wrap;
  },
};
