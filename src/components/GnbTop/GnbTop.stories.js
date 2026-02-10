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
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/XXXXX/HANDYSOFT-DS?node-id=0:0', // TODO: 실제 Figma URL로 교체하세요
    },
  },
};

export const Default = {
  args: { activeItem: 'task' },
};

export const MailActive = {
  args: { activeItem: 'mail' },
};
