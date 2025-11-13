import { useAuth } from "../context/AuthContext";
import { useState, useEffect } from "react";

export const ManagerDashboard = () => {
  const { user } = useAuth();
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    // Simulação: buscar admins do localStorage (ou API futuramente)
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
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Painel do Gerente</h1>
      <p className="mb-6 text-gray-600">
        Bem-vindo, <strong>{user?.name}</strong>. Aqui você pode gerenciar os administradores.
      </p>

      <div className="mb-6">
        <input
          type="email"
          placeholder="E-mail do novo administrador"
          value={newAdminEmail}
          onChange={(e) => setNewAdminEmail(e.target.value)}
          className="border p-2 rounded mr-2"
        />
        <button
          onClick={() => {
            if (newAdminEmail) {
              addAdmin(newAdminEmail);
              setNewAdminEmail("");
            }
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Adicionar Admin
        </button>
      </div>

      <h2 className="text-xl font-semibold mb-2">Administradores atuais:</h2>
      <ul className="space-y-2">
        {admins.length === 0 && (
          <li className="text-gray-500">Nenhum administrador cadastrado.</li>
        )}
        {admins.map((adm) => (
          <li
            key={adm.id}
            className="flex justify-between items-center border-b pb-2"
          >
            <span>{adm.email}</span>
            <button
              onClick={() => removeAdmin(adm.id)}
              className="text-red-500 hover:underline"
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
