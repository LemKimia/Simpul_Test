import { useNavigate } from "react-router-dom";

const Cover = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  };

  return (
    <div className="flex flex-col justify-center items-center bg-[#0F8A69] h-screen">
      <div
        onClick={handleClick}
        className="flex flex-col font-cover font-bold text-white text-9xl select-none border-0.5 border-[#B9B9B9] py-[30vh] px-[25vw]"
      >
        <p>Simple</p>
        <p>Quicks</p>
      </div>
    </div>
  );
};

export default Cover;
