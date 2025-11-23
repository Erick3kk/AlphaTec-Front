export interface Aluno {
  idAluno: number;
  nome: string;
  email: string;
}

export interface Curso {
  idCurso: number;
  nomeCurso: string;
  descricao: string;
}

export interface StatusCurso {
  idStatus: number;
  descricao: string;
}

export interface CursoInscrito {
  idAlunoCurso: number;
  curso: Curso;
  status: StatusCurso;
}

export interface CursoAtual {
  idAlunoCurso: number;
  idCurso: number;
  idAluno: number;
}

export interface CursoCard {
  idCurso: number;
  nome: string;
  emoji: string;
  cor: string;
  descricao: string;
}

export interface Pergunta {
  p: string;
  a: string;
  b: string;
  c: string;
  d: string;
  correta: 'a' | 'b' | 'c' | 'd';
}