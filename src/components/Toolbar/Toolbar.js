import './Toolbar.css';

/**
 * @param {Object} props
 * @param {string[]} [props.actions] - Toolbar action button labels
 * @param {boolean} [props.showFilters] - Show filter dropdowns
 * @param {boolean} [props.showViewToggle] - Show view toggle buttons
 */
export const createToolbar = ({
  actions = ['완료 회신', '진행중 보류', '반송', '하위업무 요청', '위임', '추가기능 ▾'],
  showFilters = true,
  showViewToggle = true,
} = {}) => {
  const el = document.createElement('div');
  el.className = 'toolbar';

  const actionsHtml = actions.map(a => `<button class="toolbar-btn">${a}</button>`).join('');

  const filtersHtml = showFilters ? `
    <span class="toolbar-divider"></span>
    <span class="toolbar-label">필터:</span>
    <select class="toolbar-select" aria-label="분류 필터">
      <option value="">모든분류</option>
      <option value="신청">신청</option>
      <option value="협업">협업</option>
      <option value="취합">취합</option>
    </select>
    <select class="toolbar-select" aria-label="상태 필터">
      <option value="">모든상태</option>
      <option value="진행중">진행중</option>
      <option value="보류">보류</option>
      <option value="완료">완료</option>
    </select>
  ` : '';

  const viewToggleHtml = showViewToggle ? `
    <div class="view-toggle">
      <button class="view-btn active" aria-label="리스트 뷰">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><circle cx="4" cy="6" r="1" fill="currentColor"/><circle cx="4" cy="12" r="1" fill="currentColor"/><circle cx="4" cy="18" r="1" fill="currentColor"/></svg>
      </button>
      <button class="view-btn" aria-label="그리드 뷰">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
      </button>
    </div>
    <select class="toolbar-select" aria-label="페이지당 항목 수" style="margin-left:8px">
      <option value="50">50개</option>
      <option value="20">20개</option>
      <option value="100">100개</option>
    </select>
  ` : '';

  el.innerHTML = `
    <label class="toolbar-check">
      <input type="checkbox" aria-label="전체 선택">
    </label>
    ${actionsHtml}
    ${filtersHtml}
    ${viewToggleHtml}
  `;

  return el;
};
