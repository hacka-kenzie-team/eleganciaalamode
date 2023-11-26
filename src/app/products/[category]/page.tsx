'use client'

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProductsHome } from "@/components/ProductsHome";
import { ProductsHomeMock } from "@/components/ProductsHomeMock";
import { Loading } from "@/components/_fragments/loading";
import { productStore } from "@/contexts/productStore";
import { useEffect } from "react";


interface IProductsCategoryParams {
    params: {
        category: string;
    };
}

export default function ProductsCategoryPage({ params }: IProductsCategoryParams) {

    const {
        loading,
        productList,
        loadProducts,
        loadSearchedProducts,
        searchInput
    } = productStore((state) => state);

    const filteredProducts = (!params.category || params.category === "all") ?
        productList :
        productList.filter((product) => product.category === params.category
        );

    useEffect(() => {
        searchInput ?
            loadSearchedProducts(searchInput) :
            loadProducts()
    }, [searchInput]);

    return (
        <>
            <Header />
            <main className="flex min-h-screen flex-col items-center justify-between p-24 text-second">
                {loading ? (
                    <section>
                        <ProductsHomeMock />
                    </section>
                ) : (
                    <>
                        {filteredProducts.length > 0 ? (
                            <ProductsHome allProducts={filteredProducts} />
                        ) : (
                            <section>
                                <h1 className="text-3xl">Nenhum Produto encontrado</h1>
                            </section>
                        )}
                    </>
                )}
            </main>
            <Footer />
        </>
    );
};