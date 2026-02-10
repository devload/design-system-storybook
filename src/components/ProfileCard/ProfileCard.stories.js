import { createProfileCard } from './ProfileCard.js';

export default {
  title: 'Components/ProfileCard',
  render: (args) => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'background:#2A3046;border-radius:8px;max-width:375px';
    wrap.appendChild(createProfileCard(args));
    return wrap;
  },
  argTypes: {
    name: { control: 'text' },
    department: { control: 'text' },
    showActions: { control: 'boolean' },
  },
  parameters: {
    docs: {
      description: {
        component: '프로필 카드 — 모바일 메뉴에서 사용되는 사용자 프로필 표시 영역입니다.',
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
  args: { name: '고윤정', department: '사업 · 디자인디자인팀 | system', showActions: true },
};

export const WithoutActions = {
  args: { name: '김생민', department: '개발 · 개발1팀', showActions: false },
};
