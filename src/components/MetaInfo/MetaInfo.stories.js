import { createMetaInfo } from './MetaInfo.js';

export default {
  title: 'Components/MetaInfo',
};

export const Basic = {
  render: () => createMetaInfo({
    items: [
      { value: '김생민' },
      { label: '업무요청일', value: '2017.09.01' },
      { label: '완료요청일', value: '2017.09.01' },
    ],
  }),
};

export const WithCustomDivider = {
  render: () => createMetaInfo({
    items: [
      { value: '김생민' },
      { label: '부서', value: '개발팀' },
      { label: '등록일', value: '2024.01.15' },
    ],
    divider: '·',
  }),
};
