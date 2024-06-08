import axios from "axios";
import { ListResponse} from "@/utils/types/room-list-types";

import { RoomResponse } from "@/utils/types/chat-room-types";


export const getChatList = async (): Promise<ListResponse> => {
  try {
    const response = await axios.get(
      "https://samuel-simple-quicks.vercel.app/api/conversation"
    );

    return response.data as ListResponse;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const getChatRoom = async (id: string) => {
  try {
    const response = await axios.get(
      `https://samuel-simple-quicks.vercel.app/api/conversation/${id}`
    );

    return response.data as RoomResponse;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
