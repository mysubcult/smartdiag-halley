import dynamic from 'next/dynamic';
import Layout from "../components/Layout";
import { Hero } from "../components/Hero";
import Soft from "../components/Soft";

// Dynamically import non-critical components
const Faq = dynamic(() => import("../components/Faq"));
const Services = dynamic(() => import("../components/Services"));
const Contact = dynamic(() => import("../components/Contact"));

export default function Home() {
  return (
    <Layout title="SmartDiag - Ваш проводник в мире автодиагностики">
      <Hero />
      <Soft />
      <Faq />
      <Services />
      <Contact />
    </Layout>
  );
}
