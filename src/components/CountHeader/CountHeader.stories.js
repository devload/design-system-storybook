import { createCountHeader } from './CountHeader.js';

export default {
  title: 'Atoms/CountHeader',
  render: (args) => createCountHeader(args),
  argTypes: {
    current: { control: 'number' },
    total: { control: 'number' },
    prefix: { control: 'text' },
    suffix: { control: 'text' },
  },
  parameters: {
    design: {
      type: 'figma',
      // TODO: 실제 Figma URL로 교체하세요
      url: 'https://www.figma.com/file/XXXXX/HANDYSOFT-DS?node-id=0:0',
    },
  },
};

export const WithTotal = {
  args: { current: 8, total: 450 },
};

export const WithoutTotal = {
  args: { current: 7 },
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
