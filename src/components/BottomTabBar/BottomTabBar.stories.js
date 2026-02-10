import { createBottomTabBar } from './BottomTabBar.js';

export default {
  title: 'Components/BottomTabBar',
  render: (args) => createBottomTabBar(args),
  argTypes: {
    activeTab: {
      control: 'select',
      options: ['home', 'task', 'calendar', 'notification', 'menu'],
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/XXXXX/HANDYSOFT-DS?node-id=0:0', // TODO: 실제 Figma URL로 교체하세요
    },
  },
};

export const Default = {
  args: { activeTab: 'home' },
};

export const TaskActive = {
  args: { activeTab: 'task' },
};
