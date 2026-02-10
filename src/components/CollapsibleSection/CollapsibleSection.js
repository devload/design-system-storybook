import './CollapsibleSection.css';

const chevronSvg = '<svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><path d="M6 9l6 6 6-6"/></svg>';

/**
 * @param {Object} props
 * @param {string} [props.title]
 * @param {boolean} [props.collapsed]
 * @param {Array<{icon: string, label: string}>} [props.actions]
 * @param {HTMLElement|string} [props.children]
 */
export const createCollapsibleSection = ({
  title = '섹션 제목',
  collapsed = false,
  actions = [],
  children = '',
} = {}) => {
  const el = document.createElement('div');
  el.className = 'collapsible-section';

  const actionsHtml = actions.length > 0
    ? `<div class="collapsible-section__actions">${actions.map(a =>
        `<button class="collapsible-section__action-btn" aria-label="${a.label}">${a.icon}</button>`
      ).join('')}</div>`
    : '';

  el.innerHTML = `
    <div class="collapsible-section__header${collapsed ? ' collapsed' : ''}">
      <span class="collapsible-section__toggle">${chevronSvg}</span>
      <span class="collapsible-section__title">${title}</span>
      ${actionsHtml}
    </div>
    <div class="collapsible-section__body"></div>
  `;

  const body = el.querySelector('.collapsible-section__body');
  if (typeof children === 'string') {
    body.innerHTML = children;
  } else if (children instanceof HTMLElement) {
    body.appendChild(children);
  }

  // Toggle
  const header = el.querySelector('.collapsible-section__header');
  header.addEventListener('click', () => header.classList.toggle('collapsed'));

  return el;
};
