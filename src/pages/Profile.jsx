import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import toast from "react-hot-toast";

export const Profile = () => {
  const { user, login } = useAuth(); // login usado para atualizar dados no contexto
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    type: user?.type || "",
  });
  const [profileImage, setProfileImage] = useState(localStorage.getItem("profileImage") || "");
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        type: user.type || "",
      });
    }
  }, [user]);

  // 🔹 Atualizar imagem de perfil
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setProfileImage(reader.result);
      localStorage.setItem("profileImage", reader.result);
      toast.success("Foto de perfil atualizada!");
    };
    reader.readAsDataURL(file);
  };

  // 🔹 Salvar alterações
  const handleSave = () => {
    if (!formData.name || !formData.email) {
      toast.error("Preencha todos os campos.");
      return;
    }

    const updatedUser = {
      ...user,
      name: formData.name,
      email: formData.email,
    };

    // Atualiza contexto + localStorage
    login(updatedUser, localStorage.getItem("token"));
    localStorage.setItem("lunysse_user", JSON.stringify(updatedUser));

    toast.success("Perfil atualizado com sucesso!");
    setEditing(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] bg-green-50 text-green-900 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">
          Meu Perfil
        </h1>

        {/* 🔹 Foto de perfil */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-green-500 shadow-md">
            {profileImage ? (
              <img src={profileImage} alt="Foto de perfil" className="w-full h-full object-cover" />
            ) : (
              <img src="/Loginicon.svg" alt="Usuário padrão" className="w-full h-full object-cover opacity-80" />
            )}
          </div>

          <label className="mt-3 text-green-600 font-semibold cursor-pointer hover:text-green-500 transition">
            Alterar foto
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>
        </div>

        {/* 🔹 Informações do usuário */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-bold mb-1">Nome:</label>
            {editing ? (
              <Input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            ) : (
              <p className="bg-gray-100 rounded-lg p-2">{user?.name}</p>
            )}
          </div>
          

          <div>
            <label className="block text-sm font-bold mb-1">E-mail:</label>
            {editing ? (
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            ) : (
              <p className="bg-gray-100 rounded-lg p-2">{user?.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-bold mb-1">Tipo de conta:</label>
            <p className="bg-gray-100 rounded-lg p-2 capitalize">
              {user?.type === "psicologo"
                ? "Psicólogo(a)"
                : user?.type === "paciente"
                ? "Paciente"
                : "Usuário comum"}
            </p>
          </div>
        </div>

        {/* 🔹 Botões */}
        <div className="mt-6 flex flex-col gap-3">
          {!editing ? (
            <Button onClick={() => setEditing(true)} className="w-full">
              Editar perfil
            </Button>
          ) : (
            <>
              <Button onClick={handleSave} className="w-full">
                Salvar alterações
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  setEditing(false);
                  setFormData({
                    name: user?.name || "",
                    email: user?.email || "",
                    type: user?.type || "",
                  });
                }}
                className="w-full"
              >
                Cancelar
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
