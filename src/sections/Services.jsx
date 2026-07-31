import SectionTitle from "../components/ui/SectionTitle";
import ServiceCard from "../components/ui/ServiceCard";

const Services = () => {
  const services = [
    {
      title: "SEO",
      icon: "🔎",
      description: "Improve your Google rankings and grow your organic traffic with powerful SEO strategies.",
    },
    {
      title: "Google Ads",
      icon: "广告",
      description: "Generate quality leads and sales through high-converting Google Ads campaigns.",
    },
    {
      title: "Meta Ads",
      icon: "👥",
      description: "Reach the right audience on Facebook and Instagram with performance-driven campaigns.",
    },
    {
      title: "Website Development",
      icon: "💻",
      description: "Build fast, modern and responsive websites using React and the latest technologies.",
    },
    {
      title: "Performance Marketing",
      icon: "📊",
      description: "Scale your business with data-driven marketing strategies and optimization.",
    },
    {
      title: "Social Media Marketing",
      icon: "👥",
      description: "Build your brand and engage your audience across all major social platforms.",
    },
  ];

  return (
    <section id="services" className="bg-black text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <SectionTitle
          title="My Services"
          subtitle="What I Do"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service) => (
            <ServiceCard
  key={service.title}
  title={service.title}
  description={service.description}
  icon={service.icon}
/>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Services;