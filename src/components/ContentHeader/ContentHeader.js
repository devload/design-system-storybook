import './ContentHeader.css';

const reloadSvg = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 11-2.12-9.36L23 10"/></svg>';

/**
 * @param {Object} props
 * @param {string} [props.title]
 * @param {number} [props.current]
 * @param {number} [props.total]
 * @param {boolean} [props.showReload]
 */
export const createContentHeader = ({
  title = '페이지명',
  current = 8,
  total = 450,
  showReload = true,
} = {}) => {
  const el = document.createElement('div');
  el.className = 'content-header';
  el.innerHTML = `
    <h1 class="content-header__title">${title}</h1>
    <div class="content-header__counter">
      <strong>${current}</strong> / ${total}
      ${showReload ? `<button class="content-header__reload" aria-label="새로고침">${reloadSvg}</button>` : ''}
    </div>
  `;
  return el;
};
