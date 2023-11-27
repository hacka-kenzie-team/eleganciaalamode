import { productStore } from "@/contexts/productStore";
import { userStore } from "@/contexts/userStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TAddProductValues, addProductSchema } from "./schema";
import { IProductCreate } from "@/contexts/@productTypes";
import { slugify } from "@/utils/slugify";
import { Loading } from "../_fragments/loading";

export const AdminAddProducts = () => {
    const { addProduct, loading } = productStore((state) => state)
    const token = userStore((state) => state.userData?.accessToken)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<TAddProductValues>({
        resolver: zodResolver(addProductSchema),
    });

    const parseFormData = async (formData: TAddProductValues) => {
        const keywords = formData.keywords?.split(",");
        const url = formData.url;
        delete formData.url;
        delete formData.keywords;
        const formProductObject = (): IProductCreate => {
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
        const productFinalData = formProductObject()
        token && await addProduct(productFinalData, token);
        reset()
    };

    return (
        <section className="flex flex-col gap-9">
            <h1 className="flex justify-center mt-5">Novo produto</h1>
            {loading ?
                <Loading />
                :
                <form onSubmit={handleSubmit((formData) => parseFormData(formData))}
                    className="bg-primary flex gap-5 flex-col p-2 md:p-8 text-second">
                    <label>nome do produto</label>
                    <input
                        type="text"
                        placeholder="Digite o nome do produto"
                        {...register("name")}
                        className="w-full h-12 rounded-md p-5 outline-none text-primary"
                    />
                    {errors.name && <p>{errors.name.message}</p>}
                    <div className="flex gap-5">
                        <div className="flex flex-col gap-5">
                            <label>preço</label>
                            <input
                                type="number"
                                placeholder="Digite o preço do produto"
                                {...register("price")}
                                className="w-full h-12 rounded-md p-5 outline-none text-primary"
                            />
                            {errors.price && <p>{errors.price.message}</p>}
                        </div>
                        <div className="flex flex-col gap-5">
                            <label>estoque</label>
                            <input
                                type="number"
                                placeholder="Digite a quantidade de estoque do produto"
                                {...register("stock")}
                                className="w-full h-12 rounded-md p-5 outline-none text-primary"
                            />
                            {errors.stock && <p>{errors.stock.message}</p>}
                        </div>
                    </div>
                    <label>descrição</label>
                    <textarea
                        placeholder="Digite uma descrição para o produto"
                        {...register("description")}
                        className="w-full h-18 rounded-md p-5 outline-none text-primary"
                    ></textarea>
                    {errors.description && <p>{errors.description.message}</p>}
                    <label>Keywords</label>
                    <textarea
                        placeholder="Digite as keywords do produto separadas por uma virgula, ex: alegre, clara, verão"
                        {...register("keywords")}
                        className="w-full h-18 rounded-md p-5 outline-none text-primary"
                    ></textarea>
                    {errors.keywords && <p>{errors.keywords.message}</p>}
                    <div className="flex gap-5">
                        <div className="flex flex-col gap-5">
                            <label>categoria</label>
                            <input
                                placeholder="Digite uma das categorias sem acento e sem cedilha: Acessorios, Roupas, Calcados ou Ternos"
                                {...register("category")}
                                type="text"
                                className="w-full h-12 rounded-md p-5 outline-none text-primary"
                            />
                            {errors.category && <p>{errors.category.message}</p>}
                        </div>
                        <div className="flex flex-col gap-5">
                            <label>coleção</label>
                            <input
                                type="text"
                                placeholder="Digite o nome da coleção: outono-inverno, primavera-verao ou business"
                                {...register("collection")}
                                className="w-full h-12 rounded-md p-5 outline-none text-primary"
                            />
                            {errors.collection && <p>{errors.collection.message}</p>}
                        </div>
                    </div>
                    <label>url da foto do produto</label>
                    <input
                        type="text"
                        placeholder="URL da imagem hospedada em catbox.moe ou drive.google ou cloudinary.com"
                        {...register("url")}
                        className="w-full h-12 rounded-md p-5 outline-none text-primary"
                    />
                    {errors.url && <p>{errors.url.message}</p>}
                    <div className="flex justify-center gap-2">
                        <button
                            type="submit"
                            className="mt-3 inline-flex w-full justify-center rounded-md bg-second px-3 py-2 text-sm font-semibold text-primary shadow-sm sm:mt-0 sm:w-auto md:hover:scale-[1.02] transition-all"
                        >
                            adicionar
                        </button>
                    </div>
                </form>
            }

        </section>
    )
}