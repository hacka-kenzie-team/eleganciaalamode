import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {toast} from "react-toastify"

type IModalProps = {
  isOpenModal: boolean;
  setIsOpenModal: (boolean: boolean) => void;
};

export const FooterModalInscrevaSe = ({
  isOpenModal,
  setIsOpenModal,
}: IModalProps) => {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={isOpenModal} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setIsOpenModal}
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
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-primary text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <form className="bg-primary flex gap-5 flex-col p-2 md:p-8 text-second">
                  <label>nome:</label>
                  <input
                    type="text"
                    className="w-full h-12 rounded-md p-5 outline-none text-primary"
                  />
                  <label>email:</label>
                  <input
                    type="text"
                    className="w-full h-12 rounded-md p-5 outline-none text-primary"
                  />
                  <label>mensagem:</label>
                  <textarea
                    name=""
                    id=""
                    className="w-full h-18 rounded-md p-5 outline-none text-primary"
                  ></textarea>
                  <div className="flex justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => setIsOpenModal(false)}
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-second px-3 py-2 text-sm font-semibold text-primary shadow-sm sm:mt-0 sm:w-auto"
                    >
                      cancelar
                    </button>
                    <button
                      type="submit"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-second px-3 py-2 text-sm font-semibold text-primary shadow-sm sm:mt-0 sm:w-auto"
                      onClick={() => {setIsOpenModal(false), toast.success("Cadastro realizado com sucesso!")}}
                    >
                      inscrever-se
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
