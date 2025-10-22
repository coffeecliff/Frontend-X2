// Importação de rotas do React Router
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
 
// Importa contexto de autenticação
import { useAuth } from '../context/AuthContext';
 
// Componentes reutilizáveis
import { PublicNavbar } from '../components/PublicNavbar';
import { PrivateNavbar } from '../components/PrivateNavbar';
import { Sidebar } from '../components/Sidebar';
import { Footer } from "../components/Footer";
// import { LoadingSpinner } from '../components/LoadingSpinner';
 
// Páginas públicas
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Login } from '../pages/Login';
import { Games } from '../pages/Games';
import { NewEdition } from '../pages/NewEdition';
// import { Register } from '../pages/Register';
// import { NotFound } from '../pages/NotFound';

 
// Páginas protegidas (apenas para usuários autenticados)
import { AdmHomeEdit } from '../pages/AdmHomeEdit';
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
   const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth(); // Obtém usuário e estado de carregamento
   
    if (loading) return <LoadingSpinner size="lg" />; // Mostra spinner enquanto carrega
    if (!user) return <Navigate to="/login" replace />; // Redireciona não autenticados para login
   
    return (
      <div className="min-h-screen flex">
        <PrivateNavbar/>
        <Sidebar /> {/* Sidebar lateral sempre visível */}
        <main className="flex-1 lg:ml-64 p-8">
          {children} {/* Conteúdo da página protegida */}
        </main>
      </div>
    );
  };

/* ==============================
   ROTA PÚBLICA
   ============================== */
   const PublicRoute = ({ children }) => {
    const { user, loading } = useAuth();
  
    // if (loading) return <LoadingSpinner size="lg" />; // Exibe spinner se quiser
  
    // Se o usuário estiver logado, redireciona conforme o tipo
    if (user) {
      if (user.type === "psicologo") {
        return <Navigate to="/admhomeedit" replace />;
      } else if (user.type === "paciente") {
        return <Navigate to="/" replace />;
      }
    }
  
    // Se não estiver logado, mostra a tela pública normalmente
    return (
      <div
        className="bg-cover bg-center min-h-screen w-full"
        style={{ backgroundImage: "url('/bg.png')" }}
      >
        <div className="min-h-screen flex flex-col">
          <PublicNavbar />
          <main className="flex-1 mx-auto">{children}</main>
          <Footer />
        </div>
      </div>
    );
  };
  
  /* ==============================
     DASHBOARD CONDICIONAL
     ============================== */
  const Dashboard = () => {
    const { user } = useAuth();
  
    if (!user) return <Navigate to="/" replace />;
  
    // Retorna dashboard baseado no tipo do usuário
    return user.type === "psicologo" ? (
      <DashboardPsicologo />
    ) : (
      <DashboardPaciente />
    );
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
        <Route path="/newedition" element={
          <PublicRoute>
            <NewEdition/>
          </PublicRoute>
        } />
        {/* ==============================
           Rotas Protegidas
           ============================== */}
        <Route path="/admhomeedit" element={
          <ProtectedRoute>
            <AdmHomeEdit /> {/* Escolhe dashboard de psicólogo ou paciente */}
          </ProtectedRoute>
        } />

      </Routes>
    </Router>
  );
};