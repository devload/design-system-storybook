import './DataTable.css';
import '../Badge/Badge.css';
import '../Toolbar/Toolbar.css';
import '../TaskList/TaskList.css';
import { createToolbar } from '../Toolbar/Toolbar.js';

const sampleData = [
  { id: 1, title: '2017 명함 주문요청', requester: '김광욱', type: '신청', status: '진행중', dday: 'D-day', date: '2017.09.01', dueDate: '2017.09.01' },
  { id: 2, title: '개발팀 명함 주문요청', requester: '김광욱', type: '신청', status: '보류', dday: 'D-1', date: '2017.09.01', dueDate: '2017.09.02' },
  { id: 3, title: '개발 파견 주문요청', requester: '김광욱', type: '신청', status: '진행중', dday: 'D-3', date: '2017.08.28', dueDate: '2017.09.05' },
  { id: 4, title: '2017 명함 주문요청', requester: '김광욱', type: '협업', status: '진행중', dday: 'D-3', date: '2017.08.25', dueDate: '2017.09.05' },
  { id: 5, title: '개발 기능리스트 요청 업무', requester: '김기욱', type: '취합', status: '진행중', dday: 'D-4', date: '2017.08.30', dueDate: '2017.09.06' },
  { id: 6, title: '노사 협의회 회의요청', requester: '민우혁', type: '신청', status: '진행중', dday: 'D-3', date: '2017.08.29', dueDate: '2017.09.05' },
  { id: 7, title: '2017 명함 주문요청', requester: '김광욱', type: '신청', status: '보류', dday: 'D-3', date: '2017.08.27', dueDate: '2017.09.05' },
  { id: 8, title: '자리이동 이사', requester: '김광욱', type: '취합', status: '진행중', dday: 'D-3', date: '2017.08.31', dueDate: '2017.09.05' },
];

/**
 * @param {Object} props
 * @param {string} [props.title]
 */
export const createDataTable = ({ title = '페이지명' } = {}) => {
  const el = document.createElement('section');
  el.className = 'data-table-section';

  // Header
  const headerEl = document.createElement('div');
  headerEl.className = 'content-header';
  headerEl.innerHTML = `
    <h1 class="content-title">${title}</h1>
    <div class="content-counter">
      <strong>${sampleData.length}</strong> / 450
      <button class="reload-btn" aria-label="새로고침">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 11-2.12-9.36L23 10"/></svg>
      </button>
    </div>
  `;
  el.appendChild(headerEl);
  el.appendChild(createToolbar());

  // Table
  const wrapperEl = document.createElement('div');
  wrapperEl.className = 'data-table-wrapper';
  wrapperEl.innerHTML = `
    <table class="data-table">
      <thead>
        <tr>
          <th style="width:40px"><input type="checkbox" aria-label="전체 선택"></th>
          <th>제목</th>
          <th>요청자</th>
          <th>분류</th>
          <th>상태</th>
          <th>D-Day</th>
          <th>요청일</th>
          <th>마감일</th>
        </tr>
      </thead>
      <tbody>
        ${sampleData.map(row => {
          const statusClass = row.status === '진행중' ? 'progress' : row.status === '보류' ? 'hold' : 'complete';
          const ddayClass = (row.dday === 'D-day' || row.dday === 'D-1') ? 'color:var(--danger);font-weight:700' : '';
          return `
            <tr data-id="${row.id}">
              <td><input type="checkbox" aria-label="선택"></td>
              <td class="title-cell">${row.title}</td>
              <td>${row.requester}</td>
              <td>${row.type}</td>
              <td><span class="status-badge ${statusClass}">${row.status}</span></td>
              <td style="${ddayClass}">${row.dday}</td>
              <td>${row.date}</td>
              <td>${row.dueDate}</td>
            </tr>
          `;
        }).join('')}
      </tbody>
    </table>
  `;
  el.appendChild(wrapperEl);

  // Pagination
  const paginationEl = document.createElement('div');
  paginationEl.className = 'pagination-bar';
  paginationEl.innerHTML = `
    <button class="page-btn disabled" aria-label="첫 페이지">
      <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><polyline points="11 17 6 12 11 7"/><polyline points="18 17 13 12 18 7"/></svg>
    </button>
    <button class="page-btn disabled" aria-label="이전">
      <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
    </button>
    <button class="page-btn active">1</button>
    <button class="page-btn">2</button>
    <button class="page-btn" aria-label="다음">
      <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
    </button>
    <button class="page-btn" aria-label="마지막">
      <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><polyline points="13 17 18 12 13 7"/><polyline points="6 17 11 12 6 7"/></svg>
    </button>
    <div class="page-info">
      <input type="text" value="1" aria-label="페이지 번호">
      <span>/ 9</span>
    </div>
  `;
  el.appendChild(paginationEl);

  // Row click
  wrapperEl.querySelectorAll('tbody tr').forEach(row => {
    row.addEventListener('click', (e) => {
      if (e.target.type === 'checkbox') return;
      wrapperEl.querySelectorAll('tbody tr').forEach(r => r.classList.remove('active'));
      row.classList.add('active');
    });
  });

  return el;
};
