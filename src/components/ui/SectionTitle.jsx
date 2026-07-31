const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center pt-12 mb-16">
      <p className="text-blue-500 uppercase tracking-[6px] mb-3">
        {subtitle}
      </p>

      <h2 className="text-5xl font-bold text-white">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;