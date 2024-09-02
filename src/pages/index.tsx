import { useRef } from "react";
import Contact from "../components/Contact";
import Soft from "../components/Soft";
import { Hero } from "../components/Hero";
import Layout from "../components/Layout";
import Faq from "../components/Faq";
import { Services } from "../components/Services";
import Navbar from "../components/Navbar";  // Импортируем Navbar

export default function Home() {
  // Создаем ссылки для секций
  const heroRef = useRef<HTMLDivElement>(null);
  const softRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Функция для прокрутки к секции
  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    if (sectionRef.current) {
      window.scrollTo({
        top: sectionRef.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Layout title="SmartDiag - Ваш проводник в мире автодиагностики">
      <Navbar
        onNavigateTo={(section) => {
          if (section === 'hero') scrollToSection(heroRef);
          if (section === 'soft') scrollToSection(softRef);
          if (section === 'faq') scrollToSection(faqRef);
          if (section === 'services') scrollToSection(servicesRef);
          if (section === 'contact') scrollToSection(contactRef);
        }}
      />
      <div ref={heroRef} id="hero">
        <Hero />
      </div>
      <div ref={softRef} id="soft">
        <Soft />
      </div>
      <div ref={faqRef} id="faq">
        <Faq />
      </div>
      <div ref={servicesRef} id="services">
        <Services />
      </div>
      <div ref={contactRef} id="contact">
        <Contact />
      </div>
    </Layout>
  );
}
