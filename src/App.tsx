import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Sustentabilidade from './pages/Sustentabilidade';
import EducacaoFinanceira from './pages/EducacaoFinanceira';
import Biodiversidade from './pages/Biodiversidade';
import SaudeMental from './pages/SaudeMental';
import NotFound from './pages/NotFound';
import Integrantes from './pages/Integrantes';
import CursosDisponiveis from './pages/CursosDisponiveis';
import Auth from './pages/Auth';          
import PerfilAluno from './pages/PerfilAluno';
import CursoDetalhe from './pages/CursoDetalhes';
import QuizPage from './pages/QuizPage';
import FAQ from './pages/FAQ';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/integrantes" element={<Integrantes />} />
          <Route path="/temas/sustentabilidade" element={<Sustentabilidade />} />
          <Route path="/temas/educacao-financeira" element={<EducacaoFinanceira />} />
          <Route path="/temas/biodiversidade" element={<Biodiversidade />} />
          <Route path="/temas/saude-mental" element={<SaudeMental />} />
          <Route path="/login" element={<Auth />} />           {/* ← Auth aqui */}
          <Route path="/cursos" element={<CursosDisponiveis />} />
          <Route path="/perfil" element={<PerfilAluno />} />
          <Route path="/faq" element={<FAQ />} />

          <Route path="/curso/:id" element={<CursoDetalhe />} />
          <Route path="/quiz/:id" element={<QuizPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
