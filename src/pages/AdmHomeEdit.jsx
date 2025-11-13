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

  useEffect(() => {
    const saved = localStorage.getItem("admHomeData");
    if (saved) setGrupos(JSON.parse(saved));
  }, []);

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

  // ✅ Nova paleta de tons amarelos
  const bgCores = [
    "bg-[#F9D64A]",
    "bg-[#F7C934]",
    "bg-[#F2C230]",
    "bg-[#E5B21D]",
  ];

  const renderTabela = (grupoNome, grupoDados) => (
    <div className="rounded-lg shadow-lg overflow-hidden w-[500px] mx-auto bg-[#FFF8E1] border border-black/20">
      <div className="bg-black text-[#F2C230] flex font-bold py-3 text-lg justify-center">
        {`GRUPO ${grupoNome}`}
      </div>

      <table className="w-full text-base text-center font-semibold">
        <thead className="bg-black text-[#F2C230]">
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
            <tr key={i} className={`text-black ${bgCores[i % bgCores.length]}`}>
              <td className="flex items-center justify-center py-3 relative">

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
                      className="cursor-pointer text-black"
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
                      className="w-12 text-center text-black border border-black/40 rounded-md p-1 bg-white"
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
      {/* Título */}
      <h1 className="text-3xl font-bold text-accent mb-6 border-b-2 border-accent pb-2">
        HOME
      </h1>

      <div className="text-center mb-8">
        <h2 className="text-2xl font-extrabold text-accent">
          RESULTADO DO ÚLTIMO JOGO
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-start gap-8">
        {renderTabela("A", grupos.A)}
        {renderTabela("B", grupos.B)}
      </div>

      {/* Botões */}
      <div className="flex justify-center mt-10">
        {!editing ? (
          <button
            onClick={() => setEditing(true)}
            className="flex items-center gap-2 bg-[#F2C230] hover:bg-[#E5B21D] text-black font-bold px-6 py-2 rounded-lg shadow-md transition"
          >
            <Edit3 size={18} /> EDITAR
          </button>
        ) : (
          <div className="flex gap-4">
            <button
              onClick={handleSave}
              className="flex items-center gap-2 bg-[#FFDA59] hover:bg-[#FFCA28] text-black font-bold px-6 py-2 rounded-lg shadow-md transition"
            >
              <Save size={18} /> SALVAR
            </button>

            <button
              onClick={handleCancel}
              className="flex items-center gap-2 bg-black/70 hover:bg-black text-white font-bold px-6 py-2 rounded-lg shadow-md transition"
            >
              <X size={18} /> CANCELAR
            </button>
          </div>
        )}
      </div>
    </main>
  );
};
