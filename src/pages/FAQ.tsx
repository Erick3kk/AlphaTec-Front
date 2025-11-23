import { useNavigate } from 'react-router-dom';

const FAQ = () => {
  const navigate = useNavigate();

  const faqs = [
    {
      pergunta: "O que é o AlphaTec?",
      resposta: "O AlphaTec é uma plataforma educativa gratuita que oferece cursos rápidos e práticos sobre temas essenciais: Sustentabilidade Ambiental, Biodiversidade, Educação Financeira e Saúde Mental."
    },
    {
      pergunta: "Preciso pagar para usar o AlphaTec?",
      resposta: "Não! Todo o conteúdo é 100% gratuito. Você só precisa criar uma conta para acompanhar seu progresso."
    },
    {
      pergunta: "Como faço para me matricular em um curso?",
      resposta: "Após fazer login, vá em 'Cursos Disponíveis', clique no curso desejado e depois em 'Matricular-se'. Ele aparecerá automaticamente no seu perfil."
    },
    {
      pergunta: "Como sei se concluí um curso?",
      resposta: "Ao final de cada curso há um quiz com 5 perguntas. Acertando 70% ou mais (4 ou 5 questões), o curso é marcado como 'Concluído!' com um selo verde."
    },
    {
      pergunta: "Posso refazer o quiz se reprovar?",
      resposta: "Sim! Você pode voltar ao curso quantas vezes quiser e refazer o quiz até ser aprovado. Seu progresso é salvo automaticamente."
    },
    {
      pergunta: "Meus cursos concluídos somem se eu trocar de navegador ou limpar os dados?",
      resposta: "Não! Seu progresso é salvo tanto no servidor quanto no seu navegador, vinculado ao seu ID de aluno. Mesmo em outro dispositivo, ao logar com a mesma conta, tudo estará lá."
    },
    {
      pergunta: "Posso acessar o AlphaTec pelo celular?",
      resposta: "Sim! O site é totalmente responsivo e funciona perfeitamente em celulares, tablets e computadores."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-16 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <h1 className="text-7xl font-extrabold text-emerald-800 mb-6">
            Perguntas Frequentes
          </h1>
          <p className="text-2xl text-gray-700">
            Tudo o que você precisa saber sobre o AlphaTec
          </p>
        </div>

        {/* Lista de FAQs */}
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl"
              open={index < 2} // abre as duas primeiras por padrão
            >
              <summary className="px-8 py-6 text-xl font-bold text-emerald-800 cursor-pointer hover:bg-emerald-50 transition-colors">
                {faq.pergunta}
              </summary>
              <div className="px-8 pb-8 pt-2 text-lg text-gray-700 leading-relaxed">
                {faq.resposta}
              </div>
            </details>
          ))}
        </div>

        {/* Botão Voltar */}
        <div className="text-center mt-20">
          <button
            onClick={() => navigate(-1)}
            className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-2xl px-16 py-6 rounded-full shadow-2xl transition-all hover:scale-105"
          >
            Voltar
          </button>
        </div>

        {/* Rodapé fofo */}
        <div className="text-center mt-20 text-gray-600">
          <p className="text-lg">
            Dúvidas? Fale com o professor ou com o dev mais foda da sala
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;