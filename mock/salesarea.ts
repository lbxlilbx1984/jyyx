import { MockMethod } from "vite-plugin-mock";

export default [
  {
    url: "/getAreaList",
    method: "post",
    response: () => {
      return {
        success: true,
        data: {
          list: [
            {
              sf: "广东",
              cs: "广州",
              qx: "天河区",
              index: 1,
              STATS: 0
            },
            {
              sf: "广东",
              cs: "广州",
              qx: "南沙区",
              index: 2,
              STATS: 0
            },
            {
              sf: "广东",
              cs: "广州",
              qx: "越秀区",
              index: 3,
              STATS: 1
            }
          ]
        }
      };
    }
  }
] as MockMethod[];
