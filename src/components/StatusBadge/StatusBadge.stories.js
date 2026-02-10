import { createStatusBadge } from './StatusBadge.js';

export default {
  title: 'Atoms/StatusBadge',
  render: (args) => createStatusBadge(args),
  argTypes: {
    label: { control: 'text' },
    status: { control: 'select', options: ['progress', 'hold', 'complete'] },
  },
  parameters: {
    design: {
      type: 'figma',
      // TODO: 실제 Figma URL로 교체하세요
      url: 'https://www.figma.com/file/XXXXX/HANDYSOFT-DS?node-id=0:0',
    },
  },
};

export const Progress = {
  args: { label: '진행중', status: 'progress' },
};

export const Hold = {
  args: { label: '보류', status: 'hold' },
};

export const Complete = {
  args: { label: '완료', status: 'complete' },
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
