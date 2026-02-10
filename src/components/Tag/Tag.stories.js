import { createTag } from './Tag.js';

export default {
  title: 'Atoms/Tag',
  render: (args) => createTag(args),
  argTypes: {
    label: { control: 'text' },
    variant: { control: 'select', options: ['urgent', 'security', 'info', 'success'] },
  },
  parameters: {
    design: {
      type: 'figma',
      // TODO: 실제 Figma URL로 교체하세요
      url: 'https://www.figma.com/file/XXXXX/HANDYSOFT-DS?node-id=0:0',
    },
  },
};

export const Urgent = {
  args: { label: '긴급', variant: 'urgent' },
};

export const Security = {
  args: { label: '보안', variant: 'security' },
};

export const Info = {
  args: { label: '정보', variant: 'info' },
};

export const Success = {
  args: { label: '완료', variant: 'success' },
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
