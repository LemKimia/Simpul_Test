
import { RoomResponse} from "@/utils/types/types";
import axios from "axios";


export const getChatRoom = async (): Promise<RoomResponse> => {
  try {
    const response = await axios.get(
      "https://samuel-simple-quicks.vercel.app/api/conversation"
    );

    return response.data as RoomResponse;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
