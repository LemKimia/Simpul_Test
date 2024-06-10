interface InboxIconProps {
  isVisible: boolean;
  onClick: () => void;
}

const InboxIcon: React.FC<InboxIconProps> = ({ isVisible, onClick }) => (
  <>
    {!isVisible && (
      <img
        src="/Chat.png"
        alt="chat image"
        className="w-18 order-2"
        onClick={onClick}
      />
    )}
    {isVisible && (
      <div className="flex flex-row justify-self-end order-2 relative animate-slide-left">
        <img
          src="/Inbox 2.png"
          alt="Inbox icon when opened"
          className="absolute left-3 w-18"
          onClick={onClick}
        />
        <img
          src="/Shadow.png"
          alt="Opened inbox icon's shadow"
          className="w-18"
        />
      </div>
    )}
  </>
);

export default InboxIcon;
