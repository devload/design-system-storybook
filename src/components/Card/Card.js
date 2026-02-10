import './Card.css';
import '../Avatar/Avatar.css';

/**
 * @param {Object} props
 * @param {string} [props.title]
 * @param {string} [props.content]
 * @param {boolean} [props.showHeader]
 * @param {boolean} [props.showFooter]
 * @param {string} [props.footerHtml]
 */
export const createCard = ({
  title = '카드 제목',
  content = '카드 본문 내용입니다.',
  showHeader = true,
  showFooter = false,
  footerHtml = '',
} = {}) => {
  const el = document.createElement('div');
  el.className = 'card';

  if (showHeader) {
    el.innerHTML += `
      <div class="card-header">
        <span class="card-header-title">${title}</span>
      </div>
    `;
  }

  el.innerHTML += `<div class="card-body">${content}</div>`;

  if (showFooter) {
    el.innerHTML += `<div class="card-footer">${footerHtml}</div>`;
  }

  return el;
};

/**
 * Comment card (의견 탭에서 사용)
 * @param {Object} props
 * @param {string} props.name
 * @param {string} props.initial
 * @param {string} props.date
 * @param {string} props.text
 * @param {string} [props.avatarVariant]
 */
export const createCommentCard = ({
  name = '박현주',
  initial = '박',
  date = '2017.09.03 10:20',
  text = '명함 시안 확인했습니다.',
  avatarVariant = 'default',
} = {}) => {
  const el = document.createElement('div');
  el.className = 'card-comment';
  el.innerHTML = `
    <div class="card-comment-header">
      <span class="avatar avatar-sm avatar-${avatarVariant}">${initial}</span>
      <span class="card-comment-name">${name}</span>
      <span class="card-comment-date">${date}</span>
    </div>
    <div class="card-comment-text">${text}</div>
  `;
  return el;
};
