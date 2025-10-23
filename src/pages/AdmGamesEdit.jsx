// src/pages/GamesEdit.jsx
import { useState } from "react";
import { Edit3, Save, X } from "lucide-react";

export const AdmGamesEdit = () => {
  const [editing, setEditing] = useState(false);
  const [jogos, setJogos] = useState([
    { id: 1, time1: "Japão", placar1: 2, placar2: 1, time2: "Marrocos" },
    { id: 2, time1: "França", placar1: 0, placar2: 5, time2: "Alemanha" },
    { id: 3, time1: "México", placar1: 5, placar2: 1, time2: "Portugal" },
    { id: 4, time1: "Argentina", placar1: 2, placar2: 2, time2: "Brasil" },
    { id: 5, time1: "Japão", placar1: 1, placar2: 0, time2: "México" },
    { id: 6, time1: "França", placar1: 1, placar2: 0, time2: "Marrocos" },
  ]);

  const handleChange = (id, campo, valor) => {
    setJogos((prev) =>
      prev.map((j) => (j.id === id ? { ...j, [campo]: valor } : j))
    );
  };

  const handleSave = () => {
    console.log("Jogos salvos:", jogos);
    setEditing(false);
  };

  const handleCancel = () => {
    window.location.reload();
  };

  const CardJogo = ({ jogo }) => (
    <div className="flex justify-between items-center bg-white rounded-xl shadow-md mb-2 p-3 transition">
      <span className="text-xs font-bold text-red-700 bg-red-100 px-2 py-1 rounded-md">
        ENCERRADO
      </span>
      <div className="flex-1 flex justify-center items-center text-gray-800 font-semibold">
        {editing ? (
          <>
            <input
              type="text"
              value={jogo.time1}
              onChange={(e) => handleChange(jogo.id, "time1", e.target.value)}
              className="w-24 text-center text-black border border-gray-300 rounded-md p-1 mx-1"
            />
            <input
              type="number"
              value={jogo.placar1}
              onChange={(e) => handleChange(jogo.id, "placar1", e.target.value)}
              className="w-12 text-center text-black border border-gray-300 rounded-md p-1 mx-1"
            />
            <span className="font-bold mx-1">x</span>
            <input
              type="number"
              value={jogo.placar2}
              onChange={(e) => handleChange(jogo.id, "placar2", e.target.value)}
              className="w-12 text-center text-black border border-gray-300 rounded-md p-1 mx-1"
            />
            <input
              type="text"
              value={jogo.time2}
              onChange={(e) => handleChange(jogo.id, "time2", e.target.value)}
              className="w-24 text-center text-black border border-gray-300 rounded-md p-1 mx-1"
            />
          </>
        ) : (
          <>
            <span>{jogo.time1}</span>
            <span className="mx-3 text-gray-800 font-bold">
              {jogo.placar1} x {jogo.placar2}
            </span>
            <span>{jogo.time2}</span>
          </>
        )}
      </div>
    </div>
  );

  return (
    <div className="w-full min-h-screen bg-green-50 flex flex-col items-center py-12 px-4 relative overflow-hidden">
      {/* Bolas decorativas */}
      <img
        src="/Bolas.svg"
        alt="Bola topo esquerdo grande"
        className="absolute top-0 left-0 w-1/4 md:w-1/6 opacity-30"
      />
      <img
        src="/BolasR.svg"
        alt="Bola topo direito grande"
        className="absolute top-0 right-0 w-1/4 md:w-1/6 opacity-30"
      />
      <img
        src="/Bolas.svg"
        alt="Bola inferior esquerda"
        className="absolute bottom-0 left-0 w-1/4 md:w-1/6 opacity-30"
      />
      <img
        src="/BolasR.svg"
        alt="Bola inferior direita"
        className="absolute bottom-0 right-0 w-1/4 md:w-1/6 opacity-30"
      />

      {/* Título */}
      <h1 className="text-2xl font-extrabold text-green-900 text-center">
        TABELA
      </h1>
      <h2 className="text-lg font-bold text-green-700 mb-8 text-center">
        DOS JOGOS
      </h2>

      {/* Primeira tabela */}
      <div className="relative z-10 w-full max-w-3xl bg-white/50 rounded-2xl shadow-lg p-6 mb-10 backdrop-blur-sm">
        {jogos.map((jogo) => (
          <CardJogo key={jogo.id} jogo={jogo} />
        ))}
      </div>

      {/* Segunda tabela (pode ser duplicada ou outro grupo) */}
      <div className="relative z-10 w-full max-w-3xl bg-white/50 rounded-2xl shadow-lg p-6 mb-10 backdrop-blur-sm">
        {jogos.map((jogo) => (
          <CardJogo key={jogo.id + "-b"} jogo={jogo} />
        ))}
      </div>

      {/* Botões de ação */}
      <div className="flex justify-center mt-6">
        {!editing ? (
          <button
            onClick={() => setEditing(true)}
            className="flex cursor-pointer items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 py-2 rounded-lg shadow-md transition"
          >
            <Edit3 size={18} />
            EDITAR
          </button>
        ) : (
          <div className="flex gap-4">
            <button
              onClick={handleSave}
              className="flex cursor-pointer items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-2 rounded-lg shadow-md transition"
            >
              <Save size={18} />
              SALVAR
            </button>
            <button
              onClick={handleCancel}
              className="flex cursor-pointer items-center gap-2 bg-gray-400 hover:bg-gray-500 text-white font-bold px-6 py-2 rounded-lg shadow-md transition"
            >
              <X size={18} />
              CANCELAR
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
