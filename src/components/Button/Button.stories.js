import { createButton } from './Button.js';

export default {
  title: 'Atoms/Button',
  render: (args) => createButton(args),
  argTypes: {
    label: { control: 'text' },
    variant: { control: 'select', options: ['primary', 'secondary', 'ghost', 'danger', 'text'] },
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg'] },
    disabled: { control: 'boolean' },
    block: { control: 'boolean' },
    split: { control: 'boolean' },
  },
};

export const Primary = {
  args: { label: '업무 요청하기', variant: 'primary', size: 'md' },
};

export const Secondary = {
  args: { label: '완료 회신', variant: 'secondary', size: 'sm' },
};

export const Ghost = {
  args: { label: '추가기능', variant: 'ghost', size: 'sm' },
};

export const Danger = {
  args: { label: '삭제', variant: 'danger', size: 'md' },
};

export const TextButton = {
  args: { label: '상세보기', variant: 'text', size: 'sm' },
};

export const WithIcon = {
  args: {
    label: '새로고침',
    variant: 'secondary',
    size: 'sm',
    iconSvg: '<polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 11-2.12-9.36L23 10"/>',
  },
};

export const SplitButton = {
  args: { label: '업무 요청하기', variant: 'primary', size: 'lg', split: true, block: true },
};

export const Disabled = {
  args: { label: '비활성', variant: 'primary', size: 'md', disabled: true },
};

export const IconOnly = {
  render: () => createButton({
    variant: 'ghost',
    size: 'md',
    iconOnly: true,
    iconSvg: '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',
  }),
};

export const AllVariants = {
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.display = 'flex';
    wrapper.style.gap = '8px';
    wrapper.style.alignItems = 'center';
    wrapper.style.flexWrap = 'wrap';
    wrapper.style.padding = '20px';

    const variants = [
      { label: 'Primary', variant: 'primary' },
      { label: 'Secondary', variant: 'secondary' },
      { label: 'Ghost', variant: 'ghost' },
      { label: 'Danger', variant: 'danger' },
      { label: 'Text', variant: 'text' },
    ];
    variants.forEach(v => wrapper.appendChild(createButton(v)));
    return wrapper;
  },
};

export const AllSizes = {
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.display = 'flex';
    wrapper.style.gap = '8px';
    wrapper.style.alignItems = 'center';
    wrapper.style.padding = '20px';

    const sizes = ['xs', 'sm', 'md', 'lg'];
    sizes.forEach(size => wrapper.appendChild(createButton({ label: size.toUpperCase(), size })));
    return wrapper;
  },
};
