import { createCard, createCommentCard } from './Card.js';

export default {
  title: 'Atoms/Card',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/XXXXX/HANDYSOFT-DS?node-id=0:0', // TODO: 실제 Figma URL로 교체하세요
    },
    docs: {
      description: {
        component: '카드 컴포넌트. 콘텐츠를 감싸는 컨테이너 역할을 합니다. 의견 카드(CommentCard) 변형을 포함합니다.',
      },
    },
  },
};

export const Default = {
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'padding:20px;max-width:360px';
    wrap.appendChild(createCard({
      title: '업무 유형',
      content: '<div style="font-size:13px;color:#5D5D5D">명함 주문요청</div>',
    }));
    return wrap;
  },
};

export const WithFooter = {
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'padding:20px;max-width:360px';
    wrap.appendChild(createCard({
      title: '첨부파일',
      content: '<div style="font-size:13px;color:#4096FF;cursor:pointer">📎 명함_시안_v2.pdf (1.2MB)</div>',
      showFooter: true,
      footerHtml: '<span style="font-size:12px;color:#94A3B8">1개 파일</span>',
    }));
    return wrap;
  },
};

export const Comment = {
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'padding:20px;max-width:400px;display:flex;flex-direction:column;gap:8px';
    wrap.appendChild(createCommentCard({
      name: '박현주', initial: '박', date: '2017.09.03 10:20',
      text: '명함 시안 확인했습니다. 전화번호 수정 부탁드립니다.',
    }));
    wrap.appendChild(createCommentCard({
      name: '김생민', initial: '김', date: '2017.09.03 14:15',
      text: '수정 완료하여 재첨부합니다.', avatarVariant: 'green',
    }));
    return wrap;
  },
};

export const NoHeader = {
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'padding:20px;max-width:360px';
    wrap.appendChild(createCard({
      showHeader: false,
      content: '<div style="font-size:13px;color:#5D5D5D;line-height:1.8">헤더 없는 카드입니다.<br>본문만 표시합니다.</div>',
    }));
    return wrap;
  },
};
