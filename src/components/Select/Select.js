import './Select.css';

/**
 * @param {Object} props
 * @param {string} [props.label]
 * @param {Array<{value:string, text:string}>} [props.options]
 * @param {string} [props.value]
 * @param {'sm'|'md'|'lg'} [props.size]
 * @param {boolean} [props.disabled]
 */
export const createSelect = ({
  label = '',
  options = [
    { value: '', text: '선택하세요' },
    { value: '1', text: '옵션 1' },
    { value: '2', text: '옵션 2' },
    { value: '3', text: '옵션 3' },
  ],
  value = '',
  size = 'md',
  disabled = false,
} = {}) => {
  const wrap = document.createElement('div');
  wrap.className = 'select-wrap';

  if (label) {
    const labelEl = document.createElement('label');
    labelEl.className = 'select-label';
    labelEl.textContent = label;
    wrap.appendChild(labelEl);
  }

  const select = document.createElement('select');
  const classes = ['select-field'];
  if (size !== 'md') classes.push(`select-${size}`);
  select.className = classes.join(' ');
  if (disabled) select.disabled = true;

  options.forEach(opt => {
    const option = document.createElement('option');
    option.value = opt.value;
    option.textContent = opt.text;
    if (opt.value === value) option.selected = true;
    select.appendChild(option);
  });

  wrap.appendChild(select);
  return wrap;
};
