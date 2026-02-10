import { createMenuOverlay } from './MenuOverlay.js';

export default {
  title: 'Components/MenuOverlay',
  render: (args) => createMenuOverlay(args),
  argTypes: {
    variant: { control: 'select', options: ['desktop', 'mobile'] },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/XXXXX/HANDYSOFT-DS?node-id=0:0', // TODO: 실제 Figma URL로 교체하세요
    },
  },
};

export const Desktop = {
  args: { variant: 'desktop' },
};

export const Mobile = {
  args: { variant: 'mobile' },
};
