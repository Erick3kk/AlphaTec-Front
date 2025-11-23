interface EvaluationProps {
  score: number;
  total: number;
  onRestart: () => void;
}

const Evaluation = ({ score, total, onRestart }: EvaluationProps) => {
  const percentage = (score / total) * 100;

  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl text-center">
      <div className="bg-white/95 rounded-2xl shadow-2xl p-10">
        <h2 className="text-4xl font-bold text-primary-600 mb-6">Parabéns! Você concluiu!</h2>
        <div className="text-6xl font-bold text-emerald-600 mb-4">
          {score}/{total}
        </div>
        <p className="text-2xl mb-6">{percentage.toFixed(0)}% de acertos</p>

        <div className="text-lg mb-8">
          {percentage >= 80 ? "Excelente! Você domina o tema!" :
           percentage >= 60 ? "Muito bom! Você está no caminho certo." :
           "Bom esforço! Que tal revisar o conteúdo e tentar novamente?"}
        </div>

        <button
          onClick={onRestart}
          className="bg-primary-600 text-white font-bold px-8 py-4 rounded-full hover:bg-emerald-700 transition text-lg"
        >
          Voltar ao Início do Tema
        </button>
      </div>
    </div>
  );
};

export default Evaluation;