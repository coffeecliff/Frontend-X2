import { useAuth } from "../context/AuthContext";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const ManagerDashboard = () => {
  const { user } = useAuth();
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    const storedAdmins = JSON.parse(localStorage.getItem("admins")) || [];
    setAdmins(storedAdmins);
  }, []);

  const addAdmin = (email) => {
    const newAdmin = { email, id: Date.now(), role: "admin" };
    const updated = [...admins, newAdmin];
    setAdmins(updated);
    localStorage.setItem("admins", JSON.stringify(updated));
  };

  const removeAdmin = (id) => {
    const updated = admins.filter((adm) => adm.id !== id);
    setAdmins(updated);
    localStorage.setItem("admins", JSON.stringify(updated));
  };

  const [newAdminEmail, setNewAdminEmail] = useState("");

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white flex flex-col">

      {/* TOPO */}
      <header className="w-full flex justify-between items-center px-10 py-5 border-b border-yellow-500">
        <h1 className="text-3xl font-bold text-yellow-400">
          Painel do Gerente
        </h1>

        <div className="flex gap-6 text-lg">
          <Link to="/" className="hover:text-yellow-400">Ir para o Site</Link>
          <button className="border border-yellow-500 px-4 py-1 rounded hover:bg-yellow-600 transition">
            Logout
          </button>
        </div>
      </header>

      {/* CONTEÚDO */}
      <main className="flex-1 p-10">

        {/* ACESSOS RÁPIDOS */}
        <h2 className="text-2xl font-bold border-b border-yellow-500 pb-2 mb-6">
          Acessos Rápidos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">

          {/* --- Atalhos do sistema --- */}
          <Link to="/home" className="bg-[#1b1b1b] border border-yellow-600 rounded-xl p-6 hover:bg-yellow-600/30 transition">
            <h3 className="text-xl font-bold text-yellow-400 mb-2">Home</h3>
            <p>Acessar a página inicial.</p>
          </Link>

          <Link to="/games" className="bg-[#1b1b1b] border border-yellow-600 rounded-xl p-6 hover:bg-yellow-600/30 transition">
            <h3 className="text-xl font-bold text-yellow-400 mb-2">Jogos</h3>
            <p>Ver ou editar jogos.</p>
          </Link>

          <Link to="/sponsor" className="bg-[#1b1b1b] border border-yellow-600 rounded-xl p-6 hover:bg-yellow-600/30 transition">
            <h3 className="text-xl font-bold text-yellow-400 mb-2">Patrocinadores</h3>
            <p>Gerenciar patrocinadores.</p>
          </Link>

          <Link to="/about" className="bg-[#1b1b1b] border border-yellow-600 rounded-xl p-6 hover:bg-yellow-600/30 transition">
            <h3 className="text-xl font-bold text-yellow-400 mb-2">Sobre</h3>
            <p>Acessar informações do torneio.</p>
          </Link>

          {/* --- Atalhos de edição --- */}
          <Link to="/admhomeedit" className="bg-[#1b1b1b] border border-yellow-600 rounded-xl p-6 hover:bg-yellow-600/30 transition">
            <h3 className="text-xl font-bold text-yellow-400 mb-2">Editar Home</h3>
            <p>Atualizar conteúdo da Home.</p>
          </Link>

          <Link to="/admgamesedit" className="bg-[#1b1b1b] border border-yellow-600 rounded-xl p-6 hover:bg-yellow-600/30 transition">
            <h3 className="text-xl font-bold text-yellow-400 mb-2">Editar Jogos</h3>
            <p>Gerenciar edições dos jogos.</p>
          </Link>

          <Link to="/admsponsoredit" className="bg-[#1b1b1b] border border-yellow-600 rounded-xl p-6 hover:bg-yellow-600/30 transition">
            <h3 className="text-xl font-bold text-yellow-400 mb-2">Editar Patrocinadores</h3>
            <p>Modificar lista de patrocinadores.</p>
          </Link>

          <Link to="/admaboutedit" className="bg-[#1b1b1b] border border-yellow-600 rounded-xl p-6 hover:bg-yellow-600/30 transition">
            <h3 className="text-xl font-bold text-yellow-400 mb-2">Editar Sobre</h3>
            <p>Alterar conteúdo da página Sobre.</p>
          </Link>
        </div>

        {/* ============================================
           SEÇÃO ORIGINAL DO SEU CÓDIGO (ADMINISTRADORES)
        ============================================= */}
        <h2 className="text-2xl font-bold border-b border-yellow-500 pb-2 mb-4">
          Gerenciar Administradores
        </h2>

        <p className="mb-6 text-gray-300">
          Bem-vindo, <strong>{user?.name}</strong>. Aqui você pode gerenciar os administradores do sistema.
        </p>

        {/* Adicionar Admin */}
        <div className="mb-6">
          <input
            type="email"
            placeholder="E-mail do novo administrador"
            value={newAdminEmail}
            onChange={(e) => setNewAdminEmail(e.target.value)}
            className="border p-2 rounded mr-2 text-black"
          />
          <button
            onClick={() => {
              if (newAdminEmail) {
                addAdmin(newAdminEmail);
                setNewAdminEmail("");
              }
            }}
            className="bg-yellow-600 text-white px-4 py-2 rounded"
          >
            Adicionar Admin
          </button>
        </div>

        {/* Lista de Admins */}
        <ul className="space-y-2">
          {admins.length === 0 && (
            <li className="text-gray-400">Nenhum administrador cadastrado.</li>
          )}

          {admins.map((adm) => (
            <li
              key={adm.id}
              className="flex justify-between items-center border-b border-gray-700 pb-2"
            >
              <span>{adm.email}</span>
              <button
                onClick={() => removeAdmin(adm.id)}
                className="text-red-400 hover:underline"
              >
                Remover
              </button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};
