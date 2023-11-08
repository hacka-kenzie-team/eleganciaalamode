import Image from "next/image"
import placeholder from "../../../public/vercel.svg"

export const UserNameTag = () => {
    return (
        <div>
            <Image
            src={placeholder}
            height={70}
            width={70}
            alt="User picture"
            />
        </div>
    )
}