// src/pages/NewEdition.jsx
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
 
export const NewEdition = () => {
  const patrocinadores = ["/patr1.svg", "/patr2.svg", "/patr3.svg", "/patr4.svg", "/patr5.svg"];
 
  return (
    <div className="w-full min-h-screen bg-black font-sans text-white relative overflow-hidden">
      {/* Seção principal */}
      <section className="relative flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-12">
        {/* Texto à esquerda */}
        <div className="relative z-20 max-w-lg flex flex-col items-start text-left space-y-3">
          <img
            src="/novaedicao.svg"
            alt="3ª Edição - 18 de Novembro"
            className="w-72 md:w-96 h-auto mb-4"
          />
 
          <ul className="text-white text-lg font-bold leading-relaxed space-y-1">
            <li>• PRÊMIOS MELHORES</li>
            <li>• TIMES BRASILEIROS</li>
            <li>• MELHORES JOGOS</li>
            <li>• MAIS ATRAÇÕES</li>
            <li>• MAIS DESAFIOS</li>
            <li>• MAIOR EDIÇÃO</li>
            <li>• 24 ATLETAS</li>
            <li>• 8 CLUBES</li>
          </ul>
 
          <div className="mt-6">
            <Link to="/">
              <Button
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-6 py-3 rounded-lg
                           font-extrabold shadow-md hover:from-yellow-300 hover:to-yellow-400
                           hover:shadow-yellow-500/50 transition-all duration-300"
              >
                VOLTAR PARA HOME
              </Button>
            </Link>
          </div>
        </div>
 
        {/* Imagem diagonal à direita */}
        <div className="absolute right-0 top-0 h-full w-full md:w-1/2 overflow-hidden">
          <img
            src="/estadio.svg"
            alt="Estádio iluminado"
            className="h-full w-full object-cover brightness-90"
            style={{
              clipPath: "polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)",
            }}
          />
        </div>
 
        {/* Fundo diagonal preto à esquerda */}
        <div
          className="absolute left-0 top-0 h-full w-full md:w-1/2 bg-black z-10"
          style={{
            clipPath: "polygon(0 0, 70% 0, 40% 100%, 0% 100%)",
          }}
        ></div>
      </section>
 
      {/* Faixa de patrocinadores - agora com carrossel */}
      <section className="overflow-hidden bg-black py-8 border-t border-newaccent relative z-20">
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
 
      {/* Seção dos clubes */}
      <section className="relative bg-black py-16 text-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/fundonewedition.svg"
            alt="Fundo dourado dos clubes"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b"></div>
        </div>
 
        <div className="relative z-10">
          <h2 className="text-newaccent text-2xl md:text-3xl font-extrabold mb-10 tracking-wide">
            CLUBES DESTA EDIÇÃO
          </h2>
 
          <div className="flex flex-col items-center gap-6">
            {/* Linha 1 */}
            <div className="flex justify-center gap-10 md:gap-16">
              {[
                ["fluminense.svg", "FLUMINENSE"],
                ["palmeiras.svg", "PALMEIRAS"],
                ["internacional.svg", "INTERNACIONAL"],
              ].map(([src, nome]) => (
                <div key={nome} className="flex flex-col items-center">
                  <img src={`/${src}`} alt={nome} className="h-20 md:h-24 mb-2" />
                  <span className="text-white font-semibold">{nome}</span>
                </div>
              ))}
            </div>
 
            {/* Linha 2 */}
            <div className="flex justify-center gap-10 md:gap-16">
              {[
                ["flamengo.svg", "FLAMENGO"],
                ["gremio.svg", "GRÊMIO"],
                ["corinthians.svg", "CORINTHIANS"],
              ].map(([src, nome]) => (
                <div key={nome} className="flex flex-col items-center">
                  <img src={`/${src}`} alt={nome} className="h-20 md:h-24 mb-2" />
                  <span className="text-white font-semibold">{nome}</span>
                </div>
              ))}
            </div>
 
            {/* Linha 3 */}
            <div className="flex justify-center gap-10 md:gap-16">
              {[
                ["atletico.svg", "ATLÉTICO MG"],
                ["cruzeiro.svg", "CRUZEIRO"],
              ].map(([src, nome]) => (
                <div key={nome} className="flex flex-col items-center">
                  <img src={`/${src}`} alt={nome} className="h-20 md:h-24 mb-2" />
                  <span className="text-white font-semibold">{nome}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
 
 