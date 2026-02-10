import { createHeader } from '../components/Header/Header.js';
import { createGnbSide } from '../components/GnbSide/GnbSide.js';
import { createLnb } from '../components/Lnb/Lnb.js';
import { createDataTable } from '../components/DataTable/DataTable.js';
import { createDesktopSideLayout } from '../layouts/DesktopSide.js';
import { createDesktopTopLayout } from '../layouts/DesktopTop.js';

export default {
  title: 'Pages/UT02 데이터테이블',
  parameters: { layout: 'fullscreen' },
};

/** UT02 GNB TOP - 상단 가로 네비게이션 + 테이블 */
export const GnbTop = {
  render: () => createDesktopTopLayout({
    header: createHeader({ showGnbTop: true, activeNav: 'task' }),
    content: createDataTable({ title: '페이지명' }),
  }),
};

/** UT02 GNB TOP + LNB OPEN - 상단 가로 + LNB 열림 + 테이블 */
export const GnbTopLnbOpen = {
  render: () => createDesktopTopLayout({
    header: createHeader({ showGnbTop: true, activeNav: 'task' }),
    lnb: createLnb(),
    content: createDataTable({ title: '페이지명' }),
  }),
};

/** UT02 GNB SIDE - 좌측 세로 사이드바 + 테이블 */
export const GnbSide = {
  render: () => createDesktopSideLayout({
    header: createHeader(),
    sidebar: createGnbSide(),
    content: createDataTable({ title: '페이지명' }),
  }),
};

/** UT02 GNB SIDE + LNB OPEN - 좌측 세로 + LNB 열림 + 테이블 */
export const GnbSideLnbOpen = {
  render: () => createDesktopSideLayout({
    header: createHeader(),
    sidebar: createGnbSide(),
    lnb: createLnb(),
    content: createDataTable({ title: '페이지명' }),
  }),
};
