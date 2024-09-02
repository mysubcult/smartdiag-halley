// src/pages/index.tsx

import { useRef } from "react";
import Contact from "../components/Contact";
import Soft from "../components/Soft";
import { Hero } from "../components/Hero";
import Layout from "../components/Layout";
import Faq from "../components/Faq";
import { Services } from "../components/Services";
import Navbar from "../components/Navbar";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const softRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavigateTo = (section: string) => {
    switch (section) {
      case 'hero':
        scrollToSection(heroRef);
        break;
      case 'soft':
        scrollToSection(softRef);
        break;
      case 'faq':
        scrollToSection(faqRef);
        break;
      case 'services':
        scrollToSection(servicesRef);
        break;
      case 'contact':
        scrollToSection(contactRef);
        break;
    }
  };

  return (
    <Layout title="SmartDiag - Ваш проводник в мире автодиагностики">
      <Navbar onNavigateTo={handleNavigateTo} />
      <div ref={heroRef}>
        <Hero />
      </div>
      <div ref={softRef}>
        <Soft />
      </div>
      <div ref={faqRef}>
        <Faq />
      </div>
      <div ref={servicesRef}>
        <Services />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </Layout>
  );
}
