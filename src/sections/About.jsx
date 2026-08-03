import ProfileCard from "../components/about/ProfileCard";
import AboutContent from "../components/about/AboutContent";
import Stats from "../components/about/Stats";
import Experience from "../components/about/Experience";
import WhyWork from "../components/about/WhyWork";

import SectionTitle from "../components/ui/SectionTitle";

const About = () => {
  return (
    <section
      id="about"
      className="bg-black text-white py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <SectionTitle
          title="About Me"
          subtitle="Who I Am"
        />

        {/* Top Section */}

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <ProfileCard />

          <AboutContent />

        </div>

        {/* Stats */}

        <div className="mt-24">

          <Stats />

        </div>

        {/* Experience */}

        <Experience />

        {/* Why Work */}

        <WhyWork />

      </div>
    </section>
  );
};

export default About;