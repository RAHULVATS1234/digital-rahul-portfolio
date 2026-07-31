const InfoCard = ({ title, value }) => {
  return (
    <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:border-blue-500 transition duration-300">
      <h3 className="text-gray-400 text-lg">
        {title}
      </h3>

      <h2 className="text-3xl font-bold text-white mt-2">
        {value}
      </h2>
    </div>
  );
};

export default InfoCard;