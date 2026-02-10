export default {
  title: 'Foundations/Spacing & Layout',
  parameters: {
    docs: {
      description: {
        component: '레이아웃 크기 토큰과 간격 가이드입니다.',
      },
    },
  },
};

export const LayoutTokens = {
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'padding:24px;max-width:600px';

    const tokens = [
      { name: '--header-height', value: '56px', desc: '상단 헤더 높이' },
      { name: '--icon-sidebar-width', value: '66px', desc: 'GNB 사이드바 너비' },
      { name: '--left-panel-width', value: '230px', desc: 'LNB 패널 너비' },
      { name: '--detail-panel-width', value: '360px', desc: '상세 패널 너비' },
    ];

    wrap.innerHTML = `
      <h3 style="font-size:14px;font-weight:700;color:#3D3D3D;margin-bottom:16px">레이아웃 토큰</h3>
      <table style="width:100%;border-collapse:collapse;font-size:13px">
        <thead>
          <tr style="border-bottom:2px solid #EBEBEB">
            <th style="text-align:left;padding:8px 12px;color:#3D3D3D;font-weight:600">토큰</th>
            <th style="text-align:left;padding:8px 12px;color:#3D3D3D;font-weight:600">값</th>
            <th style="text-align:left;padding:8px 12px;color:#3D3D3D;font-weight:600">설명</th>
          </tr>
        </thead>
        <tbody>
          ${tokens.map(t => `
            <tr style="border-bottom:1px solid #F0F0F0">
              <td style="padding:8px 12px"><code style="color:#4096FF;font-size:12px">${t.name}</code></td>
              <td style="padding:8px 12px;font-weight:600">${t.value}</td>
              <td style="padding:8px 12px;color:#5D5D5D">${t.desc}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
    return wrap;
  },
};

export const LayoutDiagram = {
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'padding:24px';
    wrap.innerHTML = `
      <h3 style="font-size:14px;font-weight:700;color:#3D3D3D;margin-bottom:16px">GNB SIDE 레이아웃</h3>
      <div style="width:700px;height:400px;border:2px solid #EBEBEB;border-radius:8px;display:grid;grid-template-columns:66px 230px 1fr 360px;grid-template-rows:56px 1fr;overflow:hidden">
        <div style="grid-column:1/-1;background:#2A3046;display:flex;align-items:center;padding:0 16px;color:#fff;font-size:12px;font-weight:600">
          Header (56px)
        </div>
        <div style="background:#fff;border-right:1px solid #EBEBEB;display:flex;align-items:center;justify-content:center;font-size:10px;color:#5B628A;writing-mode:vertical-rl">GNB (66px)</div>
        <div style="background:#F8FAFC;border-right:1px solid #EBEBEB;display:flex;align-items:center;justify-content:center;font-size:11px;color:#5D5D5D">LNB (230px)</div>
        <div style="background:#fff;display:flex;align-items:center;justify-content:center;font-size:11px;color:#5D5D5D;border-right:1px solid #EBEBEB">Content (flex)</div>
        <div style="background:#fff;display:flex;align-items:center;justify-content:center;font-size:11px;color:#5D5D5D">Detail (360px)</div>
      </div>

      <h3 style="font-size:14px;font-weight:700;color:#3D3D3D;margin:24px 0 16px">GNB TOP 레이아웃</h3>
      <div style="width:700px;height:400px;border:2px solid #EBEBEB;border-radius:8px;display:grid;grid-template-columns:230px 1fr 360px;grid-template-rows:56px 1fr;overflow:hidden">
        <div style="grid-column:1/-1;background:#2A3046;display:flex;align-items:center;padding:0 16px;color:#fff;font-size:12px;font-weight:600;gap:16px">
          Header + GNB Top (56px)
        </div>
        <div style="background:#F8FAFC;border-right:1px solid #EBEBEB;display:flex;align-items:center;justify-content:center;font-size:11px;color:#5D5D5D">LNB (230px)</div>
        <div style="background:#fff;display:flex;align-items:center;justify-content:center;font-size:11px;color:#5D5D5D;border-right:1px solid #EBEBEB">Content (flex)</div>
        <div style="background:#fff;display:flex;align-items:center;justify-content:center;font-size:11px;color:#5D5D5D">Detail (360px)</div>
      </div>

      <h3 style="font-size:14px;font-weight:700;color:#3D3D3D;margin:24px 0 16px">모바일 레이아웃</h3>
      <div style="width:375px;height:400px;border:2px solid #EBEBEB;border-radius:8px;display:flex;flex-direction:column;overflow:hidden">
        <div style="height:56px;background:#2A3046;display:flex;align-items:center;padding:0 12px;color:#fff;font-size:12px;font-weight:600;flex-shrink:0">Header (56px)</div>
        <div style="flex:1;background:#fff;display:flex;align-items:center;justify-content:center;font-size:11px;color:#5D5D5D">Content (flex)</div>
        <div style="height:56px;background:#fff;border-top:1px solid #EBEBEB;display:flex;align-items:center;justify-content:center;font-size:11px;color:#5D5D5D;flex-shrink:0">BottomTabBar (56px)</div>
      </div>
    `;
    return wrap;
  },
};
