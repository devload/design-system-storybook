import { createInput } from './Input.js';
import { action } from 'storybook/actions';
import { within, userEvent } from 'storybook/test';

export default {
  title: 'Atoms/Input',
  render: (args) => {
    const el = createInput(args);
    const input = el.querySelector('input');
    if (input) {
      input.addEventListener('input', action('onInput'));
      input.addEventListener('change', action('onChange'));
    }
    return el;
  },
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    helperText: { control: 'text' },
    type: { control: 'select', options: ['text', 'password', 'email', 'number'] },
  },
  parameters: {
    docs: {
      description: {
        component: '텍스트 입력 필드. 라벨, 헬퍼 텍스트, 에러 상태를 지원합니다.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/XXXXX/HANDYSOFT-DS?node-id=0:0', // TODO: 실제 Figma URL로 교체하세요
    },
  },
};

export const Default = {
  args: { label: '제목', placeholder: '제목을 입력하세요' },
};

export const WithValue = {
  args: { label: '담당자', value: '김광욱' },
};

export const Small = {
  args: { placeholder: '검색어 입력', size: 'sm' },
};

export const Large = {
  args: { label: '상세 설명', placeholder: '내용을 입력하세요', size: 'lg' },
};

export const ErrorState = {
  args: { label: '이메일', value: 'invalid', error: true, helperText: '올바른 이메일 형식이 아닙니다' },
};

export const Disabled = {
  args: { label: '읽기전용', value: '수정 불가', disabled: true },
};

export const WithHelper = {
  args: { label: '비밀번호', type: 'password', helperText: '8자 이상 입력하세요' },
};

export const AllStates = {
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'display:flex;flex-direction:column;gap:16px;padding:20px;max-width:320px';
    wrap.appendChild(createInput({ label: '기본', placeholder: '기본 입력' }));
    wrap.appendChild(createInput({ label: '포커스', placeholder: '클릭하여 포커스' }));
    wrap.appendChild(createInput({ label: '에러', value: 'wrong', error: true, helperText: '잘못된 입력입니다' }));
    wrap.appendChild(createInput({ label: '비활성', value: '비활성 상태', disabled: true }));
    wrap.appendChild(createInput({ label: '헬퍼', placeholder: '입력', helperText: '도움말 텍스트입니다' }));
    return wrap;
  },
};

export const TypeDemo = {
  args: { label: '입력 테스트', placeholder: '여기에 입력하세요' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');
    await userEvent.type(input, '안녕하세요');
  },
};
