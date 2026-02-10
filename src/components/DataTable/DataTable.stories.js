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
};

export const Default = {
  args: { title: '페이지명' },
};
