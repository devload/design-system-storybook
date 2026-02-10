import './TreeItem.css';

const arrowSvg = '<svg viewBox="0 0 24 24" width="10" height="10" fill="currentColor"><path d="M9 6l6 6-6 6"/></svg>';

/**
 * @param {Object} props
 * @param {string} [props.label]
 * @param {boolean} [props.expanded]
 * @param {string[]} [props.children]
 * @param {number} [props.depth]
 */
export const createTreeItem = ({
  label = '폴더',
  expanded = false,
  children = [],
  depth = 0,
} = {}) => {
  const wrap = document.createElement('div');

  const item = document.createElement('div');
  item.className = `tree-item${expanded ? ' expanded' : ''}`;
  if (depth > 0) item.style.paddingLeft = `${24 + depth * 16}px`;
  item.innerHTML = `
    <span class="tree-item__toggle">${arrowSvg}</span>
    ${label}
  `;
  wrap.appendChild(item);

  if (children.length > 0) {
    const childWrap = document.createElement('div');
    childWrap.className = 'tree-item__children';
    if (!expanded) childWrap.style.display = 'none';
    children.forEach(c => {
      const child = document.createElement('div');
      child.className = 'tree-item__child';
      child.textContent = c;
      childWrap.appendChild(child);
    });
    wrap.appendChild(childWrap);

    item.addEventListener('click', () => {
      item.classList.toggle('expanded');
      childWrap.style.display = item.classList.contains('expanded') ? '' : 'none';
    });
  }

  return wrap;
};
