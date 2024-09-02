import Layout from "../components/Layout";
import { Hero } from "../components/Hero";
import Soft from "../components/Soft";
import Faq from "../components/Faq";
import Services from "../components/Services";

export default function HomePage() {
  return (
    <Layout title="SmartDiag - Ваш проводник в мире автодиагностики">
      {({ setCurrentSection }) => (
        <>
          <Hero setCurrentSection={setCurrentSection} />
          <Soft />
          <Faq />
          <Services />
        </>
      )}
    </Layout>
  );
}
