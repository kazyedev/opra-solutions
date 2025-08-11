import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DataFlowBackground from "@/components/DataFlowBackground";

export const metadata: Metadata = {
  title: "Opra Solutions",
  description: "Opra corporate website",
};

export default async function WebsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <DataFlowBackground />
      <Header />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
    </>
  );
}
