import Contact from "../components/Contact";
import Soft from "../components/Soft";
import { Hero } from "../components/Hero";
import Layout from "../components/Layout";
import Faq from "../components/Faq";
import { Services } from "../components/Services";

export default function Home() {
  const pageTitle = "SmartDiag - Главная страница";
  const pageDescription = "Добро пожаловать на SmartDiag - ваш проводник в мире автодиагностики.";

  return (
    <Layout title={pageTitle} description={pageDescription}>
      <Hero />
      <Soft />
      <Faq />
      <Services />
      <Contact />
    </Layout>
  );
}
