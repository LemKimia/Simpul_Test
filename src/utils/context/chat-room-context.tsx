import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Room } from "@/utils/types/chat-room-types";
import { getChatRoom } from "@/utils/api/api";
import { toast } from "sonner";

interface ChatRoomProps {
  chatRoom: Room[];
}

interface Props {
  children: ReactNode;
}

const initialValue: ChatRoomProps = {
  chatRoom: [],
};

export const ChatRoomContext = createContext<ChatRoomProps>(initialValue);

export const ChatRoomProvider = ({ children }: Props) => {
  const [chatRoom, setChatRoom] = useState<Room[]>([]);

  const fetchData = useCallback(async (id: string) => {
    try {
      const response = await getChatRoom(id);
      setChatRoom(response.data);
      console.log(response);
    } catch (error) {
      const errorMessage = (error as Error).message.toString();
      console.error("Failed to fetch chat rooms:", errorMessage);
      toast(errorMessage);
    }
  }, []);

  useEffect(() => {
    const id = "1"
    fetchData(id);
  }, [fetchData]);

  const ChatRoomContextValue = useMemo(() => ({ chatRoom }), [chatRoom]);

  return (
    <ChatRoomContext.Provider value={ChatRoomContextValue}>
      {children}
    </ChatRoomContext.Provider>
  );
};

export function useChatRoom(): ChatRoomProps {
  const context = useContext(ChatRoomContext);

  if (context === undefined) {
    throw new Error("ERROR, useChatRoom must be used within ChatRoomContext");
  }

  return context;
}
