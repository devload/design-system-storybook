import { createGnbSide } from './GnbSide.js';

export default {
  title: 'Components/GnbSide',
  render: (args) => {
    const wrapper = document.createElement('div');
    wrapper.style.height = '600px';
    wrapper.appendChild(createGnbSide(args));
    return wrapper;
  },
  argTypes: {
    activeItem: {
      control: 'select',
      options: ['menu', 'mail', 'approval', 'docs', 'task', 'calendar', 'contacts'],
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
