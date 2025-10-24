import { useState, useEffect } from "react";
import { Edit3, Save, X, Image as ImageIcon, ZoomIn } from "lucide-react";

export const AdmAboutEdit = () => {
  const [content, setContent] = useState({
    image: "/X2logo.svg", // 🔹 imagem padrão
    title: "▶ TORNEIO X2 FUTEBOL JUVENIL – REGULAMENTO (2010 A 2015)",
    description1:
      "O torneio acontecerá no dia 16 de novembro de 2025, com objetivo de promover o desenvolvimento esportivo, social e a integração entre atletas nascidos entre 2010 e 2013.",
    description2:
      "A inscrição custa R$ 50,00 por jogador (inclui camiseta do evento e marmita) e deverá ser paga até 03/10/2025. As equipes serão formadas em trios (1 goleiro + 2 jogadores), mediante apresentação de documento de identidade.",
  });

  const [editing, setEditing] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);

  // 🔹 Carrega do localStorage ao abrir
  useEffect(() => {
    const saved = localStorage.getItem("aboutContent");
    if (saved) setContent(JSON.parse(saved));
  }, []);

  // 🔹 Upload da imagem (gera URL base64)
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setContent({ ...content, image: reader.result });
    };
    reader.readAsDataURL(file);
  };

  // 🔹 Salva no localStorage
  const handleSave = () => {
    localStorage.setItem("aboutContent", JSON.stringify(content));
    setEditing(false);
  };

  return (
    <main className="flex-1 p-8">
    <h1 className="text-3xl font-bold text-emerald-900 mb-6 border-b-2 border-emerald-700 pb-2">
        SOBRE
      </h1>
    <div className="w-full min-h-screen bg-white flex flex-col items-center px-6 py-12 relative">
      {/* Imagem editável */}
      <div className="mb-10 flex flex-col items-center">
        <div
          className="relative group cursor-pointer"
          onClick={() => !editing && setShowImageModal(true)}
        >
          <img
            src={content.image || "/X2logo.svg"}
            alt="Imagem do evento"
            className="h-32 md:h-40 rounded-lg shadow-lg object-contain transition-transform duration-300 group-hover:scale-105"
          />

          {/* Ícone de zoom visível ao passar o mouse */}
          {!editing && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition rounded-lg">
              <ZoomIn className="text-white" size={28} />
            </div>
          )}
        </div>

        {editing && (
          <label className="mt-4 cursor-pointer bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2 rounded-lg shadow-md transition">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
            Trocar Imagem
          </label>
        )}
      </div>

      {/* Conteúdo principal */}
      <div className="max-w-3xl text-sm md:text-base text-justify leading-relaxed space-y-6">
        <section>
          {editing ? (
            <input
              type="text"
              value={content.title}
              onChange={(e) => setContent({ ...content, title: e.target.value })}
              className="w-full font-bold text-green-900 mb-2 border-b border-green-800 focus:outline-none"
            />
          ) : (
            <h2 className="font-bold text-green-900 mb-2">{content.title}</h2>
          )}

          {editing ? (
            <>
              <textarea
                value={content.description1}
                onChange={(e) =>
                  setContent({ ...content, description1: e.target.value })
                }
                className="w-full border p-2 rounded-md mb-2"
                rows={3}
              />
              <textarea
                value={content.description2}
                onChange={(e) =>
                  setContent({ ...content, description2: e.target.value })
                }
                className="w-full border p-2 rounded-md"
                rows={3}
              />
            </>
          ) : (
            <>
              <p>{content.description1}</p>
              <p>{content.description2}</p>
            </>
          )}
        </section>

        {/* Exemplo fixo das próximas seções */}
        <section>
          <h2 className="font-bold text-green-900 mb-2">▶ SISTEMA DE DISPUTA</h2>
          <p>O campeonato terá dois grupos de 4 times...</p>
        </section>
      </div>

      {/* Botões */}
      <div className="mt-10 flex gap-4">
        {editing ? (
          <>
            <button
              onClick={handleSave}
              className="flex cursor-pointer items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-2 rounded-lg shadow-md transition"
            >
              <Save size={18} />
              SALVAR
            </button>
            <button
              onClick={() => setEditing(false)}
              className="flex cursor-pointer items-center gap-2 bg-gray-400 hover:bg-gray-500 text-white font-bold px-6 py-2 rounded-lg shadow-md transition"
            >
              <X size={18} />
              CANCELAR
            </button>
          </>
        ) : (
          <button
            onClick={() => setEditing(true)}
            className="flex cursor-pointer items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 py-2 rounded-lg shadow-md transition"
          >
            <Edit3 size={18} />
            EDITAR
          </button>
        )}
      </div>

      {/* Modal de imagem ampliada */}
      {showImageModal && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setShowImageModal(false)}
        >
          <div className="relative">
            <img
              src={content.image || "/X2logo.svg"}
              alt="Pré-visualização"
              className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-2xl"
            />
            <button
              onClick={() => setShowImageModal(false)}
              className="absolute top-2 right-2 bg-white/80 hover:bg-white text-gray-700 font-bold rounded-full w-8 h-8 flex items-center justify-center shadow-md"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
    </main>
  );
};
