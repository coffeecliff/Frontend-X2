// ============================================================
// 🔹 PÁGINAS EXCLUSIVAS POR TIPO DE USUÁRIO
// ============================================================
const USER_PAGES = {
  admin: [
    'dashboard',
    'adm-edit',
    'adm-reports',
    'adm-users',
    'adm-settings',
    'profile',
    'logout'
  ],
  user: [
    'dashboard',
    'profile',
    'appointments',
    'new-appointment',
    'contact',
    'logout'
  ]
};

// Aliases compatíveis com o mockReference (adm / cliente)
// Mantemos chaves separadas para suportar ambos os formatos
USER_PAGES.adm = USER_PAGES.admin;
USER_PAGES.cliente = USER_PAGES.user;

/**
 * Retorna as páginas permitidas para o tipo de usuário
 * @param {string} userType - 'admin' ou 'user'
 * @returns {Array} Lista de páginas permitidas
 */
function getUserPages(userType) {
  // Normaliza tipo para garantir compatibilidade
  if (userType === 'adm') return USER_PAGES.adm;
  if (userType === 'cliente') return USER_PAGES.cliente;
  return USER_PAGES[userType] || [];
}
/**
 * MockAPI.js
 * Simula as respostas da API X2 Futebol para desenvolvimento e testes
 * Sem necessidade de backend rodando
 */

// ============================================================
// 🔹 CONFIGURAÇÃO GLOBAL
// ============================================================
const API_BASE_URL = "http://localhost:3000";
const STORAGE_KEY = "x2_mock_auth";

// Dados mockados
let mockData = {
  users: [
    {
      id: 1,
      email: "adm@test.com",
      name: "Administrador",
      phone: "11999999999",
      type: "adm",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: 2,
      email: "cliente@test.com",
      name: "Maria Santos",
      phone: "11988888888",
      type: "cliente",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
  ],
  times: [
    {
      id: 1,
      nome: "Flamengo",
      escudo: "https://via.placeholder.com/100?text=FLA",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: 2,
      nome: "Corinthians",
      escudo: "https://via.placeholder.com/100?text=COR",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: 3,
      nome: "Palmeiras",
      escudo: "https://via.placeholder.com/100?text=PAL",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: 4,
      nome: "São Paulo",
      escudo: "https://via.placeholder.com/100?text=SPF",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
  ],
  jogadores: [
    {
      id: 1,
      nome: "João",
      data_nascimento: "2010-02-05",
      time_id: 1,
      time_nome: "Flamengo",
      foto: null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: 2,
      nome: "Ronaldo",
      data_nascimento: "2015-09-18",
      time_id: 1,
      time_nome: "Flamengo",
      foto: null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: 3,
      nome: "Pedro",
      data_nascimento: "2015-10-23",
      time_id: 2,
      time_nome: "Corinthians",
      foto: null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: 4,
      nome: "Gabriel",
      data_nascimento: "2011-05-10",
      time_id: 1,
      time_nome: "Flamengo",
      foto: null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: 5,
      nome: "Carlos",
      data_nascimento: "2011-08-22",
      time_id: 3,
      time_nome: "Corinthians",
      foto: null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
  ],
  partidas: [],
  tabela: [
    // GRUPO A
    {
      id: 1,
      posicao: 1,
      pontos: 12,
      jogos: 4,
      vitorias: 4,
      empates: 0,
      derrotas: 0,
      gols_pro: 15,
      gols_contra: 2,
      saldo_gols: 13,
      time_id: 1,
      grupo: 'A',
      flag: 'jp.svg',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: 2,
      posicao: 2,
      pontos: 6,
      jogos: 2,
      vitorias: 2,
      empates: 0,
      derrotas: 1,
      gols_pro: 6,
      gols_contra: 1,
      saldo_gols: 1,
      time_id: 2,
      grupo: 'A',
      flag: 'ar.svg',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: 3,
      posicao: 3,
      pontos: 4,
      jogos: 2,
      vitorias: 1,
      empates: 1,
      derrotas: 1,
      gols_pro: 7,
      gols_contra: 2,
      saldo_gols: 2,
      time_id: 3,
      grupo: 'A',
      flag: 'ma.svg',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: 4,
      posicao: 4,
      pontos: 0,
      jogos: 2,
      vitorias: 0,
      empates: 0,
      derrotas: 3,
      gols_pro: 2,
      gols_contra: 2,
      saldo_gols: -2,
      time_id: 4,
      grupo: 'A',
      flag: 'br.svg',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    // GRUPO B
    {
      id: 5,
      posicao: 1,
      pontos: 8,
      jogos: 2,
      vitorias: 2,
      empates: 1,
      derrotas: 0,
      gols_pro: 4,
      gols_contra: 2,
      saldo_gols: 2,
      time_id: 1,
      grupo: 'B',
      flag: 'jp.svg',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: 6,
      posicao: 2,
      pontos: 6,
      jogos: 2,
      vitorias: 2,
      empates: 0,
      derrotas: 1,
      gols_pro: 6,
      gols_contra: 1,
      saldo_gols: 1,
      time_id: 2,
      grupo: 'B',
      flag: 'ar.svg',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: 7,
      posicao: 3,
      pontos: 4,
      jogos: 2,
      vitorias: 1,
      empates: 1,
      derrotas: 1,
      gols_pro: 7,
      gols_contra: 2,
      saldo_gols: 2,
      time_id: 3,
      grupo: 'B',
      flag: 'ma.svg',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: 8,
      posicao: 4,
      pontos: 0,
      jogos: 2,
      vitorias: 0,
      empates: 0,
      derrotas: 3,
      gols_pro: 2,
      gols_contra: 2,
      saldo_gols: -2,
      time_id: 4,
      grupo: 'B',
      flag: 'br.svg',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
  ],
  grupos: [
    {
      id: 1,
      name: "Grupo A",
      teams: [1, 2, 3, 4],
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: 2,
      name: "Grupo B",
      teams: [1, 2, 3, 4],
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
  ],
  patrocinadores: [
    {
      id: 1,
      nome: "Nike",
      logo: "https://via.placeholder.com/150?text=Nike",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: 2,
      nome: "Adidas",
      logo: "https://via.placeholder.com/150?text=Adidas",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
  ],
  tokens: {
    access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.mock_token",
    refresh_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.mock_refresh_token",
    token_type: "bearer",
  },
};

// ============================================================
// 🔹 UTILITÁRIOS
// ============================================================

/**
 * Simula delay de rede
 */
function simulateNetworkDelay(ms = 300) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Retorna resposta com status e dados
 */
function createResponse(data, status = 200) {
  return {
    status,
    data,
    headers: {
      "content-type": "application/json",
    },
  };
}

/**
 * Retorna erro formatado
 */
function createError(message, status = 400, detail = null) {
  return {
    status,
    data: {
      detail: message,
      error_detail: detail,
    },
  };
}

/**
 * Valida email
 */
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

/**
 * Valida password
 */
function isValidPassword(password) {
  return password && password.length >= 6 && password.length <= 72;
}

// ============================================================
// 🔹 AUTH API
// ============================================================

/**
 * POST /auth/register
 */
async function authRegister(data) {
  await simulateNetworkDelay();

  // Validação
  if (!data.email || !isValidEmail(data.email)) {
    return createError("Email inválido", 422);
  }

  if (!data.password || !isValidPassword(data.password)) {
    return createError("Senha deve ter entre 6 e 72 caracteres", 422);
  }

  if (!data.name || data.name.trim() === "") {
    return createError("Nome é obrigatório", 422);
  }

  // Verifica se email já existe
  if (mockData.users.some((u) => u.email === data.email)) {
    return createError("Email já registrado", 400);
  }

  // Cria novo usuário
  const newUser = {
    id: Math.max(...mockData.users.map((u) => u.id), 0) + 1,
    email: data.email,
    name: data.name,
    phone: data.phone || null,
    type: "user",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };

  mockData.users.push(newUser);

  // Simula token
  const tokens = {
    access_token: `mock_access_${newUser.id}`,
    refresh_token: `mock_refresh_${newUser.id}`,
    token_type: "bearer",
    user: newUser,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(tokens));

  return createResponse(tokens, 201);
}

/**
 * POST /auth/login
 */
async function authLogin(data) {
  await simulateNetworkDelay();

  if (!data.email || !data.password) {
    return createError("Email e senha são obrigatórios", 422);
  }

  const user = mockData.users.find((u) => u.email === data.email);

  if (!user) {
    return createError("Email ou senha incorretos", 401);
  }

  // Mock: aceita qualquer senha exceto "wrong"
  if (data.password === "wrong") {
    return createError("Email ou senha incorretos", 401);
  }

  const tokens = {
    access_token: `mock_access_${user.id}`,
    refresh_token: `mock_refresh_${user.id}`,
    token_type: "bearer",
    user,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(tokens));

  return createResponse(tokens, 200);
}

/**
 * POST /auth/refresh
 */
async function authRefresh(data) {
  await simulateNetworkDelay();

  if (!data.refresh_token) {
    return createError("Refresh token é obrigatório", 422);
  }

  // Mock: aceita qualquer refresh_token válido
  if (!data.refresh_token.startsWith("mock_refresh_")) {
    return createError("Refresh token inválido", 401);
  }

  const userId = data.refresh_token.replace("mock_refresh_", "");
  const user = mockData.users.find((u) => u.id == userId);

  if (!user) {
    return createError("Usuário não encontrado", 404);
  }

  const tokens = {
    access_token: `mock_access_${user.id}`,
    refresh_token: `mock_refresh_${user.id}`,
    token_type: "bearer",
  };

  return createResponse(tokens, 200);
}

/**
 * POST /auth/change-password
 */
async function authChangePassword(data) {
  await simulateNetworkDelay();

  // Pega usuário do token (mock)
  const currentUser = getCurrentUser();
  if (!currentUser) {
    return createError("Não autenticado", 401);
  }

  if (!data.current_password || !data.new_password) {
    return createError("Senha atual e nova senha são obrigatórias", 422);
  }

  if (!isValidPassword(data.new_password)) {
    return createError("Nova senha deve ter entre 6 e 72 caracteres", 422);
  }

  // Mock: aceita qualquer senha atual exceto "wrong"
  if (data.current_password === "wrong") {
    return createError("Senha atual incorreta", 400);
  }

  return createResponse({ message: "Senha alterada com sucesso" }, 200);
}

/**
 * GET /auth/me
 */
async function authGetMe() {
  await simulateNetworkDelay();

  const currentUser = getCurrentUser();
  if (!currentUser) {
    return createError("Não autenticado", 401);
  }

  return createResponse(currentUser, 200);
}

// ============================================================
// 🔹 TIMES API
// ============================================================

/**
 * GET /times
 */
async function getTimes(skip = 0, limit = 100) {
  await simulateNetworkDelay();

  const times = mockData.times.slice(skip, skip + limit);
  return createResponse(times, 200);
}

/**
 * GET /times/{id}
 */
async function getTimeById(id) {
  await simulateNetworkDelay();

  const time = mockData.times.find((t) => t.id == id);
  if (!time) {
    return createError("Time não encontrado", 404);
  }

  return createResponse(time, 200);
}

/**
 * POST /times
 */
async function createTime(data) {
  await simulateNetworkDelay();

  if (!getCurrentUser() || getCurrentUser().type !== "admin") {
    return createError("Permissão negada", 403);
  }

  if (!data.nome || data.nome.trim() === "") {
    return createError("Nome do time é obrigatório", 422);
  }

  const newTime = {
    id: Math.max(...mockData.times.map((t) => t.id), 0) + 1,
    nome: data.nome,
    escudo: data.escudo || null,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };

  mockData.times.push(newTime);
  return createResponse(newTime, 201);
}

/**
 * PUT /times/{id}
 */
async function updateTime(id, data) {
  await simulateNetworkDelay();

  if (!getCurrentUser() || getCurrentUser().type !== "admin") {
    return createError("Permissão negada", 403);
  }

  const time = mockData.times.find((t) => t.id == id);
  if (!time) {
    return createError("Time não encontrado", 404);
  }

  if (data.nome) time.nome = data.nome;
  if (data.escudo) time.escudo = data.escudo;
  time.updated_at = new Date().toISOString();

  return createResponse(time, 200);
}

/**
 * DELETE /times/{id}
 */
async function deleteTime(id) {
  await simulateNetworkDelay();

  if (!getCurrentUser() || getCurrentUser().type !== "admin") {
    return createError("Permissão negada", 403);
  }

  const index = mockData.times.findIndex((t) => t.id == id);
  if (index === -1) {
    return createError("Time não encontrado", 404);
  }

  mockData.times.splice(index, 1);
  return createResponse({ message: "Time deletado com sucesso" }, 200);
}

// ============================================================
// 🔹 JOGADORES API
// ============================================================

/**
 * GET /times/{time_id}/jogadores
 */
async function getJogadoresByTime(timeId, skip = 0, limit = 100) {
  await simulateNetworkDelay();

  const time = mockData.times.find((t) => t.id == timeId);
  if (!time) {
    return createError("Time não encontrado", 404);
  }

  const jogadores = mockData.jogadores
    .filter((j) => j.time_id == timeId)
    .slice(skip, skip + limit);

  return createResponse(jogadores, 200);
}

/**
 * GET /jogadores (todos)
 */
async function getJogadores(skip = 0, limit = 100) {
  await simulateNetworkDelay();

  const jogadores = mockData.jogadores.slice(skip, skip + limit);
  return createResponse(jogadores, 200);
}

/**
 * GET /jogadores/{id}
 */
async function getJogadorById(id) {
  await simulateNetworkDelay();

  const jogador = mockData.jogadores.find((j) => j.id == id);
  if (!jogador) {
    return createError("Jogador não encontrado", 404);
  }

  return createResponse(jogador, 200);
}

/**
 * POST /times/{time_id}/jogadores
 */
async function createJogador(timeId, data) {
  await simulateNetworkDelay();

  if (!getCurrentUser() || getCurrentUser().type !== "admin") {
    return createError("Permissão negada", 403);
  }

  const time = mockData.times.find((t) => t.id == timeId);
  if (!time) {
    return createError("Time não encontrado", 404);
  }

  if (!data.nome || data.nome.trim() === "") {
    return createError("Nome do jogador é obrigatório", 422);
  }

  if (!data.data_nascimento) {
    return createError("Data de nascimento é obrigatória", 422);
  }

  const newJogador = {
    id: Math.max(...mockData.jogadores.map((j) => j.id), 0) + 1,
    nome: data.nome,
    data_nascimento: data.data_nascimento,
    time_id: timeId,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };

  mockData.jogadores.push(newJogador);
  return createResponse(newJogador, 201);
}

/**
 * PUT /jogadores/{id}
 */
async function updateJogador(id, data) {
  await simulateNetworkDelay();

  if (!getCurrentUser() || getCurrentUser().type !== "admin") {
    return createError("Permissão negada", 403);
  }

  const jogador = mockData.jogadores.find((j) => j.id == id);
  if (!jogador) {
    return createError("Jogador não encontrado", 404);
  }

  if (data.nome) jogador.nome = data.nome;
  if (data.data_nascimento) jogador.data_nascimento = data.data_nascimento;
  if (data.time_id) jogador.time_id = data.time_id;
  jogador.updated_at = new Date().toISOString();

  return createResponse(jogador, 200);
}

/**
 * DELETE /jogadores/{id}
 */
async function deleteJogador(id) {
  await simulateNetworkDelay();

  if (!getCurrentUser() || getCurrentUser().type !== "admin") {
    return createError("Permissão negada", 403);
  }

  const index = mockData.jogadores.findIndex((j) => j.id == id);
  if (index === -1) {
    return createError("Jogador não encontrado", 404);
  }

  mockData.jogadores.splice(index, 1);
  return createResponse({ message: "Jogador deletado com sucesso" }, 200);
}

// ============================================================
// 🔹 PARTIDAS API
// ============================================================

/**
 * GET /partidas
 */
async function getPartidas(skip = 0, limit = 100) {
  await simulateNetworkDelay();

  const partidas = mockData.partidas.slice(skip, skip + limit);
  return createResponse(partidas, 200);
}

/**
 * GET /partidas/{id}
 */
async function getPartidaById(id) {
  await simulateNetworkDelay();

  const partida = mockData.partidas.find((p) => p.id == id);
  if (!partida) {
    return createError("Partida não encontrada", 404);
  }

  return createResponse(partida, 200);
}

/**
 * POST /partidas
 */
async function createPartida(data) {
  await simulateNetworkDelay();

  if (!getCurrentUser() || getCurrentUser().type !== "admin") {
    return createError("Permissão negada", 403);
  }

  if (!data.data_hora || !data.local) {
    return createError("Data e local são obrigatórios", 422);
  }

  if (!data.time_mandante_id || !data.time_visitante_id) {
    return createError("Times são obrigatórios", 422);
  }

  const newPartida = {
    id: Math.max(...mockData.partidas.map((p) => p.id), 0) + 1,
    data_hora: data.data_hora,
    local: data.local,
    placar_mandante: data.placar_mandante || 0,
    placar_visitante: data.placar_visitante || 0,
    time_mandante_id: data.time_mandante_id,
    time_visitante_id: data.time_visitante_id,
    time_mandante: mockData.times.find((t) => t.id == data.time_mandante_id),
    time_visitante: mockData.times.find((t) => t.id == data.time_visitante_id),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };

  mockData.partidas.push(newPartida);
  return createResponse(newPartida, 201);
}

/**
 * PUT /partidas/{id}
 */
async function updatePartida(id, data) {
  await simulateNetworkDelay();

  if (!getCurrentUser() || getCurrentUser().type !== "admin") {
    return createError("Permissão negada", 403);
  }

  const partida = mockData.partidas.find((p) => p.id == id);
  if (!partida) {
    return createError("Partida não encontrada", 404);
  }

  if (data.data_hora) partida.data_hora = data.data_hora;
  if (data.local) partida.local = data.local;
  if (data.placar_mandante !== undefined)
    partida.placar_mandante = data.placar_mandante;
  if (data.placar_visitante !== undefined)
    partida.placar_visitante = data.placar_visitante;
  partida.updated_at = new Date().toISOString();

  return createResponse(partida, 200);
}

/**
 * DELETE /partidas/{id}
 */
async function deletePartida(id) {
  await simulateNetworkDelay();

  if (!getCurrentUser() || getCurrentUser().type !== "admin") {
    return createError("Permissão negada", 403);
  }

  const index = mockData.partidas.findIndex((p) => p.id == id);
  if (index === -1) {
    return createError("Partida não encontrada", 404);
  }

  mockData.partidas.splice(index, 1);
  return createResponse({ message: "Partida deletada com sucesso" }, 200);
}

// ============================================================
// 🔹 TABELA API
// ============================================================

/**
 * GET /tabela
 */
async function getTabela(skip = 0, limit = 100) {
  await simulateNetworkDelay();

  const tabela = mockData.tabela.slice(skip, skip + limit);
  return createResponse(tabela, 200);
}

// ============================================================
// 🔹 GRUPOS API
// ============================================================

/**
 * GET /grupos
 */
async function getGrupos(skip = 0, limit = 100) {
  await simulateNetworkDelay();

  const grupos = (mockData.grupos || []).slice(skip, skip + limit);
  return createResponse(grupos, 200);
}

// ============================================================
// 🔹 PATROCINADORES API
// ============================================================

/**
 * GET /patrocinadores
 */
async function getPatrocinadores(skip = 0, limit = 100) {
  await simulateNetworkDelay();

  const patrocinadores = mockData.patrocinadores.slice(skip, skip + limit);
  return createResponse(patrocinadores, 200);
}

/**
 * GET /patrocinadores/{id}
 */
async function getPatrocinadorById(id) {
  await simulateNetworkDelay();

  const patrocinador = mockData.patrocinadores.find((p) => p.id == id);
  if (!patrocinador) {
    return createError("Patrocinador não encontrado", 404);
  }

  return createResponse(patrocinador, 200);
}

/**
 * POST /patrocinadores
 */
async function createPatrocinador(data) {
  await simulateNetworkDelay();

  if (!getCurrentUser() || getCurrentUser().type !== "admin") {
    return createError("Permissão negada", 403);
  }

  if (!data.nome || data.nome.trim() === "") {
    return createError("Nome do patrocinador é obrigatório", 422);
  }

  const newPatrocinador = {
    id: Math.max(...mockData.patrocinadores.map((p) => p.id), 0) + 1,
    nome: data.nome,
    logo: data.logo || null,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };

  mockData.patrocinadores.push(newPatrocinador);
  return createResponse(newPatrocinador, 201);
}

/**
 * PUT /patrocinadores/{id}
 */
async function updatePatrocinador(id, data) {
  await simulateNetworkDelay();

  if (!getCurrentUser() || getCurrentUser().type !== "admin") {
    return createError("Permissão negada", 403);
  }

  const patrocinador = mockData.patrocinadores.find((p) => p.id == id);
  if (!patrocinador) {
    return createError("Patrocinador não encontrado", 404);
  }

  if (data.nome) patrocinador.nome = data.nome;
  if (data.logo) patrocinador.logo = data.logo;
  patrocinador.updated_at = new Date().toISOString();

  return createResponse(patrocinador, 200);
}

/**
 * DELETE /patrocinadores/{id}
 */
async function deletePatrocinador(id) {
  await simulateNetworkDelay();

  if (!getCurrentUser() || getCurrentUser().type !== "admin") {
    return createError("Permissão negada", 403);
  }

  const index = mockData.patrocinadores.findIndex((p) => p.id == id);
  if (index === -1) {
    return createError("Patrocinador não encontrado", 404);
  }

  mockData.patrocinadores.splice(index, 1);
  return createResponse({ message: "Patrocinador deletado com sucesso" }, 200);
}

// ============================================================
// 🔹 HELPERS
// ============================================================

/**
 * Obtém usuário atual do localStorage
 */
function getCurrentUser() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return null;

  try {
    const parsed = JSON.parse(stored);
    return parsed.user || null;
  } catch {
    return null;
  }
}

/**
 * Limpa autenticação (logout)
 */
function clearAuth() {
  localStorage.removeItem(STORAGE_KEY);
}

/**
 * Retorna dados mockados brutos
 */
function getMockData() {
  return mockData;
}

/**
 * Reseta dados ao padrão
 */
function resetMockData() {
  location.reload();
}

/**
 * Salva mockData no localStorage
 */
function saveMockDataSync() {
  try {
    localStorage.setItem("x2_football_mockData", JSON.stringify(mockData));
  } catch (error) {
    console.error("Erro ao salvar mockData:", error);
  }
}

// ============================================================
// 🔹 EXPORT (para Node.js e módulos)
// ============================================================

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    // Auth
    authRegister,
    authLogin,
    authRefresh,
    authChangePassword,
    authGetMe,
    // Times
    getTimes,
    getTimeById,
    createTime,
    updateTime,
    deleteTime,
    // Jogadores
    getJogadores,
    getJogadoresByTime,
    getJogadorById,
    createJogador,
    updateJogador,
    deleteJogador,
    // Partidas
    getPartidas,
    getPartidaById,
    createPartida,
    updatePartida,
    deletePartida,
    // Tabela
    getTabela,
    // Patrocinadores
    getPatrocinadores,
    getPatrocinadorById,
    createPatrocinador,
    updatePatrocinador,
    deletePatrocinador,
    // Helpers
    getCurrentUser,
    clearAuth,
    getMockData,
    resetMockData,
  };
}

// Compatibilidade ES module: exporta um objeto `mockApi` com wrappers amigáveis
// usados pelos componentes React (por exemplo: `mockApi.register`, `mockApi.login`).
function handleResponse(res) {
  if (!res) throw new Error("Sem resposta da API mock");
  if (res.status >= 400) {
    const msg = (res.data && (res.data.detail || res.data.error_detail)) || "Erro na API mock";
    throw new Error(msg);
  }
  return res.data;
}

export const mockApi = {
  register: async (data) => {
    const res = await authRegister(data);
    const dataOut = handleResponse(res);
    return {
      user: dataOut.user,
      token: dataOut.access_token,
      pages: getUserPages(dataOut.user.type)
    };
  },
  login: async (email, password) => {
    const res = await authLogin({ email, password });
    const dataOut = handleResponse(res);
    return {
      user: dataOut.user,
      token: dataOut.access_token,
      pages: getUserPages(dataOut.user.type)
    };
  },
    getUserPages,
  refresh: async (refresh_token) => {
    const res = await authRefresh({ refresh_token });
    return handleResponse(res);
  },
  me: async () => {
    const res = await authGetMe();
    return handleResponse(res);
  },
  // Expor outros helpers como passthrough (retornam o `data` bruto)
  getTimes: async (skip, limit) => handleResponse(await getTimes(skip, limit)),
  getJogadores: async (skip, limit) => handleResponse(await getJogadores(skip, limit)),
  getPartidas: async (skip, limit) => handleResponse(await getPartidas(skip, limit)),
  getPatrocinadores: async (skip, limit) => handleResponse(await getPatrocinadores(skip, limit)),
  getTabela: async (skip, limit) => handleResponse(await getTabela(skip, limit)),
  getGrupos: async (skip, limit) => handleResponse(await getGrupos(skip, limit)),
  getCurrentUser,
  clearAuth,
  getMockData,
  resetMockData,
  saveMockDataSync,
};

// Para interoperabilidade CommonJS (se alguém importar via require())
if (typeof module !== "undefined" && module.exports) {
  module.exports.mockApi = module.exports.mockApi || module.exports;
}
