import React from 'react';
import { Link } from 'react-router-dom';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

interface NavbarProps {
  idioma: string;
  onIdiomaChange: (novoIdioma: string) => void;
}

export const NavBar: React.FC<NavbarProps> = ({ idioma, onIdiomaChange }) => {
  return (
    <nav className="bg-bgDefaultDark bg-cover text-txtDefaultWhite p-2 top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <p className="font-bold">
          <i> Rafael Perez </i>
        </p>

        <div className="flex-grow flex justify-end space-x-4">
          <Link
            to="/"
            className="px-3 py-2 rounded hover:bg-bgDefaultDimGray transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="px-3 py-2 rounded hover:bg-bgDefaultDimGray transition duration-300"
          >
            About
          </Link>
          <Link
            to="/technologies"
            className="px-3 py-2 rounded hover:bg-bgDefaultDimGray transition duration-300"
          >
            Technologies
          </Link>
          <Link
            to="/projects"
            className="px-3 py-2 rounded hover:bg-bgDefaultDimGray transition duration-300"
          >
            Projects
          </Link>
          <Link
            to="/social-media"
            className="px-3 py-2 rounded hover:bg-bgDefaultDimGray transition duration-300"
          >
            Social Media
          </Link>
        </div>
      </div>
    </nav>
  );
};
