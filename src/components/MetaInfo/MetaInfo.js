import './MetaInfo.css';

/**
 * @param {Object} props
 * @param {Array<{label?: string, value: string}>} props.items
 * @param {string} [props.divider]
 */
export const createMetaInfo = ({ items = [], divider = '|' } = {}) => {
  const el = document.createElement('div');
  el.className = 'meta-info';

  items.forEach((item, i) => {
    if (i > 0) {
      const sep = document.createElement('span');
      sep.className = 'meta-info__divider';
      sep.textContent = divider;
      el.appendChild(sep);
    }
    const span = document.createElement('span');
    span.textContent = item.label ? `${item.label} ${item.value}` : item.value;
    el.appendChild(span);
  });

  return el;
};
