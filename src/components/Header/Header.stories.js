import { createHeader } from './Header.js';

export default {
  title: 'Components/Header',
  render: (args) => createHeader(args),
  argTypes: {
    showGnbTop: { control: 'boolean' },
    activeNav: { control: 'select', options: ['portal', 'mail', 'approval', 'task', 'calendar', 'docs', 'community', 'hr', 'board'] },
    notificationCount: { control: 'number' },
  },
};

export const Default = {
  args: { showGnbTop: false, notificationCount: 1 },
};

export const WithGnbTop = {
  args: { showGnbTop: true, activeNav: 'task', notificationCount: 3 },
};
