import './Header.css';

/**
 * @param {Object} props
 * @param {boolean} [props.showGnbTop] - Show horizontal GNB navigation in header
 * @param {string} [props.activeNav] - Active GNB top item key
 * @param {number} [props.notificationCount] - Notification badge count
 */
export const createHeader = ({ showGnbTop = false, activeNav = 'task', notificationCount = 1 } = {}) => {
  const el = document.createElement('header');
  el.className = 'top-header';

  const gnbTopItems = [
    { key: 'portal', label: '포탈/통합검색' },
    { key: 'mail', label: '메일' },
    { key: 'approval', label: '결재' },
    { key: 'task', label: '업무넷' },
    { key: 'calendar', label: '일정' },
    { key: 'docs', label: '문서함' },
    { key: 'community', label: '커뮤니티' },
    { key: 'hr', label: '인사/총무' },
    { key: 'board', label: '게시판' },
  ];

  const gnbTopHtml = showGnbTop ? `
    <nav class="gnb-top-nav">
      ${gnbTopItems.map(item =>
        `<button class="gnb-top-item${item.key === activeNav ? ' active' : ''}">${item.label}</button>`
      ).join('')}
    </nav>
  ` : '';

  el.innerHTML = `
    <div class="logo">
      <span class="logo-icon">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none"><circle cx="12" cy="12" r="4" fill="#F5A623"/><circle cx="12" cy="3" r="2" fill="#F5A623"/><circle cx="12" cy="21" r="2" fill="#F5A623"/><circle cx="3" cy="12" r="2" fill="#F5A623"/><circle cx="21" cy="12" r="2" fill="#F5A623"/><circle cx="5.5" cy="5.5" r="1.5" fill="#F5A623" opacity="0.7"/><circle cx="18.5" cy="5.5" r="1.5" fill="#F5A623" opacity="0.7"/><circle cx="5.5" cy="18.5" r="1.5" fill="#F5A623" opacity="0.7"/><circle cx="18.5" cy="18.5" r="1.5" fill="#F5A623" opacity="0.7"/></svg>
      </span>
      HANDYSOFT
    </div>
    ${gnbTopHtml}
    <div class="header-spacer"></div>
    <div class="search-bar">
      <select aria-label="검색 범위">
        <option>전체</option>
        <option>제목</option>
        <option>담당자</option>
        <option>내용</option>
      </select>
      <input type="text" placeholder="검색어를 입력하세요" aria-label="검색">
      <button class="search-btn" aria-label="검색">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
      </button>
    </div>
    <button class="search-detail-btn">상세</button>
    <div class="header-actions">
      <button class="header-avatar" aria-label="프로필">
        <svg viewBox="0 0 24 24" fill="#8B7355"><circle cx="12" cy="8" r="4"/><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/></svg>
      </button>
      <button class="notification-btn" aria-label="알림">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>
        ${notificationCount > 0 ? `<span class="notification-badge">${notificationCount}</span>` : ''}
      </button>
      <button class="menu-btn" aria-label="메뉴">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
      </button>
    </div>
  `;
  return el;
};
