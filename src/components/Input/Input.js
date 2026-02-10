import './Input.css';

/**
 * @param {Object} props
 * @param {string} [props.label]
 * @param {string} [props.placeholder]
 * @param {string} [props.value]
 * @param {'sm'|'md'|'lg'} [props.size]
 * @param {boolean} [props.disabled]
 * @param {boolean} [props.error]
 * @param {string} [props.helperText]
 * @param {'text'|'password'|'email'|'number'} [props.type]
 */
export const createInput = ({
  label = '',
  placeholder = '내용을 입력하세요',
  value = '',
  size = 'md',
  disabled = false,
  error = false,
  helperText = '',
  type = 'text',
} = {}) => {
  const wrap = document.createElement('div');
  wrap.className = 'input-wrap';

  if (label) {
    const labelEl = document.createElement('label');
    labelEl.className = 'input-label';
    labelEl.textContent = label;
    wrap.appendChild(labelEl);
  }

  const input = document.createElement('input');
  input.type = type;
  const classes = ['input-field'];
  if (size !== 'md') classes.push(`input-${size}`);
  if (error) classes.push('input-error');
  input.className = classes.join(' ');
  input.placeholder = placeholder;
  input.value = value;
  if (disabled) input.disabled = true;
  wrap.appendChild(input);

  if (helperText) {
    const helper = document.createElement('span');
    helper.className = `input-helper${error ? ' error' : ''}`;
    helper.textContent = helperText;
    wrap.appendChild(helper);
  }

  return wrap;
};
