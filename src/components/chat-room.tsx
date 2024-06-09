import { useInteraction } from "@/utils/context/interaction-context";

const ChatRoom = () => {
  const { actions } = useInteraction();


  const handleCloseInboxClick = () => {
    actions.setVisible("InboxBubble", false);
  };

  const handleChatItemClick = () => {
    actions.setMode("InboxBubble", "list");
  };


  return (
    <div className="bubble flex flex-col">
      <div>
        <img
          src="public\Search Bar.png"
          alt="Search Bar"
          onClick={handleCloseInboxClick}
        />
      </div>
      <div onClick={() => handleChatItemClick()}>
        <p>Hello</p>
      </div>
    </div>
  );
};

export default ChatRoom;
