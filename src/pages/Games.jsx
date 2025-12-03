// src/pages/Games.jsx
import { useState } from "react";

export const Games = () => {
  const jogos = [
    { id: 1, time1: "Time", placar1: 2, placar2: 1, time2: "Time" },
    { id: 2, time1: "Time", placar1: 0, placar2: 5, time2: "Time" },
    { id: 3, time1: "Time", placar1: 5, placar2: 1, time2: "Time" },
    { id: 4, time1: "Time", placar1: 2, placar2: 2, time2: "Time" },
    { id: 5, time1: "Time", placar1: 1, placar2: 0, time2: "Time" },
    { id: 6, time1: "Time", placar1: 1, placar2: 0, time2: "Time" },
  ];
  
  const TorneioBracket = () => {
    return (
      <div className="w-full flex justify-center overflow-x-auto mt-10 mb-30 space-x-4">
        <div className="grid grid-cols-1  ">
  
          {/* ==== COLUNA 1 ==== */}
          <div className="flex flex-col justify-between h-full space-y-10">
            {[1,2,3,4].map((num) => (
              <div key={num} className="flex items-center space-x-1">
                <span className="text-white text-xl font-bold w-6">{num}</span>
                <div className="w-45 h-10  bg-white rounded-md shadow" />
                <div className="w-5 h-1 bg-white" />
                <div className="w-45 h-10 bg-white rounded-md shadow" />
              </div>
            ))}
          </div>
          </div>
          <div className="grid grid-cols-3 gap-x-5">
          {/* ==== COLUNA 2 ==== */}
          <div className="flex flex-col justify-evenly">
            {[1,2,3,4].map((i) => (
              <div key={i} className="flex items-center">
                <div className="w-6 h-1 bg-white" />
                <div className="w-45 h-10 bg-white rounded-md shadow ml-2" />
              </div>
            ))}
          </div>
  
          {/* ==== COLUNA 3 (SEMIFINAL) ==== */}
          <div className="flex flex-col justify-evenly">
            {[1,2].map((i) => (
              <div key={i} className="flex items-center">
                <div className="w-6 h-1 bg-white" />
                <div className="w-45 h-10 bg-white rounded-md shadow ml-2" />
              </div>
            ))}
          </div>
  
          {/* ==== COLUNA 4 (FINAL) ==== */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center">
              <div className="w-6 h-1 bg-white" />
              <div className="w-45 h-10 bg-white rounded-md shadow ml-2" />
            </div>
            </div>
          </div>
  
        
      </div>
    );
  };

  // Estado do jogo selecionado
  const [jogoSelecionado, setJogoSelecionado] = useState(null);

  // Card de jogo clicável
  const CardJogo = ({ time1, placar1, placar2, time2, onClick }) => (
    <div
      onClick={onClick}
      className="flex justify-between items-center bg-white rounded-xl shadow-md mb-2 p-3 cursor-pointer hover:bg-white/80 transition"
    >
      <span className="text-xs font-bold text-black bg-light px-2 py-1 rounded-md">
        ENCERRADO
      </span>
      <div className="flex-1 flex justify-center items-center text-gray-800 font-semibold">
        <span>{time1}</span>
        <span className="mx-3 text-gray-800 font-bold">
          {placar1} x {placar2}
        </span>
        <span>{time2}</span>
      </div>
      <span className="text-gray-400 text-lg">›</span>
    </div>
  );

  // Modal de detalhes do jogo
  const ModalJogo = ({ jogo, onClose }) => (
    <div className="fixed inset-0 flex justify-center items-center bg-black/50 backdrop-blur-sm z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-96 p-6 text-center relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 cursor-pointer text-gray-500 hover:text-red-600 text-xl font-bold"
        >
          ×
        </button>
        <h2 className="text-2xl font-extrabold text-dark-800 mb-4">Detalhes do Jogo</h2>
        <p className="text-gray-700 mb-4">
          <span className="font-bold">{jogo.time1}</span> {jogo.placar1} x {jogo.placar2}{" "}
          <span className="font-bold">{jogo.time2}</span>
        </p>
        <p className="text-gray-500 text-sm mb-4">Status: Encerrado</p>
        <button
          onClick={onClose}
          className="bg-light text-white px-6 py-2 rounded-full cursor-pointer hover:bg-accent transition"
        >
          Fechar
        </button>
      </div>
    </div>
  );

  return (
    <div className="w-full min-h-screen bg-dark flex flex-col items-center py-12 px-4 relative overflow-hidden">
      
      {/* Bolas decorativas */}
      <img
        src="/BolasY.png"
        alt="Bola topo esquerdo grande"
        className="absolute top-0 left-0 w-1/4 md:w-1/6 "
      />
      <img
        src="/BolasYR.png"
        alt="Bola topo direito grande"
        className="absolute top-0 right-0 w-1/4 md:w-1/6 "
      />
      <img
        src="/BolasY.png"
        alt="Bola inferior esquerda"
        className="absolute bottom-0 left-0 w-1/4 md:w-1/6 "
      />
      <img
        src="/BolasYR.png"
        alt="Bola inferior direita"
        className="absolute bottom-0 right-0 w-1/4 md:w-1/6"
      />

      {/* Título */}
      <h1 className="text-2xl font-extrabold text-white text-center">
        CHAVEAMENTO
      </h1>
      <h2 className="text-lg font-bold text-white mb-8 text-center">
        DO TORNEIO
      </h2>

      {/* Tabela estilo torneio */}
      <TorneioBracket />

      {/* Título */}
      <h1 className="text-2xl font-extrabold text-white text-center">
        TABELA
      </h1>
      <h2 className="text-lg font-bold text-white mb-8 text-center">
        DOS JOGOS
      </h2>

      {/* Primeira tabela */}
      <div className="relative z-10 w-full max-w-3xl bg-white/75 rounded-2xl shadow-lg p-6 mb-10 backdrop-blur-sm">
        {jogos.map((jogo) => (
          <CardJogo
            key={jogo.id}
            {...jogo}
            onClick={() => setJogoSelecionado(jogo)}
          />
        ))}
      </div>

      {/* Segunda tabela */}
      <div className="relative z-10 w-full max-w-3xl bg-white/75 rounded-2xl shadow-lg p-6 mb-10 backdrop-blur-sm">
        {jogos.map((jogo) => (
          <CardJogo
            key={jogo.id + "-b"}
            {...jogo}
            onClick={() => setJogoSelecionado(jogo)}
          />
        ))}
      </div>

      {/* Modal */}
      {jogoSelecionado && (
        <ModalJogo
          jogo={jogoSelecionado}
          onClose={() => setJogoSelecionado(null)}
        />
      )}
    </div>
  );
};
