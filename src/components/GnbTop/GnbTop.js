import './GnbTop.css';

const navItems = [
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

/**
 * @param {Object} props
 * @param {string} [props.activeItem] - Active nav item key
 */
export const createGnbTop = ({ activeItem = 'task' } = {}) => {
  const el = document.createElement('nav');
  el.className = 'gnb-top';

  el.innerHTML = navItems.map(item =>
    `<button class="gnb-top-link${item.key === activeItem ? ' active' : ''}" data-nav="${item.key}">${item.label}</button>`
  ).join('');

  el.querySelectorAll('.gnb-top-link').forEach(link => {
    link.addEventListener('click', () => {
      el.querySelectorAll('.gnb-top-link').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  return el;
};
