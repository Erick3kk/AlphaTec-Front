import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiService } from '../services/apiService';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        const aluno = await apiService.login(email.trim(), senha);
        localStorage.setItem('usuarioLogado', JSON.stringify(aluno));
        navigate('/cursos');
      } else {
        await apiService.criarAluno({ nome, email: email.trim(), senha, dataNascimento });
        alert('Cadastro realizado com sucesso! Faça login.');
        setIsLogin(true);
        setNome('');
        setEmail('');
        setSenha('');
        setDataNascimento('');
      }
    } catch (err: any) {
      alert(err.message || 'Ocorreu um erro. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-white flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-2xl p-12 w-full max-w-md">
        <h1 className="text-6xl font-extrabold text-emerald-800 text-center mb-8">AlphaTec</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {!isLogin && (
            <>
              <input
                type="text"
                placeholder="Nome completo"
                value={nome}
                onChange={e => setNome(e.target.value)}
                required={!isLogin}
                className="w-full px-6 py-4 rounded-xl border-2 border-gray-300 focus:border-emerald-600 outline-none text-lg transition"
              />
              <input
                type="date"
                value={dataNascimento}
                onChange={e => setDataNascimento(e.target.value)}
                required={!isLogin}
                className="w-full px-6 py-4 rounded-xl border-2 border-gray-300 focus:border-emerald-600 outline-none text-lg transition"
              />
            </>
          )}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className="w-full px-6 py-4 rounded-xl border-2 border-gray-300 focus:border-emerald-600 outline-none text-lg transition"
          />

          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={e => setSenha(e.target.value)}
            required
            className="w-full px-6 py-4 rounded-xl border-2 border-gray-300 focus:border-emerald-600 outline-none text-lg transition"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-400 text-white font-bold text-xl py-5 rounded-xl transition-all duration-300"
          >
            {loading ? 'Processando...' : isLogin ? 'Entrar' : 'Criar Conta'}
          </button>
        </form>

        <p className="text-center mt-8 text-gray-600">
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="text-emerald-700 font-bold hover:underline transition"
          >
            {isLogin ? 'Não tem conta? Cadastre-se' : 'Já tem conta? Faça login'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Auth;