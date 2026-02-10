import { createContentHeader } from './ContentHeader.js';

export default {
  title: 'Components/ContentHeader',
  render: (args) => createContentHeader(args),
  argTypes: {
    title: { control: 'text' },
    current: { control: 'number' },
    total: { control: 'number' },
    showReload: { control: 'boolean' },
  },
  parameters: {
    docs: {
      description: {
        component: '콘텐츠 영역 상단 헤더 — 제목, 카운터, 새로고침 버튼을 포함합니다.',
      },
    },
    design: {
      type: 'figma',
      // TODO: 실제 Figma URL로 교체하세요
      url: 'https://www.figma.com/file/XXXXX/HANDYSOFT-DS?node-id=0:0',
    },
  },
};

export const Default = {
  args: { title: '진행중인 요청업무', current: 8, total: 450 },
};

export const WithoutReload = {
  args: { title: '완료된 요청업무', current: 15, total: 120, showReload: false },
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
