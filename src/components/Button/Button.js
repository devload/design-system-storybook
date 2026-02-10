import './Button.css';

/**
 * @param {Object} props
 * @param {string} [props.label] - Button text
 * @param {'primary'|'secondary'|'ghost'|'danger'|'text'} [props.variant]
 * @param {'xs'|'sm'|'md'|'lg'} [props.size]
 * @param {boolean} [props.disabled]
 * @param {boolean} [props.block] - Full width
 * @param {string} [props.iconSvg] - SVG icon inner content
 * @param {boolean} [props.iconOnly] - Icon-only button
 * @param {boolean} [props.split] - Split button with arrow
 */
export const createButton = ({
  label = '버튼',
  variant = 'primary',
  size = 'md',
  disabled = false,
  block = false,
  iconSvg = '',
  iconOnly = false,
  split = false,
} = {}) => {
  const el = document.createElement('button');

  const classes = ['btn', `btn-${variant}`, `btn-${size}`];
  if (disabled) classes.push('disabled');
  if (block) classes.push('btn-block');
  if (iconOnly) classes.push('btn-icon');
  if (split) classes.push('btn-split');
  el.className = classes.join(' ');

  if (disabled) el.disabled = true;

  const iconHtml = iconSvg
    ? `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">${iconSvg}</svg>`
    : '';

  if (iconOnly) {
    el.innerHTML = iconHtml;
  } else if (split) {
    el.innerHTML = `
      ${iconHtml}
      <span>${label}</span>
      <span class="btn-arrow">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
      </span>
    `;
  } else {
    el.innerHTML = `${iconHtml}<span>${label}</span>`;
  }

  return el;
};
