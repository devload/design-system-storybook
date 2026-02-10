import { createBadge, createStatusBadge } from './Badge.js';

export default {
  title: 'Components/Badge',
};

export const Urgent = {
  render: () => createBadge({ label: '긴급', variant: 'urgent' }),
};

export const Security = {
  render: () => createBadge({ label: '보안', variant: 'security' }),
};

export const Info = {
  render: () => createBadge({ label: '정보', variant: 'info' }),
};

export const AllBadges = {
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.display = 'flex';
    wrapper.style.gap = '8px';
    wrapper.style.alignItems = 'center';
    wrapper.style.padding = '20px';
    wrapper.appendChild(createBadge({ label: '긴급', variant: 'urgent' }));
    wrapper.appendChild(createBadge({ label: '보안', variant: 'security' }));
    wrapper.appendChild(createBadge({ label: '정보', variant: 'info' }));
    wrapper.appendChild(createBadge({ label: '완료', variant: 'success' }));
    return wrapper;
  },
};

export const StatusBadges = {
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.display = 'flex';
    wrapper.style.gap = '8px';
    wrapper.style.alignItems = 'center';
    wrapper.style.padding = '20px';
    wrapper.appendChild(createStatusBadge({ label: '진행중', status: 'progress' }));
    wrapper.appendChild(createStatusBadge({ label: '보류', status: 'hold' }));
    wrapper.appendChild(createStatusBadge({ label: '완료', status: 'complete' }));
    return wrapper;
  },
};
