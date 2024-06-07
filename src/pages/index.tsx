import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";


const Cover = () => {
  return (
    <div>
      <Button asChild>
        <Link to={"/home"}>Simple Quicks</Link>
      </Button>
    </div>
  );
}

export default Cover