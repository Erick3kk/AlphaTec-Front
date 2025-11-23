const Sobre = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {}
      <section className="relative bg-gradient-to-br from-emerald-600 to-teal-700 text-white py-24">
        <div className="container mx-auto px-6 text-center max-w-5xl">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            Sobre o <span className="text-yellow-300">AlphaTec</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-95 mb-12 leading-relaxed">
            Uma plataforma educacional criada com propósito: transformar conhecimento em ação.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 150" className="w-full">
            <path fill="#fff" d="M0,100 C400,200 1000,0 1440,80 L1440,150 L0,150 Z" />
          </svg>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl space-y-16">
          {}
          <div className="text-center">
            <h2 className="text-4xl font-bold text-emerald-800 mb-6">Nossa Missão</h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Democratizar o acesso a conteúdos educativos de qualidade sobre temas essenciais para o futuro do planeta e das pessoas. 
              Acreditamos que o conhecimento prático e acessível é a chave para um mundo mais sustentável, justo e consciente.
            </p>
          </div>

          {}
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition">
              <div className="text-6xl mb-4">♿</div>
              <h3 className="text-2xl font-bold text-emerald-700 mb-3">Acessibilidade</h3>
              <p className="text-gray-600">Conteúdo gratuito, simples e para todos.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition">
              <div className="text-6xl mb-4">🧠</div>
              <h3 className="text-2xl font-bold text-emerald-700 mb-3">Interatividade</h3>
              <p className="text-gray-600">Aprendizado ativo com quizzes e avaliações.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition">
              <div className="text-6xl mb-4">🍃</div>
              <h3 className="text-2xl font-bold text-emerald-700 mb-3">Impacto Real</h3>
              <p className="text-gray-600">Temas que realmente mudam comportamentos.</p>
            </div>
          </div>

          {}
          <div className="bg-emerald-50 rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold text-emerald-800 mb-6">Visão de Futuro</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Ser a principal plataforma educativa gratuita do Brasil sobre sustentabilidade, 
              finanças pessoais, biodiversidade e saúde mental — alcançando milhões de pessoas 
              e inspirando mudanças reais no dia a dia.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sobre;