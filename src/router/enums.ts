// 完整版菜单比较多，将 rank 抽离出来，在此方便维护

const home = 0, // 平台规定只有 home 路由的 rank 才能为 0 ，所以后端在返回 rank 的时候需要从 1 开始哦
  doc = 1,
  utils = 2,
  table = 3,
  tree = 4,
  able = 5,
  components = 6,
  frame = 7,
  nested = 8,
  result = 9,
  error = 10,
  list = 11,
  permission = 12,
  system = 13,
  tabs = 14,
  formdesign = 15,
  flowchart = 16,
  ppt = 17,
  editor = 18,
  guide = 19,
  about = 20,
  // jyyx add
  competitor = 21,
  salesarea = 22;

export {
  home,
  doc,
  utils,
  table,
  tree,
  able,
  components,
  frame,
  nested,
  result,
  error,
  list,
  permission,
  system,
  tabs,
  formdesign,
  flowchart,
  ppt,
  editor,
  guide,
  about,
  competitor,
  salesarea
};
