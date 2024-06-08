import { getComment } from "@/utils/api/api";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const ChatBubble = () => {
  const [chatList, setChatList] = useState<Comment>();
  const [mode, setMode] = useState<"list" | "detail">("list");

  const fetchData = async () => {
    try {
      const response = await getComment();

      setChatList(response.data);
    } catch (error) {
      toast((error as Error).message.toString());
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bubble flex flex-col">
      <div>
        <img src="public\Search Bar.png" alt="Search Bar" />
      </div>
      {mode === "list" ? (
        <div>
          <p>list</p>
        </div>
      ) : (
        <div>
          <p>detail</p>
        </div>
      )}
    </div>
  );
};

export default ChatBubble;
