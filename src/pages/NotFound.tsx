import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="container mx-auto px-4 py-12 text-center">
    <h1 className="text-4xl font-bold text-primary-600">Página Não Encontrada</h1>
    <Link to="/" className="text-secondary hover:underline">Voltar para Home</Link>
  </div>
);

export default NotFound;