import type { Aluno, CursoInscrito, Curso } from '../services/types';

const API_URL = 'https://alphatec-java.onrender.com';

export const apiService = {
  login: async (email: string, senha: string): Promise<Aluno> => {
    const res = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, senha })
    });
    if (!res.ok) throw new Error('Login inválido');
    return res.json();
  },

  criarAluno: async (dados: { nome: string; email: string; senha: string; dataNascimento: string }): Promise<void> => {
    const res = await fetch(`${API_URL}/alunos/criar`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
    });
    if (!res.ok) {
        const erro = await res.text();
        throw new Error(erro || 'Erro ao criar conta');
    }
    },

  getCursosDisponiveis: async (): Promise<Curso[]> => {
    const res = await fetch(`${API_URL}/cursos`);
    if (!res.ok) throw new Error('Erro ao carregar cursos');
    return res.json();
  },

    matricularAluno: async (idAluno: number, idCurso: number): Promise<void> => {
    const res = await fetch(`${API_URL}/alunoscursos/criar`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
        idAluno,
        idCurso,
        idStatus: 1
        })
    });

    if (!res.ok) {
        const erro = await res.text();
        throw new Error(erro || 'Erro ao matricular no curso');
    }
    },

  getMeusCursos: async (idAluno: number): Promise<CursoInscrito[]> => {
    const res = await fetch(`${API_URL}/alunoscursos/cursosAluno/${idAluno}`);
    if (!res.ok) throw new Error('Erro ao carregar seus cursos');
    return res.json();
  },

  concluirCurso: async (idAlunoCurso: number): Promise<void> => {
    const res = await fetch(`${API_URL}/alunoscursos/atualizar/${idAlunoCurso}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(3)
    });
    if (!res.ok) throw new Error('Erro ao concluir curso');
  }
};