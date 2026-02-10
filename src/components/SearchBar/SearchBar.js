import './SearchBar.css';

/**
 * @param {Object} props
 * @param {boolean} [props.dark] - Dark variant (for header)
 * @param {boolean} [props.showSelect] - Show category select
 * @param {string} [props.placeholder]
 * @param {string[]} [props.categories]
 */
export const createSearchBar = ({
  dark = false,
  showSelect = true,
  placeholder = '검색어를 입력하세요',
  categories = ['전체', '제목', '담당자', '내용'],
} = {}) => {
  const el = document.createElement('div');
  el.className = `searchbar${dark ? ' searchbar-dark' : ''}`;

  const selectHtml = showSelect ? `
    <select aria-label="검색 범위">
      ${categories.map(c => `<option>${c}</option>`).join('')}
    </select>
  ` : '';

  el.innerHTML = `
    ${selectHtml}
    <input type="text" placeholder="${placeholder}" aria-label="검색">
    <button class="searchbar-btn" aria-label="검색">
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
    </button>
  `;

  return el;
};
