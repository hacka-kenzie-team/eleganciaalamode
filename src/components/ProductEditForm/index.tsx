'use client'

import { adminStore } from "@/contexts/adminStore"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TEditProductValues, editProductSchema } from "./schema";
import { productStore } from "@/contexts/productStore";
import { userStore } from "@/contexts/userStore";
import { IProductEdit } from "@/contexts/@productTypes";
import { slugify } from "@/utils/slugify";
import { removeUndefinedFromObject } from "@/utils/removeUndefinedFromObject";


export const ProductEditForm = () => {
  const { setAdminEditModal } = adminStore((state) => state)
  const { editProduct, activeProduct } = productStore((state) => state)
  const token = userStore((state) => state.userData?.accessToken)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TEditProductValues>({
    resolver: zodResolver(editProductSchema),
  });

  const parseFormData = async (formData: TEditProductValues) => {
    const keywords = formData.keywords?.split(",");
    const url = formData.url;
    delete formData.url;
    delete formData.keywords;
    const formProductObject = (): IProductEdit => {
      let productData: any = formData
      if (url) {
        productData = {
          ...productData,
          style: {
            url: url
          }
        }
      }
      if (keywords) {
        productData = {
          ...productData,
          keywords: keywords.map((keyword) => {
            return {
              entry: keyword.trim()
            }
          })
        }
      }
      if (productData.name) {
        productData = {
          ...productData,
          slug: slugify(productData.name)
        }
      }
      return productData
    }
    const productFinalData = removeUndefinedFromObject(formProductObject())
    token && await editProduct(productFinalData, activeProduct!.id, token);
    setAdminEditModal(false);
  };

  return (
    <form onSubmit={handleSubmit((formData) => parseFormData(formData))}
      className="bg-primary flex gap-5 flex-col p-2 md:p-8 text-second">
      <label>nome do produto:</label>
      <input
        type="text"
        placeholder={activeProduct?.name}
        {...register("name")}
        className="w-full h-12 rounded-md p-5 outline-none text-primary"
      />
      {errors.name && <p>{errors.name.message}</p>}
      <div className="flex gap-5">
        <div className="flex flex-col gap-5">
          <label>preço:</label>
          <input
            type="number"
            placeholder={String(activeProduct?.price)}
            {...register("price")}
            className="w-full h-12 rounded-md p-5 outline-none text-primary"
          />
          {errors.price && <p>{errors.price.message}</p>}
        </div>
        <div className="flex flex-col gap-5">
          <label>estoque:</label>
          <input
            type="number"
            placeholder={String(activeProduct?.stock)}
            {...register("stock")}
            className="w-full h-12 rounded-md p-5 outline-none text-primary"
          />
          {errors.stock && <p>{errors.stock.message}</p>}
        </div>
      </div>
      <label>descrição:</label>
      <textarea
        placeholder={activeProduct?.description}
        {...register("description")}
        className="w-full h-20 rounded-md p-2 outline-none text-primary"
      ></textarea>
        {errors.description && <p>{errors.description.message}</p>}
        <label>palavras-chave, digite separando-as por virgula:</label>
        <textarea
        placeholder={activeProduct?.keywords.map((keyword) => {
          return keyword.entry
        }).join(", ")}
        {...register("keywords")}
        className="w-full h-20 rounded-md p-2 outline-none text-primary"
      ></textarea>
        {errors.keywords && <p>{errors.keywords.message}</p>}
      <div className="flex gap-5">
        <div className="flex flex-col gap-5">
          <label>categoria:</label>
          <input
            type="text"
            placeholder={activeProduct?.category}
            {...register("category")}
            className="w-full h-12 rounded-md p-5 outline-none text-primary"
          />
          {errors.category && <p>{errors.category.message}</p>}
        </div>
        <div className="flex flex-col gap-5">
          <label>coleção:</label>
          <input
            type="text"
            placeholder={activeProduct?.collection}
            {...register("collection")}
            className="w-full h-12 rounded-md p-5 outline-none text-primary"
          />
          {errors.collection && <p>{errors.collection.message}</p>}
        </div>
      </div>
      <label>url da foto do produto:</label>
      <input
        type="text"
        placeholder={activeProduct?.style.url}
        {...register("url")}
        className="w-full h-12 rounded-md p-5 outline-none text-primary"
      />
      {errors.url && <p>{errors.url.message}</p>}
      <div>
        <p>Está em promoção?</p>
        <div className="flex justify-around">
          <div className="flex gap-2 items-center">
            <label>sim:</label>
            <input
                type="radio"
                value={"true"}
                {...register("sale")}
                className="w-full h-12 rounded-md p-5 outline-none text-primary"
              />
          </div>
          <div className="flex gap-5 items-center">
            <label>não:</label>
            <input
                type="radio"
                value={"false"}
                {...register("sale")}
                className="w-full h-12 rounded-md p-5 outline-none text-primary"
              />
          </div>
        </div>
        {errors.sale && <p>{errors.sale.message}</p>}
      </div>
      <div className="flex justify-between gap-2">
        <button
          type="button"
          onClick={() => setAdminEditModal(false)}
          className="mt-3 inline-flex w-full justify-center rounded-md bg-second px-3 py-2 text-sm font-semibold text-primary shadow-sm sm:mt-0 sm:w-auto md:hover:scale-[1.02] transition-all"
        >
          cancelar
        </button>
        <button
          type="submit"
          className="mt-3 inline-flex w-full justify-center rounded-md bg-second px-3 py-2 text-sm font-semibold text-primary shadow-sm sm:mt-0 sm:w-auto md:hover:scale-[1.02] transition-all"
        >
          adicionar
        </button>
      </div>
    </form>
  )
}