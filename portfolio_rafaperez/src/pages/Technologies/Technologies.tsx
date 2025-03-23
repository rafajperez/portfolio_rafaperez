import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import Cards from '../../components/Card/Card';
import { FaReact, FaHtml5, FaCss3, FaGithub } from 'react-icons/fa';
import { DiJsBadge } from 'react-icons/di';
import { SiTypescript } from 'react-icons/si';

const technologies = [
  {
    title: 'Html',
    icon: <FaHtml5 className="text-4xl text-blue-500" />,
  },
  { title: 'Css', icon: <FaCss3 className="text-4xl  text-blue-500" /> },
  {
    title: 'JavaScript',
    icon: <DiJsBadge className="text-4xl  text-blue-500" />,
  },
  { title: 'React', icon: <FaReact className="text-4xl  text-blue-500" /> },
  {
    title: 'Typescript',
    icon: <SiTypescript className="text-4xl  text-blue-500" />,
  },
  {
    title: 'Git/Github',
    icon: <FaGithub className="text-4xl  text-black" />,
  },
];

const Technologies: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-[80vh] mt-16">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="w-full max-w-xl"
      >
        {technologies.map((tech, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <Cards title={tech.title}>{tech.icon}</Cards>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Technologies;
