interface TaskIconProps {
  isVisible: boolean;
  onClick: () => void;
}

const TaskIcon: React.FC<TaskIconProps> = ({ isVisible, onClick }) => (
  <>
    {!isVisible && (
      <img
        src="/Task.png"
        alt="task image"
        className="w-18 order-2"
        onClick={onClick}
      />
    )}
    {isVisible && (
      <div className="flex flex-row justify-self-end order-2 relative animate-slide-left">
        <img
          src="/Task 2.png"
          alt="Task icon when opened"
          className="absolute left-3 w-18"
          onClick={onClick}
        />
        <img
          src="/Shadow.png"
          alt="Opened task icon's shadow"
          className="w-18"
        />
      </div>
    )}
  </>
);

export default TaskIcon;
