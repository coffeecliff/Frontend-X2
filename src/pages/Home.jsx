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

          <div className="flex gap-20 text-white text-[22px] font-bold leading-relaxed mt-6">
            <ul className="space-y-3">
              <li>• PRÊMIOS MELHORES</li>
              <li>• TIMES BRASILEIROS</li>
              <li>• MELHORES JOGOS</li>
              <li>• MAIS ATRAÇÕES</li>
            </ul>

            <ul className="space-y-3">
              <li>• MAIS DESAFIOS</li>
              <li>• MAIOR EDIÇÃO</li>
              <li>• 24 ATLETAS</li>
              <li>• 8 CLUBES</li>
            </ul>
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

      {/* PATROCINADORES */}
      <section className="overflow-hidden bg-black py-8 border-t border-accent relative z-20">
        <div className="flex animate-slide space-x-16 w-max">
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

      {/* ====================== */}
      {/*     TABELAS + FUNDO    */}
      {/* ====================== */}
      <section className="py-16 text-center relative overflow-hidden bg-black">

        {/* Fundo esquerdo */}
        <img
          src="/fundohomeL.svg"
          className="absolute left-0 top-0 h-full object-contain opacity-npointer-events-none"
        />



        <div className="relative z-10">
          <h2 className="text-accent text-2xl md:text-3xl font-extrabold mb-8 tracking-wide">
            RESULTADO DO ÚLTIMO JOGO
          </h2>

          <div className="flex flex-col justify-center gap-10 items-center z-10">

            {/* GRUPO A */}
            <div className="rounded-lg shadow-lg overflow-hidden w-[500px] mx-auto bg-black border">
              <div className="bg-tablebg text-white font-bold py-3 text-lg">GRUPO A</div>

              <table className="w-full text-base text-center font-semibold">
                <thead className="bg-tablebg text-white">
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
                  {["bg-tableaccent", "bg-tablemedium", "bg-tableaccent", "bg-tablemedium"].map((bgClass, i) => {
                    const row = [
                      { flag: 'jp.svg', v: '2(1)', d: '0', gm: '4', sg: '2', pts: '8' },
                      { flag: 'ar.svg', v: '2', d: '1', gm: '6', sg: '1', pts: '6' },
                      { flag: 'ma.svg', v: '1', d: '1(1)', gm: '7', sg: '2', pts: '4' },
                      { flag: 'br.svg', v: '0', d: '3', gm: '2', sg: '-2', pts: '0' }
                    ][i];

                    return (
                      <tr key={row.flag} className={`text-white ${bgClass}`}>
                        <td className="flex items-center justify-center py-3">
                          <img src={`/${row.flag}`} className="h-6" />
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
            <div className="rounded-lg shadow-lg overflow-hidden w-[500px] mx-auto bg-black border">
              <div className="bg-tablebg text-white font-bold py-3 text-lg">GRUPO B</div>

              <table className="w-full text-base text-center font-semibold">
                <thead className="bg-tablebg text-white">
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
                  {["bg-tableaccent", "bg-tablemedium", "bg-tableaccent", "bg-tablemedium"].map((bgClass, i) => {
                    const row = [
                      { flag: 'jp.svg', v: '2(1)', d: '0', gm: '4', sg: '2', pts: '8' },
                      { flag: 'ar.svg', v: '2', d: '1', gm: '6', sg: '1', pts: '6' },
                      { flag: 'ma.svg', v: '1', d: '1(1)', gm: '7', sg: '2', pts: '4' },
                      { flag: 'br.svg', v: '0', d: '3', gm: '2', sg: '-2', pts: '0' }
                    ][i];

                    return (
                      <tr key={row.flag} className={`text-white ${bgClass}`}>
                        <td className="flex items-center justify-center py-3">
                          <img src={`/${row.flag}`} className="h-6" />
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
        </div>
      </section>

      {/* ====================== */}
      {/*     CLUBES + FUNDO     */}
      {/* ====================== */}
      <section className="relative bg-black py-16 text-center overflow-hidden">



        {/* Fundo direito */}
        <img
          src="/fundohomeR.svg"
          className="absolute right-0 top-0 h-full object-contain opacity pointer-events-none"
        />

        <div className="relative z-10">

          <h2 className="text-accent text-2xl md:text-3xl font-extrabold mb-10 tracking-wide">
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
                  <img src={`/${src}`} className="h-20 md:h-24 mb-2" />
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
                  <img src={`/${src}`} className="h-20 md:h-24 mb-2" />
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
                  <img src={`/${src}`} className="h-20 md:h-24 mb-2" />
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
