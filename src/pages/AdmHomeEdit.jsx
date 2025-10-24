import { useState, useEffect } from "react";
import { Edit3, Save, X, ImagePlus } from "lucide-react";

export const AdmHomeEdit = () => {
  const [editing, setEditing] = useState(false);

  const initialData = {
    A: [
      { flag: "jp.svg", nome: "Japão", v: "2(1)", d: 0, gm: 4, sg: 2, pontos: 8 },
      { flag: "ar.svg", nome: "Argentina", v: 2, d: 1, gm: 6, sg: 1, pontos: 6 },
      { flag: "ma.svg", nome: "Marrocos", v: "1(1)", d: 1, gm: 7, sg: 2, pontos: 4 },
      { flag: "br.svg", nome: "Brasil", v: 0, d: 3, gm: 2, sg: -2, pontos: 0 },
    ],
    B: [
      { flag: "fr.svg", nome: "França", v: 3, d: 0, gm: 6, sg: 3, pontos: 9 },
      { flag: "ger.svg", nome: "Alemanha", v: 2, d: 1, gm: 4, sg: -1, pontos: 6 },
      { flag: "mx.svg", nome: "México", v: 1, d: 2, gm: 3, sg: -1, pontos: 3 },
      { flag: "pt.svg", nome: "Portugal", v: 0, d: 3, gm: 3, sg: -4, pontos: 0 },
    ],
  };

  const [grupos, setGrupos] = useState(initialData);

  // 🔹 Carrega dados do localStorage
  useEffect(() => {
    const saved = localStorage.getItem("admHomeData");
    if (saved) setGrupos(JSON.parse(saved));
  }, []);

  // 🔹 Salva no localStorage
  const handleSave = () => {
    localStorage.setItem("admHomeData", JSON.stringify(grupos));
    setEditing(false);
  };

  const handleChange = (grupo, index, campo, valor) => {
    const copia = { ...grupos };
    copia[grupo][index][campo] = valor;
    setGrupos(copia);
  };

  const handleFlagChange = (grupo, index, file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const copia = { ...grupos };
      copia[grupo][index].flag = ev.target.result;
      setGrupos(copia);
    };
    reader.readAsDataURL(file);
  };

  const handleCancel = () => {
    const saved = localStorage.getItem("admHomeData");
    if (saved) setGrupos(JSON.parse(saved));
    else setGrupos(initialData);
    setEditing(false);
  };

  const bgCores = ["bg-[#5BC060]", "bg-[#61C466]", "bg-[#69CA6C]", "bg-[#70D072]"];

  const renderTabela = (grupoNome, grupoDados) => (
    <div className="rounded-lg shadow-lg overflow-hidden w-[500px] mx-auto bg-white/90">
      <div className="bg-[#19326C] text-white items-center justify-center flex font-bold py-3 text-lg">
        {`GRUPO ${grupoNome}`}
      </div>
      <table className="w-full text-base text-center font-semibold">
        <thead className="bg-[#19326C] text-white">
          <tr>
            <th className="p-3"></th>
            <th className="p-3">V</th>
            <th className="p-3">D</th>
            <th className="p-3">GM</th>
            <th className="p-3">SG</th>
            <th className="p-3">Pontos</th>
          </tr>
        </thead>
        <tbody>
          {grupoDados.map((time, i) => (
            <tr key={i} className={`text-white ${bgCores[i % bgCores.length]}`}>
              <td className="flex items-center justify-center py-3 mr-4 relative">
                <img
                  src={time.flag}
                  alt={time.nome}
                  className="h-6 mr-2 cursor-pointer"
                  onClick={() => {
                    const input = document.getElementById(`flag-${grupoNome}-${i}`);
                    if (input) input.click();
                  }}
                />
                {editing && (
                  <>
                    <input
                      id={`flag-${grupoNome}-${i}`}
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFlagChange(grupoNome, i, e.target.files[0])}
                      className="hidden"
                    />
                    <ImagePlus
                      size={18}
                      className="cursor-pointer text-white"
                      onClick={() => {
                        const input = document.getElementById(`flag-${grupoNome}-${i}`);
                        if (input) input.click();
                      }}
                    />
                  </>
                )}
              </td>

              {["v", "d", "gm", "sg", "pontos"].map((campo) => (
                <td key={campo} className="py-3">
                  {editing ? (
                    <input
                      type="text"
                      value={time[campo]}
                      onChange={(e) => handleChange(grupoNome, i, campo, e.target.value)}
                      className="w-12 text-center text-black rounded-md p-1"
                    />
                  ) : (
                    time[campo]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <main className="flex-1 p-8">
      <h1 className="text-3xl font-bold text-emerald-900 mb-6 border-b-2 border-emerald-700 pb-2">
        HOME
      </h1>

      <div className="text-center mb-8">
        <h2 className="text-2xl font-extrabold text-emerald-800">
          RESULTADO DO ÚLTIMO JOGO
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-start gap-8">
        {renderTabela("A", grupos.A)}
        {renderTabela("B", grupos.B)}
      </div>

      <div className="flex justify-center mt-10">
        {!editing ? (
          <button
            onClick={() => setEditing(true)}
            className="flex items-center gap-2 cursor-pointer bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 py-2 rounded-lg shadow-md transition"
          >
            <Edit3 size={18} /> EDITAR
          </button>
        ) : (
          <div className="flex gap-4">
            <button
              onClick={handleSave}
              className="flex items-center cursor-pointer gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-2 rounded-lg shadow-md transition"
            >
              <Save size={18} /> SALVAR
            </button>
            <button
              onClick={handleCancel}
              className="flex items-center gap-2 cursor-pointer bg-gray-400 hover:bg-gray-500 text-white font-bold px-6 py-2 rounded-lg shadow-md transition"
            >
              <X size={18} /> CANCELAR
            </button>
          </div>
        )}
      </div>
    </main>
  );
};
