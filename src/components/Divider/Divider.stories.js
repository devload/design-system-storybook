import { createDivider } from './Divider.js';

export default {
  title: 'Atoms/Divider',
  render: (args) => {
    if (args.direction === 'vertical') {
      const wrap = document.createElement('div');
      wrap.style.cssText = 'display:flex;align-items:center;gap:12px;padding:20px;font-size:13px;color:#5D5D5D';
      wrap.innerHTML = '<span>항목 A</span>';
      wrap.appendChild(createDivider(args));
      wrap.innerHTML += '<span>항목 B</span>';
      wrap.appendChild(createDivider(args));
      wrap.innerHTML += '<span>항목 C</span>';
      return wrap;
    }
    const wrap = document.createElement('div');
    wrap.style.cssText = 'padding:20px;max-width:400px';
    wrap.innerHTML = '<p style="margin-bottom:12px;font-size:13px;color:#5D5D5D">위 콘텐츠</p>';
    wrap.appendChild(createDivider(args));
    wrap.innerHTML += '<p style="margin-top:12px;font-size:13px;color:#5D5D5D">아래 콘텐츠</p>';
    return wrap;
  },
  argTypes: {
    direction: { control: 'select', options: ['horizontal', 'vertical'] },
    variant: { control: 'select', options: ['default', 'light', 'dark'] },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/XXXXX/HANDYSOFT-DS?node-id=0:0', // TODO: 실제 Figma URL로 교체하세요
    },
    docs: {
      description: {
        component: '구분선 컴포넌트. 수평/수직 방향과 색상 변형을 지원합니다. 툴바 내 버튼 그룹 분리, 섹션 구분에 사용됩니다.',
      },
    },
  },
};

export const Horizontal = {
  args: { direction: 'horizontal' },
};

export const Vertical = {
  args: { direction: 'vertical' },
};

export const Light = {
  args: { direction: 'horizontal', variant: 'light' },
};
