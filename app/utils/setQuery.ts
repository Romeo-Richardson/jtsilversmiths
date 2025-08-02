import { useQuery } from "@tanstack/react-query"
import { useMainStore } from "./global"
import { getItems } from "./apiCalls"
import { items } from "@prisma/client"

const { searchQueryInput, currentlySelectedQuery, setDisplayedItems, displayedItems } = useMainStore()

const { data, isFetched } = useQuery({ queryKey: ["Items"], queryFn: getItems })

const setQuery = () => {
    if (currentlySelectedQuery && !searchQueryInput) {
        setDisplayedItems(data?.data.map((item: items) => {
            if (item.categories.includes(currentlySelectedQuery)) {
                return item
            }
        }))
    } else if (!currentlySelectedQuery && searchQueryInput) {
        setDisplayedItems(data?.data.map((item: items) => {
            if (item.name.includes(searchQueryInput.toString())) {
                return item
            }
        }))
    } else {
        if (isFetched) {
            setDisplayedItems(data?.data)
        }
    }
}

export default setQuery