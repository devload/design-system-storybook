import './Layout.css';

/**
 * Mobile Layout - Header + Content + BottomTabBar + optional LNB slide
 * @param {Object} props
 * @param {HTMLElement} props.header
 * @param {HTMLElement} props.content
 * @param {HTMLElement} props.bottomTabBar
 * @param {HTMLElement} [props.lnb]
 * @param {boolean} [props.lnbOpen]
 */
export const createMobileLayout = ({ header, content, bottomTabBar, lnb, lnbOpen = false }) => {
  const el = document.createElement('div');
  el.className = 'layout-mobile';

  el.appendChild(header);
  el.appendChild(content);

  if (lnb) {
    if (lnbOpen) lnb.classList.add('open');
    el.appendChild(lnb);
    const overlay = document.createElement('div');
    overlay.className = `mobile-overlay${lnbOpen ? ' active' : ''}`;
    overlay.addEventListener('click', () => {
      lnb.classList.remove('open');
      overlay.classList.remove('active');
    });
    el.appendChild(overlay);
  }

  el.appendChild(bottomTabBar);

  return el;
};
