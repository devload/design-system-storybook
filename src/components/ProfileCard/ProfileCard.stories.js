import { createProfileCard } from './ProfileCard.js';

export default {
  title: 'Components/ProfileCard',
  parameters: {
    docs: {
      description: {
        component: '프로필 카드 — 모바일 메뉴에서 사용되는 사용자 프로필 표시 영역입니다.',
      },
    },
  },
};

export const Default = {
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'background:#2A3046;border-radius:8px;max-width:375px';
    wrap.appendChild(createProfileCard());
    return wrap;
  },
};

export const WithoutActions = {
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'background:#2A3046;border-radius:8px;max-width:375px';
    wrap.appendChild(createProfileCard({ name: '김생민', department: '개발 · 개발1팀', showActions: false }));
    return wrap;
  },
};
