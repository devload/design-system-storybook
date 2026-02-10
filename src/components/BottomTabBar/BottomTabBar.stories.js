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
};

export const Default = {
  args: { activeTab: 'home' },
};

export const TaskActive = {
  args: { activeTab: 'task' },
};
