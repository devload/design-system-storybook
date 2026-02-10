import { createTaskDetail } from './TaskDetail.js';

export default {
  title: 'Components/TaskDetail',
  render: (args) => {
    const wrapper = document.createElement('div');
    wrapper.style.height = '700px';
    wrapper.appendChild(createTaskDetail(args));
    return wrapper;
  },
  argTypes: {
    title: { control: 'text' },
    tag: { control: 'text' },
    requester: { control: 'text' },
    activeTab: { control: 'select', options: ['request', 'status', 'comment', 'history'] },
  },
};

export const Default = {
  args: {
    title: '개발팀 명함 주문요청',
    tag: '긴급',
    requester: '김생민',
    activeTab: 'history',
  },
};

export const RequestTab = {
  args: {
    title: '개발팀 명함 주문요청',
    tag: '긴급',
    activeTab: 'request',
  },
};

export const StatusTab = {
  args: {
    title: '개발팀 명함 주문요청',
    tag: '',
    activeTab: 'status',
  },
};
