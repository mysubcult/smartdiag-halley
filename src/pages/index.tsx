import Contact from "../components/Contact";
import Soft from "../components/Soft";
import { Hero } from "../components/Hero";
import Layout from "../components/Layout";
import Faq from "../components/Faq";
import { Services } from "../components/Services";
import Customers from "../components/Customers";
import Script from 'next/script'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Soft />
      <Faq />
      <Services />
      <Contact />
    <div style={{
* { background: 'red';}
}}>
<Script src="https://xn----7sbabnedajkp5ap8aokkew.xn--p1ai/index.php/rus/chat/getstatus/(click)/internal/(position)/bottom_right/(ma)/br/(top)/350/(units)/pixels/(leaveamessage)/true/(department)/1/(theme)/1" />
</div>  
 </Layout>
  );
}
