// src/pages/AdmGroupsEdit.jsx
import { useState, useEffect, useContext } from "react";
import { Plus, Users, Trash2, Shuffle } from "lucide-react";
import { TeamsContext } from "../context/TeamsContext";
import { mockApi } from "../services/mockApi";

export const AdmGroupsEdit = () => {
  const { teams } = useContext(TeamsContext);

  const [groups, setGroups] = useState([]);
  const [newGroupName, setNewGroupName] = useState("");

  // Carregar grupos ao montar o componente
  useEffect(() => {
    const loadGroups = async () => {
      try {
        const mockData = mockApi.getMockData();
        // Se não houver grupos, iniciar vazio
        if (!mockData.grupos) {
          mockData.grupos = [];
          mockApi.saveMockDataSync();
        }
        // Faz uma cópia para evitar referência duplicada
        setGroups([...mockData.grupos]);
      } catch (error) {
        console.error("Erro ao carregar grupos:", error);
      }
    };

    loadGroups();
  }, []);

  // ==== Funções com persistência ====
  const addGroup = () => {
    if (!newGroupName.trim()) return;
    
    // 1. Atualizar mockApi PRIMEIRO
    const mockData = mockApi.getMockData();
    if (!mockData.grupos) mockData.grupos = [];
    
    const newGroup = {
      id: Math.max(...mockData.grupos.map((g) => g.id), 0) + 1,
      name: newGroupName,
      teams: [],
    };
    
    mockData.grupos.push(newGroup);
    mockApi.saveMockDataSync();
    
    // 2. Depois atualizar o state React
    setGroups([...mockData.grupos]);
    setNewGroupName("");
  };

  const removeGroup = (groupId) => {
    // 1. Atualizar mockApi PRIMEIRO
    const mockData = mockApi.getMockData();
    if (mockData.grupos) {
      mockData.grupos = mockData.grupos.filter((g) => g.id !== groupId);
      mockApi.saveMockDataSync();
    }
    
    // 2. Depois atualizar o state React
    setGroups([...mockData.grupos]);
  };

  const addTeamToGroup = (groupId, teamId) => {
    const team = teams.find((t) => t.id == teamId);
    if (!team) return;

    // 1. Atualizar mockApi PRIMEIRO
    const mockData = mockApi.getMockData();
    if (mockData.grupos) {
      mockData.grupos = mockData.grupos.map((g) =>
        g.id === groupId
          ? { ...g, teams: [...(g.teams || []), team] }
          : g
      );
      mockApi.saveMockDataSync();
    }

    // 2. Depois atualizar o state React
    setGroups([...mockData.grupos]);
  };

  const removeTeamFromGroup = (groupId, teamId) => {
    // 1. Atualizar mockApi PRIMEIRO
    const mockData = mockApi.getMockData();
    if (mockData.grupos) {
      mockData.grupos = mockData.grupos.map((g) =>
        g.id === groupId
          ? { ...g, teams: (g.teams || []).filter((t) => t.id !== teamId) }
          : g
      );
      mockApi.saveMockDataSync();
    }

    // 2. Depois atualizar o state React
    setGroups([...mockData.grupos]);
  };

  return (
    <main className="flex-1 p-8">
      <h1 className="text-3xl font-bold text-accent mb-6 border-b-2 border-accent pb-2">
        GRUPOS
      </h1>

      <div className="space-y-6">
        {/* Criar Grupo */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Criar Novo Grupo</h2>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Nome do grupo"
              value={newGroupName}
              onChange={(e) => setNewGroupName(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && addGroup()}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-light"
            />
            <button
              onClick={addGroup}
              className="px-4 py-2 cursor-pointer bg-accent text-white rounded-md hover:bg-llight flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Criar Grupo
            </button>
          </div>
        </div>

        {/* Listagem dos Grupos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((group) => (
            <div key={group.id} className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                <h3 className="text-lg font-semibold">{group.name}</h3>
                <button
                  onClick={() => removeGroup(group.id)}
                  className="text-red-600 hover:text-red-800 p-1 cursor-pointer"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-500">
                    {group.teams.length} equipes
                  </span>
                </div>

                {/* Times dentro do grupo */}
                <div className="space-y-2 mb-4">
                  {group.teams.map((team) => (
                    <div
                      key={team.id}
                      className="flex justify-between items-center bg-gray-50 px-3 py-2 rounded"
                    >
                      <span className="text-sm">{team.name}</span>
                      <button
                        onClick={() => removeTeamFromGroup(group.id, team.id)}
                        className="text-red-600 hover:text-red-800 cursor-pointer"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Select para adicionar times */}
                <select
                  onChange={(e) => {
                    if (e.target.value) {
                      addTeamToGroup(group.id, parseInt(e.target.value));
                      e.target.value = "";
                    }
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm "
                >
                  <option value="">Adicionar equipe...</option>
                  {teams
                    .filter(
                      (team) =>
                        !group.teams.find((t) => t.id === team.id)
                    )
                    .map((team) => (
                      <option key={team.id} value={team.id}>
                        {team.name}
                      </option>
                    ))}
                </select>
              </div>
            </div>
          ))}
        </div>

        {groups.length === 0 && (
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Nenhum grupo criado
            </h3>
            <p className="text-gray-500">
              Crie grupos para organizar as equipes
            </p>
          </div>
        )}
      </div>
    </main>
  );
};
