import { useState, useEffect } from "react";
import { Edit3, Save, X, Plus, Trash, ImagePlus  } from "lucide-react";

export const AdmSponsorEdit = () => {
  const [editing, setEditing] = useState(false);
  const [patrocinadores, setPatrocinadores] = useState([
    { src: "/patr1.svg", alt: "PATR 1" },
    { src: "/patr2.svg", alt: "PATR 2" },
    { src: "/patr3.svg", alt: "PATR 3" },
    { src: "/patr3.svg", alt: "PATR 3" },
    { src: "/patr1.svg", alt: "PATR 1" },
  ]);

  // 🔹 Carrega dados do localStorage
  useEffect(() => {
    const saved = localStorage.getItem("sponsorData");
    if (saved) setPatrocinadores(JSON.parse(saved));
  }, []);

  // 🔹 Salva no localStorage
  const handleSave = () => {
    localStorage.setItem("sponsorData", JSON.stringify(patrocinadores));
    setEditing(false);
  };

  // 🔹 Adiciona novo patrocinador
  const handleAdd = () => {
    setPatrocinadores([...patrocinadores, { src: "", alt: "" }]);
  };

  // 🔹 Remove patrocinador
  const handleRemove = (index) => {
    setPatrocinadores(patrocinadores.filter((_, i) => i !== index));
  };

  // 🔹 Atualiza imagem
  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        const newPatr = [...patrocinadores];
        newPatr[index].src = ev.target.result;
        setPatrocinadores(newPatr);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <main className="flex-1 p-8">
    <h1 className="text-3xl font-bold text-emerald-900 mb-6 border-b-2 border-emerald-700 pb-2">
        PATROCINADORES
      </h1>
    <div className="min-h-screen flex flex-col items-center justify-start bg-white pt-10 px-6">
      {/* Logo principal */}
      <div className="flex flex-col items-center">
        <img
          src="/X2logo.svg"
          alt="Logo"
          className="w-64 h-64 object-contain drop-shadow-xl"
        />
      </div>

      {/* Título */}
      <h1 className="mt-6 text-2xl md:text-3xl font-extrabold tracking-widest text-[#0f3a32]">
        PATROCINADORES
      </h1>

      {/* Galeria */}
      <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-10 place-items-center">
        {patrocinadores.map((patr, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            {editing ? (
              <>
                {patr.src ? (
                  <img
                    src={patr.src}
                    alt={patr.alt}
                    className="w-32 md:w-40 rounded-md border hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-32 h-32 md:w-40 md:h-40 bg-gray-100 border-2 border-dashed border-gray-400 flex items-center justify-center text-gray-500">
                    Sem imagem
                  </div>
                )}
                <div className="bg-light rounded-2xl ">
                  <label
                    htmlFor={`file-input-${index}`}
                    className="cursor-pointer flex text-md text-white py-2 px-3 text-center hover:bg-green-400 rounded-2xl transition-colors"
                  >
                    Escolha o arquivo    <div className="pl-2"><ImagePlus /></div>
                  </label>
                  <input
                    id={`file-input-${index}`}
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageChange(e, index)}
                    className="hidden"
                  />
                </div>

                <input
                  type="text"
                  value={patr.alt}
                  onChange={(e) => {
                    const newPatr = [...patrocinadores];
                    newPatr[index].alt = e.target.value;
                    setPatrocinadores(newPatr);
                  }}
                  placeholder="Descrição da imagem"
                  className="border rounded-md p-1 text-sm w-32"
                />

                <button
                  onClick={() => handleRemove(index)}
                  className="cursor-pointer text-red-500 hover:text-red-700 mt-1"
                >
                  <Trash size={16} />
                </button>
              </>
            ) : (
              <img
                src={patr.src}
                alt={patr.alt}
                className="w-32 md:w-40 hover:scale-110 transition-transform duration-300"
              />
            )}
          </div>
        ))}
      </div>

      {/* Botões */}
      <div className="mt-12 flex gap-4">
        {editing ? (
          <>
            <button
              onClick={handleAdd}
              className="flex cursor-pointer items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold px-5 py-2 rounded-lg shadow-md"
            >
              <Plus size={18} /> ADICIONAR
            </button>

            <button
              onClick={handleSave}
              className="flex cursor-pointer items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-5 py-2 rounded-lg shadow-md"
            >
              <Save size={18} /> SALVAR
            </button>

            <button
              onClick={() => setEditing(false)}
              className="flex cursor-pointer items-center gap-2 bg-gray-400 hover:bg-gray-500 text-white font-bold px-5 py-2 rounded-lg shadow-md"
            >
              <X size={18} /> CANCELAR
            </button>
          </>
        ) : (
          <button
            onClick={() => setEditing(true)}
            className="flex cursor-pointer items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-5 py-2 rounded-lg shadow-md"
          >
            <Edit3 size={18} /> EDITAR
          </button>
        )}
      </div>
    </div>
    </main>
  );
};
