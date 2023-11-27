import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { Loading } from "./loading";
import { userStore } from "@/contexts/userStore";
import { signOut, useSession } from "next-auth/react";


export const ModalUserConfirmDelete = () => {

  const { deleteUser, logoutUser, setLoading, userDeleteModal, setUserDeleteModal, loading } = userStore((state) => state)
  const cancelButtonRef = useRef(null);
  const { data:session } = useSession();

  const handleDeleteClick = async () => {
    console.log("clicked")
    await deleteUser();
    setLoading(true);
    if (session) {
      signOut();
    }
    logoutUser();
    setLoading(false);
    setUserDeleteModal(false);
  }
  return (  
    <Transition.Root show={userDeleteModal} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setUserDeleteModal}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-primary px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <Image src="/icons/alertIcon.svg" alt="Icone de um Alerta" width={25} />
                    </div>
                    {loading ?
                      <Loading /> :
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left text-second">
                        <Dialog.Title
                          as="h3"
                          className="text-base font-semibold leading-6"
                        >
                          DESEJA APAGAR O PRODUTO?
                        </Dialog.Title>
                        <div className="mt-8">
                          <p className="text-sm font-inter">
                            está ação irá deletar permanentemente o produto do banco de dados,
                            sendo esta uma ação irreversível, caso queira adicionar o
                            produto novamente, terá que realizar a adição do zero.
                          </p>
                        </div>
                      </div>
                    }
                  </div>
                </div>
                <div className="bg-primary px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto md:hover:scale-[1.02] transition-all"
                    onClick={() => handleDeleteClick()}
                  >
                    APAGAR
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-second px-3 py-2 text-sm font-semibold text-primary shadow-sm sm:mt-0 sm:w-auto md:hover:scale-[1.02] transition-all"
                    onClick={() => setUserDeleteModal(false)}
                    ref={cancelButtonRef}
                  >
                    CANCELAR
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
