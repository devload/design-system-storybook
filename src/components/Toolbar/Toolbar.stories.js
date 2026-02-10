import { createToolbar } from './Toolbar.js';

export default {
  title: 'Components/Toolbar',
  render: (args) => createToolbar(args),
  argTypes: {
    showFilters: { control: 'boolean' },
    showViewToggle: { control: 'boolean' },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/XXXXX/HANDYSOFT-DS?node-id=0:0', // TODO: 실제 Figma URL로 교체하세요
    },
  },
};

export const Default = {
  args: { showFilters: true, showViewToggle: true },
};

export const ActionsOnly = {
  args: { showFilters: false, showViewToggle: false },
};
