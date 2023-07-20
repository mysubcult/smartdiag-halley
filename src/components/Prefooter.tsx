import Link from "next/link";

export default function Prefooter() {
  return (
    <div className="bg-gray-50 dark:bg-neutral-900">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 pt-20 pb-10">
        <h1 className="text-4xl font-bold text-center">
          Зеркала для скачивания
        </h1>
      </div>

      <div className="text-center pb-20 flex flex-col items-center">
        <div className="mb-4">
          <Link href="https://i.getspace.us/cloud/s/dzkdXFpscgCFsjH" target="_blank">
            <button className="bg-red-500 hover:bg-red-600 text-white rounded-full px-6 p-3 font-medium transition duration-300 ease-in-out">
              GetSpace
              <img src="https://getspace.us/wp-content/uploads/2020/02/FAVICON-GS-01.png" className="inline-block w-5 h-5 ml-2" />
            </button>
          </Link>
        </div>
        <div className="mb-4">
          <Link href="https://drive.filen.io/f/2a56c53b-d111-4237-927e-e888d41ca33f#SyzwqKMV3IGSLMDVPoQvnQ7vzhw7BtbV" target="_blank">
            <button className="bg-red-500 hover:bg-red-600 text-white rounded-full px-6 p-3 font-medium transition duration-300 ease-in-out">
              Filen.io
              <img src="https://filen.io/favicon.ico" className="inline-block w-5 h-5 ml-2" />
            </button>
          </Link>
        </div>
        <div className="mb-4">
          <Link href="https://mega.nz/folder/N8BGBBRC#F4YYgKdUlFZmL2UGqfgK-Q" target="_blank">
            <button className="bg-red-500 hover:bg-red-600 text-white rounded-full px-6 p-3 font-medium transition duration-300 ease-in-out">
              Mega.nz
              <img src="https://mega.nz/favicon.ico" className="inline-block w-5 h-5 ml-2" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
