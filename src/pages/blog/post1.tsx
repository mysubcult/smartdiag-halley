// post1.txt
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../components/Layout';
import Head from 'next/head'; // Импортируем Head

export default function BlogPost() {
  const baseTitle = "Как справиться с ошибкой при открытии архива";
  const pageDescription = "Руководство по устранению ошибок при открытии архивов, связанных с антивирусами, устаревшим ПО и другими проблемами.";
  const pageKeywords = "ошибки, архивы, решения, проблемы с антивирусом, устаревшее ПО";

  return (
    <Layout>
      <Head>
        <title>{baseTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
      </Head>
      <main className="bg-white dark:bg-neutral-900 w-full px-4 pt-24 pb-16">
        <div className="container mx-auto flex flex-col lg:flex-row lg:justify-between lg:space-x-6">
          {/* Содержимое страницы */}
        </div>
      </main>
    </Layout>
  );
}
