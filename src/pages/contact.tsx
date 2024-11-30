// src/pages/contact.tsx

import Head from "next/head";
import Contact from "../components/Contact";

const ContactPage: React.FC = () => {
  return (
    <>
      <Head>
        {/* Мета-теги для SEO */}
        <title>Контакты | SmartDiag</title>
        <meta
          name="description"
          content="Свяжитесь с нами для получения поддержки, заказов или любых вопросов. SmartDiag всегда готов помочь вам с диагностическими решениями для автомобилей."
        />
        <meta
          name="keywords"
          content="контакты, поддержка, заказ оборудования, установка ПО, SmartDiag"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Контакты | SmartDiag" />
        <meta
          property="og:description"
          content="Свяжитесь с нами для получения поддержки, заказов или любых вопросов. SmartDiag всегда готов помочь вам с диагностическими решениями для автомобилей."
        />
        {/* Дополнительные мета-теги можно добавить по необходимости */}
      </Head>

      {/* Компонент Контактов */}
      <Contact />
    </>
  );
};

export default ContactPage;
