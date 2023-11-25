'use client'

import { useRouter } from "next/navigation"

export const CategoryButton = ({ children }: { children: React.ReactNode }) => {
    const { push } = useRouter()
    const handleCategoryClick = () => {
        push(`/products/${children}`)
    }

    return (
        <div>
            <button type="button" onClick={() => handleCategoryClick()}>
                <h3 className="border px-2 border-second rounded-md">{children}</h3>
            </button>
        </div>
    )
}