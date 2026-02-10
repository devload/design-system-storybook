export default {
  title: 'Foundations/Border Radius',
  parameters: {
    docs: {
      description: {
        component: '라운딩(Border Radius) 토큰 — 컴포넌트 모서리 둥글기 가이드입니다.',
      },
    },
  },
};

export const AllRadius = {
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'padding:24px;max-width:700px';

    const radii = [
      { token: '--radius-sm', value: '3px', desc: '뱃지, 태그' },
      { token: '--radius-md', value: '4px', desc: '버튼, 입력필드, 페이지네이션' },
      { token: '--radius-lg', value: '8px', desc: '카드, 의견 박스' },
      { token: '--radius-xl', value: '12px', desc: '메뉴 아이콘, 오버레이' },
      { token: '--radius-full', value: '9999px', desc: '아바타, 원형 요소' },
    ];

    wrap.innerHTML = `
      <h3 style="font-size:14px;font-weight:700;color:#3D3D3D;margin-bottom:24px">라운딩 스케일</h3>
      <div style="display:flex;gap:24px;flex-wrap:wrap;align-items:flex-end">
        ${radii.map(r => `
          <div style="display:flex;flex-direction:column;align-items:center;gap:8px">
            <div style="width:${r.value === '9999px' ? '64px' : '64px'};height:64px;background:#4096FF;border-radius:${r.value};display:flex;align-items:center;justify-content:center;color:#fff;font-size:11px;font-weight:600">
              ${r.value}
            </div>
            <code style="font-size:11px;color:#4096FF">${r.token}</code>
            <span style="font-size:11px;color:#94A3B8;text-align:center">${r.desc}</span>
          </div>
        `).join('')}
      </div>
    `;
    return wrap;
  },
};
