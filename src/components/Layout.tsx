import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: string;
}

const Layout = ({ children, title, description, keywords, image, type }: LayoutProps) => {
  const router = useRouter();
  const meta = {
    title: title || "SmartDiag - Ваш проводник в мире автодиагностики",
    description: description || "SmartDiag предлагает широкий ассортимент оборудования для диагностики автомобилей, включая Autocom CDP+, Delphi DS150E, VCDS. Программы и инструкции по установке.",
    keywords: keywords || "автодиагностика, Autocom CDP+, Delphi DS150E, VCDS, Вася, mucar, thinkdiag, Thinkcar, диагностика автомобилей, программы для диагностики, оборудование для диагностики, car diagnostics, diagnostic tools, software for diagnostics, diagnostic equipment, vehicle diagnostics, diagnostic software, installation instructions, BMW, Audi, Mercedes, Toyota, Volkswagen, Ford, Nissan, Honda, Chevrolet, Kia",
    image: image || "/images/seo/halley-banner.png",
    type: type || "website",
  };

  const [isClient, setIsClient] = useState(false);
  const [currentHash, setCurrentHash] = useState(''); // Храним текущий якорь

  // Основной заголовок страницы - измените его для каждого нового поста
  const baseTitle = "Как справиться с ошибкой при открытии архива";

  // Объект для хранения заголовков и текстов пунктов меню с эмодзи
  const titles = {
    '': '🏠 В начало',
    'antivirus-issue': '🛡️ Проблема с антивирусом',
    'outdated-software': '⏳ Устаревшее программное обеспечение',
    'download-errors': '📥 Ошибки при загрузке',
    'yandex-tips': '🌐 Советы для пользователей Яндекс Браузера',
    'support': '📞 Поддержка'
  } as const;

  useEffect(() => {
    setIsClient(true); // Устанавливаем флаг, что код выполняется на клиенте
  }, []);

  // Обновление заголовка страницы при изменении якоря
  useEffect(() => {
    if (!isClient) return;

    const updateTitle = () => {
      const hash = router.asPath.split('#')[1] || '';
      const hashKey = hash as keyof typeof titles;
      const title = hashKey in titles ? `${baseTitle} | ${titles[hashKey]}` : baseTitle;
      document.title = title; 
      setCurrentHash(hash); 
    };

    updateTitle(); 

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        updateTitle(); 
        document.title = router.asPath.split('#')[1] || '';
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isClient, router.asPath]); 

  if (!isClient) return null; // Возвращаем null, если код выполняется на сервере

  return (
    <>
      <Head>
        <title>{currentHash in titles ? `${baseTitle} | ${titles[currentHash as keyof typeof titles]}` : baseTitle}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:url" content={`${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
        <link rel="canonical" href={`${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`} />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
