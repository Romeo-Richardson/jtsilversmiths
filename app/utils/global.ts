import { items } from "@prisma/client";
import toast from "react-hot-toast";
import { create } from "zustand";

export type cartItem = {
    name: string,
    price: number,
    quantity: number,
    width?: string,
    movement?: string,
    angle?: string,
    copper?: string,
    finish?: string,
    bracePosition?: string,
    height?: string,
    description?: string
}

type MainStoreType = {
    searchQueryInput: FormDataEntryValue | null,
    setSearchQueryInput: (inputValue: FormDataEntryValue | null) => void,
    cart: cartItem[],
    currentlySelectedItem: { name: string, price: number, categories?: string[] } | null,
    setCurrentlySelectedItem: (name: string, price: number) => void,
    addToCart: (item: cartItem) => void,
    removeFromCart: (item: cartItem) => void,
    currentlySelectedQuery: string | null,
    setCurrentlySelectedQuery: (query: string | null) => void,
    displayedItems: items[],
    setDisplayedItems: (items: items[]) => void,
    setupQuery: (fallbackData: any) => void
}

export const useMainStore = create<MainStoreType>((set, get) => ({
    searchQueryInput: null,
    setSearchQueryInput: (inputValue: FormDataEntryValue | null) => {
        set({
            searchQueryInput: inputValue
        })
    },
    cart: [],
    addToCart: (item: cartItem) => {
        const findItem = get().cart.filter((cartItem) => {
            return cartItem.name === item.name
        })[0]
        console.log(findItem)
        if (findItem) {
            const temp = get().cart
            temp.splice(temp.indexOf(findItem), 1)
            set({
                cart: [...temp, item]
            })
        } else if (!findItem) {
            set({
                cart: [...get().cart, item]
            })
        }
    },
    removeFromCart: (item: cartItem) => {
        const temp = get().cart
        temp.splice(temp.indexOf(item), 1)
        set({
            cart: [...temp]
        })
    },
    currentlySelectedItem: null,
    setCurrentlySelectedItem: (name: string, price: number) => {
        set({
            currentlySelectedItem: { name, price }
        })
    },
    currentlySelectedQuery: null,
    setCurrentlySelectedQuery(query) {
        set({
            currentlySelectedQuery: query
        })
    },
    displayedItems: [],
    setDisplayedItems(items: items[]) {
        set({
            displayedItems: [...items]
        })
    },
    setupQuery(fallbackData) {
        console.log(fallbackData)
        console.log(get().currentlySelectedQuery)
        if (get().currentlySelectedQuery && !get().searchQueryInput) {
            get().setDisplayedItems(fallbackData.map((item: items) => {
                if (item.categories.map((category) => category.toLocaleUpperCase()).includes(get().currentlySelectedQuery!.toUpperCase())) {
                    return item
                }
            }).map((x: any) => {
                if (x !== undefined) {
                    return x
                }
            }))
        } else if (!get().currentlySelectedQuery && get().searchQueryInput) {
            get().setDisplayedItems(fallbackData.map((item: items) => {
                if (item.name.toUpperCase().includes(get().searchQueryInput!.toString().toUpperCase())) {
                    return item
                }
            }).map((x: any) => {
                if (x !== undefined) {
                    return x
                }
            }))
            console.log(get().displayedItems?.length)
        } else {
            get().setDisplayedItems([...fallbackData])
        }

        if (!get().displayedItems.filter((item) => {
            return item !== undefined
        })[0]) {
            get().setDisplayedItems([...fallbackData])
            get().setCurrentlySelectedQuery(null)
            toast.error("Failed to find item")
        }
    }
}))