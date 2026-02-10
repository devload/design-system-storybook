import './MenuGridItem.css';

/**
 * @param {Object} props
 * @param {string} [props.label]
 * @param {string} [props.icon] - SVG path content
 * @param {boolean} [props.active]
 */
export const createMenuGridItem = ({
  label = '메뉴',
  icon = '',
  active = false,
} = {}) => {
  const el = document.createElement('div');
  el.className = `menu-grid-item${active ? ' active' : ''}`;
  el.innerHTML = `
    <div class="menu-grid-item__icon">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">${icon}</svg>
    </div>
    <span class="menu-grid-item__label">${label}</span>
  `;
  return el;
};
