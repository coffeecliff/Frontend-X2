import { useState } from "react";
import { Edit3, Save, X, ImagePlus, PlusCircle } from "lucide-react";

export const AdmPlayersEdit = () => {
  const [search, setSearch] = useState("");

  const [players, setPlayers] = useState([
    { id: 1, nome: "João Silva", idade: 22, time: "Flamengo", foto: null },
    { id: 2, nome: "Carlos Pereira", idade: 28, time: "Corinthians", foto: null },
  ]);

  const [editingId, setEditingId] = useState(null);
  const [adding, setAdding] = useState(false);

  const [newPlayer, setNewPlayer] = useState({
    nome: "",
    idade: "",
    time: "",
    foto: null,
  });

  const handleChange = (id, field, value) => {
    setPlayers((prev) =>
      prev.map((p) => (p.id === id ? { ...p, [field]: value } : p))
    );
  };

  const handleImageUpload = (id, file) => {
    const reader = new FileReader();
    reader.onload = () => {
      setPlayers((prev) =>
        prev.map((p) => (p.id === id ? { ...p, foto: reader.result } : p))
      );
    };
    if (file) reader.readAsDataURL(file);
  };

  const handleNewImage = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      setNewPlayer((prev) => ({ ...prev, foto: reader.result }));
    };
    if (file) reader.readAsDataURL(file);
  };

  const addPlayer = () => {
    const id = Math.floor(Math.random() * 999999);

    const playerToAdd = {
      id,
      nome: newPlayer.nome,
      idade: newPlayer.idade,
      time: newPlayer.time,
      foto: newPlayer.foto,
    };

    setPlayers((prev) => [...prev, playerToAdd]);

    setNewPlayer({ nome: "", idade: "", time: "", foto: null });
    setAdding(false);
  };

  const filtered = players.filter((p) =>
    p.nome.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="flex-1 p-8">
      <h1 className="text-3xl font-bold text-accent mb-6 border-b-2 border-accent pb-2">
        JOGADORES
      </h1>

      {/* BOTÃO ADICIONAR */}
      <button
        className="flex items-center gap-2 cursor-pointer bg-accent text-black font-bold px-4 py-2 rounded mb-4"
        onClick={() => setAdding(!adding)}
      >
        <PlusCircle size={20} /> Adicionar Jogador
      </button>

      {/* FORMULÁRIO ADICIONAR */}
      {adding && (
        <div className="bg-neutral-900 border border-neutral-700 p-4 rounded-lg mb-6">
          <h2 className="text-xl mb-3 font-semibold">Novo Jogador</h2>

          <div className="flex gap-4 items-center">

            {/* Foto */}
            <div className="relative">
              <img
                src={
                  newPlayer.foto ||
                  "https://via.placeholder.com/80?text=Foto"
                }
                className="w-20 h-20 rounded object-cover border border-neutral-600"
              />

              <label className="absolute bottom-0 right-0 bg-accent p-1 rounded cursor-pointer">
                <ImagePlus size={18} />
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleNewImage(e.target.files[0])}
                />
              </label>
            </div>

            <div className="flex-1 grid grid-cols-3 gap-3">
              <input
                className="p-2 rounded bg-black border border-neutral-700 text-white"
                placeholder="Nome"
                value={newPlayer.nome}
                onChange={(e) =>
                  setNewPlayer({ ...newPlayer, nome: e.target.value })
                }
              />

              <input
                className="p-2 rounded bg-black border border-neutral-700 text-white"
                placeholder="Idade"
                type="number"
                value={newPlayer.idade}
                onChange={(e) =>
                  setNewPlayer({ ...newPlayer, idade: e.target.value })
                }
              />

              <input
                className="p-2 rounded bg-black border border-neutral-700 text-white"
                placeholder="Time"
                value={newPlayer.time}
                onChange={(e) =>
                  setNewPlayer({ ...newPlayer, time: e.target.value })
                }
              />
            </div>

            <button
              className="bg-green-600 px-4 cursor-pointer py-2 rounded text-white font-semibold"
              onClick={addPlayer}
            >
              Salvar
            </button>
          </div>
        </div>
      )}

      {/* FILTRO */}
      <input
        type="text"
        placeholder="Pesquisar jogador..."
        className="w-full p-2 rounded bg-neutral-900 text-white mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* LISTA */}
      <div className="space-y-4">
        {filtered.map((player) => (
          <div
            key={player.id}
            className="bg-neutral-900 p-4 rounded-lg border border-neutral-700 flex gap-4 items-center"
          >
            {/* FOTO */}
            <div className="relative">
              <img
                src={
                  player.foto ||
                  "https://via.placeholder.com/80?text=Foto"
                }
                className="w-20 h-20 rounded object-cover border border-neutral-600"
              />

              <label className="absolute bottom-0 right-0 bg-accent p-1 rounded cursor-pointer">
                <ImagePlus size={18} />
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) =>
                    handleImageUpload(player.id, e.target.files[0])
                  }
                />
              </label>
            </div>

            {/* CAMPOS */}
            <div className="flex-1 grid grid-cols-3 gap-3">
              <input
                className="p-2 rounded bg-black border border-neutral-700 text-white"
                value={player.nome}
                disabled={editingId !== player.id}
                onChange={(e) =>
                  handleChange(player.id, "nome", e.target.value)
                }
              />

              <input
                className="p-2 rounded bg-black border border-neutral-700 text-white"
                type="number"
                value={player.idade}
                disabled={editingId !== player.id}
                onChange={(e) =>
                  handleChange(player.id, "idade", e.target.value)
                }
              />

              <input
                className="p-2 rounded bg-black border border-neutral-700 text-white"
                value={player.time}
                disabled={editingId !== player.id}
                onChange={(e) =>
                  handleChange(player.id, "time", e.target.value)
                }
              />
            </div>

            {/* BOTÕES */}
            {editingId === player.id ? (
              <button
                className="bg-green-600 px-3 py-2 rounded text-white flex items-center gap-1"
                onClick={() => setEditingId(null)}
              >
                <Save size={18} /> Salvar
              </button>
            ) : (
              <button
                className="bg-blue-600 px-3 py-2 cursor-pointer rounded text-white flex items-center gap-1"
                onClick={() => setEditingId(player.id)}
              >
                <Edit3 size={18} /> Editar
              </button>
            )}

            <button
              className="bg-red-600 px-3 py-2 cursor-pointer rounded text-white flex items-center gap-1"
              onClick={() =>
                setPlayers(players.filter((p) => p.id !== player.id))
              }
            >
              <X size={18} /> Remover
            </button>
          </div>
        ))}
      </div>
    </main>
  );
};
