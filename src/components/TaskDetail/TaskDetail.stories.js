import { createTaskDetail } from './TaskDetail.js';
import { within, userEvent } from 'storybook/test';

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
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/XXXXX/HANDYSOFT-DS?node-id=0:0', // TODO: 실제 Figma URL로 교체하세요
    },
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

export const TabSwitchDemo = {
  args: {
    title: '개발팀 명함 주문요청',
    tag: '긴급',
    requester: '김생민',
    activeTab: 'request',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const tabs = ['진행상태', '의견', '업무이력', '요청내용'];
    for (const tabText of tabs) {
      const tab = canvas.getByText(tabText);
      await userEvent.click(tab);
      await new Promise(r => setTimeout(r, 600));
    }
  },
};
