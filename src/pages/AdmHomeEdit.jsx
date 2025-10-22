import { useState } from "react";
import { Edit3, Save, X } from "lucide-react";


export const AdmHomeEdit = () => {
  const [editing, setEditing] = useState(false);

  const [grupos, setGrupos] = useState({
    A: [
      { nome: "Japão", v: "2(1)", d: 0, gm: 4, sg: 2, pontos: 8 },
      { nome: "Argentina", v: 2, d: 1, gm: 6, sg: 1, pontos: 6 },
      { nome: "Marrocos", v: "1(1)", d: 1, gm: 7, sg: 2, pontos: 4 },
      { nome: "Brasil", v: 0, d: 3, gm: 2, sg: -2, pontos: 0 },
    ],
    B: [
      { nome: "França", v: 3, d: 0, gm: 6, sg: 3, pontos: 9 },
      { nome: "Alemanha", v: 2, d: 1, gm: 4, sg: -1, pontos: 6 },
      { nome: "México", v: 1, d: 2, gm: 3, sg: -1, pontos: 3 },
      { nome: "Portugal", v: 0, d: 3, gm: 3, sg: -4, pontos: 0 },
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

  const renderTabela = (grupoNome, grupoDados) => (
    <div className="bg-emerald-700 text-white rounded-xl shadow-lg overflow-hidden">
      <h3 className="text-center font-bold py-2 bg-indigo-950">{`GRUPO ${grupoNome}`}</h3>
      <table className="w-full text-center text-sm">
        <thead className="bg-emerald-800">
          <tr>
            <th className="py-2">Time</th>
            <th>V</th>
            <th>D</th>
            <th>GM</th>
            <th>SG</th>
            <th>Pontos</th>
          </tr>
        </thead>
        <tbody>
          {grupoDados.map((time, i) => (
            <tr key={i} className="odd:bg-emerald-600 even:bg-emerald-700">
              <td className="py-2 font-semibold">{time.nome}</td>
              {["v", "d", "gm", "sg", "pontos"].map((campo) => (
                <td key={campo} className="py-1">
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
              className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 py-2 rounded-lg shadow-md transition"
            >
              <Edit3 size={18} />
              EDITAR
            </button>
          ) : (
            <div className="flex gap-4">
              <button
                onClick={handleSave}
                className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-2 rounded-lg shadow-md transition"
              >
                <Save size={18} />
                SALVAR
              </button>
              <button
                onClick={handleCancel}
                className="flex items-center gap-2 bg-gray-400 hover:bg-gray-500 text-white font-bold px-6 py-2 rounded-lg shadow-md transition"
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
