import { createProgressStep } from './ProgressStep.js';

export default {
  title: 'Atoms/ProgressStep',
  render: (args) => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'padding:20px;max-width:400px';
    wrap.appendChild(createProgressStep(args));
    return wrap;
  },
  parameters: {
    docs: {
      description: {
        component: '진행 단계 표시 컴포넌트. 업무 진행상태 탭에서 접수→검토→처리→완료 단계를 시각적으로 표현합니다.',
      },
    },
  },
};

export const Default = {
  args: {
    steps: [
      { label: '요청 접수', date: '2017.09.01', status: 'done' },
      { label: '검토 중', date: '2017.09.02', status: 'done' },
      { label: '처리 진행', date: '진행중', status: 'current' },
      { label: '완료', date: '-', status: 'pending' },
    ],
  },
};

export const AllDone = {
  args: {
    steps: [
      { label: '요청 접수', date: '2017.09.01', status: 'done' },
      { label: '검토 중', date: '2017.09.02', status: 'done' },
      { label: '처리 진행', date: '2017.09.03', status: 'done' },
      { label: '완료', date: '2017.09.05', status: 'done' },
    ],
  },
};

export const FirstStep = {
  args: {
    steps: [
      { label: '요청 접수', date: '진행중', status: 'current' },
      { label: '검토 중', date: '-', status: 'pending' },
      { label: '처리 진행', date: '-', status: 'pending' },
      { label: '완료', date: '-', status: 'pending' },
    ],
  },
};
