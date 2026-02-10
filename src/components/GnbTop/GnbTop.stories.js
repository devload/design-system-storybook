import { createGnbTop } from './GnbTop.js';

export default {
  title: 'Components/GnbTop',
  render: (args) => createGnbTop(args),
  argTypes: {
    activeItem: {
      control: 'select',
      options: ['portal', 'mail', 'approval', 'task', 'calendar', 'docs', 'community', 'hr', 'board'],
    },
  },
};

export const Default = {
  args: { activeItem: 'task' },
};

export const MailActive = {
  args: { activeItem: 'mail' },
};
