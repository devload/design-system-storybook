import { createHeader } from '../components/Header/Header.js';
import { createGnbSide } from '../components/GnbSide/GnbSide.js';
import { createLnb } from '../components/Lnb/Lnb.js';
import { createTaskList } from '../components/TaskList/TaskList.js';
import { createTaskDetail } from '../components/TaskDetail/TaskDetail.js';
import { createDesktopSideLayout } from '../layouts/DesktopSide.js';
import { createDesktopTopLayout } from '../layouts/DesktopTop.js';

export default {
  title: 'Pages/UT01 업무리스트',
  parameters: { layout: 'fullscreen' },
};

/** UT01 GNB TOP - 상단 가로 네비게이션 + 업무 리스트 + 상세 */
export const GnbTop = {
  render: () => createDesktopTopLayout({
    header: createHeader({ showGnbTop: true, activeNav: 'task' }),
    content: createTaskList({ title: '페이지명' }),
    detail: createTaskDetail(),
  }),
};

/** UT01 GNB SIDE - 좌측 세로 사이드바 + 업무 리스트 + 상세 */
export const GnbSide = {
  render: () => createDesktopSideLayout({
    header: createHeader(),
    sidebar: createGnbSide(),
    content: createTaskList({ title: '페이지명' }),
    detail: createTaskDetail(),
  }),
};
