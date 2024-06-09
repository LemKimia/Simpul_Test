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
  const corsAnywhereUrl = "https://cors-anywhere.herokuapp.com/";
  const targetUrl = `https://samuel-simple-quicks.vercel.app/api/conversation/${id}`;
  const fullUrl = corsAnywhereUrl + targetUrl;

  try {
    const response = await axios.get(fullUrl);

    return response.data as RoomResponse;
    
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
