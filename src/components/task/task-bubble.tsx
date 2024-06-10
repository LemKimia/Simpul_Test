import { Input } from "@/components/ui/input";
import Loading from "@/components/loading";

const TaskBubble = () => {
  return (
    <div className="bubble flex flex-col self-end gap-5 order-3 animate-slide-left">
      <div className="flex flex-row px-10 mx-5 border-0.5 rounded-md border-gray-500">
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
      <Loading placeholder="Loading Task ..." />
    </div>
  );
};

export default TaskBubble;
