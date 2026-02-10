import './Avatar.css';

/**
 * @param {Object} props
 * @param {string} [props.initial] - 이니셜 (한 글자)
 * @param {'xs'|'sm'|'md'|'lg'|'xl'|'2xl'} [props.size]
 * @param {'default'|'primary'|'golden'|'green'|'blue'|'pink'} [props.variant]
 * @param {boolean} [props.showPersonIcon] - person icon fallback
 */
export const createAvatar = ({
  initial = '김',
  size = 'md',
  variant = 'default',
  showPersonIcon = false,
} = {}) => {
  const el = document.createElement('span');
  el.className = `avatar avatar-${size} avatar-${variant}`;

  if (showPersonIcon) {
    el.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="8" r="4"/><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/></svg>';
  } else {
    el.textContent = initial;
  }

  return el;
};

/**
 * @param {Object} props
 * @param {Array<{initial:string, variant:string}>} [props.avatars]
 * @param {'sm'|'md'|'lg'} [props.size]
 */
export const createAvatarGroup = ({
  avatars = [
    { initial: '김', variant: 'default' },
    { initial: '박', variant: 'green' },
    { initial: '이', variant: 'blue' },
  ],
  size = 'md',
} = {}) => {
  const group = document.createElement('div');
  group.className = 'avatar-group';
  avatars.forEach(a => group.appendChild(createAvatar({ ...a, size })));
  return group;
};
