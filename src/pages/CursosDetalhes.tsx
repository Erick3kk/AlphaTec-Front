import { useParams, useNavigate } from 'react-router-dom';

const apostilas: { [key: number]: { titulo: string; paragrafos: string[] } } = {
  2: {
    titulo: "Sustentabilidade Ambiental",
    paragrafos: [
      "Sustentabilidade é atender às necessidades atuais sem comprometer as gerações futuras.",
      "Os três pilares são: Ambiental, Social e Econômico.",
      "Práticas diárias: reduzir, reutilizar, reciclar e repensar.",
      "Consumo consciente prioriza produtos duráveis, recicláveis e de empresas responsáveis.",
      "Petróleo, carvão e gás natural são recursos não renováveis."
    ]
  },
  4: {
    titulo: "Biodiversidade e Conservação",
    paragrafos: [
      "Biodiversidade é a variedade de vida no planeta.",
      "O Brasil possui a maior biodiversidade do mundo.",
      "A Amazônia é o maior bioma brasileiro em extensão.",
      "Abelhas são responsáveis pela polinização de grande parte dos alimentos.",
      "Desmatamento e queimadas são as principais ameaças à biodiversidade brasileira."
    ]
  },
  3: {
    titulo: "Educação Financeira",
    paragrafos: [
      "Educação financeira é o conhecimento para gerir bem o dinheiro.",
      "Regra 50-30-20: 50% necessidades, 30% desejos, 20% poupança/investimentos.",
      "Juros compostos crescem exponencialmente com o tempo.",
      "Investir cedo é mais vantajoso do que investir muito tarde.",
      "Renda passiva é dinheiro que entra sem trabalho ativo constante."
    ]
  },
  5: {
    titulo: "Saúde Mental",
    paragrafos: [
      "Saúde mental é tão importante quanto a saúde física.",
      "Estresse crônico pode causar ansiedade e depressão.",
      "Práticas simples como meditação, exercício e sono ajudam muito.",
      "Falar sobre sentimentos não é fraqueza, é força.",
      "Buscar ajuda profissional é um ato de coragem."
    ]
  }
};

const CursoDetalhe = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const cursoId = Number(id);
  const apostila = apostilas[cursoId] || { titulo: "Curso não encontrado", paragrafos: ["Este curso ainda não tem conteúdo."] };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-cyan-50 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-10">

        <h1 className="text-4xl font-bold text-emerald-800 text-center mb-10">
          {apostila.titulo}
        </h1>

        <div className="space-y-8 text-lg leading-relaxed text-gray-700">
          {apostila.paragrafos.map((texto, i) => (
            <div key={i} className="bg-emerald-50 p-8 rounded-2xl border border-emerald-200">
              <p>{texto}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => navigate(`/quiz/${cursoId}`)}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold text-xl px-16 py-5 rounded-full shadow-lg transition-all hover:shadow-xl"
          >
            Ir para o Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default CursoDetalhe;