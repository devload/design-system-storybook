import { createSearchBar } from './SearchBar.js';

export default {
  title: 'Atoms/SearchBar',
  render: (args) => {
    const wrap = document.createElement('div');
    wrap.style.cssText = args.dark
      ? 'padding:20px;background:#2A3046;border-radius:8px'
      : 'padding:20px';
    wrap.appendChild(createSearchBar(args));
    return wrap;
  },
  argTypes: {
    dark: { control: 'boolean' },
    showSelect: { control: 'boolean' },
    placeholder: { control: 'text' },
  },
  parameters: {
    docs: {
      description: {
        component: '검색바 컴포넌트. 헤더(다크) 및 콘텐츠 영역(라이트) 두 가지 변형을 지원합니다. 분류 셀렉트 포함 여부를 선택할 수 있습니다.',
      },
    },
  },
};

export const Light = {
  args: { dark: false, showSelect: true, placeholder: '검색어를 입력하세요' },
};

export const Dark = {
  args: { dark: true, showSelect: true, placeholder: '검색어를 입력하세요' },
};

export const NoSelect = {
  args: { dark: false, showSelect: false, placeholder: '검색' },
};
