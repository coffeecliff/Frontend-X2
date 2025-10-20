// Importação de rotas do React Router
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
 
// Importa contexto de autenticação
import { useAuth } from '../context/AuthContext';
 
// Componentes reutilizáveis
import { PublicNavbar } from '../components/PublicNavbar';
// import { Sidebar } from '../components/Sidebar';
import { Footer } from "../components/Footer";
// import { LoadingSpinner } from '../components/LoadingSpinner';
 
// Páginas públicas
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Login } from '../pages/Login';
import { Games } from '../pages/Games';
// import { Register } from '../pages/Register';
// import { NotFound } from '../pages/NotFound';

 
// Páginas protegidas (apenas para usuários autenticados)
// import { DashboardPsicologo } from '../pages/DashboardPsicologo';
// import { DashboardPaciente } from '../pages/DashboardPaciente';
// import { Agendamento } from '../pages/Agendamentos';
// import { ChatIA } from '../pages/ChatIA';
// import { Relatorios } from '../pages/Relatorios';
// import { Solicitacoes } from '../pages/Solicitacoes';
// import { Pacientes } from '../pages/Pacientes';
// import { PacienteDetalhes } from '../pages/PacientesDetalhes';
// import { SessaoDetalhes } from '../pages/SessaoDetalhes';
 
/* ==============================
   Componente de rota protegida
   ============================== */


/* ==============================
   Componente de rota pública
   ============================== */
const PublicRoute = ({ children }) => {
  const { user, loading } = useAuth(); // Obtém usuário e estado de carregamento
 
  // if (loading) return <LoadingSpinner size="lg" />; // Mostra spinner enquanto carrega
  if (user) return <Navigate to="/dashboard" replace />; // Redireciona usuário logado para dashboard
 
  return (
    <div  className="bg-cover bg-center min-h-screen w-full "
        style={{backgroundImage: "url('/bg.png')"}}
        >
    <div className="min-h-screen">
      <PublicNavbar /> {/* Navbar pública */}
      <main className="mx-auto">
        {children} {/* Conteúdo da página pública */}
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
    </div>
  );
};

const LogRegRoute = ({ children }) => {
  const { user, loading } = useAuth(); // Obtém usuário e estado de carregamento
 
  // if (loading) return <LoadingSpinner size="lg" />; // Mostra spinner enquanto carrega
  if (user) return <Navigate to="/dashboard" replace />; // Redireciona usuário logado para dashboard
 
  return (
    <div  className="bg-cover bg-center min-h-screen w-full "
        style={{backgroundImage: "url('/bg2.png')"}}
        >
    <div className="min-h-screen">
      <PublicNavbar /> {/* Navbar pública */}
      <main className="mx-auto">
        {children} {/* Conteúdo da página pública */}
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
    </div>
  );
};

/* ==============================
   Componente Dashboard condicional
   ============================== */
const Dashboard = () => {
  const { user } = useAuth();
  // Retorna dashboard específico baseado no tipo do usuário
  return user?.type === 'psicologo' ? <DashboardPsicologo /> : <DashboardPaciente />;
};
 
/* ==============================
   Configuração de rotas da aplicação
   ============================== */
export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
 
        {/* ==============================
           Rotas Públicas
           ============================== */}
        <Route path="/" element={
          <PublicRoute>
            <Home />
          </PublicRoute>
        } />
        <Route path="/about" element={
          <PublicRoute>
            <About/>
          </PublicRoute>
        } />
        <Route path="/login" element={
          <PublicRoute>
            <Login/>
          </PublicRoute>
        } />
               <Route path="/games" element={
          <PublicRoute>
            <Games/>
          </PublicRoute>
        } />
       
        {/* ==============================
           Rotas Protegidas
           ============================== */}

      </Routes>
    </Router>
  );
};