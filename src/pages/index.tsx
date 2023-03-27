import Contact from "../components/Contact";
import Pricing from "../components/Soft";
import { Hero } from "../components/Hero";
import Layout from "../components/Layout";
import Faq from "../components/Faq";
import { Services } from "../components/Services";
import Customers from "../components/Customers";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Soft />
      <Faq />
      <Services />
      <Contact />
    </Layout>
  );
}
