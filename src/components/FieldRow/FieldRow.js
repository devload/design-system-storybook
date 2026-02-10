import './FieldRow.css';

/**
 * @param {Object} props
 * @param {string} props.label
 * @param {string} props.value
 * @param {'vertical'|'horizontal'} [props.direction]
 */
export const createFieldRow = ({ label = '라벨', value = '값', direction = 'vertical' } = {}) => {
  const el = document.createElement('div');
  el.className = `field-row${direction === 'horizontal' ? ' field-row--horizontal' : ''}`;

  const labelEl = document.createElement('div');
  labelEl.className = 'field-row__label';
  labelEl.textContent = label;

  const valueEl = document.createElement('div');
  valueEl.className = 'field-row__value';
  if (/<[a-z][\s\S]*>/i.test(value)) {
    valueEl.innerHTML = value;
  } else {
    valueEl.textContent = value;
  }

  el.appendChild(labelEl);
  el.appendChild(valueEl);
  return el;
};
