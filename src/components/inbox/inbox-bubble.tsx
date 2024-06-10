import { useContext } from "react";

import { Input } from "@/components/ui/input";
import Loading from "@/components/loading";

import { InboxContext } from "@/utils/context/inbox-context";

const InboxBubble = () => {
  const { roomList } = useContext(InboxContext);

  return (
    <div className="bubble flex flex-col self-end gap-5 order-3 animate-slide-left">
      <div className="flex flex-row px-16 border-0.5 rounded-md border-gray-500">
        <Input
          className="border-none ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-white"
          placeholder="Search"
        />
        <img
          src="/Search 2.png"
          alt="Search icon"
          className="size-4 self-center"
        />
      </div>
      <div className="">
        {roomList.length > 0 ? (
          <ul>
            {roomList.slice(0, 3).map((room) => (
              <li
                key={room.id}
                className="grid grid-cols-8 gap-5 my-5 pb-10 font-lato border-b-2 border-gray-300"
              >
                <div className="flex flex-row relative">
                  <img
                    src="public\Group 15.png"
                    alt=""
                    className="w-10 h-10 "
                  />
                  <img
                    src="public\Group 687.png"
                    alt=""
                    className="w-10 h-10 absolute left-5"
                  />
                </div>
                <div className="flex flex-col gap-2 col-span-7">
                  <div className="flex flex-row gap-5">
                    <p className="font-semibold text-md text-pretty text-[#2F80ED]">
                      {room.title}
                    </p>
                    <p className="font-medium text-md">{room.createdAt}</p>
                  </div>
                  <div className="text-sm">
                    <p className="font-bold">{room.lastMessage.user.name}</p>
                    <p className="text-pretty text-ellipsis line-clamp-1">
                      {room.lastMessage.user.message}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <Loading placeholder="Loading Chats ..." />
        )}
      </div>
    </div>
  );
};

export default InboxBubble;
