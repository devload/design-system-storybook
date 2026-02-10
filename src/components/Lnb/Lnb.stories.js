import { createLnb } from './Lnb.js';

export default {
  title: 'Components/Lnb',
  render: (args) => {
    const wrapper = document.createElement('div');
    wrapper.style.height = '700px';
    wrapper.appendChild(createLnb(args));
    return wrapper;
  },
  argTypes: {
    activeCategory: {
      control: 'select',
      options: ['waiting', 'progress', 'done', 'sent-waiting', 'sent-progress', 'sent-rejected', 'sent-done'],
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
  args: { activeCategory: 'progress' },
};

export const WaitingSelected = {
  args: { activeCategory: 'waiting' },
};
