import { createStatusBadge } from './StatusBadge.js';

export default {
  title: 'Components/StatusBadge',
};

export const Progress = {
  render: () => createStatusBadge({ label: '진행중', status: 'progress' }),
};

export const Hold = {
  render: () => createStatusBadge({ label: '보류', status: 'hold' }),
};

export const Complete = {
  render: () => createStatusBadge({ label: '완료', status: 'complete' }),
};

export const AllStatusBadges = {
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
