import { useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { mockApi } from "../services/mockApi";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Input } from "../components/Input";
import toast from "react-hot-toast";
 
export const Register = () => {
  const [userType, setUserType] = useState("cliente");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    birthDate: "",
  });
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
 
  const handleInputChange = useCallback(
    (field) => (e) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    },
    []
  );
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Senhas não coincidem");
      return;
    }
    setLoading(true);
    try {
      const { user, token } = await mockApi.register({
        ...formData,
        type: userType,
      });
      login(user, token);
      toast.success("Conta criada com sucesso!");
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
 
  return (
    <div className="relative min-h-[calc(100vh-80px)] flex items-center justify-center p-4">
 
       {/* Imagem decorativa esquerda */}
       <div className="flex-shrink-0 w-80 h-80 overflow-hidden mb-100 absolute mr-270 ">
                <img
                    src="/Bolas.svg"
                    alt="Imagem decorativa"
                    className="w-full h-full object-contain"
                />
            </div>
 
      {/* Card de registro */}
      <Card className="bg-white w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-dark mb-2">Criar Conta</h1>
          <p className="text-dark/50">Cadastre-se na X2</p>
        </div>
 
       
 
        {/* Formulário */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Nome completo"
            value={formData.name}
            onChange={handleInputChange("name")}
            placeholder="Seu nome completo"
            required
          />
          <Input
            label="E-mail"
            type="email"
            value={formData.email}
            onChange={handleInputChange("email")}
            placeholder="seu@email.com"
            required
          />
          <Input
            label="Senha"
            type="password"
            value={formData.password}
            onChange={handleInputChange("password")}
            placeholder="sua senha"
            required
          />
                    <Input
            label="Confirme sua senha"
            type="password"
            value={formData.confirmPassword}
            onChange={handleInputChange("confirmPassword")}
            placeholder="Confirme sua senha"
            required
          />
          <Input
            label="Telefone"
            type="tel"
            value={formData.phone}
            onChange={handleInputChange("phone")}
            placeholder="Digite seu telefone"
            required
          />
 
          {userType === "cliente" && (
            <Input
              label="Data de Nascimento"
              type="date"
              value={formData.birthDate}
              onChange={handleInputChange("birthDate")}
              placeholder="Digite a sua data de nascimento"
              required
            />
          )}
 
          {userType === "administrador" && (
            <>              
            </>
          )}
         
          <Button type="submit" loading={loading} className="w-full">
            Criar Conta
          </Button>
        </form>
 
        {/* Link para login */}
        <div className="mt-6 text-center space-y-2">
          <p className="text-dark/70">Já possui conta?</p>
          <Link to="/login" className="text-light font-bold hover:text-dark">
            Faça login!
          </Link>
        </div>
      </Card>
            {/* Imagem decorativa esquerda */}
            <div className="flex-shrink-0 w-80 h-80 overflow-hidden mt-100 mb-30 absolute ml-270">
                <img
                    src="/BolasR.svg"
                    alt="Imagem decorativa"
                    className="w-full h-full object-contain"
                />
            </div>
    </div>
  );
};
 