import HeroSection from "@/sections/HeroSection";
import OurServices from "@/sections/OurServices";
import OurSolutions from "@/sections/OurSolutions";
import OurPartners from "@/sections/OurPartners";
import WhyOpra from "@/sections/WhyOpra";
import OurClients from "@/sections/OurClients";
import ContactSection from "@/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <OurServices />
      <OurSolutions />
      <OurPartners />
      <OurClients />
      <WhyOpra />
      <ContactSection />

    </>
  );
}
