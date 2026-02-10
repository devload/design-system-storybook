import './BottomTabBar.css';

const tabItems = [
  { key: 'home', label: '홈', icon: '<path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>' },
  { key: 'task', label: '업무', icon: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 12l2 2 4-4"/>' },
  { key: 'calendar', label: '캘린더', icon: '<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>' },
  { key: 'notification', label: '알림', icon: '<path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/>' },
  { key: 'menu', label: '메뉴', icon: '<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>' },
];

/**
 * @param {Object} props
 * @param {string} [props.activeTab] - Active tab key
 */
export const createBottomTabBar = ({ activeTab = 'home' } = {}) => {
  const el = document.createElement('nav');
  el.className = 'mobile-tab-bar';
  el.style.position = 'relative';

  el.innerHTML = tabItems.map(item => `
    <button class="tab-item${item.key === activeTab ? ' active' : ''}" data-tab="${item.key}">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">${item.icon}</svg>
      ${item.label}
    </button>
  `).join('');

  el.querySelectorAll('.tab-item').forEach(tab => {
    tab.addEventListener('click', () => {
      el.querySelectorAll('.tab-item').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });

  return el;
};
