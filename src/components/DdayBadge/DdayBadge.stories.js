import { createDdayBadge } from './DdayBadge.js';

export default {
  title: 'Components/DdayBadge',
};

export const Dday = {
  render: () => createDdayBadge({ value: 'D-day' }),
};

export const D1 = {
  render: () => createDdayBadge({ value: 'D-1' }),
};

export const D3 = {
  render: () => createDdayBadge({ value: 'D-3' }),
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
