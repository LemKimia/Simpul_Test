import InboxBubble from "@/components/inbox/inbox-bubble";
import InboxIcon from "@/components/inbox/inbox-icon";
import Navbar from "@/components/navbar";
import TaskBubble from "@/components/task/task-bubble";
import TaskIcon from "@/components/task/task-icon";
import { useInteraction } from "@/utils/context/interaction-context";

const Homepage = () => {
  const { states, actions } = useInteraction();

  const handleOpenInboxClick = () => {
    actions.setClicked("InboxBubble", true);
    actions.setClicked("TaskBubble", false);
  };

  const handleCloseInboxClick = () => {
    actions.setClicked("InboxBubble", false);
    actions.setClicked("Trigger", false);
  };

  const handleOpenTaskClick = () => {
    actions.setClicked("TaskBubble", true);
    actions.setClicked("InboxBubble", false);
  };

  const handleCloseTaskClick = () => {
    actions.setClicked("TaskBubble", false);
    actions.setClicked("Trigger", false);
  };

  const isInboxVisible = states["InboxBubble"]?.visible || false;
  const isTaskVisible = states["TaskBubble"]?.visible || false;

  return (
    <div className="grid grid-cols-6 bg-[#333333] h-screen">
      <div></div>
      <div className="flex flex-col place-content-between col-span-5 border-l-0.5 border-[#B9B9B9]">
        <div>
          <Navbar />
        </div>
        <div
          className={`flex flex-row-reverse justify-items-end gap-2 p-3 ${
            isInboxVisible || isTaskVisible
              ? "h-max items-end"
              : "h-[15vh] items-center"
          }`}
        >
          <img
            src="/Trigger 1.png"
            alt="trigger button"
            className={`mt-5 w-20 ${
              isInboxVisible || isTaskVisible
                ? "-z-50 order-2"
                : "z-auto order-1 animate-slide-left"
            }`}
            onClick={() => actions.setClicked("Trigger", true)}
          />
          {states["Trigger"]?.clicked && (
            <div className="flex flex-col-reverse gap-2 order-1 mr-3">
              <div
                className={`flex flex-row col-span-6 items-end self-end gap-2 animate-slide-right ${
                  isInboxVisible || isTaskVisible
                    ? "items-center mr-3 mb-3"
                    : ""
                }`}
              >
                <div
                  className={`grid grid-flow-row gap-2 justify-items-center ${
                    isTaskVisible ? "order-2" : "order-1"
                  }`}
                >
                  {!isInboxVisible && !isTaskVisible && (
                    <p className="font-lato font-semibold text-white">Task</p>
                  )}
                  <TaskIcon
                    isVisible={isTaskVisible}
                    onClick={
                      isTaskVisible ? handleCloseTaskClick : handleOpenTaskClick
                    }
                  />
                </div>
                <div
                  className={`grid grid-flow-row gap-2 justify-items-center ${
                    isTaskVisible ? "order-1" : "order-2"
                  }`}
                >
                  {!isInboxVisible && !isTaskVisible && (
                    <p className="font-lato font-semibold text-white order-1">
                      Chat
                    </p>
                  )}
                  <InboxIcon
                    isVisible={isInboxVisible}
                    onClick={
                      isInboxVisible
                        ? handleCloseInboxClick
                        : handleOpenInboxClick
                    }
                  />
                </div>
              </div>
              {isTaskVisible && <TaskBubble />}
              {isInboxVisible && <InboxBubble />}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
