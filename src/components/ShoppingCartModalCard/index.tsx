"use client";
import Image from "next/image";
import placeholder from "../../../public/vercel.svg";
import { AddIcon, SubtractIcon } from "../_fragments/Icons";
import { IShoppingItem } from "@/contexts/@shoppingTypes";
import { shoppingStore } from "@/contexts/shoppingStore";

interface IShoppingCartModalCardProps {
  shoppingItem: IShoppingItem;
}

export const ShoppingCartModalCard = ({
  shoppingItem,
}: IShoppingCartModalCardProps) => {
  const { addItem, removeItem } = shoppingStore((state) => state);

  return (
    <li key={shoppingItem.product.id} className="flex py-6">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-second">
        <Image
          src={shoppingItem.product.style.url}
          alt="product picture"
          width={60}
          height={60}
          className="h-full w-full object-fill object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-second">
            <h3>
              <p>{shoppingItem.product.name}</p>
            </h3>
            <p className="ml-4">{
              shoppingItem.product.price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })
            }</p>
          </div>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-second">quantidade: {shoppingItem.quantity}</p>
          <div className="flex gap-2 border border-second rounded-lg text-second">
            <button
              type="button"
              onClick={() => removeItem(shoppingItem.product.id)}
              className="w-[20px]"
            >
              -
            </button>
            <span className="text-second">|</span>
            <button 
              type="button" 
              onClick={() => addItem(shoppingItem.product)}
              className="w-[20px]">
              +
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};
