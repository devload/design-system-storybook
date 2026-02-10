import './FileAttachment.css';

const defaultIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"/></svg>';

/**
 * @param {Object} props
 * @param {string} props.fileName
 * @param {string} [props.fileSize]
 * @param {string} [props.icon] - SVG innerHTML 문자열
 */
export const createFileAttachment = ({ fileName = '파일.pdf', fileSize = '', icon = defaultIcon } = {}) => {
  const el = document.createElement('span');
  el.className = 'file-attachment';

  const iconEl = document.createElement('span');
  iconEl.className = 'file-attachment__icon';
  iconEl.innerHTML = icon;
  el.appendChild(iconEl);

  const nameEl = document.createElement('span');
  nameEl.textContent = fileName;
  el.appendChild(nameEl);

  if (fileSize) {
    const sizeEl = document.createElement('span');
    sizeEl.className = 'file-attachment__size';
    sizeEl.textContent = `(${fileSize})`;
    el.appendChild(sizeEl);
  }

  return el;
};
