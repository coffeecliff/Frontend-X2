// Importação de rotas do React Router
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
 
// Importa contexto de autenticação
import { useAuth } from '../context/AuthContext';
 
// Componentes reutilizáveis
import { PublicNavbar } from '../components/PublicNavbar';
import { PrivateNavbar } from '../components/PrivateNavbar';
import { Sidebar } from '../components/Sidebar';
import { Footer } from "../components/Footer";
import { LoadingSpinner } from '../components/LoadingSpinner';
 
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
import { AdmGamesEdit } from '../pages/AdmGamesEdit';
import { AdmAboutEdit } from '../pages/AdmAboutEdit';
import { Sponsor } from '../pages/Sponsor';
import { AdmSponsorEdit } from '../pages/AdmSponsorEdit';
import { Register } from '../pages/Register';
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
      <>
      <navbar>
        <PrivateNavbar/>
      </navbar>
       
      
      <div className="min-h-screen flex">

        <Sidebar /> {/* Sidebar lateral sempre visível */}
        <main className="flex-1 lg:ml-64 p-8">
          {children} {/* Conteúdo da página protegida */}
        </main>
      </div>
      </>
    );
  };

/* ==============================
   Componente de rota pública
   ============================== */
const PublicRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  const authPages = ["/login", "/register"];
  const isAuthPage = authPages.includes(location.pathname);

  // Redireciona conforme tipo de usuário
  if (user && isAuthPage) {
    if (user.type === "adm") {
      return <Navigate to="/admhomeedit" replace />;
    } else {
      return <Navigate to="/" replace />; // paciente
    }
  }
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


/* ==============================
   Componente Dashboard condicional
   ============================== */
const Dashboard = () => {
  const { user } = useAuth();
  // Retorna dashboard específico baseado no tipo do usuário
  return user?.type === 'adm' ? <DashboardPsicologo /> : <DashboardPaciente />;
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
        <Route path="/register" element={
          <PublicRoute>
            <Register/>
          </PublicRoute>
        } />
        <Route path="/games" element={
          <PublicRoute>
            <Games/>
          </PublicRoute>
        } />
        <Route path="/sponsor" element={
          <PublicRoute>
            <Sponsor/>
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
        <Route path="/admgamesedit" element={
          <ProtectedRoute>
            <AdmGamesEdit /> {/* Escolhe dashboard de psicólogo ou paciente */}
          </ProtectedRoute>
        } />
        <Route path="/admaboutedit" element={
          <ProtectedRoute>
            <AdmAboutEdit /> {/* Escolhe dashboard de psicólogo ou paciente */}
          </ProtectedRoute>
        } />
        <Route path="/admsponsoredit" element={
          <ProtectedRoute>
            <AdmSponsorEdit/> {/* Escolhe dashboard de psicólogo ou paciente */}
          </ProtectedRoute>
        } />

      </Routes>
    </Router>
  );
};