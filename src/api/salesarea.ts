import { http } from "@/utils/http";

type Result = {
  success: boolean;
  data?: {
    /** 列表数据 */
    list: Array<any>;
  };
};

/** Area Data List */
export const getAreaList = (data?: object) => {
  return http.request<Result>("post", "/getAreaList", { data });
};
