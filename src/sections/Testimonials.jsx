import SectionTitle from "../components/ui/SectionTitle";
import TestimonialCard from "../components/ui/TestimonialCard";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Amit Sharma",
      role: "Website Development Client",
      review:
        "Rahul delivered an amazing website with a modern design and excellent performance.",
      rating: 5,
    },
    {
      name: "Priya Verma",
      role: "SEO Client",
      review:
        "Professional work and great communication. My website rankings improved significantly.",
      rating: 5,
    },
    {
      name: "Rohit Singh",
      role: "Digital Marketing Client",
      review:
        "Highly recommended. The Meta Ads campaign generated quality leads for my business.",
      rating: 4,
    },
  ];

  return (
    <section className="bg-zinc-950 text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <SectionTitle
          title="Client Testimonials"
          subtitle="What My Clients Say"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              name={testimonial.name}
              role={testimonial.role}
              review={testimonial.review}
              rating={testimonial.rating}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;