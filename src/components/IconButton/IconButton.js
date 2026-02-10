import './IconButton.css';

/**
 * @param {Object} props
 * @param {string} props.icon - SVG innerHTML 문자열
 * @param {string} [props.label] - aria-label
 * @param {'sm'|'md'|'lg'} [props.size]
 * @param {'ghost'|'outlined'} [props.variant]
 */
export const createIconButton = ({ icon = '', label = '', size = 'md', variant = 'ghost' } = {}) => {
  const el = document.createElement('button');
  el.className = `icon-button icon-button--${size} icon-button--${variant}`;
  el.innerHTML = icon;
  if (label) el.setAttribute('aria-label', label);
  return el;
};
