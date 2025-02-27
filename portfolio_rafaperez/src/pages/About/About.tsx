import React, { useState, useEffect } from 'react';
import LanguageSwitcher from '../../components/LanguageSwitcher/LanguageSwitcher';
import { AboutTx } from '../../types/textos';
import { aboutEn } from '../../lang/en';
import { aboutPt } from '../../lang/pt';

const About: React.FC = () => {
  const [idiomaAbout, setIdiomaAbout] = useState<string>('pt');
  const [textosAbout, setTextosAbout] = useState<AboutTx>(aboutPt);

  useEffect(() => {
    setTextosAbout(idiomaAbout === 'pt' ? aboutPt : aboutEn);
  }, [idiomaAbout]);

  return (
    <div className=" mt-20 flex flex-wrap flex-col items-center">
      <div className="text-white space-y-4 max-w-3xl">
        <p className="text-left ml-5 text-lg italic whitespace-pre-line">
          {textosAbout.about.aboutDescricao1}
        </p>
        <p className="text-left ml-5 text-lg italic whitespace-pre-line">
          {textosAbout.about.aboutDescricao2}
        </p>
        <p className="text-left ml-5 text-lg italic whitespace-pre-line">
          {textosAbout.about.aboutDescricao3}
        </p>
        <p className="text-left ml-5 text-lg italic whitespace-pre-line">
          {textosAbout.about.aboutDescricao4}
        </p>
      </div>
      <div className="mt-8">
        <LanguageSwitcher
          idioma={idiomaAbout}
          onIdiomaChange={setIdiomaAbout}
        />
      </div>
    </div>
  );
};
export default About;
