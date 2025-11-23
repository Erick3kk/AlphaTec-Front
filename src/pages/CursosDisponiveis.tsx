import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiService } from '../services/apiService';
import type { CursoCard } from '../services/types';

const cursosDisponiveis: CursoCard[] = [
  { idCurso: 2, nome: 'Sustentabilidade', emoji: '🌍', cor: 'from-green-500 to-emerald-700', descricao: 'Aprenda a preservar o planeta' },
  { idCurso: 3, nome: 'Educação Financeira', emoji: '💰', cor: 'from-amber-500 to-orange-600', descricao: 'Domine seu dinheiro' },
  { idCurso: 4, nome: 'Biodiversidade', emoji: '🦋', cor: 'from-cyan-500 to-blue-700', descricao: 'Proteja a vida no planeta' },
  { idCurso: 5, nome: 'Saúde Mental', emoji: '🧠', cor: 'from-purple-500 to-pink-600', descricao: 'Cuide da sua mente' },
];

const CursosDisponiveis = () => {
  const navigate = useNavigate();
  const [aluno, setAluno] = useState<any>(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const dados = localStorage.getItem('usuarioLogado');
    if (!dados) {
      navigate('/login');
      return;
    }

    try {
      const user = JSON.parse(dados);
      if (user?.idAluno) {
        setAluno(user);
      } else {
        navigate('/login');
      }
    } catch {
      navigate('/login');
    } finally {
      setCarregando(false);
    }
  }, [navigate]);

  const adicionarCurso = async (idCurso: number, nomeCurso: string) => {
    if (!aluno) return;

    try {
      await apiService.matricularAluno(aluno.idAluno, idCurso);
      alert(`${nomeCurso} adicionado com sucesso!`);
    } catch (err: any) {
      alert(err.message || 'Erro ao adicionar o curso');
    }
  };

  if (carregando) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-white">
        <p className="text-4xl font-bold text-emerald-800">Carregando cursos...</p>
      </div>
    );
  }

  if (!aluno) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-white py-16 px-6">
      {}
      <div className="text-center mb-16">
        <h1 className="text-6xl font-extrabold text-emerald-800 mb-4">
          Olá, {aluno.nome}!
        </h1>
        <p className="text-2xl text-gray-700">Escolha um curso e comece a aprender agora</p>
      </div>

      {}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {cursosDisponiveis.map((curso) => (
          <div
            key={curso.idCurso}
            onClick={() => adicionarCurso(curso.idCurso, curso.nome)}
            className={`group bg-gradient-to-br ${curso.cor} text-white rounded-3xl p-10 shadow-2xl cursor-pointer transform hover:scale-105 transition-all duration-300`}
          >
            <div className="text-8xl mb-6 text-center">{curso.emoji}</div>
            <h3 className="text-3xl font-bold text-center mb-4">{curso.nome}</h3>
            <p className="text-center opacity-90">{curso.descricao}</p>
          </div>
        ))}
      </div>

      {}
      <div className="text-center mt-20">
        <button
          onClick={() => navigate('/perfil')}
          className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-2xl px-16 py-6 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300"
        >
          Ir para o Meu Perfil
        </button>
      </div>
    </div>
  );
};

export default CursosDisponiveis;