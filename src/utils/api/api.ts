
import { ResponseData} from "@/utils/types/types";
import axiosWithConfig from "./axiosWithConfig";

export const getComment = async () => {
  try {
    const response = await axiosWithConfig.get("/comment");

    return response.data as ResponseData
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
