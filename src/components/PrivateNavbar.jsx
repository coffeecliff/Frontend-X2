import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, UserCircle } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export const PrivateNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();

  // Links privados do sistema admin
  const navLink = [
    { to: "/admhomeedit", label: "Editar" },
    { to: "/admusers", label: "Usuários ADM" },
    { to: "/admsettings", label: "Configurações" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav className="backdrop-blur-md sticky top-0 z-50 border-white/20 transition-colors duration-500 bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-3 md:px-2 md:py-4 flex items-center justify-between">
          
          {/* Logo + Menu Mobile */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white/80 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div className="flex items-center gap-2 font-bold text-xl">
              <span className="text-emerald-400">X2</span>
              <span>SISTEMA ADM</span>
            </div>
          </div>

          {/* Links Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            {navLink.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-extrabold transition-colors text-sm md:text-[20px] ${
                  isActive(link.to)
                    ? "text-accent"
                    : "text-white hover:text-accent"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Botão Logout */}
            {user && (
              <button
                onClick={logout}
                className="cursor-pointer bg-gradient-to-r border-3 border-accent text-accent px-4 py-1 md:px-8 rounded-lg font-bold hover:shadow-lg transition-all duration-300 text-sm md:text-base"
              >
                Logout
              </button>
            )}

            {/* Ícone do usuário */}
            <div className="flex items-center justify-center bg-white/10 p-2 rounded-full cursor-pointer hover:bg-white/20 transition">
              <UserCircle size={28} />
            </div>
          </div>
        </div>

        {/* Menu Mobile */}
        {isOpen && (
          <div className="md:hidden mt-4">
            <div className="px-2 pt-2 pb-2 space-y-1 bg-white/10 backdrop-blur-md rounded-lg">
              {navLink.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`block px-3 py-1 rounded-lg transition-colors ${
                    isActive(link.to)
                      ? "text-light bg-light/10 font-medium"
                      : "text-white/80 hover:text-accent hover:bg-white/20"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              {/* Logout no menu mobile */}
              {user && (
                <button
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }}
                  className="w-full text-left px-3 py-1 rounded-lg text-red-600 hover:bg-red-100"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
