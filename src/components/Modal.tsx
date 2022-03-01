import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { LightBulbIcon } from "@heroicons/react/outline";

export default function Modal({ open, setOpen, data }) {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-3/4 sm:p-6">
              <div>
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 -mb-3">
                  <LightBulbIcon
                    className="h-6 w-6 text-green-600"
                    aria-hidden="true"
                  />
                </div>
                <div className="text-center sm:mt-5">
                  <div>
                    <Dialog.Title
                      as="h3"
                      className="text-lg leading-6 font-medium text-gray-900"
                    >
                      Resolved successful
                    </Dialog.Title>
                    <div>
                      <p className="text-sm text-gray-500">
                        Congratulations! we succeeded to resolve the link!
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex flex-col">
                      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                          <div className="overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                              <thead className="bg-gray-100">
                                <tr>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider"
                                  >
                                    Server Data:
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                  ></th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-left text-gray-900">
                                    Hostname
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-left text-gray-500">
                                    <code>{data.hostname}</code>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-left text-gray-900">
                                    Endpoint
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-left text-gray-500">
                                    <code>{data.endpoint}</code>
                                    <span className="select-none">
                                      {" "}
                                      (
                                      <a
                                        href={`https://ipinfo.io/${data.ip}`}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-blue-500 underline"
                                      >
                                        ipinfo.io
                                      </a>
                                      )
                                    </span>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-left text-gray-900">
                                    Players
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-left text-gray-500">
                                    {data.clients} / {data.maxClients}
                                  </td>
                                </tr>
                                <tr>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-left text-gray-900">
                                    Upvotes (Boosts)
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-left text-gray-500">
                                    {data.upvotes}
                                  </td>
                                </tr>
                                <tr>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-left text-gray-900">
                                    Server
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-left text-gray-500">
                                    {data.server}
                                  </td>
                                </tr>
                                {data.banner ? (
                                  <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-left text-gray-900">
                                      Banner
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-left text-gray-500">
                                      <img
                                        src={data.banner}
                                        className="rounded-md"
                                        alt="banner"
                                      />
                                    </td>
                                  </tr>
                                ) : (
                                  ""
                                )}
                                <tr>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-left text-gray-900">
                                    Owner
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-left text-gray-500">
                                    <div className="flex-shrink-0 group block">
                                      <a
                                        href={data.ownerLink}
                                        className="flex items-center"
                                      >
                                        <div>
                                          <img
                                            className="inline-block h-9 w-9 rounded-full"
                                            src={data.ownerAvatar}
                                            alt="ownerAvatar"
                                          />
                                        </div>
                                        <div className="ml-3">
                                          <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                                            {data.ownerName}
                                          </p>
                                          <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                                            View profile
                                          </p>
                                        </div>
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-6 sm:grid-flow-row-dense">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:col-start-2 sm:text-sm"
                  onClick={() => setOpen(false)}
                >
                  Go back
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
