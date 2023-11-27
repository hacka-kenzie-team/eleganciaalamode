import { IProduct } from "@/contexts/@productTypes";
import Link from "next/link";
import Image from "next/image";
import { ProductHomeCardStock } from "../_fragments/ProductHomeCardStock";
import { ProductAdminCardEdit } from "../_fragments/ProductAdminCardEdit";

interface IProductsAdminCardProps {
  product: IProduct;
}

export const ProductsAdminCard = ({ product }: IProductsAdminCardProps) => {
  return (
    <li className="w-72 gap-2 flex flex-col justify-between md:hover:scale-[1.02] transition-all">
      <Link href={`/${product.slug}`}>
        <Image
          src={product.style.url}
          width={400}
          height={600}
          alt="Imagem do produto"
          className="rounded-t-lg"
        />
      </Link>
      <div className="flex flex-col gap-2">
        <Link href={`/${product.slug}`}>
          <div>
            <div>
              <h1>{product.name}</h1>
            </div>
            <ProductHomeCardStock productId={product.id} />
          </div>
        </Link>
        <ProductAdminCardEdit productId={product.id} />
      </div>
    </li>
  );
};
