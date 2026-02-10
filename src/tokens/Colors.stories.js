export default {
  title: 'Foundations/Colors',
  parameters: {
    docs: {
      description: {
        component: 'HANDYSOFT 디자인 시스템 컬러 팔레트. 모든 색상은 CSS Custom Properties로 정의되어 있습니다.',
      },
    },
  },
};

const createSwatch = (name, cssVar, hex, desc) => {
  const el = document.createElement('div');
  el.style.cssText = 'display:flex;align-items:center;gap:12px;padding:8px 0';
  el.innerHTML = `
    <div style="width:48px;height:48px;border-radius:8px;background:${hex};border:1px solid rgba(0,0,0,0.08);flex-shrink:0"></div>
    <div style="flex:1;min-width:0">
      <div style="font-size:13px;font-weight:600;color:#3D3D3D">${name}</div>
      <div style="font-size:11px;color:#94A3B8">${desc}</div>
    </div>
    <div style="text-align:right">
      <code style="font-size:11px;color:#5D5D5D;display:block">${cssVar}</code>
      <code style="font-size:11px;color:#94A3B8">${hex}</code>
    </div>
  `;
  return el;
};

export const BrandColors = {
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'padding:24px;max-width:500px;display:flex;flex-direction:column;gap:4px';
    wrap.innerHTML = '<h3 style="font-size:14px;font-weight:700;color:#3D3D3D;margin-bottom:12px">브랜드 컬러</h3>';
    wrap.appendChild(createSwatch('Primary', '--primary', '#4096FF', '주요 액션, 링크, 활성 상태'));
    wrap.appendChild(createSwatch('Primary Light', '--primary-light', '#E6F4FF', '호버 배경, 선택 배경'));
    wrap.appendChild(createSwatch('Primary Dark', '--primary-dark', '#2E85FF', '호버 강조, 버튼 hover'));
    return wrap;
  },
};

export const StatusColors = {
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'padding:24px;max-width:500px;display:flex;flex-direction:column;gap:4px';
    wrap.innerHTML = '<h3 style="font-size:14px;font-weight:700;color:#3D3D3D;margin-bottom:12px">상태 컬러</h3>';
    wrap.appendChild(createSwatch('Danger', '--danger', '#E74C3C', '긴급, 에러, 삭제'));
    wrap.appendChild(createSwatch('Warning', '--warning', '#F5A623', '보안, 보류, 진행중 경고'));
    wrap.appendChild(createSwatch('Success', '--success', '#27AE60', '완료, 성공'));
    return wrap;
  },
};

export const TextColors = {
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'padding:24px;max-width:500px;display:flex;flex-direction:column;gap:4px';
    wrap.innerHTML = '<h3 style="font-size:14px;font-weight:700;color:#3D3D3D;margin-bottom:12px">텍스트 컬러</h3>';
    wrap.appendChild(createSwatch('Text Primary', '--text-primary', '#3D3D3D', '제목, 주요 텍스트'));
    wrap.appendChild(createSwatch('Text Secondary', '--text-secondary', '#5D5D5D', '본문, 보조 텍스트'));
    wrap.appendChild(createSwatch('Text Muted', '--text-muted', '#94A3B8', '날짜, 카운트, 비활성'));
    wrap.appendChild(createSwatch('GBN Text', '--gbn-text', '#5B628A', 'GNB 사이드바 텍스트'));
    return wrap;
  },
};

export const BackgroundColors = {
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'padding:24px;max-width:500px;display:flex;flex-direction:column;gap:4px';
    wrap.innerHTML = '<h3 style="font-size:14px;font-weight:700;color:#3D3D3D;margin-bottom:12px">배경 컬러</h3>';
    wrap.appendChild(createSwatch('White', '--bg-white', '#FFFFFF', '카드, 패널 배경'));
    wrap.appendChild(createSwatch('Light', '--bg-light', '#F8FAFC', '페이지 배경, 호버'));
    wrap.appendChild(createSwatch('Header', '--header-bg', '#2A3046', '헤더, 메뉴 오버레이'));
    return wrap;
  },
};

export const BorderColors = {
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'padding:24px;max-width:500px;display:flex;flex-direction:column;gap:4px';
    wrap.innerHTML = '<h3 style="font-size:14px;font-weight:700;color:#3D3D3D;margin-bottom:12px">보더 컬러</h3>';
    wrap.appendChild(createSwatch('Border', '--border', '#EBEBEB', '기본 구분선'));
    wrap.appendChild(createSwatch('Border Light', '--border-light', '#F0F0F0', '연한 구분선'));
    return wrap;
  },
};
