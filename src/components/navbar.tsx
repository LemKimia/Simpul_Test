import { Input } from "@/components/ui/input";

const Navbar = () => {
  return (
    <nav className="w-full h-max bg-[#4F4F4F]">
      <div className="flex flex-row p-2">
        <img src="/Search Icon.png" alt="pokedex-logo" className="size-4" />
        <Input className="bg-[#4F4F4F] border-none ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 h-5 text-white" />
      </div>
    </nav>
  );
};

export default Navbar;
