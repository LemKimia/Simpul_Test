import ChatRoom from "@/components/chat-room";
import InboxBubble from "@/components/inbox-bubble";
import Navbar from "@/components/navbar";
import TaskBubble from "@/components/task-bubble";

import { useInteraction } from "@/utils/context/interaction-context";

const Homepage = () => {

  const { states, actions } = useInteraction();

  const handleOpenInboxClick = () => {
    actions.setClicked("InboxBubble", true);
  };

  const handleTaskClick = () => {
    actions.setClicked("TaskBubble", true);
  };


  const isChatVisible = states["InboxBubble"]?.visible || false;
  const isTaskVisible = states["TaskBubble"]?.visible || false;
  const chatMode = states["chatMode"]?.mode || "list"

  console.log("Current mode state:", states["InboxBubble"]?.mode);

  return (
    <div className="grid grid-cols-6 bg-[#4F4F4F] h-screen ">
      <div> </div>
      <div className="col-span-5 border-l-2 border-white">
        <div>
          <Navbar />
        </div>
        <div className="grid grid-flow-col-dense justify-items-end content-center">
          <img
            src="/Trigger 1.png"
            alt="trigger button"
            className="order-2"
            onMouseEnter={() => actions.setClicked("Trigger", true)}
            onClick={() => actions.setClicked("Trigger", false)}
          />
          {states["Trigger"]?.clicked && (
            <div className="flex flex-row col-span-6 items-stretch order-1">
              <div className="flex flex-col">
                <p>Task</p>
                <img
                  src="/Task.png"
                  alt="task image"
                  className="w-20"
                  onClick={handleTaskClick}
                  // onMouseEnter={() => handleMouseEnter("TaskBubble")}
                  // onMouseLeave={() => handleMouseLeave("TaskBubble")}
                />
                {isTaskVisible && (
                  <div onClick={() => actions.setVisible("TaskBubble", false)}>
                    <TaskBubble />
                  </div>
                )}
              </div>
              <div className="flex flex-col">
                <p>Chat</p>
                <img
                  src="/Chat.png"
                  alt="chat image"
                  className="w-20"
                  onClick={handleOpenInboxClick}
                />
                {isChatVisible && (
                  <div>
                    {chatMode === "list" ? (
                      <div>
                        <InboxBubble />
                      </div>
                    ) : (
                      <div>
                        <ChatRoom />
                      </div>
                    )}
                    
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
