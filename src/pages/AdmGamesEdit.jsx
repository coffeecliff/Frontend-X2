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

  const handleCancel = () => window.location.reload();

  const CardJogo = ({ jogo }) => (
    <div className="flex justify-between items-center bg-[#FFF8E1] rounded-xl shadow-md mb-2 p-3 border border-black/20">
      <span className="text-xs font-bold text-black bg-[#F2C230] px-2 py-1 rounded-md shadow">
        ENCERRADO
      </span>

      <div className="flex-1 flex justify-center items-center text-black font-semibold">
        {editing ? (
          <>
            <input
              type="text"
              value={jogo.time1}
              onChange={(e) => handleChange(jogo.id, "time1", e.target.value)}
              className="w-24 text-center text-black border border-black/40 rounded-md p-1 mx-1 bg-white"
            />
            <input
              type="number"
              value={jogo.placar1}
              onChange={(e) => handleChange(jogo.id, "placar1", e.target.value)}
              className="w-12 text-center text-black border border-black/40 rounded-md p-1 mx-1 bg-white"
            />

            <span className="font-bold mx-1">x</span>

            <input
              type="number"
              value={jogo.placar2}
              onChange={(e) => handleChange(jogo.id, "placar2", e.target.value)}
              className="w-12 text-center text-black border border-black/40 rounded-md p-1 mx-1 bg-white"
            />
            <input
              type="text"
              value={jogo.time2}
              onChange={(e) => handleChange(jogo.id, "time2", e.target.value)}
              className="w-24 text-center text-black border border-black/40 rounded-md p-1 mx-1 bg-white"
            />
          </>
        ) : (
          <>
            <span>{jogo.time1}</span>
            <span className="mx-3 font-bold">
              {jogo.placar1} x {jogo.placar2}
            </span>
            <span>{jogo.time2}</span>
          </>
        )}
      </div>
    </div>
  );

  return (
    <main className="flex-1 p-8">
      <h1 className="text-3xl font-bold text-accent mb-6 border-b-2 border-accent pb-2">
        JOGOS
      </h1>

      <div className="w-full min-h-screen bg-dark flex flex-col items-center py-12 px-4 relative overflow-hidden">

        <h1 className="text-2xl font-extrabold text-white text-center">
          TABELA
        </h1>
        <h2 className="text-lg font-bold text-white mb-8 text-center">
          DOS JOGOS
        </h2>

        <div className="relative z-10 w-full max-w-3xl bg-white/40 border border-black/20 rounded-2xl shadow-lg p-6 mb-10 backdrop-blur-sm">
          {jogos.map((jogo) => (
            <CardJogo key={jogo.id} jogo={jogo} />
          ))}
        </div>

        <div className="relative z-10 w-full max-w-3xl bg-white/40 border border-black/20 rounded-2xl shadow-lg p-6 mb-10 backdrop-blur-sm">
          {jogos.map((jogo) => (
            <CardJogo key={jogo.id + "-b"} jogo={jogo} />
          ))}
        </div>

        <div className="flex justify-center mt-6">
          {!editing ? (
            <button
              onClick={() => setEditing(true)}
              className="flex items-center gap-2 bg-[#F2C230] hover:bg-[#E5B21D] text-black font-bold px-6 py-2 rounded-lg shadow-md transition"
            >
              <Edit3 size={18} />
              EDITAR
            </button>
          ) : (
            <div className="flex gap-4">
              <button
                onClick={handleSave}
                className="flex items-center gap-2 bg-[#FFDA59] hover:bg-[#FFCA28] text-black font-bold px-6 py-2 rounded-lg shadow-md transition"
              >
                <Save size={18} />
                SALVAR
              </button>

              <button
                onClick={handleCancel}
                className="flex items-center gap-2 bg-black/70 hover:bg-black text-white font-bold px-6 py-2 rounded-lg shadow-md transition"
              >
                <X size={18} />
                CANCELAR
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};
