// src/pages/Home.jsx
export const Home = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans text-green-900">

      {/* Hero Section */}
      <section className="relative flex items-center justify-between px-8 md:px-20 py-12">
        {/* Texto */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-lg z-20">
          <img src="/logoX2home.svg" alt="logo grande" className="h-32 mb-4" />
          <h1 className="text-3xl font-extrabold text-green-900 leading-snug">
            ALCANCE <br />
            <span className="text-green-500">SEUS SONHOS</span> <br />
            E <span className="text-green-600">MUDE VIDAS</span>
          </h1>
          <button className="mt-6 bg-green-500 text-white px-6 py-3 rounded-lg font-bold shadow-md hover:bg-green-600 cursor-pointer">
            EDIÇÃO ATUAL
          </button>
        </div>

        {/* Imagem cortada diagonalmente */}
        <div className="absolute right-0 top-0 h-full w-1/2 overflow-hidden">
          <img
            src="/criancasjogando.svg"
            alt="crianças jogando futebol"
            className="h-full w-full object-cover"
            style={{ clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
          />
        </div>

        {/* Fundo branco do texto, com corte diagonal */}
        <div
          className="absolute left-0 top-0 h-full w-1/2 bg-white z-10"
          style={{ clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0% 100%)' }}
        ></div>
      </section>

      {/* Faixa de patrocinadores */}
      <section
        className="bg-[#006B3D] flex justify-center items-center space-x-16 py-4 overflow-hidden"
      >
        <img src="/patr1.svg" alt="patrocinador 1" className="h-20 md:h-24" />
        <img src="/patr2.svg" alt="patrocinador 2" className="h-20 md:h-24" />
        <img src="/patr3.svg" alt="patrocinador 3" className="h-20 md:h-24" />
      </section>

      {/* Resultado do último jogo */}
      <section className="py-12 text-center relative">
        <h2 className="text-2xl font-extrabold text-green-900 uppercase">
          Resultado
        </h2>
        <p className="text-green-600 font-semibold mb-8">
          do último jogo
        </p>

        {/* Fundo da seção */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/fundotabela.svg')" }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Conteúdo das tabelas */}
        <div className="relative flex flex-col justify-center gap-10 items-center z-10">

          {/* GRUPO A */}
          <div className="rounded-lg shadow-lg overflow-hidden w-[500px] mx-auto bg-white/90">
            <div className="bg-[#19326C] text-white font-bold py-3 text-lg">
              GRUPO A
            </div>
            <table className="w-full text-base text-center font-semibold">
              <thead className="bg-[#19326C] text-white">
                <tr>
                  <th className="p-3"></th>
                  <th className="p-3">V</th>
                  <th className="p-3">D</th>
                  <th className="p-3">GM</th>
                  <th className="p-3">SG</th>
                  <th className="p-3">Pontos</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-[#5BC060] text-white">
                  <td className="flex items-center justify-center py-3">
                    <img src="/bandeiras/japao.svg" alt="Japão" className="h-6" />
                  </td>
                  <td className="py-3">2(1)</td>
                  <td className="py-3">0</td>
                  <td className="py-3">4</td>
                  <td className="py-3">2</td>
                  <td className="py-3">8</td>
                </tr>
                <tr className="bg-[#61C466] text-white">
                  <td className="flex items-center justify-center py-3">
                    <img src="/bandeiras/argentina.svg" alt="Argentina" className="h-6" />
                  </td>
                  <td className="py-3">2</td>
                  <td className="py-3">1</td>
                  <td className="py-3">6</td>
                  <td className="py-3">1</td>
                  <td className="py-3">6</td>
                </tr>
                <tr className="bg-[#69CA6C] text-white">
                  <td className="flex items-center justify-center py-3">
                    <img src="/bandeiras/marrocos.svg" alt="Marrocos" className="h-6" />
                  </td>
                  <td className="py-3">1</td>
                  <td className="py-3">1(1)</td>
                  <td className="py-3">7</td>
                  <td className="py-3">2</td>
                  <td className="py-3">4</td>
                </tr>
                <tr className="bg-[#70D072] text-white">
                  <td className="flex items-center justify-center py-3">
                    <img src="/bandeiras/brasil.svg" alt="Brasil" className="h-6" />
                  </td>
                  <td className="py-3">0</td>
                  <td className="py-3">3</td>
                  <td className="py-3">2</td>
                  <td className="py-3">-2</td>
                  <td className="py-3">0</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* GRUPO B */}
          <div className="rounded-lg shadow-lg overflow-hidden w-[500px] mx-auto bg-white/90">
            <div className="bg-[#19326C] text-white font-bold py-3 text-lg">
              GRUPO B
            </div>
            <table className="w-full text-base text-center font-semibold">
              <thead className="bg-[#19326C] text-white">
                <tr>
                  <th className="p-3"></th>
                  <th className="p-3">V</th>
                  <th className="p-3">D</th>
                  <th className="p-3">GM</th>
                  <th className="p-3">SG</th>
                  <th className="p-3">Pontos</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-[#5BC060] text-white">
                  <td className="flex items-center justify-center py-3">
                    <img src="/bandeiras/franca.svg" alt="França" className="h-6" />
                  </td>
                  <td className="py-3">3</td>
                  <td className="py-3">0</td>
                  <td className="py-3">8</td>
                  <td className="py-3">6</td>
                  <td className="py-3">9</td>
                </tr>
                <tr className="bg-[#61C466] text-white">
                  <td className="flex items-center justify-center py-3">
                    <img src="/bandeiras/alemanha.svg" alt="Alemanha" className="h-6" />
                  </td>
                  <td className="py-3">2</td>
                  <td className="py-3">1</td>
                  <td className="py-3">4</td>
                  <td className="py-3">-1</td>
                  <td className="py-3">6</td>
                </tr>
                <tr className="bg-[#69CA6C] text-white">
                  <td className="flex items-center justify-center py-3">
                    <img src="/bandeiras/mexico.svg" alt="México" className="h-6" />
                  </td>
                  <td className="py-3">1</td>
                  <td className="py-3">2</td>
                  <td className="py-3">3</td>
                  <td className="py-3">-1</td>
                  <td className="py-3">3</td>
                </tr>
                <tr className="bg-[#70D072] text-white">
                  <td className="flex items-center justify-center py-3">
                    <img src="/bandeiras/portugal.svg" alt="Portugal" className="h-6" />
                  </td>
                  <td className="py-3">0</td>
                  <td className="py-3">3</td>
                  <td className="py-3">1</td>
                  <td className="py-3">-4</td>
                  <td className="py-3">0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};
