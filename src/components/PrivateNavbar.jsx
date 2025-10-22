import { Menu, UserCircle } from "lucide-react";

export const PrivateNavbar = () => {
  return (
    <header className="w-full bg-emerald-900 text-white flex items-center justify-between px-6 py-3 shadow-md">
      <div className="flex items-center gap-3">
        <Menu className="cursor-pointer" size={26} />
        <div className="flex items-center gap-2 font-bold text-xl">
          <span className="text-emerald-400">X2</span>
          <span>SISTEMA ADM</span>
        </div>
      </div>

      <div className="flex items-center justify-center bg-white/10 p-2 rounded-full cursor-pointer hover:bg-white/20 transition">
        <UserCircle size={28} />
      </div>
    </header>
  );
};
