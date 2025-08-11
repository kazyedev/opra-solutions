import { useTranslations } from "next-intl";
import HeroSection from "@/sections/HeroSection";

export default function Home() {
  const t = useTranslations('HomePage');
  return (
    <HeroSection />
  );
}
