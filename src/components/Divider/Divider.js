import './Divider.css';

/**
 * @param {Object} props
 * @param {'horizontal'|'vertical'} [props.direction]
 * @param {'default'|'light'|'dark'} [props.variant]
 */
export const createDivider = ({
  direction = 'horizontal',
  variant = 'default',
} = {}) => {
  const el = document.createElement('div');
  const classes = ['divider', `divider-${direction}`];
  if (variant !== 'default') classes.push(`divider-${variant}`);
  el.className = classes.join(' ');
  return el;
};
