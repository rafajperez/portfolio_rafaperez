import React, { useState, useEffect } from 'react';
import { textosPt } from '../../lang/pt';
import { textosEn } from '../../lang/en';
import LanguageSwitcher from '../../components/LanguageSwitcher/LanguageSwitcher';
import { Textos } from '../../types/textos';

const Home: React.FC = () => {
  const [idioma, setIdioma] = useState<string>('pt');
  const [textos, setTextos] = useState<Textos>(textosPt);

  useEffect(() => {
    setTextos(idioma === 'pt' ? textosPt : textosEn);
  }, [idioma]);

  return (
    <div className="h-screen bg-[url('src/assets/bgdark.jpg')] bg-no-repeat flex flex-col justify-center items-center">
      <h1 className="text-white text-4xl font-bold mb-8">
        {' '}
        {/* Estilização com Tailwind */}
        {textos.home.titulo}
      </h1>
      <div className="text-white text-2xl space-y-4">
        {' '}
        {/* Espaçamento entre os parágrafos */}
        <p className="text-center">
          {' '}
          {/* Alinhamento centralizado */}
          {textos.home.boasVindas}
        </p>
        <p>{textos.home.descricao1}</p>
        <p>{textos.home.descricao2}</p>
        <p>{textos.home.descricao3}</p>
        <p>{textos.home.descricao4}</p>
      </div>
      <div className="mt-8">
        <LanguageSwitcher idioma={idioma} onIdiomaChange={setIdioma} />
      </div>
    </div>
  );
};

export default Home;
