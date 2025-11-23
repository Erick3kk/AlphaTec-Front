import React from 'react';
import { IntegranteCard } from '../components/IntegranteCard';

const IntegrantesHC: React.FC = () => {
  const equipe = [
    {
      nome: "Matheus N.",
      rm: "563765",
      turma: "1TDSPV",
      githubUrl: "https://github.com/MATHEUSN06",
      linkedinUrl: "https://www.linkedin.com/in/matheus-nascimento-corrégio-39a344354/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", 
      fotoUrl: "https://media.discordapp.net/attachments/593926799373631528/1441833057412710510/MatheusFoto.jpg?ex=69233b2c&is=6921e9ac&hm=ca7bde4e27bdf46b3ee164e8a372aa12c5bd81d9972a066a9d09e9dd51b715b2&=&format=webp&width=451&height=802"
    },
    {
      nome: "Erick Gama",
      rm: "561951",
      turma: "1TDSPV",
      githubUrl: "https://github.com/Erick3kk",
      linkedinUrl: "https://www.linkedin.com/in/erick-gama-0598b9325", 
      fotoUrl: "https://media.discordapp.net/attachments/593926799373631528/1441833057878282321/ErickFoto.jpg?ex=69233b2c&is=6921e9ac&hm=4c1055cae8ca2ca862121cae6dbe9428cf17188f7b5617227d2727fa12e863b7&=&format=webp&width=601&height=802"
    },
    {
      nome: "Bruno Jacob",
      rm: "565249",
      turma: "1TDSPV",
      githubUrl: "https://github.com/brunopfnm",
      linkedinUrl: "https://www.linkedin.com/in/bruno-jacob-35a57635a", 
      fotoUrl: "https://cdn.discordapp.com/attachments/593926799373631528/1441833058226405557/BrunoFoto.jpg?ex=69233b2d&is=6921e9ad&hm=526ccef96aded01390feddb9e768f8542712feeb043fddb82a7bbcb3392fd3ae&"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50 py-16 px-6">
      <div className="container mx-auto max-w-7xl text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-emerald-800 mb-4">
          Nossa Equipe de Desenvolvimento
        </h1>
       
        <div className="w-32 h-1 bg-emerald-600 mx-auto mb-16 rounded-full"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {equipe.map((integrante) => (
            <IntegranteCard
              key={integrante.rm}
              nome={integrante.nome}
              rm={integrante.rm}
              turma={integrante.turma}
              githubUrl={integrante.githubUrl}
              linkedinUrl={integrante.linkedinUrl}
              fotoUrl={integrante.fotoUrl}
            />
          ))}
        </div>

        <div className="mt-20 bg-emerald-100 rounded-3xl py-10 px-8 shadow-inner">
          <p className="text-lg font-medium text-emerald-800">
            Projeto desenvolvido com React + TypeScript + Tailwind CSS
          </p>
          <p className="text-gray-600 mt-3">
            Componentização, acessibilidade e versionamento no GitHub
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntegrantesHC;