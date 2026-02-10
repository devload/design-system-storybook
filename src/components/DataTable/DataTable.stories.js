import { createDataTable } from './DataTable.js';

export default {
  title: 'Components/DataTable',
  render: (args) => {
    const wrapper = document.createElement('div');
    wrapper.style.height = '600px';
    wrapper.style.display = 'flex';
    wrapper.style.flexDirection = 'column';
    wrapper.appendChild(createDataTable(args));
    return wrapper;
  },
  argTypes: {
    title: { control: 'text' },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/XXXXX/HANDYSOFT-DS?node-id=0:0', // TODO: 실제 Figma URL로 교체하세요
    },
  },
};

export const Default = {
  args: { title: '페이지명' },
};
