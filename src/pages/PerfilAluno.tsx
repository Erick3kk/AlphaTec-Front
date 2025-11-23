import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiService } from '../services/apiService';
import type { CursoInscrito } from '../services/types';

const PerfilAluno = () => {
  const navigate = useNavigate();
  const [aluno, setAluno] = useState<any>(null);
  const [cursos, setCursos] = useState<CursoInscrito[]>([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const dados = localStorage.getItem('usuarioLogado');
    if (!dados) {
      navigate('/login');
      return;
    }

    try {
      const user = JSON.parse(dados);
      if (!user?.idAluno) {
        navigate('/login');
        return;
      }

      setAluno(user);

      apiService.getMeusCursos(user.idAluno)
        .then((data) => {
          setCursos(data);
          setCarregando(false);
        })
        .catch(() => {
          alert('Erro ao carregar seus cursos');
          setCarregando(false);
        });
    } catch {
      navigate('/login');
    }
  }, [navigate]);

  const isConcluidoPeloAluno = (idCurso: number): boolean => {
    if (!aluno?.idAluno) return false;
    const chave = `cursosConcluidos_${aluno.idAluno}`;
    const concluidos = JSON.parse(localStorage.getItem(chave) || '[]');
    return concluidos.includes(idCurso);
  };

  const irParaCurso = (idAlunoCurso: number, idCurso: number) => {
    localStorage.setItem('cursoAtual', JSON.stringify({
      idAlunoCurso,
      idCurso,
      idAluno: aluno.idAluno
    }));
    navigate(`/curso/${idCurso}`);
  };

  if (carregando) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-white flex items-center justify-center">
        <p className="text-5xl font-bold text-emerald-800">Carregando perfil...</p>
      </div>
    );
  }

  if (!aluno) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">

        <div className="mb-20">
          <div className="w-52 h-52 bg-emerald-700 rounded-full mx-auto mb-10 flex items-center justify-center text-white text-9xl font-bold shadow-3xl">
            {aluno.nome.charAt(0).toUpperCase()}
          </div>
          <h1 className="text-7xl font-extrabold text-emerald-800 mb-4">
            Olá, {aluno.nome}!
          </h1>
          <p className="text-3xl text-gray-700">{aluno.email}</p>
        </div>

        <h2 className="text-6xl font-bold text-emerald-800 mb-16">
          Meus Cursos ({cursos.length})
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
          {cursos.map((item) => {
            const concluido = isConcluidoPeloAluno(item.curso.idCurso) || item.status.idStatus === 3;

            return (
              <div
                key={item.idAlunoCurso}
                className="bg-white rounded-3xl shadow-2xl p-10 hover:shadow-3xl transform hover:-translate-y-6 transition-all duration-500 border-4 border-emerald-200"
              >
                <h3 className="text-3xl font-bold text-emerald-800 mb-6">
                  {item.curso.nomeCurso}
                </h3>
                <p className="text-lg text-gray-700 mb-10 line-clamp-3">
                  {item.curso.descricao}
                </p>

                {concluido ? (
                  <div className="text-center">
                    <img src="/check-concluido.png" alt="Concluído" className="w-32 mx-auto mb-6" />
                    <p className="text-green-600 font-bold text-3xl">Concluído!</p>
                  </div>
                ) : (
                  <button
                    onClick={() => irParaCurso(item.idAlunoCurso, item.curso.idCurso)}
                    className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-2xl py-8 rounded-full shadow-2xl transform hover:scale-105 transition-all"
                  >
                    Acessar Curso
                  </button>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-24">
          <button
            onClick={() => navigate('/cursos')}
            className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-4xl px-32 py-10 rounded-full shadow-3xl transform hover:scale-105 transition-all"
          >
            Voltar para Cursos
          </button>
        </div>
      </div>
    </div>
  );
};

export default PerfilAluno;