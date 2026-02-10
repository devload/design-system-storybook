import './MenuItem.css';

/**
 * @param {Object} props
 * @param {string} [props.label]
 * @param {number|string} [props.count]
 * @param {'default'|'danger'} [props.countVariant]
 * @param {boolean} [props.active]
 * @param {string} [props.icon]
 */
export const createNavMenuItem = ({
  label = '메뉴 항목',
  count,
  countVariant = 'default',
  active = false,
  icon = '',
} = {}) => {
  const el = document.createElement('div');
  el.className = `nav-menu-item${active ? ' active' : ''}`;

  let html = '';
  if (icon) html += `<span style="margin-right:4px">${icon}</span>`;
  html += label;
  if (count !== undefined && count !== null) {
    const dangerClass = countVariant === 'danger' ? ' nav-menu-item__count--danger' : '';
    html += `<span class="nav-menu-item__count${dangerClass}">${count}</span>`;
  }
  el.innerHTML = html;
  return el;
};
