import './Tabs.css';

/**
 * @param {Object} props
 * @param {Array<{key:string, label:string, count?:number}>} props.items
 * @param {string} [props.activeKey]
 */
export const createTabs = ({
  items = [
    { key: 'request', label: '요청내용' },
    { key: 'status', label: '진행상태' },
    { key: 'comment', label: '의견' },
    { key: 'history', label: '업무이력' },
  ],
  activeKey = 'history',
} = {}) => {
  const el = document.createElement('div');
  el.className = 'tabs';

  el.innerHTML = items.map(item => {
    const countHtml = item.count != null ? `<span class="tab-count">${item.count}</span>` : '';
    return `<button class="tab${item.key === activeKey ? ' active' : ''}" data-tab="${item.key}">${item.label}${countHtml}</button>`;
  }).join('');

  el.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      el.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });

  return el;
};
