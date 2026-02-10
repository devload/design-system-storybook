import { createCheckbox } from './Checkbox.js';

export default {
  title: 'Atoms/Checkbox',
  render: (args) => createCheckbox(args),
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
