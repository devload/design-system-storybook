import { createAvatar, createAvatarGroup } from './Avatar.js';

export default {
  title: 'Atoms/Avatar',
  render: (args) => createAvatar(args),
  argTypes: {
    initial: { control: 'text' },
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'] },
    variant: { control: 'select', options: ['default', 'primary', 'golden', 'green', 'blue', 'pink'] },
    showPersonIcon: { control: 'boolean' },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/XXXXX/HANDYSOFT-DS?node-id=0:0', // TODO: 실제 Figma URL로 교체하세요
    },
    docs: {
      description: {
        component: '사용자 아바타 컴포넌트. 이니셜 또는 아이콘으로 표시합니다. VIP 업무, 의견, 담당자 표시에 사용됩니다.',
      },
    },
  },
};

export const Default = {
  args: { initial: '김', size: 'md', variant: 'default' },
};

export const PersonIcon = {
  args: { showPersonIcon: true, size: 'lg', variant: 'golden' },
};

export const AllSizes = {
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'display:flex;gap:8px;align-items:center;padding:20px';
    ['xs', 'sm', 'md', 'lg', 'xl', '2xl'].forEach(size =>
      wrap.appendChild(createAvatar({ initial: '한', size, variant: 'default' }))
    );
    return wrap;
  },
};

export const AllVariants = {
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'display:flex;gap:8px;align-items:center;padding:20px';
    const variants = [
      { initial: '김', variant: 'default' },
      { initial: '박', variant: 'primary' },
      { initial: '이', variant: 'golden' },
      { initial: '최', variant: 'green' },
      { initial: '정', variant: 'blue' },
      { initial: '한', variant: 'pink' },
    ];
    variants.forEach(v => wrap.appendChild(createAvatar({ ...v, size: 'lg' })));
    return wrap;
  },
};

export const Group = {
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.padding = '20px';
    wrap.appendChild(createAvatarGroup({
      avatars: [
        { initial: '김', variant: 'default' },
        { initial: '박', variant: 'green' },
        { initial: '이', variant: 'blue' },
        { initial: '최', variant: 'pink' },
      ],
      size: 'md',
    }));
    return wrap;
  },
};
