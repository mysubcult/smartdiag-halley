import Link from "next/link";

export default function Prefooter() {
  return (
    <div className="bg-white dark:bg-neutral-900">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 pt-20 pb-10">
        <h1 className="text-4xl font-bold text-center">
          Все программы в одном месте
        </h1>
      </div>

      <div className="text-center pb-20">
        <Link href="https://github.com/humberni/halley" target="_blank">
          <button className="bg-red-500 text-white rounded-full px-6 p-3 font-medium">
            Скачать&nbsp;&nbsp;&nbsp;
          </button>&nbsp;&nbsp;&nbsp;
        </Link>&nbsp;&nbsp;&nbsp;
        <Link href="https://github.com/humberni/halley" target="_blank">
          <button className="bg-red-500 text-white rounded-full px-6 p-3 font-medium">
            Скачать&nbsp;
          </button>
        </Link>
      </div>
    </div>
  );
}
