import { createFileAttachment } from './FileAttachment.js';

export default {
  title: 'Atoms/FileAttachment',
  render: (args) => createFileAttachment(args),
  argTypes: {
    fileName: { control: 'text' },
    fileSize: { control: 'text' },
  },
  parameters: {
    design: {
      type: 'figma',
      // TODO: 실제 Figma URL로 교체하세요
      url: 'https://www.figma.com/file/XXXXX/HANDYSOFT-DS?node-id=0:0',
    },
  },
};

export const Basic = {
  args: { fileName: '업무보고서.pdf', fileSize: '2.3MB' },
};

export const WithoutSize = {
  args: { fileName: '첨부파일.xlsx' },
};

export const MultipleFiles = {
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.display = 'flex';
    wrapper.style.flexDirection = 'column';
    wrapper.style.gap = '8px';
    wrapper.style.padding = '20px';
    wrapper.appendChild(createFileAttachment({ fileName: '업무보고서.pdf', fileSize: '2.3MB' }));
    wrapper.appendChild(createFileAttachment({ fileName: '회의록.docx', fileSize: '1.1MB' }));
    wrapper.appendChild(createFileAttachment({ fileName: '참고자료.xlsx', fileSize: '540KB' }));
    return wrapper;
  },
};
