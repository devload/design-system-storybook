import './Layout.css';

/**
 * Desktop Top Layout - Header with GNB top + optional LNB + Content + optional Detail
 * @param {Object} props
 * @param {HTMLElement} props.header
 * @param {HTMLElement} [props.lnb]
 * @param {HTMLElement} props.content
 * @param {HTMLElement} [props.detail]
 */
export const createDesktopTopLayout = ({ header, lnb, content, detail }) => {
  const el = document.createElement('div');
  const classes = ['layout-desktop-top'];
  if (!lnb) classes.push('no-lnb');
  if (!detail) classes.push('no-detail');
  el.className = classes.join(' ');

  el.appendChild(header);
  if (lnb) el.appendChild(lnb);
  el.appendChild(content);
  if (detail) el.appendChild(detail);

  return el;
};
