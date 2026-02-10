import { action } from 'storybook/actions';
import { within, userEvent } from 'storybook/test';
import { createCollapsibleSection } from './CollapsibleSection.js';
import { createNavMenuItem } from '../MenuItem/MenuItem.js';

const settingsSvg = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>';

export default {
  title: 'Components/CollapsibleSection',
  render: (args) => {
    const body = document.createElement('div');
    body.appendChild(createNavMenuItem({ label: '대기중인 요청업무', count: 3 }));
    body.appendChild(createNavMenuItem({ label: '진행중인 요청업무', count: 7, active: true }));
    body.appendChild(createNavMenuItem({ label: '완료된 요청업무' }));
    const el = createCollapsibleSection({ ...args, children: body });
    el.querySelector('.collapsible-section__header').addEventListener('click', action('onToggle'));
    return el;
  },
  argTypes: {
    title: { control: 'text' },
    collapsed: { control: 'boolean' },
  },
  parameters: {
    docs: {
      description: {
        component: '접기/펴기가 가능한 섹션 — LNB에서 업무함, VIP, 보관함 등에 사용됩니다.',
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
  args: { title: '받은 업무함' },
};

export const WithActions = {
  render: () => {
    const body = document.createElement('div');
    body.innerHTML = `
      <div style="padding:5px 8px 5px 24px;font-size:13px;color:var(--text-secondary)">김광수 팀장님</div>
      <div style="padding:5px 8px 5px 24px;font-size:13px;color:var(--text-secondary)">박민혁 대리</div>
    `;
    return createCollapsibleSection({
      title: 'VIP 업무',
      actions: [{ icon: settingsSvg, label: '설정' }],
      children: body,
    });
  },
};

export const Collapsed = {
  args: { title: '접힌 섹션', collapsed: true },
};

export const ToggleDemo = {
  render: () => {
    const body = document.createElement('div');
    body.appendChild(createNavMenuItem({ label: '대기중인 요청업무', count: 3 }));
    body.appendChild(createNavMenuItem({ label: '진행중인 요청업무', count: 7 }));
    return createCollapsibleSection({ title: '받은 업무함', children: body });
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const header = canvas.getByText('받은 업무함');
    await userEvent.click(header);
    await new Promise(r => setTimeout(r, 500));
    await userEvent.click(header);
  },
};
