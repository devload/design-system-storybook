import { createFieldRow } from './FieldRow.js';

export default {
  title: 'Components/FieldRow',
};

export const Vertical = {
  render: () => createFieldRow({ label: '담당자', value: '김생민' }),
};

export const Horizontal = {
  render: () => createFieldRow({ label: '담당자', value: '김생민', direction: 'horizontal' }),
};

export const WithHtml = {
  render: () => createFieldRow({ label: '설명', value: '업무 내용을 확인해주세요.<br>자세한 사항은 첨부파일 참고.' }),
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
