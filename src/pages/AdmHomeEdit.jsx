import { useState } from "react";
import { Edit3, Save, X } from "lucide-react";

export const AdmHomeEdit = () => {
  const [editing, setEditing] = useState(false);

  const [grupos, setGrupos] = useState({
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
  });

  const handleChange = (grupo, index, campo, valor) => {
    const copia = { ...grupos };
    copia[grupo][index][campo] = valor;
    setGrupos(copia);
  };

  const handleSave = () => {
    console.log("Tabelas salvas:", grupos);
    setEditing(false);
  };

  const handleCancel = () => {
    window.location.reload();
  };

  const bgCores = ["bg-[#5BC060]", "bg-[#61C466]", "bg-[#69CA6C]", "bg-[#70D072]"];

  const renderTabela = (grupoNome, grupoDados) => (
    <div className="rounded-xl shadow-lg overflow-hidden">
      <h3 className="text-center font-bold py-2 bg-indigo-950 text-white">{`GRUPO ${grupoNome}`}</h3>
      <table className="w-full text-base text-centerp-4 font-semibold">
        <thead className=" bg-[#19326C] text-white ">
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
              <td className="flex mr-4 p-4 items-center justify-center py-3">
                <img src={`/${time.flag}`} alt={time.nome} className="h-6 mr-4" />
              </td>
              {["v", "d", "gm", "sg", "pontos"].map((campo) => (
                <td key={campo} className="py-3">
                  {editing ? (
                    <input
                      type="text"
                      value={time[campo]}
                      onChange={(e) =>
                        handleChange(grupoNome, i, campo, e.target.value)
                      }
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
            <Edit3 size={18} />
            EDITAR
          </button>
        ) : (
          <div className="flex gap-4">
            <button
              onClick={handleSave}
              className="flex items-center cursor-pointer gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-2 rounded-lg shadow-md transition"
            >
              <Save size={18} />
              SALVAR
            </button>
            <button
              onClick={handleCancel}
              className="flex items-center gap-2 cursor-pointer bg-gray-400 hover:bg-gray-500 text-white font-bold px-6 py-2 rounded-lg shadow-md transition"
            >
              <X size={18} />
              CANCELAR
            </button>
          </div>
        )}
      </div>
    </main>
  );
};
