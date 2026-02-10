import './Layout.css';

/**
 * Desktop Side Layout - GNB Side (66px) + optional LNB + Content + optional Detail
 * @param {Object} props
 * @param {HTMLElement} props.header
 * @param {HTMLElement} props.sidebar - GnbSide element
 * @param {HTMLElement} [props.lnb] - Left navigation bar
 * @param {HTMLElement} props.content - Main content area
 * @param {HTMLElement} [props.detail] - Detail panel
 */
export const createDesktopSideLayout = ({ header, sidebar, lnb, content, detail }) => {
  const el = document.createElement('div');
  const classes = ['layout-desktop-side'];
  if (!lnb) classes.push('no-lnb');
  if (!detail) classes.push('no-detail');
  el.className = classes.join(' ');

  el.appendChild(header);
  el.appendChild(sidebar);
  if (lnb) el.appendChild(lnb);
  el.appendChild(content);
  if (detail) el.appendChild(detail);

  return el;
};
