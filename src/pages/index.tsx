import Head from "next/head";
import { useEffect, useState } from "react";
import Axios from "axios";

import Modal from "components/Modal";
import Alert from "components/Alert";

export default function Resolve() {
  const [modalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState({});
  const [alertShow, setAlertShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState("");
  useEffect(() => {
    if ((document.getElementById("cfxcode") as HTMLInputElement).value) {
      setCode((document.getElementById("cfxcode") as HTMLInputElement).value);
    }
  });
  const submit = (codeSumitted) => {
    setAlertShow(false);
    setLoading(true);
    Axios.get(
      "https://servers-frontend.fivem.net/api/servers/single/" +
        getLastURLSlash(code)
    )
      .then((res) => {
        var results = res.data.Data;
        setData({
          hostname: results.hostname.substring(0, 140),
          endpoint: results.connectEndPoints[0],
          ip: results.connectEndPoints[0].split(":")[0],
          clients: results.clients,
          maxClients: results.sv_maxclients,
          upvotes: results.upvotePower,
          server: results.server,
          ownerName: results.ownerName,
          ownerAvatar: results.ownerAvatar,
          ownerLink: results.ownerProfile,
          banner: results.vars.banner_detail,
        });
        setModalOpen(true);
        setLoading(false);
      })
      .catch((e) => {
        setAlertShow(true);
        setLoading(false);
      });
  };

  const getLastURLSlash = (codeOrLink) => {
    return codeOrLink.toLocaleLowerCase().split("/")[
      codeOrLink.split("/").length - 1
    ];
  };

  return (
    <div>
      <Head>
        <title>CFX Resolver // Zippo</title>
        <link rel="icon" type="image/svg" href="snail.svg" />
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Resolve cfx.re links to connection endpoints"
        />
        <meta name="keywords" content="CFX, Resolver, CFXResolver" />
        <meta name="author" content="Yaheli Vaknin" />
      </Head>
      <Modal open={modalOpen} setOpen={setModalOpen} data={data} />
      <Alert show={alertShow} setShow={setAlertShow} />
      <main className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="p-3">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <img
              src="snail.svg"
              width="192"
              height="192"
              className="mx-auto select-none"
              alt="snail"
            />
            <h2 className="text-center mt-2 text-3xl font-extrabold text-gray-900">
              CFX RESOLVER
            </h2>
            <p className="text-center px-0 mb-3 text-base text-gray-600">
              Resolve cfx.re links to connection endpoints
            </p>
          </div>
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white shadow-lg sm:rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Cfx.re link or code
                </h3>
                <div className="mt-2 max-w-xl text-sm text-gray-500">
                  <p>Enter the cfx.re address you want to check</p>
                </div>
                <form className="mt-5 sm:flex sm:items-center">
                  <div className="w-full sm:max-w-xs">
                    <input
                      type="text"
                      name="cfxcode"
                      id="cfxcode"
                      onChange={(e) => {
                        setCode(e.target.value);
                      }}
                      className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      placeholder="cfx.re/join/******"
                    />
                  </div>
                  <button
                    onClick={submit}
                    disabled={loading || (!code ? true : false)}
                    type="submit"
                    className={
                      "mt-3 select-none w-full inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm " +
                      (loading
                        ? "cursor-not-allowed"
                        : "" || (!code ? "cursor-not-allowed" : ""))
                    }
                  >
                    <svg
                      className={
                        "animate-spin -ml-1 mr-3 h-5 w-5 text-white relative sm:left-1/4 " +
                        (loading ? "" : " hidden")
                      }
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span className={loading ? "hidden" : ""}>Resolve</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="max-w-7xl mx-auto px-4 overflow-hidden bottom-0 inset-x-0 select-none">
            <p className="mt-4 text-center text-sm text-gray-400">
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
