import { createTaskItem } from './TaskItem.js';

export default {
  title: 'Components/TaskItem',
  parameters: {
    docs: {
      description: {
        component: '업무 리스트 행 — 태그, D-day, 담당자, 상태를 조합하는 Molecule 컴포넌트입니다.',
      },
    },
  },
};

export const Default = {
  render: () => createTaskItem({
    title: '개발팀 명함 주문요청',
    tags: ['긴급'],
    dday: 'D-1',
    assignee: '김광욱',
    type: '신청',
    status: '보류',
    hasAttach: true,
  }),
};

export const Active = {
  render: () => createTaskItem({
    title: '개발팀 명함 주문요청',
    tags: ['긴급'],
    dday: 'D-1',
    assignee: '김광욱',
    type: '신청',
    status: '보류',
    hasAttach: true,
    active: true,
  }),
};

export const MultipleTags = {
  render: () => createTaskItem({
    title: '2017 명함 주문요청',
    tags: ['긴급', '보안'],
    dday: 'D-day',
    assignee: '김광욱',
    type: '신청',
    status: '진행중',
    hasAttach: true,
  }),
};

export const TaskList = {
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'max-width:500px;border:1px solid #EBEBEB;border-radius:8px;overflow:hidden';
    const items = [
      { title: '2017 명함 주문요청', tags: ['긴급', '보안'], dday: 'D-day', assignee: '김광욱', type: '신청', status: '진행중', hasAttach: true },
      { title: '개발팀 명함 주문요청', tags: ['긴급'], dday: 'D-1', assignee: '김광욱', type: '신청', status: '보류', hasAttach: true, active: true },
      { title: '개발 파견 주문요청', tags: [], dday: 'D-3', assignee: '김광욱', type: '신청', status: '진행중', hasAttach: true },
      { title: '노사 협의회 회의요청', tags: [], dday: 'D-3', assignee: '민우혁', type: '신청', status: '진행중', hasAttach: true },
    ];
    items.forEach(item => wrap.appendChild(createTaskItem(item)));
    return wrap;
  },
};
