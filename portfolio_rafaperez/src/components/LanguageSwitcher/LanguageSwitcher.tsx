import React from 'react';
import brasil from '../../assets/brasil.png';
import eua from '../../assets/usa.png';
interface LanguageSwitcherProps {
  idioma: string;
  onIdiomaChange: (novoIdioma: string) => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  onIdiomaChange,
}) => {
  return (
    <div className="flex space-x-2">
      <button
        onClick={() => onIdiomaChange('pt')}
        className={`w-20 h-20 transform transition-transform duration-200 hover:scale-110`}
      >
        <img src={brasil} alt="Português" className="w-16 h-16 object-cover" />
      </button>
      <button
        onClick={() => onIdiomaChange('en')}
        className={`w-20 h-20 transform transition-transform duration-200 hover:scale-110`}
      >
        <img src={eua} alt="English" className="w-16 h-16 object-cover" />
      </button>
    </div>
  );
};

export default LanguageSwitcher;
