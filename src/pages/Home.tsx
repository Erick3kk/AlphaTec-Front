import ThemeCard from '../components/ThemeCard';

const Home = () => {
  return (
    <div className="min-h-screen">
      {}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-teal-500 to-cyan-600 text-white py-24 px-6">
        <div className="container mx-auto text-center max-w-5xl relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Bem-vindo à <span className="text-yellow-300">AlphaTec</span>
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 max-w-3xl mx-auto opacity-95">
            O AlphaTec é um site educativo que aborda temas globais de grande importância: 
            sustentabilidade, educação financeira, biodiversidade e saúde mental.
          </p>
          <p className="text-lg md:text-xl mb-20 opacity-95">
            Aprenda de forma prática, rápida e interativa o que realmente importa para o mundo atual.
          </p>
        </div>
        {}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 200" className="w-full">
            <path fill="#fff" fillOpacity="1" d="M0,100 C400,200 1000,0 1440,100 L1440,200 L0,200 Z"></path>
          </svg>
        </div>
      </section>

      {}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto text-center max-w-4xl">
          <p className="text-lg text-gray-700 leading-relaxed">
            Ao entrar no site, você encontrará uma página inicial com um breve resumo do propósito do AlphaTec, 
            explicando que a plataforma serve como ferramenta de aprendizagem sobre assuntos essenciais para o mundo atual.
          </p>
        </div>
      </section>

      {}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-emerald-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-emerald-800 mb-4">
            Escolha um tema de interesse
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Cada tema contém explicação clara, quiz interativo e avaliação final
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <ThemeCard
              title="Sustentabilidade"
              description="Aprenda práticas para um planeta mais verde e equilibrado."
              path="/temas/sustentabilidade"
              icon="🌍"
              gradient="from-emerald-500 to-teal-600"
            />
            <ThemeCard
              title="Educação Financeira"
              description="Domine suas finanças pessoais e invista com sabedoria."
              path="/temas/educacao-financeira"
              icon="💰📈"
              gradient="from-amber-500 to-orange-600"
            />
            <ThemeCard
              title="Biodiversidade"
              description="Entenda a importância da vida no planeta e como protegê-la."
              path="/temas/biodiversidade"
              icon="🦋"
              gradient="from-purple-500 to-pink-600"
            />
            <ThemeCard
              title="Saúde Mental"
              description="Cuide da mente com dicas práticas e cientificamente comprovadas."
              path="/temas/saude-mental"
              icon="🧠"
              gradient="from-blue-500 to-indigo-600"
            />
          </div>
        </div>
      </section>

      {}
      <section className="py-16 px-6 bg-emerald-50">
        <div className="container mx-auto text-center max-w-4xl">
          <p className="text-lg font-medium text-emerald-800 mb-4">
            Cada tema terá:
          </p>
          <p className="text-gray-700">
            Uma explicação introdutória clara e objetiva • Um quiz interativo para testar o conhecimento adquirido • 
            Uma breve avaliação final, garantindo que o usuário assimile o conteúdo.
          </p>
          <p className="text-2xl font-bold text-emerald-700 mt-8">
            A AlphaTec une aprendizagem, interatividade e conscientização em uma plataforma acessível e moderna.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;