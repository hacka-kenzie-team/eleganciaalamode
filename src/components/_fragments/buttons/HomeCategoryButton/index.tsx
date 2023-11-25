import Link from "next/link"


export const HomeCategoryButton = ({ children }: { children: React.ReactNode }) => {
    const getCategory = () => {
        if (String(children) === "Acessórios"){
            return "Acessorio";
        } else if (String(children) === "Calçados"){
            return "Calcados";
        } else {
            return String(children);
        };
    };

    return (
        <Link href={`/products/${getCategory()}`}>
        <button type="button">
            {children}
        </button>
        </Link>
    )
};