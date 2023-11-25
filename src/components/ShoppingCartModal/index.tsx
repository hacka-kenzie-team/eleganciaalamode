"use client";
import { shoppingStore } from "@/contexts/shoppingStore";
import { ShoppingCartModalCard } from "../ShoppingCartModalCard";
import { IShoppingItem } from "@/contexts/@shoppingTypes";
import { userStore } from "@/contexts/userStore";
import Link from "next/link";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";

export const ShoppingCartModal = () => {
  const { setShoppingModal, shoppingModal, shoppingList, clearShoppingList } =
    shoppingStore((state) => state);

  const { userData, buy } = userStore((state) => state);

  const handleBuyClick = (shoppingList: IShoppingItem[]) => {
    userData &&
      buy({
        order: {
          user_id: userData.user.id,
          is_paid: true,
          items_bought: shoppingList.map((item) => {
            return {
              product_name: item.product.name,
              product_price: item.product.price,
              quantity: item.quantity,
              productId: item.product.id,
              quantityTotal: item.product.stock,
            };
          }),
        },
      });
  };

  return (
    <Transition.Root show={shoppingModal} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setShoppingModal(false)}
      >
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
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full sm:pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen sm:max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-primary shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-second">
                          carrinho de compras
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setShoppingModal(false)}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <p
                              className="h-6 w-6 text-second"
                              aria-hidden="true"
                            >
                              X
                            </p>
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-second"
                          >
                            {!shoppingList ? (
                              <li>nenhum item adicionado</li>
                            ) : (
                              shoppingList.map((shoppingItem) => (
                                <ShoppingCartModalCard
                                  shoppingItem={shoppingItem}
                                  key={shoppingItem.product.id}
                                />
                              ))
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-second px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-second">
                        <p>total</p>
                        <span>
                          R$:{" "}
                          {!shoppingList
                            ? "00,00"
                            : shoppingList
                                .reduce(
                                  (a, c) => a + c.product.price * c.quantity,
                                  0
                                )
                                .toFixed(2)}
                        </span>
                      </div>
                      <p className="mt-0.5 text-sm text-second">
                        frete e taxas calculados na finalização da compra.
                      </p>
                      <div className="mt-6">
                        {userData ? (
                          <button
                            type="button"
                            className="flex items-center justify-center rounded-md border border-transparent bg-second px-6 py-3 text-base font-medium text-primary shadow-sm"
                            onClick={() => handleBuyClick(shoppingList)}
                          >
                            finalizar pedido
                          </button>
                        ) : (
                          <Link
                            href={"/login"}
                            className="flex items-center justify-center rounded-md border border-transparent bg-second px-6 py-3 text-base font-medium text-primary shadow-sm"
                            onClick={() => setShoppingModal(false)}
                          >
                            entre para finalizar compra
                          </Link>
                        )}
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-second">
                        <p>
                          {`ou `}
                          <button
                            type="button"
                            className="font-medium text-second underline decoration-1"
                            onClick={() => setShoppingModal(false)}
                          >
                            continue comprando
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
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
