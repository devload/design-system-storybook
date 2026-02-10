import { createTreeItem } from './TreeItem.js';

export default {
  title: 'Components/TreeItem',
  render: (args) => createTreeItem(args),
  argTypes: {
    label: { control: 'text' },
    expanded: { control: 'boolean' },
  },
  parameters: {
    docs: {
      description: {
        component: '트리 항목 — 개인 보관함 폴더 트리에 사용되는 접기/펴기 가능한 항목입니다.',
      },
    },
    design: {
      type: 'figma',
      // TODO: 실제 Figma URL로 교체하세요
      url: 'https://www.figma.com/file/XXXXX/HANDYSOFT-DS?node-id=0:0',
    },
  },
};

export const Expanded = {
  args: { label: '[완료] 프로젝트', expanded: true, children: ['GUI', '기획 UI'] },
};

export const Collapsed = {
  args: { label: '[진행중] 개인', children: ['작업1', '작업2'] },
};

export const TreeExample = {
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'width:230px;background:#F8FAFC;padding:8px 0;border-radius:8px';
    wrap.appendChild(createTreeItem({ label: '[완료] 프로젝트', expanded: true, children: ['GUI', '기획 UI'] }));
    wrap.appendChild(createTreeItem({ label: '[진행중] 개인', children: ['디자인 리뷰', '코드 리뷰'] }));
    wrap.appendChild(createTreeItem({ label: '[대기] 기타' }));
    return wrap;
  },
};
