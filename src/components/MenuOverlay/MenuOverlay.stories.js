import { createMenuOverlay } from './MenuOverlay.js';

export default {
  title: 'Components/MenuOverlay',
  render: (args) => createMenuOverlay(args),
  argTypes: {
    variant: { control: 'select', options: ['desktop', 'mobile'] },
  },
};

export const Desktop = {
  args: { variant: 'desktop' },
};

export const Mobile = {
  args: { variant: 'mobile' },
};
