import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { List } from "@/utils/types/room-list-types";
import { getChatList } from "@/utils/api/api";
import { toast } from "sonner";

interface InboxProps {
  roomList: List[];
}

interface Props {
  children: ReactNode;
}

const initialValue: InboxProps = {
  roomList: [],
};

export const InboxContext = createContext<InboxProps>(initialValue);

export const InboxProvider = ({ children }: Props) => {
  const [roomList, setRoomList] = useState<List[]>([]);

  const fetchData = useCallback(async () => {
    try {
      const response = await getChatList();
      setRoomList(response.data);
    } catch (error) {
      const errorMessage = (error as Error).message.toString();
      console.error("Failed to fetch chat rooms:", errorMessage);
      toast(errorMessage);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const InboxContextValue = useMemo(() => ({ roomList }), [roomList]);

  return (
    <InboxContext.Provider value={InboxContextValue}>
      {children}
    </InboxContext.Provider>
  );
};

export function useInbox(): InboxProps {
  const context = useContext(InboxContext);

  if (context === undefined) {
    throw new Error("ERROR, useToken must be used within TokenContext");
  }

  return context;
}
