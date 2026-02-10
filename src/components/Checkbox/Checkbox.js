import './Checkbox.css';

/**
 * @param {Object} props
 * @param {string} [props.label]
 * @param {boolean} [props.checked]
 * @param {boolean} [props.disabled]
 */
export const createCheckbox = ({
  label = '',
  checked = false,
  disabled = false,
} = {}) => {
  const wrap = document.createElement('label');
  wrap.className = `checkbox-wrap${disabled ? ' checkbox-disabled' : ''}`;

  const input = document.createElement('input');
  input.type = 'checkbox';
  input.className = 'checkbox-input';
  input.checked = checked;
  if (disabled) input.disabled = true;
  wrap.appendChild(input);

  if (label) {
    const labelEl = document.createElement('span');
    labelEl.className = 'checkbox-label';
    labelEl.textContent = label;
    wrap.appendChild(labelEl);
  }

  return wrap;
};
