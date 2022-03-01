import Head from "next/head";
import Link from "next/link";

export default function NOTFOUND() {
  return (
    <div>
      <Head>
        <title>CFX Resolver // Zippo</title>
        <link rel="icon" type="image/svg" href="robber.svg" />
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Resolve cfx.re links to connection endpoints"
        />
        <meta name="keywords" content="CFX, Resolver, CFXResolver" />
        <meta name="author" content="Yaheli Vaknin" />
      </Head>
      <main className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="p-3">
          <div className="sm:mx-auto sm:w-full">
            <img
              src="robber.svg"
              width="192"
              height="192"
              className="mx-auto select-none"
              alt="snail"
            />
            <h2 className="text-center mt-2 text-3xl font-extrabold text-gray-900">
              404 - Page not found
            </h2>
            <p className="text-center px-0 mb-3 text-sm sm:text-base text-gray-600">
              The page you are looking for doesn&apos;t exist or an other error
              occurred. AKA You got snailed!
              <br />
            </p>
            <Link href="/">
              <a className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none max-w-[30%] mx-auto focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                Go back
              </a>
            </Link>
          </div>
        </div>
        <footer>
          <div className="max-w-7xl mx-auto py-6 px-4 overflow-hidden sm:px-6 lg:px-8 fixed bottom-0 inset-x-0 select-none">
            <p className="mt-8 text-center text-sm text-gray-500">
              &copy; {new Date().getFullYear()}{" "}
              <a
                href="http://github.com/YaheliVaknin"
                target="_blank"
                rel="noreferrer"
                className="hover:text-gray-600"
              >
                Yaheli Vaknin
              </a>
              , All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
