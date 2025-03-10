import Cards from '../../components/Card/Card';
import { FaReact, FaHtml5, FaCss3, FaGithub } from 'react-icons/fa';
import { DiJsBadge } from 'react-icons/di';
import { SiTypescript } from 'react-icons/si';
const technologies = [
  {
    title: 'Html',
    description: 'Aprendi a estrutura das paginas web através do Html5',
    icon: <FaHtml5 className="text-4xl text-blue-500" />,
  },
  {
    title: 'Css',
    description:
      'Aprendi a estilizar com Css3 e hoje utilizo Tailwind e Styled-components',
    icon: <FaCss3 className="text-4xl text-blue-500" />,
  },
  {
    title: 'JavaScript',
    description:
      'Aprendi a linguagem de programação fundamental para o front-end',
    icon: <DiJsBadge className="text-4xl text-blue-500" />,
  },
  {
    title: 'React',
    description: 'Aprendi a construir aplicações dinâmicas com React.js',
    icon: <FaReact className="text-4xl text-blue-500" />,
  },
  {
    title: 'Typescript',
    description:
      'Aprendi a tipar e assim fazer aplicações mais seguras, escalaveis e eficientes',
    icon: <SiTypescript className="text-4xl text-blue-500" />,
  },
  {
    title: 'Git/Github',
    description:
      'Aprendi a versionar os meus códigos com o git/github, inclusive a trabalhar em equipe e em branchs',
    icon: <FaGithub className="text-4xl text-blue-500" />,
  },
];

const Technologies: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {technologies.map((tech, index) => (
        <Cards key={index} title={tech.title} description={tech.description}>
          {tech.icon}
        </Cards>
      ))}
    </div>
  );
};
export default Technologies;
