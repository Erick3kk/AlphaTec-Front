import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { apiService } from '../services/apiService';
import type { Pergunta } from '../services/types';

const perguntas: Record<number, Pergunta[]> = {
  2: [ 
    { p: "O que é sustentabilidade?", a: "Gastar tudo", b: "Preservar o futuro", c: "Crescer sem limites", d: "Ignorar o planeta", correta: "b" },
    { p: "Quantos pilares tem a sustentabilidade?", a: "1", b: "2", c: "3", d: "5", correta: "c" },
    { p: "Qual recurso NÃO é renovável?", a: "Sol", b: "Vento", c: "Petróleo", d: "Água", correta: "c" },
    { p: "Reciclagem ajuda qual pilar?", a: "Social", b: "Econômico", c: "Ambiental", d: "Cultural", correta: "c" },
    { p: "Consumo consciente é:", a: "Comprar tudo", b: "Comprar só o necessário", c: "Jogar fora", d: "Ignorar preço", correta: "b" }
  ],
  3: [ 
    { p: "Regra 50-30-20 significa:", a: "50% lazer", b: "50% necessidades, 30% desejos, 20% poupança", c: "100% investimento", d: "30% dívidas", correta: "b" },
    { p: "Juros compostos são chamados de:", a: "Perigoso", b: "Oitava maravilha do mundo", c: "Inútil", d: "Simples", correta: "b" },
    { p: "Renda passiva é:", a: "Salário mensal", b: "Dinheiro que entra sem trabalhar", c: "Horas extras", d: "Bônus", correta: "b" },
    { p: "Melhor forma de enriquecer?", a: "Gastar tudo", b: "Investir cedo e com consistência", c: "Loteria", d: "Trabalhar 24h", correta: "b" },
    { p: "Educação financeira ajuda a:", a: "Gastar mais", b: "Controlar o dinheiro", c: "Ficar pobre", d: "Ignorar contas", correta: "b" }
  ],
  4: [ 
    { p: "País com maior biodiversidade?", a: "China", b: "EUA", c: "Brasil", d: "Rússia", correta: "c" },
    { p: "Maior bioma do Brasil?", a: "Pantanal", b: "Caatinga", c: "Amazônia", d: "Cerrado", correta: "c" },
    { p: "Quem faz polinização?", a: "Mosquito", b: "Abelha", c: "Formiga", d: "Besouro", correta: "b" },
    { p: "Principal causa de perda de biodiversidade?", a: "Reflorestamento", b: "Desmatamento", c: "Reciclagem", d: "Turismo", correta: "b" },
    { p: "Espécie endêmica:", a: "Vive no mundo todo", b: "Só existe em um lugar", c: "Está extinta", d: "É invasora", correta: "b" }
  ],
  5: [ 
    { p: "Saúde mental é tão importante quanto:", a: "A aparência", b: "A saúde física", c: "O dinheiro", d: "A fama", correta: "b" },
    { p: "Estresse crônico pode causar:", a: "Energia infinita", b: "Ansiedade e depressão", c: "Força física", d: "Sono excessivo", correta: "b" },
    { p: "Qual prática ajuda na saúde mental?", a: "Isolamento", b: "Meditação", c: "Redes sociais 24h", d: "Cafeína excessiva", correta: "b" },
    { p: "Falar sobre sentimentos é:", a: "Fraqueza", b: "Força", c: "Vergonha", d: "Desnecessário", correta: "b" },
    { p: "Buscar ajuda profissional é:", a: "Fracasso", b: "Coragem", c: "Desperdício", d: "Opcional", correta: "b" }
  ]
};

const QuizPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const cursoId = Number(id);
  const lista = perguntas[cursoId] || perguntas[2];

  const [respostas, setRespostas] = useState<string[]>(new Array(lista.length).fill(''));
  const [mostrarResultado, setMostrarResultado] = useState(false);
  const [acertos, setAcertos] = useState(0);

  const cursoAtual = JSON.parse(localStorage.getItem('cursoAtual') || '{}');
  const idAlunoCurso = cursoAtual.idAlunoCurso;

  const finalizar = async () => {
    let corretas = 0;
    respostas.forEach((resp, i) => {
      if (resp === lista[i].correta) corretas++;
    });

    setAcertos(corretas);
    setMostrarResultado(true);

    if (corretas >= Math.ceil(lista.length * 0.7) && idAlunoCurso) {
      try {
        await apiService.concluirCurso(idAlunoCurso);

        const alunoId = cursoAtual.idAluno || JSON.parse(localStorage.getItem('usuarioLogado') || '{}').idAluno;
        const chave = `cursosConcluidos_${alunoId}`;
        const concluidos = JSON.parse(localStorage.getItem(chave) || '[]');

        if (!concluidos.includes(cursoAtual.idCurso)) {
          concluidos.push(cursoAtual.idCurso);
          localStorage.setItem(chave, JSON.stringify(concluidos));
        }

        alert('PARABÉNS! Curso concluído com sucesso!');
      } catch (err: any) {
        alert(err.message || 'Erro ao concluir o curso');
      }
    }
  };

  if (mostrarResultado) {
    const aprovado = acertos >= Math.ceil(lista.length * 0.7);
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-8">
        <div className="bg-white rounded-3xl shadow-2xl p-16 text-center max-w-lg">
          {aprovado ? (
            <>
              <h1 className="text-6xl font-bold text-green-600 mb-6">APROVADO!</h1>
              <p className="text-2xl mb-4">Você acertou {acertos} de {lista.length}</p>
              <p className="text-xl text-green-700 font-bold">Curso concluído com sucesso!</p>
            </>
          ) : (
            <>
              <h1 className="text-5xl font-bold text-red-600 mb-6">REPROVADO</h1>
              <p className="text-2xl">Você acertou apenas {acertos} de {lista.length}</p>
              <p className="text-lg mt-4">Precisa de 70% ou mais para concluir.</p>
            </>
          )}
          <button
            onClick={() => navigate('/perfil')}
            className="mt-10 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xl px-16 py-5 rounded-full transition-all duration-300"
          >
            Voltar ao Perfil
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-10">
        <h1 className="text-4xl font-bold text-purple-800 text-center mb-10">Quiz Final</h1>

        <div className="space-y-10">
          {lista.map((q, i) => (
            <div key={i} className="bg-purple-50 p-8 rounded-2xl border border-purple-200">
              <p className="text-xl font-medium mb-5">{i + 1}. {q.p}</p>
              {(['a', 'b', 'c', 'd'] as const).map(letra => (
                <label key={letra} className="block mb-4 cursor-pointer">
                  <input
                    type="radio"
                    name={`q${i}`}
                    value={letra}
                    checked={respostas[i] === letra}
                    onChange={() => {
                      const novas = [...respostas];
                      novas[i] = letra;
                      setRespostas(novas);
                    }}
                    className="mr-3 scale-125 accent-purple-600"
                  />
                  <span className="text-lg">{q[letra]}</span>
                </label>
              ))}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={finalizar}
            disabled={respostas.includes('')}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-xl px-20 py-6 rounded-full shadow-lg transition-all duration-300"
          >
            Enviar Respostas
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;