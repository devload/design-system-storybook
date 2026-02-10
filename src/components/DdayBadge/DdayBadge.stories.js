import { createDdayBadge } from './DdayBadge.js';

export default {
  title: 'Atoms/DdayBadge',
  render: (args) => createDdayBadge(args),
  argTypes: {
    value: { control: 'text' },
  },
  parameters: {
    design: {
      type: 'figma',
      // TODO: 실제 Figma URL로 교체하세요
      url: 'https://www.figma.com/file/XXXXX/HANDYSOFT-DS?node-id=0:0',
    },
  },
};

export const Dday = {
  args: { value: 'D-day' },
};

export const D1 = {
  args: { value: 'D-1' },
};

export const D3 = {
  args: { value: 'D-3' },
};

export const AllDdayBadges = {
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.display = 'flex';
    wrapper.style.gap = '16px';
    wrapper.style.alignItems = 'center';
    wrapper.style.padding = '20px';
    wrapper.appendChild(createDdayBadge({ value: 'D-day' }));
    wrapper.appendChild(createDdayBadge({ value: 'D-1' }));
    wrapper.appendChild(createDdayBadge({ value: 'D-3' }));
    wrapper.appendChild(createDdayBadge({ value: 'D-7' }));
    return wrapper;
  },
};
