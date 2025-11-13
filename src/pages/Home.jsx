// src/pages/NewEdition.jsx
import { Link } from "react-router-dom";
import { Button } from "../components/Button";

export const Home = () => {
  const patrocinadores = ["/patr1.svg", "/patr2.svg", "/patr3.svg"];

  return (
    <div className="w-full min-h-screen bg-black font-sans text-white relative overflow-hidden">

      {/* Seção principal */}
      <section className="relative flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-12">
        <div className="relative z-20 max-w-lg flex flex-col items-start text-left space-y-3">
          <img
            src="/novaedicao.svg"
            alt="3ª Edição - 18 de Novembro"
            className="w-72 md:w-96 h-auto mb-4"
          />

          <ul className="text-white text-lg font-bold leading-relaxed space-y-1">
            <li>• PRÊMIOS MELHORES </li>
            <li>• TIMES BRASILEIROS</li>
            <li>• MELHORES JOGOS   </li>
            <li>• MAIS ATRAÇÕES    </li>
            <li>• MAIS DESAFIOS    </li>
            <li>• MAIOR EDIÇÃO     </li>
            <li>• 24 ATLETAS       </li>
            <li>• 8 CLUBES         </li>
          </ul>

          <div className="mt-6">

          </div>
        </div>

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

        <div
          className="absolute left-0 top-0 h-full w-full md:w-1/2 bg-black z-10"
          style={{
            clipPath: "polygon(0 0, 70% 0, 40% 100%, 0% 100%)",
          }}
        ></div>
      </section>

      {/* Faixa de patrocinadores */}
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

      {/** ✅✅✅  TABELAS INSERIDAS AQUI ✅✅✅ */}
      <section className="py-16 text-center relative">

        {/* ✅ TÍTULO DO ÚLTIMO JOGO ✅ */}
        <h2 className="text-newaccent text-2xl md:text-3xl font-extrabold mb-8 text-center tracking-wide">
          RESULTADO DO ÚLTIMO JOGO
        </h2>

        {/* Fundo da tabela */}
        <div
          className="absolute inset-0 w-full h-full bg-center bg-cover object-cover z-0"
          style={{ backgroundImage: "url('/fundonewedition.svg')" }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Tabelas */}
        <div className="relative flex flex-col justify-center gap-10 items-center z-10">

          {/* GRUPO A */}
          <div className="rounded-lg shadow-lg overflow-hidden w-[500px] mx-auto bg-white/90">
            <div className="bg-newdark text-white font-bold py-3 text-lg">GRUPO A</div>

            <table className="w-full text-base text-center font-semibold">
              <thead className="bg-newdark text-white">
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
                {["#C89116", "#D6A43A", "#E3B95C", "#F0CA80"].map((color, i) => {
                  const row = [
                    { flag: 'jp.svg', v: '2(1)', d: '0', gm: '4', sg: '2', pts: '8' },
                    { flag: 'ar.svg', v: '2', d: '1', gm: '6', sg: '1', pts: '6' },
                    { flag: 'ma.svg', v: '1', d: '1(1)', gm: '7', sg: '2', pts: '4' },
                    { flag: 'br.svg', v: '0', d: '3', gm: '2', sg: '-2', pts: '0' }
                  ][i];

                  return (
                    <tr key={row.flag} className="text-white" style={{ backgroundColor: color }}>
                      <td className="flex items-center justify-center py-3">
                        <img src={`/${row.flag}`} alt={row.flag} className="h-6" />
                      </td>
                      <td className="py-3">{row.v}</td>
                      <td className="py-3">{row.d}</td>
                      <td className="py-3">{row.gm}</td>
                      <td className="py-3">{row.sg}</td>
                      <td className="py-3">{row.pts}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* GRUPO B */}
          <div className="rounded-lg shadow-lg overflow-hidden w-[500px] mx-auto bg-white/90">
            <div className="bg-newdark text-white font-bold py-3 text-lg">GRUPO B</div>

            <table className="w-full text-base text-center font-semibold">
              <thead className="bg-newdark text-white">
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
                {["#C89116", "#D6A43A", "#E3B95C", "#F0CA80"].map((color, i) => {
                  const row = [
                    { flag: 'fr.svg', v: '3', d: '0', gm: '8', sg: '6', pts: '9' },
                    { flag: 'ger.svg', v: '2', d: '1', gm: '4', sg: '-1', pts: '6' },
                    { flag: 'mx.svg', v: '1', d: '2', gm: '3', sg: '-1', pts: '3' },
                    { flag: 'pt.svg', v: '0', d: '3', gm: '1', sg: '-4', pts: '0' }
                  ][i];

                  return (
                    <tr key={row.flag} className="text-white" style={{ backgroundColor: color }}>
                      <td className="flex items-center justify-center py-3">
                        <img src={`/${row.flag}`} alt={row.flag} className="h-6" />
                      </td>
                      <td className="py-3">{row.v}</td>
                      <td className="py-3">{row.d}</td>
                      <td className="py-3">{row.gm}</td>
                      <td className="py-3">{row.sg}</td>
                      <td className="py-3">{row.pts}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ✅ Seção dos clubes */}
      <section className="relative bg-black py-16 text-center overflow-hidden">

        <div className="relative z-10">

          <h2 className="text-newaccent text-2xl md:text-3xl font-extrabold mb-10 tracking-wide">
            CLUBES DESTA EDIÇÃO
          </h2>

          <div className="flex flex-col items-center gap-6">

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
