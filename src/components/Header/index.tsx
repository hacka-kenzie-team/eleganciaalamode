import Image from "next/image"
import { HeaderNav } from "../HeaderNav"
import placeholder from "../../../public/next.svg"
import Link from "next/link"

export const Header = () => {
  return (
    <header>
      <div>
        <Link href={"/"}>HOME</Link>
        <Image
          src={placeholder}
          height={50}
          width={50}
          alt="Logo de Elegancia á La Mode"
        />
      </div>
      <div>
        <HeaderNav />
        <button>
          <span>0</span>
          <Image
            src={placeholder}
            height={50}
            width={50}
            alt="Ícone de carrinho de compras"
          />
        </button>
      </div>
    </header>
  )
}