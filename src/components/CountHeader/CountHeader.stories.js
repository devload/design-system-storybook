import { createCountHeader } from './CountHeader.js';

export default {
  title: 'Components/CountHeader',
};

export const WithTotal = {
  render: () => createCountHeader({ current: 8, total: 450 }),
};

export const WithoutTotal = {
  render: () => createCountHeader({ current: 7 }),
};

export const AllFormats = {
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.display = 'flex';
    wrapper.style.gap = '24px';
    wrapper.style.alignItems = 'center';
    wrapper.style.padding = '20px';
    wrapper.appendChild(createCountHeader({ current: 8, total: 450 }));
    wrapper.appendChild(createCountHeader({ current: 7 }));
    wrapper.appendChild(createCountHeader({ current: 12, prefix: '검색결과', suffix: '건' }));
    return wrapper;
  },
};
