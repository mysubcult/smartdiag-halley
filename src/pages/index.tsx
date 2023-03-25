import Contact from "../components/Contact";
import Pricing from "../components/Pricing";
import { Hero } from "../components/Hero";
import Layout from "../components/Layout";
import { Services } from "../components/Services";
import Faq from "../components/Faq";
import Customers from "../components/Customers";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Pricing />
      <Services />
      <Faq />
      <Contact />
      <Customers />
    </Layout>
  );
}
