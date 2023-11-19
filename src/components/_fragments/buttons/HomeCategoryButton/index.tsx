import Link from "next/link"


export const HomeCategoryButton = ({ children }: { children: React.ReactNode }) => {

    return (
        <Link href={`/products/${children}`}>
        <button type="button">
            {children}
        </button>
        </Link>
    )
}