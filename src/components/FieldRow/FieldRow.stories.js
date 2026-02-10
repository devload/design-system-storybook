import { createFieldRow } from './FieldRow.js';

export default {
  title: 'Atoms/FieldRow',
  render: (args) => createFieldRow(args),
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
    direction: { control: 'select', options: ['vertical', 'horizontal'] },
  },
  parameters: {
    design: {
      type: 'figma',
      // TODO: 실제 Figma URL로 교체하세요
      url: 'https://www.figma.com/file/XXXXX/HANDYSOFT-DS?node-id=0:0',
    },
  },
};

export const Vertical = {
  args: { label: '담당자', value: '김생민' },
};

export const Horizontal = {
  args: { label: '담당자', value: '김생민', direction: 'horizontal' },
};

export const WithHtml = {
  args: { label: '설명', value: '업무 내용을 확인해주세요.<br>자세한 사항은 첨부파일 참고.' },
};

export const AllLayouts = {
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.padding = '20px';
    wrapper.style.maxWidth = '400px';
    wrapper.appendChild(createFieldRow({ label: '담당자', value: '김생민', direction: 'horizontal' }));
    wrapper.appendChild(createFieldRow({ label: '부서', value: '개발팀', direction: 'horizontal' }));
    wrapper.appendChild(createFieldRow({ label: '업무 내용', value: '시스템 점검 및 보안 업데이트 진행' }));
    return wrapper;
  },
};
