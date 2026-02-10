import './DdayBadge.css';

/**
 * @param {Object} props
 * @param {string} props.value - D-day 문자열 (예: 'D-day', 'D-1', 'D-3')
 */
export const createDdayBadge = ({ value = 'D-3' } = {}) => {
  const el = document.createElement('span');
  const isUrgent = value === 'D-day' || value === 'D-1';
  el.className = `dday-badge${isUrgent ? ' urgent' : ''}`;
  el.textContent = value;
  return el;
};
