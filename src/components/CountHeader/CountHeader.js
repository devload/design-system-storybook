import './CountHeader.css';

/**
 * @param {Object} props
 * @param {number} props.current
 * @param {number} [props.total]
 * @param {string} [props.prefix]
 * @param {string} [props.suffix]
 */
export const createCountHeader = ({ current = 0, total, prefix = '총', suffix = '건' } = {}) => {
  const el = document.createElement('span');
  el.className = 'count-header';

  if (total !== undefined) {
    const currentEl = document.createElement('span');
    currentEl.className = 'count-header__value';
    currentEl.textContent = current;
    el.appendChild(currentEl);
    el.appendChild(document.createTextNode(` / ${total}`));
  } else {
    el.appendChild(document.createTextNode(`${prefix} `));
    const valueEl = document.createElement('span');
    valueEl.className = 'count-header__value';
    valueEl.textContent = current;
    el.appendChild(valueEl);
    el.appendChild(document.createTextNode(suffix));
  }

  return el;
};
