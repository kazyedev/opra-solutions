import HeroSection from "@/sections/HeroSection";
import OurServices from "@/sections/OurServices";
import OurSolutions from "@/sections/OurSolutions";
import OurPartners from "@/sections/OurPartners";
import WhyOpra from "@/sections/WhyOpra";
import OurClients from "@/sections/OurClients";
import ContactSection from "@/sections/ContactSection";
import StorePromo from "@/sections/StorePromo";
import TelephonySection from "@/sections/TelephonySection";
import ValueAddAppsSection from "@/sections/ValueAddAppsSection";
import VideoCollaborationSection from "@/sections/VideoCollaborationSection";
import AccessControlsSection from "@/sections/AccessControlsSection";
import NetworkDatacenterSection from "@/sections/NetworkDatacenterSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <OurServices />
      <OurSolutions />
      <TelephonySection />
      <ValueAddAppsSection />
      <VideoCollaborationSection />
      <NetworkDatacenterSection />
      <AccessControlsSection />
      <OurPartners />
      <OurClients />
      <WhyOpra />
      <StorePromo />
      <ContactSection />

    </>
  );
}
