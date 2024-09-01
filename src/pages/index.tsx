import Contact from "../components/Contact";
import Soft from "../components/Soft";
import { Hero } from "../components/Hero";
import Layout from "../components/Layout";
import Faq from "../components/Faq";
import { Services } from "../components/Services";

export default function Home() {
  return (
    <Layout title="SmartDiag - Ваш проводник в мире автодиагностики" description="Основная информация о SmartDiag, новейшие технологии и поддержка в мире автодиагностики">
      <Hero />
      <Soft />
      <Faq />
      <Services />
      <Contact />
    </Layout>
  );
}
