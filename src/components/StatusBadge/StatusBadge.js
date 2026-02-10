import './StatusBadge.css';

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
