import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import { shoppingStore } from "@/contexts/shoppingStore";

type IModalProps = {
  isModalOpen: boolean;
  setIsModaOpen: (boolean: boolean) => void;
};

export const OptionMobileModal = ({
  isModalOpen,
  setIsModaOpen,
}: IModalProps) => {
  const { setShoppingModal, shoppingList } = shoppingStore((state) => state);

  return (
    <Transition.Root show={isModalOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setIsModaOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen">
                  <div className="flex h-full flex-col overflow-y-scroll bg-primary shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          <Link href={"/"}>
                            <h2 className="text-3xl text-second">
                              ElegênciaÀLaMode
                            </h2>
                          </Link>
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-second hover:text-gray-500"
                            onClick={() => setIsModaOpen(false)}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <p className="h-6 w-6" aria-hidden="true">
                              X
                            </p>
                          </button>
                        </div>
                      </div>
                      <div>
                        <ul className="-my-6 divide-y divide-second text-second mt-10">
                          <li>
                            <Link href={'/'} className="flex justify-center py-8 text-2xl">
                              HOME
                            </Link>
                          </li>
                          <li>
                            <Link href={'/products'} className="flex justify-center py-8 text-2xl" >
                              PRODUTOS
                            </Link>
                          </li>
                          <li>
                            <Link href={'/login'} className="flex justify-center py-8 text-2xl">
                              LOGIN
                            </Link>
                          </li>
                          <li>
                            <Link href={'/register'} className="flex justify-center py-8 text-2xl">
                              CADASTRO
                            </Link>
                          </li>
                          <li>
                            <h3
                              className="flex justify-center py-8 text-2xl"
                              onClick={() => setShoppingModal(true)}
                            >
                              CARRINHO
                            </h3>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
