import { useState, useEffect, useContext } from "react";
import { Trophy, Clock, Plus, Trash2, Edit3, Save, X } from "lucide-react";
import { TeamsContext } from "../context/TeamsContext";
import { mockApi } from "../services/mockApi";

export const AdmMatchesEdit = () => {
    const { teams } = useContext(TeamsContext);
    const [matches, setMatches] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [loading, setLoading] = useState(true);

    const [newMatch, setNewMatch] = useState({
        time1_id: "",
        time2_id: "",
        gols_time1: 0,
        gols_time2: 0,
    });

    // Carregar partidas ao montar
    useEffect(() => {
        const loadMatches = async () => {
            try {
                const matchesData = await mockApi.getPartidas();
                setMatches(matchesData);
            } catch (error) {
                console.error("Erro ao carregar partidas:", error);
            } finally {
                setLoading(false);
            }
        };
        loadMatches();
    }, []);

    // Função auxiliar para atualizar tabela baseado em resultado
    const updateTableFromMatch = (match) => {
        const mockData = mockApi.getMockData();
        const tabela = mockData.tabela || [];

        const time1Entry = tabela.find((t) => t.time_id === match.time1_id);
        const time2Entry = tabela.find((t) => t.time_id === match.time2_id);

        if (!time1Entry || !time2Entry) return;

        // Atualizar gols
        time1Entry.gols_pro += match.gols_time1;
        time1Entry.gols_contra += match.gols_time2;
        time2Entry.gols_pro += match.gols_time2;
        time2Entry.gols_contra += match.gols_time1;

        // Atualizar saldo de gols
        time1Entry.saldo_gols = time1Entry.gols_pro - time1Entry.gols_contra;
        time2Entry.saldo_gols = time2Entry.gols_pro - time2Entry.gols_contra;

        // Atualizar jogos
        time1Entry.jogos += 1;
        time2Entry.jogos += 1;

        // Determinar resultado
        if (match.gols_time1 > match.gols_time2) {
            time1Entry.vitorias += 1;
            time1Entry.pontos += 3;
            time2Entry.derrotas += 1;
        } else if (match.gols_time1 < match.gols_time2) {
            time2Entry.vitorias += 1;
            time2Entry.pontos += 3;
            time1Entry.derrotas += 1;
        } else {
            time1Entry.empates += 1;
            time2Entry.empates += 1;
            time1Entry.pontos += 1;
            time2Entry.pontos += 1;
        }
    };

    const addMatch = () => {
        if (!newMatch.time1_id || !newMatch.time2_id || newMatch.time1_id === newMatch.time2_id) {
            alert("Selecione dois times diferentes!");
            return;
        }

        const time1 = teams.find((t) => t.id == newMatch.time1_id);
        const time2 = teams.find((t) => t.id == newMatch.time2_id);

        const match = {
            id: Math.max(...matches.map((m) => m.id), 0) + 1,
            time1_id: parseInt(newMatch.time1_id),
            time2_id: parseInt(newMatch.time2_id),
            time1_nome: time1?.name,
            time2_nome: time2?.name,
            gols_time1: newMatch.gols_time1,
            gols_time2: newMatch.gols_time2,
            status: "agendado",
        };

        const updatedMatches = [...matches, match];
        setMatches(updatedMatches);

        // Persistir
        const mockData = mockApi.getMockData();
        mockData.partidas = updatedMatches;
        mockApi.saveMockDataSync();

        setNewMatch({ time1_id: "", time2_id: "", gols_time1: 0, gols_time2: 0 });
    };

    const finishMatch = (id) => {
        const match = matches.find((m) => m.id === id);
        if (!match) return;

        // Atualizar tabela
        updateTableFromMatch(match);

        // Atualizar status
        const updatedMatches = matches.map((m) =>
            m.id === id ? { ...m, status: "finalizado" } : m
        );
        setMatches(updatedMatches);

        // Persistir
        const mockData = mockApi.getMockData();
        mockData.partidas = updatedMatches;
        mockApi.saveMockDataSync();
    };

    const handleChange = (id, field, value) => {
        const updatedMatches = matches.map((m) =>
            m.id === id
                ? {
                    ...m,
                    [field]: field.includes("gols") ? parseInt(value) || 0 : value,
                }
                : m
        );
        setMatches(updatedMatches);
    };

    const saveMatchChanges = (id) => {
        const mockData = mockApi.getMockData();
        mockData.partidas = matches;
        mockApi.saveMockDataSync();
        setEditingId(null);
    };

    const deleteMatch = (id) => {
        const updatedMatches = matches.filter((m) => m.id !== id);
        setMatches(updatedMatches);

        const mockData = mockApi.getMockData();
        mockData.partidas = updatedMatches;
        mockApi.saveMockDataSync();
    };

    const getStatusBadge = (match) => {
        if (match.status === "agendado") {
            return (
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full flex items-center gap-1">
                    <Clock size={14} />
                    Agendada
                </span>
            );
        }
        return (
            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full flex items-center gap-1">
                <Trophy size={14} />
                Finalizada
            </span>
        );
    };

    return (
        <main className="flex-1 p-8">
            <h1 className="text-3xl font-bold text-accent mb-6 border-b-2 border-accent pb-2">
                PARTIDAS
            </h1>

            <p className="text-white text-sm mt-2 mb-6">
                <span className="font-semibold">Partidas</span><br />
                {matches.length} partidas cadastradas
            </p>

            <div className="space-y-8">
                {/* FORMULÁRIO PARA ADICIONAR PARTIDA */}
                <div className="bg-white rounded-2xl border border-gray-200 p-6">
                    <h3 className="text-lg font-semibold mb-4">Adicionar Partida</h3>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        <select
                            value={newMatch.time1_id}
                            onChange={(e) =>
                                setNewMatch({ ...newMatch, time1_id: e.target.value })
                            }
                            className="bg-gray-50 text-gray-900 rounded px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent/40"
                        >
                            <option value="">Time 1</option>
                            {teams.map((team) => (
                                <option key={team.id} value={team.id}>
                                    {team.name}
                                </option>
                            ))}
                        </select>

                        <input
                            type="number"
                            placeholder="Gols"
                            value={newMatch.gols_time1}
                            onChange={(e) =>
                                setNewMatch({
                                    ...newMatch,
                                    gols_time1: parseInt(e.target.value) || 0,
                                })
                            }
                            className="bg-gray-50 text-gray-900 rounded px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent/40"
                        />

                        <div className="flex items-center justify-center font-bold text-accent text-lg">
                            VS
                        </div>

                        <input
                            type="number"
                            placeholder="Gols"
                            value={newMatch.gols_time2}
                            onChange={(e) =>
                                setNewMatch({
                                    ...newMatch,
                                    gols_time2: parseInt(e.target.value) || 0,
                                })
                            }
                            className="bg-gray-50 text-gray-900 rounded px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent/40"
                        />

                        <select
                            value={newMatch.time2_id}
                            onChange={(e) =>
                                setNewMatch({ ...newMatch, time2_id: e.target.value })
                            }
                            className="bg-gray-50 text-gray-900 rounded px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent/40"
                        >
                            <option value="">Time 2</option>
                            {teams.map((team) => (
                                <option key={team.id} value={team.id}>
                                    {team.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button
                        onClick={addMatch}
                        className="mt-4 cursor-pointer px-6 py-2 bg-accent text-white rounded-lg hover:bg-accent/80 flex items-center gap-2 transition font-medium"
                    >
                        <Plus size={18} />
                        Adicionar Partida
                    </button>
                </div>

                {/* LISTA DE PARTIDAS */}
                <div className="space-y-4">
                    {matches.length === 0 ? (
                        <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
                            <Trophy className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                            <p className="text-gray-500">Nenhuma partida criada</p>
                        </div>
                    ) : (
                        matches.map((match) => (
                            <div
                                key={match.id}
                                className="bg-white rounded-2xl border border-gray-200 p-6"
                            >
                                {editingId === match.id ? (
                                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                                        <input
                                            type="number"
                                            value={match.gols_time1}
                                            onChange={(e) =>
                                                handleChange(match.id, "gols_time1", e.target.value)
                                            }
                                            className="bg-gray-50 text-gray-900 rounded px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent/40"
                                        />
                                        <div className="flex items-center justify-center font-bold text-accent">-</div>
                                        <input
                                            type="number"
                                            value={match.gols_time2}
                                            onChange={(e) =>
                                                handleChange(match.id, "gols_time2", e.target.value)
                                            }
                                            className="bg-gray-50 text-gray-900 rounded px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent/40"
                                        />
                                        <button
                                            onClick={() => saveMatchChanges(match.id)}
                                            className="cursor-pointer bg-green-600 text-white p-2 rounded hover:bg-green-700 flex items-center justify-center gap-2"
                                        >
                                            <Save size={18} />
                                            Salvar
                                        </button>
                                        <button
                                            onClick={() => setEditingId(null)}
                                            className="cursor-pointer bg-gray-400 text-white p-2 rounded hover:bg-gray-500 flex items-center justify-center gap-2"
                                        >
                                            <X size={18} />
                                            Cancelar
                                        </button>
                                    </div>
                                ) : (
                                    <>
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <div className="flex items-center gap-4 mb-2">
                                                    <span className="font-bold text-lg text-gray-900">
                                                        {match.time1_nome}
                                                    </span>
                                                    <span className="text-accent font-bold text-2xl">
                                                        {match.gols_time1} x {match.gols_time2}
                                                    </span>
                                                    <span className="font-bold text-lg text-gray-900">
                                                        {match.time2_nome}
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    {getStatusBadge(match)}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex gap-2 pt-4 border-t border-gray-100">
                                            {match.status === "agendado" && (
                                                <>
                                                    <button
                                                        onClick={() => setEditingId(match.id)}
                                                        className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                                                    >
                                                        <Edit3 size={16} />
                                                        Editar
                                                    </button>
                                                    <button
                                                        onClick={() => finishMatch(match.id)}
                                                        className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                                                    >
                                                        <Trophy size={16} />
                                                        Finalizar
                                                    </button>
                                                </>
                                            )}
                                            <button
                                                onClick={() => deleteMatch(match.id)}
                                                className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition ml-auto"
                                            >
                                                <Trash2 size={16} />
                                                Deletar
                                            </button>
                                        </div>
                                    </>
                                )}
                            </div>
                        ))
                    )}
                </div>
            </div>
        </main>
    );
};
