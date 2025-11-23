import { Link } from 'react-router-dom';

interface ThemeCardProps {
  title: string;
  description: string;
  path: string;
  icon: string;
  gradient: string;
}

const ThemeCard = ({ title, description, path, icon, gradient }: ThemeCardProps) => (
  <Link
    to={path}
    className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white"
  >
    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-90 group-hover:opacity-100 transition-opacity`} />
    
    <div className="relative p-8 text-center text-white">
      <div className="text-6xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-lg opacity-95">{description}</p>
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-1 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
  </Link>
);

export default ThemeCard;