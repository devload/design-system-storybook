import { createMenuOverlay } from '../components/MenuOverlay/MenuOverlay.js';

export default {
  title: 'Pages/MenuOpen 전체메뉴',
  parameters: { layout: 'fullscreen' },
};

/** UT01-02 MENU OPEN - 데스크톱 전체 메뉴 오버레이 */
export const Desktop = {
  render: () => createMenuOverlay({ variant: 'desktop' }),
};

/** UT03 MENU OPEN - 모바일 전체 메뉴 (프로필 포함) */
export const Mobile = {
  render: () => createMenuOverlay({ variant: 'mobile' }),
  parameters: {
    viewport: { defaultViewport: 'mobile' },
  },
};
