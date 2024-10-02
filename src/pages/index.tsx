// pages/index.tsx

import { Hero } from "../components/Hero";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        {/* Мета-теги для поисковых систем */}
        <title>SmartDiag - Ваш проводник в мире автодиагностики</title>
        <meta
          name="description"
          content="SmartDiag предлагает широкий выбор диагностических приборов и программ для автосервиса. Подключение и диагностика автомобилей через VCDS, Вася, Autocom CDP+, Delphi DS150, ELM 327, Wurth WoW Snooper, Mucar, Thinkdiag, Diagzone, X-DIAG, ProDiag, Galletto 1260, BMW E-NET (E-Sys), K-Dcan INPA, ELS 27, Mini-VCI, Lexia 3/PP2000, Kingbolen, Thinkcar."
        />
        <meta
          name="keywords"
          content="диагностическое оборудование для авто, автодиагностика, VCDS, Вася диагност, Autocom CDP+, Delphi DS150, ELM 327, Wurth WoW Snooper, Mucar, Thinkdiag, Diagzone, X-DIAG, ProDiag, Galletto 1260, BMW E-NET, E-Sys, K-Dcan INPA, ELS 27, Mini-VCI, Lexia 3, PP2000, Kingbolen, Thinkcar, автооборудование, диагностика автомобилей, программное обеспечение для диагностики, автосервис"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="SmartDiag - Ваш проводник в мире автодиагностики"
        />
        <meta
          property="og:description"
          content="SmartDiag предлагает качественные диагностические решения для автомобилей. Поддержка популярных приборов: VCDS, Вася, Autocom CDP+, Delphi DS150, ELM 327, Wurth WoW Snooper, Mucar, Thinkdiag, Diagzone, X-DIAG, ProDiag, Galletto 1260, BMW E-NET (E-Sys), K-Dcan INPA, ELS 27, Mini-VCI, Lexia 3/PP2000, Kingbolen, Thinkcar."
        />
      </Head>

      {/* Компоненты страницы */}
      <Hero />
    </>
  );
}
