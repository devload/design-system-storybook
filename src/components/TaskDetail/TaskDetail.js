import './TaskDetail.css';
import { createTag } from '../Tag/Tag.js';
import { createMetaInfo } from '../MetaInfo/MetaInfo.js';
import { createFieldRow } from '../FieldRow/FieldRow.js';
import { createFileAttachment } from '../FileAttachment/FileAttachment.js';
import { createCommentCard } from '../Card/Card.js';
import { createCountHeader } from '../CountHeader/CountHeader.js';
import { createIconButton } from '../IconButton/IconButton.js';

const historyData = [
  { filled: true, text: '박현주님이 업무를 김나영님에게 위임하였습니다.', date: '2017.08.17 11:32' },
  { filled: false, text: '박현주님이 업무를 반송하였습니다.', date: '2017.08.17 11:32' },
  { filled: false, text: '요청자가 업무 내용을 수정하였습니다.', date: '2017.08.17 11:32' },
  { filled: false, text: '김은우님이 업무를 박현주님에게 위임하였습니다.', date: '2017.08.17 11:32' },
  { filled: false, text: '박현주님이 업무를 반송하였습니다.', date: '2017.08.17 11:32' },
  { filled: false, text: '요청자가 업무 내용을 수정하였습니다.', date: '2017.08.17 11:32' },
  { filled: false, text: '업무가 시작되었습니다.', date: '2017.08.17 11:32' },
];

const shareSvg = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>';

/**
 * @param {Object} props
 * @param {string} [props.title]
 * @param {string} [props.tag]
 * @param {string} [props.requester]
 * @param {string} [props.reqDate]
 * @param {string} [props.dueDate]
 * @param {string} [props.activeTab]
 */
export const createTaskDetail = ({
  title = '개발팀 명함 주문요청',
  tag = '긴급',
  requester = '김생민',
  reqDate = '2017.09.01 13:57',
  dueDate = '2017.09.01 13:57',
  activeTab = 'history',
} = {}) => {
  const el = document.createElement('aside');
  el.className = 'detail-panel';

  const tabs = ['request', 'status', 'comment', 'history'];
  const tabLabels = { request: '요청내용', status: '진행상태', comment: '의견', history: '업무이력' };

  // === Header ===
  const header = document.createElement('div');
  header.className = 'detail-header';

  const row1 = document.createElement('div');
  row1.className = 'detail-header-row1';
  row1.innerHTML = `
    <span class="detail-star">
      <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
    </span>
  `;
  if (tag) row1.appendChild(createTag({ label: tag, variant: 'urgent' }));
  const titleSpan = document.createElement('span');
  titleSpan.className = 'detail-title';
  titleSpan.textContent = title;
  row1.appendChild(titleSpan);
  row1.innerHTML += `<label class="detail-check"><input type="checkbox" aria-label="완료 체크"></label>`;
  row1.appendChild(createIconButton({ icon: shareSvg, label: '공유', variant: 'outlined' }));
  header.appendChild(row1);

  // Meta info (extracted component)
  header.appendChild(createMetaInfo({
    items: [
      { value: requester },
      { value: `업무요청일 ${reqDate}` },
      { value: `완료요청일 ${dueDate}` },
    ],
  }));
  el.appendChild(header);

  // === Tabs ===
  const tabsEl = document.createElement('div');
  tabsEl.className = 'detail-tabs';
  tabsEl.innerHTML = tabs.map(t =>
    `<button class="detail-tab${t === activeTab ? ' active' : ''}" data-tab="${t}">${tabLabels[t]}</button>`
  ).join('');
  el.appendChild(tabsEl);

  // === Body ===
  const body = document.createElement('div');
  body.className = 'detail-body';

  // Request tab (using FieldRow + FileAttachment)
  const requestTab = document.createElement('div');
  requestTab.className = `tab-content${activeTab === 'request' ? ' active' : ''}`;
  requestTab.dataset.tabContent = 'request';
  const requestContent = document.createElement('div');
  requestContent.className = 'request-content';
  requestContent.appendChild(createFieldRow({ label: '업무 유형', value: '명함 주문요청' }));
  requestContent.appendChild(createFieldRow({
    label: '요청 내용',
    value: '개발팀 신규 입사자 명함 주문 요청드립니다.<br>수량: 200매 (앞뒤 양면)<br>디자인: 기존 회사 표준 디자인<br>배송지: 본사 3층 개발팀',
  }));
  const attachRow = createFieldRow({ label: '첨부파일', value: '' });
  const attachValue = attachRow.querySelector('.field-row__value');
  if (attachValue) attachValue.appendChild(createFileAttachment({ fileName: '명함_시안_v2.pdf', fileSize: '1.2MB' }));
  requestContent.appendChild(attachRow);
  requestTab.appendChild(requestContent);
  body.appendChild(requestTab);

  // Status tab
  const statusTab = document.createElement('div');
  statusTab.className = `tab-content${activeTab === 'status' ? ' active' : ''}`;
  statusTab.dataset.tabContent = 'status';
  statusTab.innerHTML = `
    <div class="request-content">
      <div class="progress-step">
        <span class="progress-step-dot done">✓</span>
        <span>요청 접수</span>
        <span style="margin-left:auto;color:var(--text-muted);font-size:12px">2017.09.01</span>
      </div>
      <div class="progress-step">
        <span class="progress-step-dot done">✓</span>
        <span>검토 중</span>
        <span style="margin-left:auto;color:var(--text-muted);font-size:12px">2017.09.02</span>
      </div>
      <div class="progress-step">
        <span class="progress-step-dot current">3</span>
        <span>처리 진행</span>
        <span style="margin-left:auto;color:var(--text-muted);font-size:12px">진행중</span>
      </div>
      <div class="progress-step">
        <span class="progress-step-dot pending">4</span>
        <span>완료</span>
        <span style="margin-left:auto;color:var(--text-muted);font-size:12px">-</span>
      </div>
    </div>
  `;
  body.appendChild(statusTab);

  // Comment tab (using createCommentCard)
  const commentTab = document.createElement('div');
  commentTab.className = `tab-content${activeTab === 'comment' ? ' active' : ''}`;
  commentTab.dataset.tabContent = 'comment';
  const commentContent = document.createElement('div');
  commentContent.className = 'request-content';
  commentContent.appendChild(createCommentCard({
    name: '박현주', initial: '박', date: '2017.09.03 10:20',
    text: '명함 시안 확인했습니다. 전화번호 수정 부탁드립니다.',
  }));
  commentContent.appendChild(createCommentCard({
    name: '김생민', initial: '김', date: '2017.09.03 14:15',
    text: '수정 완료하여 재첨부합니다.',
  }));
  commentTab.appendChild(commentContent);
  body.appendChild(commentTab);

  // History tab (using CountHeader + timeline)
  const historyTab = document.createElement('div');
  historyTab.className = `tab-content${activeTab === 'history' ? ' active' : ''}`;
  historyTab.dataset.tabContent = 'history';
  historyTab.appendChild(createCountHeader({ current: historyData.length }));
  const timelineList = document.createElement('div');
  timelineList.className = 'timeline-list';
  timelineList.innerHTML = historyData.map(item => `
    <div class="timeline-item">
      <span class="timeline-dot${item.filled ? ' filled' : ''}"></span>
      <span class="timeline-text">${item.text}</span>
      <span class="timeline-date">${item.date}</span>
    </div>
  `).join('');
  historyTab.appendChild(timelineList);
  body.appendChild(historyTab);

  el.appendChild(body);

  // Wire up tab switching
  el.querySelectorAll('.detail-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      el.querySelectorAll('.detail-tab').forEach(t => t.classList.remove('active'));
      el.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      tab.classList.add('active');
      const content = el.querySelector(`[data-tab-content="${tab.dataset.tab}"]`);
      if (content) content.classList.add('active');
    });
  });

  return el;
};
