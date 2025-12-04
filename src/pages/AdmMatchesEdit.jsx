import { useState } from "react";
import { Play, Trophy, Clock, Plus, ChevronRight, Users } from "lucide-react";

export const AdmMatchesEdit = () => {

    // ===============================
    // DADOS FIXOS
    // ===============================
    const [teams] = useState([
        { id: 1, name: "Time A" },
        { id: 2, name: "Time B" },
        { id: 3, name: "Time C" },
        { id: 4, name: "Time D" },
    ]);

    const [phases] = useState({
        groups: { name: "Fase de Grupos" },
        semifinals: { name: "Semifinais" },
        final: { name: "Final" }
    });

    const [currentPhase, setCurrentPhase] = useState("groups");

    const [matches, setMatches] = useState([
        {
            id: 1,
            team1: { id: 1, name: "Time A" },
            team2: { id: 2, name: "Time B" },
            goals1: "",
            goals2: "",
            status: "pending",
            draw: false,
            winner: null,
            phase: "Grupo A",
            phaseType: "groups",
            createdAt: new Date()
        },
        {
            id: 2,
            team1: { id: 3, name: "Time C" },
            team2: { id: 4, name: "Time D" },
            goals1: "",
            goals2: "",
            status: "pending",
            draw: false,
            winner: null,
            phase: "Grupo B",
            phaseType: "groups",
            createdAt: new Date()
        }
    ]);

    // ===============================
    // FUNÇÕES
    // ===============================

    // apenas altera gols (não encerra partida)
    const updateGoals = (matchId, g1, g2) => {
        setMatches((prev) =>
            prev.map((m) =>
                m.id === matchId ? { ...m, goals1: g1, goals2: g2 } : m
            )
        );
    };

    // encerra a partida definindo vencedor/empate
    const finishMatch = (match) => {
        const g1 = parseInt(match.goals1 ?? 0);
        const g2 = parseInt(match.goals2 ?? 0);

        let winner = null;
        let draw = false;

        if (g1 > g2) winner = match.team1;
        else if (g2 > g1) winner = match.team2;
        else draw = true;

        setMatches((prev) =>
            prev.map((m) =>
                m.id === match.id
                    ? {
                        ...m,
                        status: "completed",
                        winner: draw ? null : winner,
                        draw,
                        completedAt: new Date()
                    }
                    : m
            )
        );
    };

    const resetMatch = (matchId) => {
        setMatches((prev) =>
            prev.map((match) =>
                match.id === matchId
                    ? {
                        ...match,
                        status: "pending",
                        draw: false,
                        winner: null,
                        goals1: "",
                        goals2: ""
                    }
                    : match
            )
        );
    };

    const addMatch = (newMatch) => {
        setMatches((prev) => [
            ...prev,
            {
                id: prev.length + 1,
                createdAt: new Date(),
                status: "pending",
                draw: false,
                winner: null,
                goals1: "",
                goals2: "",
                ...newMatch
            }
        ]);
    };

    const isCurrentPhaseComplete = () => {
        return matches
            .filter((m) => m.phaseType === currentPhase)
            .every((m) => m.status === "completed");
    };

    const advanceToNextPhase = () => {
        if (currentPhase === "groups") setCurrentPhase("semifinals");
        else if (currentPhase === "semifinals") setCurrentPhase("final");
    };

    // ===============================
    // FORM NOVA PARTIDA
    // ===============================
    const [showAddMatch, setShowAddMatch] = useState(false);
    const [newMatch, setNewMatch] = useState({
        team1Id: "",
        team2Id: "",
        phase: "Fase de Grupos"
    });

    // badge visual
    const getStatusBadge = (match) => {
        if (match.status === "pending") {
            return (
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    Pendente
                </span>
            );
        }
        if (match.draw) {
            return (
                <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
                    Empate
                </span>
            );
        }
        return (
            <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full flex items-center gap-1">
                <Trophy className="w-3 h-3" />
                Finalizada
            </span>
        );
    };

    // ===============================
    // RENDER
    // ===============================

    return (
        <main className="flex-1 p-8">
            <h1 className="text-3xl font-bold text-accent mb-6 border-b-2 border-accent pb-2">
                PARTIDAS
            </h1>

            <div className="space-y-6">

                {/* TÍTULO E BOTÃO */}
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-bold text-gray-900"></h1>

                    {teams.length >= 2 && (
                        <button
                            onClick={() => setShowAddMatch(!showAddMatch)}
                            className="px-4 py-2 bg-accent text-white rounded-md hover:bg-light flex items-center gap-2"
                        >
                            <Plus className="w-4 h-4" />
                            Nova Partida
                        </button>
                    )}
                </div>

                {/* FORM DE NOVA PARTIDA */}
                {showAddMatch && (
                    <div className="bg-white rounded-lg shadow p-6">
                        <h2 className="text-lg font-semibold mb-4">Criar Nova Partida</h2>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <select
                                value={newMatch.team1Id}
                                onChange={(e) =>
                                    setNewMatch((p) => ({ ...p, team1Id: e.target.value }))
                                }
                                className="px-3 py-2 border border-gray-300 rounded-md"
                            >
                                <option value="">Selecione Equipe 1</option>
                                {teams.map((team) => (
                                    <option key={team.id} value={team.id}>
                                        {team.name}
                                    </option>
                                ))}
                            </select>

                            <select
                                value={newMatch.team2Id}
                                onChange={(e) =>
                                    setNewMatch((p) => ({ ...p, team2Id: e.target.value }))
                                }
                                className="px-3 py-2 border border-gray-300 rounded-md"
                            >
                                <option value="">Selecione Equipe 2</option>
                                {teams
                                    .filter((t) => t.id != newMatch.team1Id)
                                    .map((team) => (
                                        <option key={team.id} value={team.id}>
                                            {team.name}
                                        </option>
                                    ))}
                            </select>

                            <input
                                type="text"
                                value={newMatch.phase}
                                onChange={(e) =>
                                    setNewMatch((p) => ({ ...p, phase: e.target.value }))
                                }
                                className="px-3 py-2 border border-gray-300 rounded-md"
                            />

                            <button
                                onClick={() => {
                                    const t1 = teams.find((t) => t.id == newMatch.team1Id);
                                    const t2 = teams.find((t) => t.id == newMatch.team2Id);
                                    if (t1 && t2) {
                                        addMatch({
                                            team1: t1,
                                            team2: t2,
                                            phase: newMatch.phase,
                                            phaseType: currentPhase,
                                        });
                                    }
                                    setShowAddMatch(false);
                                }}
                                className="px-4 py-2 bg-accent text-white rounded-md hover:bg-light"
                            >
                                Criar
                            </button>
                        </div>
                    </div>
                )}

                {/* MATCHES */}
                <div className="space-y-4">
                    {matches.map((match) => (
                        <div key={match.id} className="bg-white rounded-lg shadow p-6">

                            {/* HEADER */}
                            <div className="flex items-center gap-2 mb-4">
                                <span className="text-sm font-medium">{match.phase}</span>
                                {getStatusBadge(match)}
                            </div>

                            <div className="flex items-center justify-center gap-6">
                                <h3 className="text-lg font-semibold text-gray-800">{match.team1.name}</h3>

                                <span className="text-2xl font-bold text-gray-400">VS</span>

                                <h3 className="text-lg font-semibold text-gray-800">{match.team2.name}</h3>
                            </div>


                            {/* INPUTS DE GOLS */}
                            {match.status === "pending" && (
                                <div>
                                <div className="justify-center flex mt-4"><h1>Gols</h1></div>
                                <div className="mt-4 flex justify-center gap-6">
                                    
                                    <input
                                        type="number"
                                        className="w-16 px-2 py-1 border rounded text-center"
                                        value={match.goals1}
                                        onChange={(e) =>
                                            updateGoals(match.id, e.target.value, match.goals2)
                                        }
                                    />

                                    <input
                                        type="number"
                                        className="w-16 px-2 py-1 border rounded text-center"
                                        value={match.goals2}
                                        onChange={(e) =>
                                            updateGoals(match.id, match.goals1, e.target.value)
                                        }
                                    />
                                </div>
                                </div>
                            )}

                            {/* BOTÃO ENCERRAR */}
                            {match.status === "pending" && (
                                <div className="mt-4 text-center">
                                    <button
                                        onClick={() => finishMatch(match)}
                                        className="px-4 py-2 bg-accent text-white rounded-md hover:bg-light"
                                    >
                                        Encerrar Partida
                                    </button>
                                </div>
                            )}

                            {/* RESULTADO */}
                            {match.status === "completed" && (
                                <>
                                    <div className="mt-4 p-3 bg-gray-50 rounded-lg text-center">
                                        {match.draw
                                            ? `Empate: ${match.goals1} x ${match.goals2}`
                                            : `Vencedor: ${match.winner.name} (${match.goals1} x ${match.goals2})`}
                                    </div>

                                    <div className="mt-3 text-center">
                                        <button
                                            className="px-4 py-2 bg-gray-500 text-white rounded-md"
                                            onClick={() => resetMatch(match.id)}
                                        >
                                            Resetar
                                        </button>
                                    </div>
                                </>
                            )}

                        </div>
                    ))}
                </div>

            </div>
        </main>
    );
};
