import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export const PublicNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLink = [
    { to: "/", label: "Home" },
    { to: "/games", label: "Jogos" },
    { to: "/about", label: "Sobre" },
    { to: "/login", label: "Login" },
  ];

  const isActive = (path) => location.pathname === path;

  // ✅ Detecta se está na página "Edição Atual"
  const isNewEdition = location.pathname === "/newedition";

  return (
    <>
      <nav
        className={`backdrop-blur-md sticky top-0 z-50 border-white/20 transition-colors duration-500
        ${
          isNewEdition
            ? "bg-gradient-to-r from-newaccent to-newdark text-yellow-200" //  degradê da edição atual
            : "bg-dark text-white" // cor padrão do resto do site
        }`}
      
      >
        <div className="max-w-7xl mx-auto px-4 py-3 md:px-2 md:py-4">
          <div className="flex items-center justify-between">
            {/* Logotipo */}
            <Link to="/">
              <div className="flex items-center relative">
                <img
                  src="/navlogo.svg"
                  alt="logotipo site X2"
                  className="w-34 h-auto md:w-42 md:h-auto"
                />
                <div className="absolute inset-1 bg-gradient-to-r rounded-xl blur opacity-30 md:rounded-b-xl"></div>
              </div>
            </Link>

            {/* Links Desktop */}
            <div className="flex items-center space-x-3 md:space-x-4">
              {navLink.slice(0, -1).map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`hidden sm:block font-extrabold transition-colors text-sm md:text-[20px] mr-12 ${
                    isActive(link.to)
                      ? "text-accent"
                      : "text-white hover:text-accent"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <Link to="/login">
                <button className="cursor-pointer bg-gradient-to-r border-3 border-accent text-accent px-4 py-1 md:px-8 rounded-lg font-bold hover:shadow-lg transition-all duration-300 text-sm md:text-base">
                  <span className="hidden sm:inline">Entrar</span>
                  <span className="sm:hidden">Login</span>
                </button>
              </Link>
            </div>

            {/* Botão menu mobile */}
            <div className="md:hidden flex items-center ml-2">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-dark/70 hover:text-light"
                aria-label="Menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Menu Mobile */}
          {isOpen && (
            <div className="md:hidden mt-4">
              <div className="px-2 pt-2 pb-2 space-y-1 bg-white/80 backdrop:blur-md rounded-lg">
                {navLink.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`block px-3 rounded-lg transition-colors ${
                      isActive(link.to)
                        ? "text-light bg-light/10 font-medium"
                        : "text-dark/70 hover:text-accent hover:bg-light/5"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};
