import { createSelect } from './Select.js';

export default {
  title: 'Atoms/Select',
  render: (args) => createSelect(args),
  argTypes: {
    label: { control: 'text' },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    disabled: { control: 'boolean' },
  },
  parameters: {
    docs: {
      description: {
        component: '드롭다운 셀렉트 컴포넌트. 필터, 정렬 등에 사용됩니다.',
      },
    },
  },
};

export const Default = {
  args: {
    label: '분류',
    options: [
      { value: '', text: '모든분류' },
      { value: 'apply', text: '신청' },
      { value: 'collab', text: '협업' },
      { value: 'collect', text: '취합' },
    ],
  },
};

export const StatusFilter = {
  args: {
    label: '상태',
    options: [
      { value: '', text: '모든상태' },
      { value: 'progress', text: '진행중' },
      { value: 'hold', text: '보류' },
      { value: 'complete', text: '완료' },
    ],
  },
};

export const Small = {
  args: {
    size: 'sm',
    options: [
      { value: '50', text: '50개' },
      { value: '20', text: '20개' },
      { value: '100', text: '100개' },
    ],
    value: '50',
  },
};

export const Disabled = {
  args: { label: '비활성', disabled: true },
};

export const AllSizes = {
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'display:flex;gap:12px;align-items:flex-end;padding:20px';
    wrap.appendChild(createSelect({ label: 'Small', size: 'sm' }));
    wrap.appendChild(createSelect({ label: 'Medium', size: 'md' }));
    wrap.appendChild(createSelect({ label: 'Large', size: 'lg' }));
    return wrap;
  },
};
