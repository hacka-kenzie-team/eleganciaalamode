import { DetailedProductSearchCard } from "../DetailedProductSearchCard"
import { SearchInput } from "../_fragments/Inputs"

export const DetailedProductSearchList = () => {
    return (
        <section>
            <SearchInput />
            <ul>
                <DetailedProductSearchCard />
                <DetailedProductSearchCard />
                <DetailedProductSearchCard />
            </ul>
        </section>
    )
}