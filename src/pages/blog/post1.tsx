// Файл: src/pages/blog/post1.tsx

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../components/Layout';

export const metadata = {
  title: 'Как справиться с ошибкой при открытии архива',
  description: 'Руководство по устранению ошибок при открытии архивов, связанных с антивирусами, устаревшим ПО и другими проблемами.',
  keywords: 'ошибки, архивы, решения, проблемы с антивирусом, устаревшее ПО',
};

export default function BlogPost() {
  const [isClient, setIsClient] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <Layout
      title={metadata.title}
      description={metadata.description}
      keywords={metadata.keywords}
    >
      <main className="bg-white dark:bg-neutral-900 w-full px-4 pt-24 pb-16">
        {/* Оставшийся контент страницы */}
      </main>
    </Layout>
  );
}
