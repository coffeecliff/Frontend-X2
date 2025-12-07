import { createContext, useState, useEffect } from "react";
import { mockApi } from "../services/mockApi";

export const TeamsContext = createContext();

export const TeamsProvider = ({ children }) => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  // Carregar times ao montar
  useEffect(() => {
    const loadTeams = async () => {
      try {
        const data = await mockApi.getTimes();
        const mappedTeams = data.map((team) => ({
          id: team.id,
          name: team.nome,
          escudo: team.escudo,
        }));
        setTeams(mappedTeams);
      } catch (error) {
        console.error("Erro ao carregar times:", error);
      } finally {
        setLoading(false);
      }
    };

    loadTeams();
  }, []);

  const addTeam = (teamName) => {
    const newTeam = {
      id: Math.max(...teams.map((t) => t.id), 0) + 1,
      name: teamName,
      escudo: null,
    };
    setTeams((prev) => [...prev, newTeam]);
    
    // Persistir no mockApi
    const mockData = mockApi.getMockData();
    mockData.times.push({
      id: newTeam.id,
      nome: newTeam.name,
      escudo: newTeam.escudo,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    });
    mockApi.saveMockDataSync();
    
    return newTeam;
  };

  const removeTeam = (teamId) => {
    setTeams((prev) => prev.filter((t) => t.id !== teamId));
    
    // Persistir no mockApi
    const mockData = mockApi.getMockData();
    mockData.times = mockData.times.filter((t) => t.id !== teamId);
    mockApi.saveMockDataSync();
  };

  const updateTeam = (teamId, updates) => {
    setTeams((prev) =>
      prev.map((t) => (t.id === teamId ? { ...t, ...updates } : t))
    );
  };

  return (
    <TeamsContext.Provider value={{ teams, loading, addTeam, removeTeam, updateTeam }}>
      {children}
    </TeamsContext.Provider>
  );
};
