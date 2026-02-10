import './Badge.css';

/**
 * @param {Object} props
 * @param {string} props.label
 * @param {'urgent'|'security'|'info'|'success'} [props.variant]
 */
export const createBadge = ({ label = '긴급', variant = 'urgent' } = {}) => {
  const el = document.createElement('span');
  el.className = `tag tag-${variant}`;
  el.textContent = label;
  return el;
};

/**
 * @param {Object} props
 * @param {string} props.label
 * @param {'progress'|'hold'|'complete'} [props.status]
 */
export const createStatusBadge = ({ label = '진행중', status = 'progress' } = {}) => {
  const el = document.createElement('span');
  el.className = `status-badge ${status}`;
  el.textContent = label;
  return el;
};
