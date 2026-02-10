import './GnbSide.css';

const sidebarItems = [
  { key: 'menu', label: '전체메뉴', icon: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>' },
  { key: 'mail', label: '메일', icon: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>' },
  { key: 'mail2', label: '메일', icon: '<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>' },
  { key: 'approval', label: '결재', icon: '<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M9 15l2 2 4-4"/>' },
  { key: 'docs', label: '문서함', icon: '<rect x="2" y="3" width="20" height="5" rx="1"/><path d="M2 8v11a2 2 0 002 2h16a2 2 0 002-2V8"/><path d="M10 12h4"/>' },
  { key: 'square', label: '스퀘어', icon: '<rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/>' },
  { key: 'task', label: '업무넷', icon: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 12l2 2 4-4"/>' },
  { key: 'webfolder', label: '웹폴더', icon: '<path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/><circle cx="12" cy="14" r="3"/>' },
  { key: 'calendar', label: '일정', icon: '<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>' },
  { key: 'facility', label: '설비', icon: '<rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="12" y2="14"/>' },
  { key: 'alldocs', label: '전체문서함', icon: '<rect x="2" y="3" width="20" height="5" rx="1"/><path d="M2 8v11a2 2 0 002 2h16a2 2 0 002-2V8"/><line x1="12" y1="12" x2="12" y2="17"/><line x1="9" y1="14.5" x2="15" y2="14.5"/>' },
  { key: 'contacts', label: '주소록', icon: '<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>' },
  { key: 'survey', label: '설문', icon: '<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>' },
  { key: 'memo', label: '메모보고', icon: '<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/>' },
  { key: 'club', label: '동호회', icon: '<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>' },
];

/**
 * @param {Object} props
 * @param {string} [props.activeItem] - Active navigation item key
 */
export const createGnbSide = ({ activeItem = 'task' } = {}) => {
  const el = document.createElement('aside');
  el.className = 'icon-sidebar';

  el.innerHTML = `
    <div class="gbn-scroll">
      ${sidebarItems.map(item => `
        <button class="sidebar-icon${item.key === activeItem ? ' active' : ''}" data-nav="${item.key}" title="${item.label}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">${item.icon}</svg>
          <span class="icon-label">${item.label}</span>
        </button>
      `).join('')}
    </div>
    <div class="gbn-bottom">
      <button aria-label="위로">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><polyline points="18 15 12 9 6 15"/></svg>
      </button>
      <button aria-label="아래로">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
      </button>
    </div>
  `;

  // Wire up navigation clicks
  el.querySelectorAll('.sidebar-icon').forEach(btn => {
    btn.addEventListener('click', () => {
      el.querySelectorAll('.sidebar-icon').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  return el;
};
