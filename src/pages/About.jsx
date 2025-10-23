// src/pages/About.jsx
export const About = () => {
    return (
      <div className="w-full min-h-screen bg-white flex flex-col items-center px-6 py-12">
        {/* Logo central */}
        <img
          src="/X2logo.svg"
          alt="Logo"
          className="h-42 mb-16 drop-shadow-lg"
        />
  
        {/* Conteúdo */}
        <div className="max-w-3xl text-sm md:text-base text-justify space-y-6">
          <section>
            <h2 className="font-bold text-medium mb-2">
              ▶ TORNEIO X2 FUTEBOL JUVENIL – REGULAMENTO (2010 A 2015)
            </h2>
            <p>
              O torneio acontecerá no dia 16 de novembro de 2025, com objetivo de promover o
              desenvolvimento esportivo, social e a integração entre atletas nascidos entre 2010 e 2013.
            </p>
            <p>
              A inscrição custa R$ 50,00 por jogador (inclui camiseta do evento e marmita) e deverá ser paga até
              03/10/2025. As equipes serão formadas em trios (1 goleiro + 2 jogadores), mediante apresentação de documento de identidade.
            </p>
          </section>
  
          <section>
            <h2 className="font-bold text-medium mb-2">▶ SISTEMA DE DISPUTA</h2>
            <p>
              O campeonato terá dois grupos de 4 times. Os dois melhores de cada grupo avançam às semifinais.
            </p>
            <ul className="list-disc ml-6">
              <li>Vitória: 3 pontos</li>
              <li>Empate: 1 ponto + disputa de pênaltis (com ponto extra)</li>
              <li>Vitória nos pênaltis: 2 pontos</li>
              <li>Derrota nos pênaltis: 1 ponto</li>
            </ul>
            <p>
              Critérios de desempate: pontos, vitórias, saldo de gols, gols pró, confronto direto e nova disputa de pênaltis.
            </p>
          </section>
  
          <section>
            <h2 className="font-bold text-medium mb-2">▶ REGRAS DE JOGO</h2>
            <ul className="list-disc ml-6">
              <li>Jogos em campo society (Arena Faisqueira).</li>
              <li>Fase de grupos: 2 tempos de 7 min (intervalo de 2).</li>
              <li>Fase final: 2 tempos de 10 min (intervalo de 4).</li>
              <li>Uniformes: permitidos do clube ou coletes fornecidos pelo evento.</li>
              <li>Cada equipe pode trocar goleiro 1 vez por período de jogo.</li>
            </ul>
          </section>
  
          <section>
            <h2 className="font-bold text-medium mb-2">▶ CONDUTA E PENALIDADES</h2>
            <ul className="list-disc ml-6">
              <li>Cartão amarelo: advertência.</li>
              <li>
                Cartão vermelho: 2 min fora ou até a equipe sofrer gol. (Dois vermelhos = 3 min).
              </li>
              <li>Atitudes antidesportivas graves podem levar à suspensão ou exclusão.</li>
              <li>
                Não comparecer gera vitória do adversário por 3x0; duas ausências seguidas eliminam a equipe.
              </li>
            </ul>
          </section>
  
          <section>
            <h2 className="font-bold text-medium mb-2">▶ PREMIAÇÃO</h2>
            <ul className="list-disc ml-6">
              <li>Troféu e medalhas para campeão e vice.</li>
              <li>Troféu para artilheiro e goleiro menos vazado.</li>
              <li>Medalha para melhor jogador da partida (escolhido pela arbitragem).</li>
            </ul>
          </section>
        </div>
  
        {/* Botão de patrocinadores */}
        <a href="/sponsor">
        <button className="mt-10 cursor-pointer transition-colors duration-500 bg-light text-white px-6 py-3 rounded-lg font-bold shadow-md hover:bg-accent">
          PATROCINADORES
        </button>
        </a>
      </div>
    );
  };
  