import { action } from 'storybook/actions';
import { createNavMenuItem } from './MenuItem.js';

export default {
  title: 'Components/NavMenuItem',
  render: (args) => {
    const el = createNavMenuItem(args);
    el.addEventListener('click', action('onClick'));
    return el;
  },
  argTypes: {
    label: { control: 'text' },
    count: { control: 'number' },
    countVariant: { control: 'select', options: ['default', 'danger'] },
    active: { control: 'boolean' },
  },
  parameters: {
    docs: {
      description: {
        component: 'LNB 네비게이션 메뉴 항목 — 라벨, 카운트 뱃지, 활성 상태를 지원합니다.',
      },
    },
    design: {
      type: 'figma',
      // TODO: 실제 Figma URL로 교체하세요
      url: 'https://www.figma.com/file/XXXXX/HANDYSOFT-DS?node-id=0:0',
    },
  },
};

export const Default = {
  args: { label: '진행중인 요청업무', count: 7 },
};

export const Active = {
  args: { label: '진행중인 요청업무', count: 7, active: true },
};

export const DangerCount = {
  args: { label: '거절/보류된 나의요청', count: 8, countVariant: 'danger' },
};

export const WithIcon = {
  render: () => createNavMenuItem({ label: '플래그 업무', count: 3, icon: '🚩' }),
};

export const AllVariants = {
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'display:flex;flex-direction:column;width:230px;background:#F8FAFC;padding:8px 16px;border-radius:8px';
    wrap.appendChild(createNavMenuItem({ label: '대기중인 요청업무', count: 3 }));
    wrap.appendChild(createNavMenuItem({ label: '진행중인 요청업무', count: 7, active: true }));
    wrap.appendChild(createNavMenuItem({ label: '완료된 요청업무' }));
    wrap.appendChild(createNavMenuItem({ label: '거절/보류된 나의요청', count: 8, countVariant: 'danger' }));
    return wrap;
  },
};
