interface CardsProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const Cards: React.FC<CardsProps> = ({ title, description, children }) => {
  return (
    <section className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
      <div className="mb-4 text-center">{children}</div>
      <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
      <div className="mt-4"></div>
      <div className="mt-6 text-center"></div>
    </section>
  );
};
export default Cards;
