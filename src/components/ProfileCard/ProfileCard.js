import './ProfileCard.css';

const defaultAvatarSvg = '<svg viewBox="0 0 24 24" width="40" height="40" fill="#8B7355"><circle cx="12" cy="8" r="4"/><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/></svg>';

/**
 * @param {Object} props
 * @param {string} [props.name]
 * @param {string} [props.department]
 * @param {boolean} [props.showActions]
 */
export const createProfileCard = ({
  name = '고윤정',
  department = '사업 · 디자인디자인팀 | system',
  showActions = true,
} = {}) => {
  const el = document.createElement('div');
  el.className = 'profile-card';
  el.innerHTML = `
    <div class="profile-card__avatar">${defaultAvatarSvg}</div>
    <div class="profile-card__name">${name}</div>
    <div class="profile-card__dept">${department}</div>
    ${showActions ? `
      <div class="profile-card__actions">
        <button>프로필 보기</button>
        <button>로그아웃</button>
      </div>
    ` : ''}
  `;
  return el;
};
