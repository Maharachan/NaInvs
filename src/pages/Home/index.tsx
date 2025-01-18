import InfoSection from "@/components/home/InfoSection";
import HeroSection from "@/components/home/HeroSection";
import DigitalConsultancySection from "@/components/home/DigitalConsultancySection";
import JointVentureStudioSection from "@/components/home/JointVentureStudioSection";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />
      {/* Info Section */}
      <InfoSection />
      {/* Digital Consultancy Section */}
      <DigitalConsultancySection />
      {/* Joint Venture Studio Section */}
      <JointVentureStudioSection />
    </>
  );
};

export default Home;
