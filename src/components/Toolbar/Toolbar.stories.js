import { createToolbar } from './Toolbar.js';

export default {
  title: 'Components/Toolbar',
  render: (args) => createToolbar(args),
  argTypes: {
    showFilters: { control: 'boolean' },
    showViewToggle: { control: 'boolean' },
  },
};

export const Default = {
  args: { showFilters: true, showViewToggle: true },
};

export const ActionsOnly = {
  args: { showFilters: false, showViewToggle: false },
};
