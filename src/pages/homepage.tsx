import ChatBubble from "@/components/inbox-bubble";
import Navbar from "@/components/navbar";
import TaskBubble from "@/components/task-bubble";
import { useState } from "react";

const Homepage = () => {
  const [onClick, setOnClick] = useState(false);
  const [showTask, setShowTask] = useState(false);
  const [showInbox, setShowInbox] = useState(false);

  return (
    <div className="grid grid-cols-6 bg-[#4F4F4F] h-screen ">
      <div> </div>
      <div className="col-span-5 border-l-2 border-white">
        <div>
          <Navbar />
        </div>
        <div className="grid grid-flow-col-dense justify-items-end content-center">
          <img
            src="public\Trigger 1.png"
            alt="trigger button"
            className="order-2"
            onMouseEnter={() => setOnClick(true)}
            onClick={() => setOnClick(false)}
          />
          {onClick && (
            <div className="flex flex-row col-span-6 items-stretch order-1">
              <div className="flex flex-col">
                <p>Task</p>
                <img
                  src="public\Task.png"
                  alt="task image"
                  className="w-20"
                  onClick={() => setShowTask(true)}
                />
                {showTask && (
                  <div onClick={() => setShowTask(false)}>
                    <TaskBubble />
                  </div>
                )}
              </div>
              <div className="flex flex-col">
                <p>Chat</p>
                <img
                  src="public\Chat.png"
                  alt="chat image"
                  className="w-20"
                  onClick={() => setShowInbox(true)}
                />
                {showInbox && (
                  <div onClick={() => setShowInbox(false)}>
                    <ChatBubble />
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
