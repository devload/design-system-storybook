import { createMenuOverlay } from '../components/MenuOverlay/MenuOverlay.js';

export default {
  title: 'Pages/MenuOpen 전체메뉴',
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/XXXXX/HANDYSOFT-DS?node-id=0:0', // TODO: 실제 Figma URL로 교체하세요
    },
  },
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
