import React from 'react';

interface IntegranteProps {
  nome: string;
  rm: string;
  turma: string;
  githubUrl: string;
  linkedinUrl?: string;  
  fotoUrl: string;
}

export const IntegranteCard: React.FC<IntegranteProps> = ({
  nome,
  rm,
  turma,
  githubUrl,
  linkedinUrl,
  fotoUrl,
}) => (
  <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-[1.03] text-center border-b-4 border-emerald-500/0 hover:border-emerald-500 cursor-pointer">
    {}
    <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-emerald-500 shadow-lg">
      <img
        src={fotoUrl || "https://via.placeholder.com/150"}
        alt={`Foto de ${nome}`}
        className="w-full h-full object-cover"
      />
    </div>

    {}
    <h3 className="text-xl font-extrabold text-emerald-700 mb-1">{nome}</h3>
    <p className="text-gray-600 text-sm">RM: <strong>{rm}</strong></p>
    <p className="text-gray-600 text-sm mb-6">Turma: <strong>{turma}</strong></p>

    {}
    <div className="flex justify-center gap-4">
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-gray-800 text-white font-bold px-5 py-3 rounded-lg hover:bg-gray-900 transition shadow-md hover:shadow-lg"
      >
        GitHub
      </a>

      {linkedinUrl && (
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold px-5 py-3 rounded-lg hover:bg-blue-700 transition shadow-md hover:shadow-lg"
        >
          LinkedIn
        </a>
      )}
    </div>
  </div>
);