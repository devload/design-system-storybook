import { createPagination } from './Pagination.js';

export default {
  title: 'Atoms/Pagination',
  render: (args) => {
    const wrap = document.createElement('div');
    wrap.style.padding = '20px';
    wrap.appendChild(createPagination(args));
    return wrap;
  },
  argTypes: {
    currentPage: { control: 'number' },
    totalPages: { control: 'number' },
    visiblePages: { control: 'number' },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/XXXXX/HANDYSOFT-DS?node-id=0:0', // TODO: 실제 Figma URL로 교체하세요
    },
    docs: {
      description: {
        component: '페이지네이션 컴포넌트. 업무 리스트, 데이터 테이블의 페이지 이동에 사용됩니다. 첫/이전/다음/마지막 버튼과 페이지 번호 직접 입력을 지원합니다.',
      },
    },
  },
};

export const Default = {
  args: { currentPage: 1, totalPages: 9 },
};

export const MiddlePage = {
  args: { currentPage: 5, totalPages: 20 },
};

export const LastPage = {
  args: { currentPage: 9, totalPages: 9 },
};

export const ManyPages = {
  args: { currentPage: 50, totalPages: 100, visiblePages: 7 },
};
