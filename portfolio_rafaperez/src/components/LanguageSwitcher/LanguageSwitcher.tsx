import React from 'react';

interface LanguageSwitcherProps {
  idioma: string;
  onIdiomaChange: (novoIdioma: string) => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  idioma,
  onIdiomaChange,
}) => {
  return (
    <div className="flex space-x-2">
      <button
        onClick={() => onIdiomaChange('pt')}
        className={`w-8 h-8 rounded-full ${
          idioma === 'pt' ? 'ring-2 ring-blue-500' : ''
        }`}
      >
        <img
          src="../../assets/brasil.png"
          alt="Português"
          className="rounded-full"
        />
      </button>
      <button
        onClick={() => onIdiomaChange('en')}
        className={`w-8 h-8 rounded-full ${
          idioma === 'en' ? 'ring-2 ring-blue-500' : ''
        }`}
      >
        <img
          src="../../assets/usa.png"
          alt="English"
          className="rounded-full"
        />
      </button>
    </div>
  );
};

export default LanguageSwitcher;
