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
};

export const Default = {
  args: { activeItem: 'task' },
};

export const MailActive = {
  args: { activeItem: 'mail' },
};
