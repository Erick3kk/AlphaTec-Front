# AlphaTec – Site Educacional Interativo

**AlphaTec** é um site educacional moderno e interativo que aborda temas globais de grande importância:  
- Sustentabilidade  
- Educação Financeira  
- Biodiversidade  
- Saúde Mental 

O principal objetivo é **oferecer um espaço simples, acessível e interativo** para que qualquer pessoa aprenda conteúdos relevantes de forma prática, rápida e engajadora.

## Status do Projeto

**Concluído e funcional**  
Versão: `1.0.0`  
Última atualização: Novembro de 2025  

Todas as funcionalidades principais estão implementadas e testadas.

## Sumário

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
- [Como Usar](#como-usar)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Endpoints Principais](#endpoints-principais)
- [Autores e Créditos](#autores-e-créditos)

## Sobre o Projeto

Este projeto foi desenvolvido como trabalho acadêmico com os seguintes objetivos pedagógicos:
- Aplicar conceitos modernos de desenvolvimento frontend
- Criar uma experiência de usuário intuitiva e inclusiva
- Contribuir para a conscientização sobre temas globais relevantes
- Demonstrar o uso de boas práticas (TypeScript, componentização, acessibilidade, responsividade)

## Tecnologias Utilizadas

- React 18 + TypeScript
- Vite (build ultra-rápida)
- React Router v6
- React Hook Form (validação de formulários)
- Context API para estado global
- LocalStorage para salvar progresso do usuário

## Instalação

```bash
# clonar
git clone https://github.com/Erick3kk/AlphaTec-Front.git
cd AlphaTec-Front

# instalar dependências
npm install

# rodar em modo dev
npm run dev

```

## Como Usar

- Acesse a página inicial e leia o resumo da proposta
- Clique em um dos quatro temas disponíveis
- Leia a explicação introdutória
- Se interessar em um deles, realize o login/cadastro e entre em sua conta
- Adicione o curso de interesses
- Va para o seu perfil, clique em "Acessar Curso" e leia a explicacao
- Responda ao quiz interativo (múltipla escolha com feedback imediato)
- Veja sua pontuação final e mensagens de reforço do aprendizado
- Repita com outros temas quando quiser!

## Estrutura de Pastas

```
alphatec_front/
└── AlphaTec-Front-main/
├── .gitignore
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── public/
│   └── vite.svg
└── src/
├── App.tsx
├── index.css
├── main.tsx
├── assets/
│   └── react.svg
├── components/
│   ├── Evaluation.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Icons.tsx
│   ├── IntegranteCard.tsx
│   ├── Layout.tsx
│   ├── Quiz.tsx
│   └── ThemeCard.tsx
├── pages/
│   ├── Auth.tsx
│   ├── Biodiversidade.tsx
│   ├── Contato.tsx
│   ├── CursosDetalhes.tsx
│   ├── CursosDisponiveis.tsx
│   ├── EducacaoFinanceira.tsx
│   ├── FAQ.tsx
│   ├── Home.tsx
│   ├── Integrantes.tsx
│   ├── NotFound.tsx
│   ├── PerfilAluno.tsx
│   ├── QuizPage.tsx
│   ├── SaudeMental.tsx
│   ├── Sobre.tsx
│   └── Sustentabilidade.tsx
└── services/
├── apiService.ts
└── types/
└── index.ts
```

## Endpoints Principais

| Método | Endpoint                  | Descrição                         

| POST   | `/login`          | Autenticação do usuário            
| POST   | `/alunos/criar`      | Cadastro de novo usuário           
| GET    | `/alunoscursos/cursosAluno/{idAluno}`       | Dados do perfil do aluno           
| GET    | `/cursos`            | Lista de cursos disponíveis        
| POST   | `/alunoscursos/atualizar/{idCurso}`        | Envio das respostas do quiz        
| POST    | `/alunoscursos/criar`             | Adicionando curso ao aluno

> URL Usada:  
> `https://alphatec-java.onrender.com`

## Integrantes

* Erick de Faria Gama — RM561951
* Bruno Jacob — RM565249
* Matheus Nascimento Corrégio — RM563764

## Links importantes

**Link do repositório GitHub:** [https://github.com/Erick3kk/AlphaTec-Front](https://github.com/Erick3kk/AlphaTec-Front)

**Link do vídeo no YouTube:** [https://www.youtube.com/watch?v=6cdNeMxpNaQ](https://www.youtube.com/watch?v=6cdNeMxpNaQ)

**Link do Vercel:** [https://alpha-tec-front.vercel.app](https://alpha-tec-front.vercel.app)
