import { createTimeline } from './Timeline.js';

export default {
  title: 'Atoms/Timeline',
  render: (args) => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'padding:20px;max-width:500px';
    wrap.appendChild(createTimeline(args));
    return wrap;
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/XXXXX/HANDYSOFT-DS?node-id=0:0', // TODO: 실제 Figma URL로 교체하세요
    },
    docs: {
      description: {
        component: '타임라인 컴포넌트. 업무 이력 표시에 사용됩니다. 각 아이템은 채워진/빈 도트, 텍스트, 날짜로 구성됩니다.',
      },
    },
  },
};

export const Default = {
  args: {
    items: [
      { filled: true, text: '박현주님이 업무를 김나영님에게 위임하였습니다.', date: '2017.08.17 11:32' },
      { filled: false, text: '박현주님이 업무를 반송하였습니다.', date: '2017.08.17 11:32' },
      { filled: false, text: '요청자가 업무 내용을 수정하였습니다.', date: '2017.08.17 11:32' },
      { filled: false, text: '김은우님이 업무를 박현주님에게 위임하였습니다.', date: '2017.08.17 11:32' },
      { filled: false, text: '업무가 시작되었습니다.', date: '2017.08.17 11:32' },
    ],
  },
};

export const WithVariants = {
  args: {
    items: [
      { filled: true, text: '업무가 완료되었습니다.', date: '2017.09.05', variant: 'success' },
      { filled: true, text: '긴급 요청이 접수되었습니다.', date: '2017.09.03', variant: 'danger' },
      { filled: true, text: '업무를 위임하였습니다.', date: '2017.09.01' },
      { filled: false, text: '업무가 시작되었습니다.', date: '2017.08.30' },
    ],
  },
};
