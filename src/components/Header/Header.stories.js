import { createHeader } from './Header.js';

export default {
  title: 'Components/Header',
  render: (args) => createHeader(args),
  argTypes: {
    showGnbTop: { control: 'boolean' },
    activeNav: { control: 'select', options: ['portal', 'mail', 'approval', 'task', 'calendar', 'docs', 'community', 'hr', 'board'] },
    notificationCount: { control: 'number' },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/XXXXX/HANDYSOFT-DS?node-id=0:0', // TODO: 실제 Figma URL로 교체하세요
    },
  },
};

export const Default = {
  args: { showGnbTop: false, notificationCount: 1 },
};

export const WithGnbTop = {
  args: { showGnbTop: true, activeNav: 'task', notificationCount: 3 },
};
