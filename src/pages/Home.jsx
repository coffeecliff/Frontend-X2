// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
 
export const Home = () => {
  const patrocinadores = ["/patr1.svg", "/patr2.svg", "/patr3.svg"];

  return (
    <div className="w-full min-h-screen bg-white font-sans text-green-900">
 
      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between px-8 md:px-32 py-16">
 
  {/* Texto */}
  <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-lg z-20 md:ml-32">
    <img src="/logoX2home.svg" alt="logo grande" className="h-70 mb-6" />
    <h1 className="text-5xl md:text-5xl font-extrabold text-green-900 leading-tight">
      ALCANCE <br />
      <span className="text-green-500">SEUS SONHOS</span> <br />
      E <span className="text-green-600">MUDE VIDAS</span>
    </h1>
 
    {/* Botão */}
    <div className="mt-8">
      <Link to="/newedition">
        <Button
          size="lg"
          className="px-8 py-4 text-lg rounded-lg font-bold shadow-md hover:bg-green-600"
        >
          EDIÇÃO ATUAL
        </Button>
      </Link>
    </div>
  </div>
 
  {/* Imagem cortada diagonalmente */}
  <div className="absolute right-0 top-0 h-221 w-3/5 overflow-hidden">
    <img
      src="/criancasjogando.svg"
      alt="crianças jogando futebol"
      className="h-full w-full object-cover"
      style={{
        clipPath: 'polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%)',
      }}
    />
  </div>
 
  {/* Fundo branco do texto, com corte diagonal */}
  <div
    className="absolute left-0 top-0 h-full w-1/2 bg-white z-10"
    style={{
      clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0% 100%)',
    }}
  ></div>
</section>
 
 
      {/* Faixa de patrocinadores */}
      <section className="bg-[#006B3D] flex justify-center items-center space-x-16 py-4 overflow-hidden mt-45">
  <div className="flex animate-slide space-x-16 w-max pause">
          {patrocinadores.concat(patrocinadores).map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt={`patrocinador ${i + 1}`}
              className="h-14 md:h-20 lg:h-24 w-auto opacity-80 hover:opacity-100 transition-all duration-300"
            />
          ))}
        </div>
</section>
 
 
      {/* Resultado do último jogo */}
      <section className="py-12 text-center relative">
        <h2 className="text-2xl font-extrabold text-green-900 uppercase">Resultado</h2>
        <p className="text-green-600 font-semibold mb-8">do último jogo</p>
 
        {/* Fundo da seção */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/fundotabela.svg')" }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
 
        {/* Tabelas */}
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
                {[
                  { flag: 'jp.svg', v: '2(1)', d: '0', gm: '4', sg: '2', pts: '8' },
                  { flag: 'ar.svg', v: '2', d: '1', gm: '6', sg: '1', pts: '6' },
                  { flag: 'ma.svg', v: '1', d: '1(1)', gm: '7', sg: '2', pts: '4' },
                  { flag: 'br.svg', v: '0', d: '3', gm: '2', sg: '-2', pts: '0' },
                ].map(({ flag, v, d, gm, sg, pts }, i) => (
                  <tr key={flag} className={`text-white ${['bg-[#5BC060]', 'bg-[#61C466]', 'bg-[#69CA6C]', 'bg-[#70D072]'][i]}`}>
                    <td className="flex items-center justify-center py-3">
                      <img src={`/${flag}`} alt={flag} className="h-6" />
                    </td>
                    <td className="py-3">{v}</td>
                    <td className="py-3">{d}</td>
                    <td className="py-3">{gm}</td>
                    <td className="py-3">{sg}</td>
                    <td className="py-3">{pts}</td>
                  </tr>
                ))}
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
                {[
                  { flag: 'fr.svg', v: '3', d: '0', gm: '8', sg: '6', pts: '9' },
                  { flag: 'ger.svg', v: '2', d: '1', gm: '4', sg: '-1', pts: '6' },
                  { flag: 'mx.svg', v: '1', d: '2', gm: '3', sg: '-1', pts: '3' },
                  { flag: 'pt.svg', v: '0', d: '3', gm: '1', sg: '-4', pts: '0' },
                ].map(({ flag, v, d, gm, sg, pts }, i) => (
                  <tr key={flag} className={`text-white ${['bg-[#5BC060]', 'bg-[#61C466]', 'bg-[#69CA6C]', 'bg-[#70D072]'][i]}`}>
                    <td className="flex items-center justify-center py-3">
                      <img src={`/${flag}`} alt={flag} className="h-6" />
                    </td>
                    <td className="py-3">{v}</td>
                    <td className="py-3">{d}</td>
                    <td className="py-3">{gm}</td>
                    <td className="py-3">{sg}</td>
                    <td className="py-3">{pts}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
 
        </div>
      </section>
    </div>
  );
};