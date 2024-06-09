import { useContext } from "react";

import { InboxContext } from "@/utils/context/inbox-context";
import { useInteraction } from "@/utils/context/interaction-context";

const InboxBubble = () => {
  const { roomList } = useContext(InboxContext);
  const { actions } = useInteraction();

  const handleCloseInboxClick = () => {
    actions.setVisible("InboxBubble", false);
  };

  return (
    <div className="bubble flex flex-col gap-5">
      <div>
        <img
          src="/Search Bar.png"
          alt="Search Bar"
          onClick={handleCloseInboxClick}
        />
      </div>
      <div className="">
        <ul>
          {roomList.map((room) => (
            <li key={room.id} className="grid grid-cols-6 gap-5 my-10">
              <div className="flex flex-row ">
                <img src="public\Group 15.png" alt="" className="w-10 h-10" />
                <img src="public\Group 687.png" alt="" className="w-10 h-10" />
              </div>
              <div className="flex flex-col gap-2 col-span-5">
                <div className="flex flex-row gap-5">
                  <p className="text-sm">{room.title}</p>
                  <p className="text-xs">{room.createdAt}</p>
                </div>
                <div className="text-sm">
                  <p className="font-bold">{room.lastMessage.user.name}</p>
                  <p>{room.lastMessage.user.message}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InboxBubble;
