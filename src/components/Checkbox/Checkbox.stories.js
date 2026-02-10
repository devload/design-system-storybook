import { createCheckbox } from './Checkbox.js';
import { action } from 'storybook/actions';
import { within, userEvent } from 'storybook/test';

export default {
  title: 'Atoms/Checkbox',
  render: (args) => {
    const el = createCheckbox(args);
    const input = el.querySelector('input');
    if (input) {
      input.addEventListener('change', action('onChange'));
    }
    return el;
  },
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  parameters: {
    docs: {
      description: {
        component: '체크박스 컴포넌트. 업무 선택, 전체 선택 등에 사용됩니다. 시스템 Primary 컬러(#4096FF)로 accent-color를 적용합니다.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/XXXXX/HANDYSOFT-DS?node-id=0:0', // TODO: 실제 Figma URL로 교체하세요
    },
  },
};

export const Default = {
  args: { label: '업무 선택' },
};

export const Checked = {
  args: { label: '선택됨', checked: true },
};

export const Disabled = {
  args: { label: '비활성', disabled: true },
};

export const CheckedDisabled = {
  args: { label: '선택+비활성', checked: true, disabled: true },
};

export const NoLabel = {
  args: { checked: false },
};

export const AllStates = {
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'display:flex;flex-direction:column;gap:12px;padding:20px';
    wrap.appendChild(createCheckbox({ label: '미선택' }));
    wrap.appendChild(createCheckbox({ label: '선택됨', checked: true }));
    wrap.appendChild(createCheckbox({ label: '비활성', disabled: true }));
    wrap.appendChild(createCheckbox({ label: '선택+비활성', checked: true, disabled: true }));
    wrap.appendChild(createCheckbox({}));
    return wrap;
  },
};

export const ToggleDemo = {
  args: { label: '토글 테스트' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkbox');
    await userEvent.click(checkbox);
    await new Promise(r => setTimeout(r, 500));
    await userEvent.click(checkbox);
  },
};
