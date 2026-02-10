import { createTaskList } from './TaskList.js';

export default {
  title: 'Components/TaskList',
  render: (args) => {
    const wrapper = document.createElement('div');
    wrapper.style.height = '600px';
    wrapper.style.display = 'flex';
    wrapper.style.flexDirection = 'column';
    wrapper.appendChild(createTaskList(args));
    return wrapper;
  },
  argTypes: {
    title: { control: 'text' },
    totalCount: { control: 'number' },
    selectedTaskId: { control: 'number' },
  },
};

export const Default = {
  args: { title: '진행중인 요청업무', totalCount: 450, selectedTaskId: 2 },
};

export const WaitingTasks = {
  args: { title: '대기중인 요청업무', totalCount: 120, selectedTaskId: 1 },
};
