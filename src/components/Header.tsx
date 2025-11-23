import { Link } from 'react-router-dom';
import { IconMenu, IconClose } from './Icons';
import { useState } from 'react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-emerald-700 to-emerald earlier-600 text-white shadow-xl sticky top-0 z-50">
  <nav className="container mx-auto px-6 py-5 flex justify-between items-center">
    <Link to="/" className="text-3xl font-bold tracking-tight">
      AlphaTec
    </Link>

        {}
        <ul className="hidden md:flex space-x-8 text-lg">
          <li><Link to="/" className="hover:text-secondary transition">Home</Link></li>
          <li><Link to="/sobre" className="hover:text-secondary transition">Sobre</Link></li>
          <li><Link to="/contato" className="hover:text-secondary transition">Contato</Link></li>
          <Link to="/faq" className="text-xl font-semibold hover:text-emerald-700">
  Perguntas
</Link>
          <li><Link to="/integrantes" className="hover:text-secondary transition">Integrantes</Link></li>
          <li><Link to="/login" className="hover:text-secondary transition">Login</Link></li>
          

        </ul>

        {}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden"
        >
          {mobileMenuOpen ? <IconClose className="h-8 w-8" /> : <IconMenu className="h-8 w-8" />}
        </button>
      </nav>

      {}
      {mobileMenuOpen && (
        <div className="md:hidden bg-primary-700">
          <ul className="flex flex-col py-4 space-y-4 text-center text-lg">
            <li><Link to="/" onClick={() => setMobileMenuOpen(false)} className="block hover:text-secondary">Home</Link></li>
            <li><Link to="/sobre" onClick={() => setMobileMenuOpen(false)} className="block hover:text-secondary">Sobre</Link></li>
            <li><Link to="/integrantes" className="hover:text-secondary transition">Integrantes</Link></li>
            <li><Link to="/temas/sustentabilidade" onClick={() => setMobileMenuOpen(false)} className="block hover:text-secondary">Temas</Link></li>
            <li><Link to="/contato" onClick={() => setMobileMenuOpen(false)} className="block hover:text-secondary">Contato</Link></li>
              <li><Link to="/login" onClick={() => setMobileMenuOpen(false)} className="block hover:text-secondary">Login</Link></li>

          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;