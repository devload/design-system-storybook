export default {
  title: 'Foundations/Shadow',
  parameters: {
    docs: {
      description: {
        component: '그림자(Shadow) 토큰 — 깊이감 표현을 위한 그림자 단계입니다.',
      },
    },
  },
};

export const AllShadows = {
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'padding:24px;max-width:700px';

    const shadows = [
      { token: '--shadow-sm', value: '0 1px 2px rgba(0,0,0,0.06)', desc: '기본 요소, 미묘한 깊이감' },
      { token: '--shadow-md', value: '0 2px 8px rgba(0,0,0,0.1)', desc: '카드, 호버 상태' },
      { token: '--shadow-lg', value: '0 4px 16px rgba(0,0,0,0.12)', desc: '드롭다운, 팝오버' },
      { token: '--shadow-overlay', value: '0 8px 24px rgba(0,0,0,0.15)', desc: '모달, 오버레이' },
    ];

    wrap.innerHTML = `
      <h3 style="font-size:14px;font-weight:700;color:#3D3D3D;margin-bottom:24px">그림자 스케일</h3>
      <div style="display:flex;gap:32px;flex-wrap:wrap">
        ${shadows.map(s => `
          <div style="display:flex;flex-direction:column;align-items:center;gap:12px">
            <div style="width:120px;height:80px;background:#fff;border-radius:8px;box-shadow:${s.value};display:flex;align-items:center;justify-content:center;font-size:11px;color:#5D5D5D">
              ${s.token.replace('--', '')}
            </div>
            <code style="font-size:11px;color:#4096FF">${s.token}</code>
            <span style="font-size:11px;color:#94A3B8;text-align:center;max-width:120px">${s.desc}</span>
          </div>
        `).join('')}
      </div>

      <h3 style="font-size:14px;font-weight:700;color:#3D3D3D;margin:32px 0 16px">CSS 값 상세</h3>
      <table style="width:100%;border-collapse:collapse;font-size:13px">
        <thead>
          <tr style="border-bottom:2px solid #EBEBEB">
            <th style="text-align:left;padding:8px 12px;color:#3D3D3D;font-weight:600">토큰</th>
            <th style="text-align:left;padding:8px 12px;color:#3D3D3D;font-weight:600">값</th>
            <th style="text-align:left;padding:8px 12px;color:#3D3D3D;font-weight:600">용도</th>
          </tr>
        </thead>
        <tbody>
          ${shadows.map(s => `
            <tr style="border-bottom:1px solid #F0F0F0">
              <td style="padding:8px 12px"><code style="color:#4096FF;font-size:12px">${s.token}</code></td>
              <td style="padding:8px 12px;font-size:12px;color:#5D5D5D"><code>${s.value}</code></td>
              <td style="padding:8px 12px;color:#5D5D5D">${s.desc}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
    return wrap;
  },
};
