import { Link } from 'react-router-dom';

const Sustentabilidade = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50">

      {}
      <section className="relative bg-gradient-to-br from-emerald-700 to-teal-600 text-white py-24 overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            Sustentabilidade
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-95 leading-relaxed mb-12">
            Aprenda práticas conscientes para preservar o planeta e construir um futuro mais verde.
          </p>
        </div>

        {}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 140" className="w-full">
            <path
              fill="#ffffff"
              d="M0,0 C320,100 1120,30 1440,80 L1440,140 L0,140 Z"
            />
          </svg>
        </div>
      </section>

      {}
      <section className="relative -mt-1 bg-white">
        <div className="max-w-5xl mx-auto px-6 py-20">

          {}
          <h2 className="text-4xl md:text-5xl font-extrabold text-emerald-800 text-center mb-12">
            Impactos do Consumo Consciente
          </h2>

          {}
          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto text-lg text-gray-700">
            <div className="flex items-start gap-5">
              <span className="text-4xl font-bold text-emerald-600 mt-1">→</span>
              <p><strong>Reduz emissões de CO₂</strong> – Menos produção, menos poluição.</p>
            </div>
            <div className="flex items-start gap-5">
              <span className="text-4xl font-bold text-emerald-600 mt-1">→</span>
              <p><strong>Preserva florestas e recursos naturais</strong> – Evita desmatamento.</p>
            </div>
            <div className="flex items-start gap-5">
              <span className="text-4xl font-bold text-emerald-600 mt-1">→</span>
              <p><strong>Diminui o lixo nos oceanos</strong> – Menos plásticos no mar.</p>
            </div>
            <div className="flex items-start gap-5">
              <span className="text-4xl font-bold text-emerald-600 mt-1">→</span>
              <p><strong>Incentiva empresas responsáveis</strong> – Pressão por ética e sustentabilidade.</p>
            </div>
          </div>

          {}
          <div className="mt-20 text-center">
            <Link
              to="/login"
              className="inline-block w-full max-w-lg"
            >
              <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-2xl md:text-3xl py-8 rounded-full shadow-2xl hover:shadow-emerald-600/50 transform hover:scale-105 transition-all duration-300">
                Adicionar Curso ao Meu Perfil
              </button>
            </Link>

            <div className="mt-8">
              <p className="text-xl text-gray-700 font-medium">
                Faça login para salvar este curso no seu perfil
              </p>
              <p className="text-lg text-gray-600 mt-2">
                Aprenda no seu ritmo e acompanhe seu progresso!
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Sustentabilidade;