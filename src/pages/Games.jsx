// src/pages/Games.jsx
import { useState, useEffect, useContext } from "react";
import { TeamsContext } from "../context/TeamsContext";
import { mockApi } from "../services/mockApi";

export const Games = () => {
  const { teams } = useContext(TeamsContext);
  const [matches, setMatches] = useState([]);
  const [groups, setGroups] = useState([]);
  const [table, setTable] = useState([]);
  const [loading, setLoading] = useState(true);

  // Carregar dados ao montar
  useEffect(() => {
    const loadData = async () => {
      try {
        const [matchesData, groupsData, tableData] = await Promise.all([
          mockApi.getPartidas(),
          mockApi.getGrupos?.() || Promise.resolve([]),
          mockApi.getTabela(),
        ]);
        setMatches(matchesData);
        setGroups(groupsData || []);
        setTable(tableData);
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  // Filtrar apenas partidas finalizadas
  const finishedMatches = matches.filter((m) => m.status === "finalizado");

  // Obter 2 melhores times de cada grupo para semifinais
  const getGroupWinners = () => {
    const groupA = table.filter((t) => t.grupo === "A").sort((a, b) => b.pontos - a.pontos);
    const groupB = table.filter((t) => t.grupo === "B").sort((a, b) => b.pontos - a.pontos);

    return {
      semifinal1_1: groupA[0]?.time_id ? teams.find((t) => t.id === groupA[0].time_id)?.name : "",
      semifinal1_2: groupB[0]?.time_id ? teams.find((t) => t.id === groupB[0].time_id)?.name : "",
      semifinal2_1: groupA[1]?.time_id ? teams.find((t) => t.id === groupA[1].time_id)?.name : "",
      semifinal2_2: groupB[1]?.time_id ? teams.find((t) => t.id === groupB[1].time_id)?.name : "",
    };
  };

  // Obter semifinalistas
  const getSemifinalists = () => {
    const semifinalMatches = finishedMatches.filter((m) => m.status === "finalizado");
    // Últimas 2 partidas finalizadas são as semifinais
    if (semifinalMatches.length >= 2) {
      const semi1 = semifinalMatches[semifinalMatches.length - 2];
      const semi2 = semifinalMatches[semifinalMatches.length - 1];
      return {
        finalist1: semi1?.gols_time1 > semi1?.gols_time2 ? semi1.time1_nome : semi1?.time2_nome,
        finalist2: semi2?.gols_time1 > semi2?.gols_time2 ? semi2.time1_nome : semi2?.time2_nome,
      };
    }
    return { finalist1: "", finalist2: "" };
  };

  const TorneioBracket = ({ dados }) => {
    const col1 = dados?.col1 || [];
    const col2 = dados?.col2 || [];
    const col3 = dados?.col3 || [];
    const col4 = dados?.col4 || [];

    return (
      <div className="w-full flex justify-center overflow-x-auto mt-10 mb-10 space-x-4">
        <div className="grid grid-cols-1">
          {/* ==== COLUNA 1 (GRUPOS) ==== */}
          <div className="flex flex-col justify-between h-full space-y-10">
            {[1, 2, 3, 4].map((num, idx) => (
              <div key={num} className="flex items-center space-x-1">
                <span className="text-white text-xl font-bold w-6">{num}</span>

                {/* Box esquerda */}
                <div className="w-45 h-10 bg-white rounded-md shadow flex items-center px-2 text-black text-sm font-semibold">
                  {col1[idx] || ""}
                </div>

                <div className="w-5 h-1 bg-white" />

                {/* Box direita */}
                <div className="w-45 h-10 bg-white rounded-md shadow flex items-center px-2 text-black text-sm font-semibold">
                  {col1[idx + 4] || ""}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Colunas 2, 3, 4 */}
        <div className="grid grid-cols-3 gap-x-5">
          {/* ==== COLUNA 2 (OITAVAS) ==== */}
          <div className="flex flex-col justify-evenly">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="flex items-center">
                <div className="w-6 h-1 bg-white" />
                <div className="w-45 h-10 bg-white rounded-md shadow ml-2 flex items-center px-2 text-black text-sm font-semibold">
                  {col2[i] || ""}
                </div>
              </div>
            ))}
          </div>

          {/* ==== COLUNA 3 (SEMIFINAL) ==== */}
          <div className="flex flex-col justify-evenly">
            {[0, 1].map((i) => (
              <div key={i} className="flex items-center">
                <div className="w-6 h-1 bg-white" />
                <div className="w-45 h-10 bg-white rounded-md shadow ml-2 flex items-center px-2 text-black text-sm font-semibold">
                  {col3[i] || ""}
                </div>
              </div>
            ))}
          </div>

          {/* ==== COLUNA 4 (FINAL) ==== */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center">
              <div className="w-6 h-1 bg-white" />
              <div className="w-45 h-10 bg-white rounded-md shadow ml-2 flex items-center px-2 text-black text-sm font-semibold">
                {col4[0] || ""}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  // Estado do jogo selecionado
  const [jogoSelecionado, setJogoSelecionado] = useState(null);

  // Card de jogo clicável
  const CardJogo = ({ time1_nome, gols_time1, gols_time2, time2_nome, onClick }) => (
    <div
      onClick={onClick}
      className="flex justify-between items-center bg-white rounded-xl shadow-md mb-2 p-3 cursor-pointer hover:bg-white/80 transition"
    >
      <span className="text-xs font-bold text-black bg-light px-2 py-1 rounded-md">
        FINALIZADO
      </span>
      <div className="flex-1 flex justify-center items-center text-gray-800 font-semibold">
        <span>{time1_nome || "—"}</span>
        <span className="mx-3 text-gray-800 font-bold">
          {gols_time1} x {gols_time2}
        </span>
        <span>{time2_nome || "—"}</span>
      </div>
      <span className="text-gray-400 text-lg">›</span>
    </div>
  );

  // Modal de detalhes do jogo
  const ModalJogo = ({ jogo, onClose }) => (
    <div className="fixed inset-0 flex justify-center items-center bg-black/50 backdrop-blur-sm z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-96 p-6 text-center relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 cursor-pointer text-gray-500 hover:text-red-600 text-xl font-bold"
        >
          ×
        </button>
        <h2 className="text-2xl font-extrabold text-dark-800 mb-4">Detalhes do Jogo</h2>
        <p className="text-gray-700 mb-4">
          <span className="font-bold">{jogo.time1_nome}</span> {jogo.gols_time1} x {jogo.gols_time2}{" "}
          <span className="font-bold">{jogo.time2_nome}</span>
        </p>
        <p className="text-gray-500 text-sm mb-4">Status: Finalizado</p>
        <button
          onClick={onClose}
          className="bg-light text-white px-6 py-2 rounded-full cursor-pointer hover:bg-accent transition"
        >
          Fechar
        </button>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="w-full min-h-screen bg-dark flex items-center justify-center">
        <p className="text-white text-xl">Carregando chaveamento...</p>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-dark flex flex-col items-center py-12 px-4 relative overflow-hidden">
      
      {/* Bolas decorativas */}
      <img
        src="/BolasY.png"
        alt="Bola topo esquerdo grande"
        className="absolute top-0 left-0 w-1/4 md:w-1/6 "
      />
      <img
        src="/BolasYR.png"
        alt="Bola topo direito grande"
        className="absolute top-0 right-0 w-1/4 md:w-1/6 "
      />
      <img
        src="/BolasY.png"
        alt="Bola inferior esquerda"
        className="absolute bottom-0 left-0 w-1/4 md:w-1/6 "
      />
      <img
        src="/BolasYR.png"
        alt="Bola inferior direita"
        className="absolute bottom-0 right-0 w-1/4 md:w-1/6"
      />

      {/* Título */}
      <h1 className="text-2xl font-extrabold text-white text-center">
        CHAVEAMENTO
      </h1>
      <h2 className="text-lg font-bold text-white mb-8 text-center">
        DO TORNEIO
      </h2>

      {/* Tabela estilo torneio */}
      <TorneioBracket
        dados={{
          col1: table
            .filter((t) => t.grupo === "A" || t.grupo === "B")
            .sort((a, b) => a.grupo.localeCompare(b.grupo) || b.pontos - a.pontos)
            .slice(0, 8)
            .map((t) => teams.find((tm) => tm.id === t.time_id)?.name || ""),
          col2: [],
          col3: [getGroupWinners().semifinal1_1, getGroupWinners().semifinal2_1],
          col4: [getSemifinalists().finalist1],
        }}
      />

      {/* Título */}
      <h1 className="text-2xl font-extrabold text-white text-center">
        PARTIDAS FINALIZADAS
      </h1>
      <h2 className="text-lg font-bold text-white mb-8 text-center">
        RESULTADOS
      </h2>

      {/* Partidas Finalizadas */}
      <div className="relative z-10 w-full max-w-3xl bg-white/75 rounded-2xl shadow-lg p-6 mb-10 backdrop-blur-sm">
        {finishedMatches.length === 0 ? (
          <p className="text-gray-600 text-center py-6">Nenhuma partida finalizada ainda</p>
        ) : (
          finishedMatches.map((jogo) => (
            <CardJogo
              key={jogo.id}
              time1_nome={jogo.time1_nome}
              gols_time1={jogo.gols_time1}
              gols_time2={jogo.gols_time2}
              time2_nome={jogo.time2_nome}
              onClick={() => setJogoSelecionado(jogo)}
            />
          ))
        )}
      </div>


      {/* Modal */}
      {jogoSelecionado && (
        <ModalJogo
          jogo={jogoSelecionado}
          onClose={() => setJogoSelecionado(null)}
        />
      )}
    </div>
  );
};
