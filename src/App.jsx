// Importações
import { AuthProvider } from "./context/AuthContext";
import { AppRoutes } from "./routes/AppRoutes";
import { Toaster } from "react-hot-toast"; // ✅ Import necessário

// Código principal
function App() {
  return (
    <AuthProvider>
      {/* Rotas principais */}
      <AppRoutes />

      {/* ✅ Componente global de notificações */}
      <Toaster position="top-right" reverseOrder={false} />
    </AuthProvider>
  );
}

export default App;
