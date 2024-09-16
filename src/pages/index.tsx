import Contact from "../components/Contact";
import Soft from "../components/Soft";
import Layout from "../components/Layout";
import Articles from "../components/Articles";
import { Services } from "../components/Services";

export default function Home() {
  return (
    <Layout title="SmartDiag - Ваш проводник в мире автодиагностики">
      <Soft />
      <Articles />
      <Services />
      <Contact />
    </Layout>
  );
}
