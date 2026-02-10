import { action } from 'storybook/actions';
import { createMenuGridItem } from './MenuGridItem.js';

const sampleIcons = {
  mail: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>',
  approval: '<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M9 15l2 2 4-4"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
  contacts: '<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>',
};

export default {
  title: 'Components/MenuGridItem',
  render: (args) => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'background:#2A3046;padding:24px;display:inline-block;border-radius:8px';
    const el = createMenuGridItem(args);
    el.addEventListener('click', action('onClick'));
    wrap.appendChild(el);
    return wrap;
  },
  argTypes: {
    label: { control: 'text' },
    active: { control: 'boolean' },
  },
  parameters: {
    docs: {
      description: {
        component: '메뉴 그리드 항목 — 전체 메뉴 오버레이에서 아이콘+라벨로 표시되는 메뉴 항목입니다.',
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
  args: { label: '메일', icon: sampleIcons.mail },
};

export const GridLayout = {
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'background:#2A3046;padding:24px;display:grid;grid-template-columns:repeat(4,1fr);gap:16px;border-radius:8px;max-width:500px';
    wrap.appendChild(createMenuGridItem({ label: '메일', icon: sampleIcons.mail }));
    wrap.appendChild(createMenuGridItem({ label: '결재', icon: sampleIcons.approval }));
    wrap.appendChild(createMenuGridItem({ label: '일정', icon: sampleIcons.calendar }));
    wrap.appendChild(createMenuGridItem({ label: '주소록', icon: sampleIcons.contacts }));
    return wrap;
  },
};
