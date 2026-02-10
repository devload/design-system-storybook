import './MenuOverlay.css';

const menuItems = [
  { label: '메일', icon: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>' },
  { label: '결재', icon: '<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M9 15l2 2 4-4"/>' },
  { label: '업무넷', icon: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 12l2 2 4-4"/>' },
  { label: '문서함', icon: '<rect x="2" y="3" width="20" height="5" rx="1"/><path d="M2 8v11a2 2 0 002 2h16a2 2 0 002-2V8"/><path d="M10 12h4"/>' },
  { label: '일정', icon: '<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>' },
  { label: '주소록', icon: '<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>' },
  { label: '스퀘어', icon: '<rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/>' },
  { label: '웹폴더', icon: '<path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/><circle cx="12" cy="14" r="3"/>' },
  { label: '설문', icon: '<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>' },
  { label: '메모보고', icon: '<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/>' },
  { label: '동호회', icon: '<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>' },
  { label: '설비', icon: '<rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="12" y2="14"/>' },
];

/**
 * @param {Object} props
 * @param {'desktop'|'mobile'} [props.variant]
 */
export const createMenuOverlay = ({ variant = 'desktop' } = {}) => {
  const el = document.createElement('div');
  el.className = 'menu-overlay';
  el.style.position = 'relative';
  el.style.minHeight = variant === 'mobile' ? '812px' : '600px';
  el.style.maxWidth = variant === 'mobile' ? '375px' : '100%';

  const logoSvg = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none"><circle cx="12" cy="12" r="4" fill="#F5A623"/><circle cx="12" cy="3" r="2" fill="#F5A623"/><circle cx="12" cy="21" r="2" fill="#F5A623"/><circle cx="3" cy="12" r="2" fill="#F5A623"/><circle cx="21" cy="12" r="2" fill="#F5A623"/></svg>';

  const menuGridHtml = menuItems.map(item => `
    <div class="menu-grid-item">
      <div class="menu-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">${item.icon}</svg>
      </div>
      <span class="menu-label">${item.label}</span>
    </div>
  `).join('');

  if (variant === 'mobile') {
    el.innerHTML = `
      <div class="menu-overlay-header">
        <div class="logo">${logoSvg} 메뉴타이틀</div>
        <button class="menu-overlay-close" aria-label="닫기">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>
      <div class="menu-overlay-profile">
        <div class="menu-profile-avatar">
          <svg viewBox="0 0 24 24" width="40" height="40" fill="#8B7355"><circle cx="12" cy="8" r="4"/><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/></svg>
        </div>
        <div class="menu-profile-name">고윤정</div>
        <div class="menu-profile-dept">사업 · 디자인디자인팀 | system</div>
        <div class="menu-profile-actions">
          <button>프로필 보기</button>
          <button>로그아웃</button>
        </div>
      </div>
      <div class="menu-grid" style="grid-template-columns:repeat(4, 1fr);">
        ${menuGridHtml}
      </div>
    `;
  } else {
    el.innerHTML = `
      <div class="menu-overlay-header">
        <div class="logo">${logoSvg} HANDYSOFT</div>
        <div class="menu-overlay-tabs" style="margin-left:24px;border-bottom:none">
          <button class="menu-overlay-tab active">업무넷</button>
          <button class="menu-overlay-tab">메일</button>
          <button class="menu-overlay-tab">결재</button>
          <button class="menu-overlay-tab">커뮤니티</button>
          <button class="menu-overlay-tab">인사/총무</button>
          <button class="menu-overlay-tab">게시판</button>
        </div>
        <div style="flex:1"></div>
        <button class="menu-overlay-close" aria-label="닫기">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>
      <div class="menu-grid" style="grid-template-columns:repeat(6, 1fr);max-width:800px;margin:0 auto;">
        ${menuGridHtml}
      </div>
    `;
  }

  return el;
};
