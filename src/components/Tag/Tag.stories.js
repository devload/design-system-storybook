import { createTag } from './Tag.js';

export default {
  title: 'Components/Tag',
};

export const Urgent = {
  render: () => createTag({ label: '긴급', variant: 'urgent' }),
};

export const Security = {
  render: () => createTag({ label: '보안', variant: 'security' }),
};

export const Info = {
  render: () => createTag({ label: '정보', variant: 'info' }),
};

export const Success = {
  render: () => createTag({ label: '완료', variant: 'success' }),
};

export const AllTags = {
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.display = 'flex';
    wrapper.style.gap = '8px';
    wrapper.style.alignItems = 'center';
    wrapper.style.padding = '20px';
    wrapper.appendChild(createTag({ label: '긴급', variant: 'urgent' }));
    wrapper.appendChild(createTag({ label: '보안', variant: 'security' }));
    wrapper.appendChild(createTag({ label: '정보', variant: 'info' }));
    wrapper.appendChild(createTag({ label: '완료', variant: 'success' }));
    return wrapper;
  },
};
