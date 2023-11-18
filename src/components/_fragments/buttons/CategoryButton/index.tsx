'use client'

import { useRouter } from "next/navigation"


export const CategoryButton = ({ children }: { children: React.ReactNode }) => {
    const { push } = useRouter()
    const handleCategoryClick = () => {
        push(`/products/${children}`)
    }

    return (
        <button
        onClick={() => handleCategoryClick()}
        type="button">
            {children}
        </button>
    )
}