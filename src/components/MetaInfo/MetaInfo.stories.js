import { createMetaInfo } from './MetaInfo.js';

export default {
  title: 'Atoms/MetaInfo',
  render: (args) => createMetaInfo(args),
  argTypes: {
    divider: { control: 'text' },
  },
  parameters: {
    design: {
      type: 'figma',
      // TODO: 실제 Figma URL로 교체하세요
      url: 'https://www.figma.com/file/XXXXX/HANDYSOFT-DS?node-id=0:0',
    },
  },
};

export const Basic = {
  args: {
    items: [
      { value: '김생민' },
      { label: '업무요청일', value: '2017.09.01' },
      { label: '완료요청일', value: '2017.09.01' },
    ],
  },
};

export const WithCustomDivider = {
  args: {
    items: [
      { value: '김생민' },
      { label: '부서', value: '개발팀' },
      { label: '등록일', value: '2024.01.15' },
    ],
    divider: '·',
  },
};
