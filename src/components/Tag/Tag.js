import './Tag.css';

/**
 * @param {Object} props
 * @param {string} props.label
 * @param {'urgent'|'security'|'info'|'success'} [props.variant]
 */
export const createTag = ({ label = '긴급', variant = 'urgent' } = {}) => {
  const el = document.createElement('span');
  el.className = `tag tag-${variant}`;
  el.textContent = label;
  return el;
};
