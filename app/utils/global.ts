import { items } from "@prisma/client";
import toast from "react-hot-toast";
import { create } from "zustand";

export type cartItem = {
    name: string,
    price: number,
    quantity: number,
    width?: string | null,
    movement?: string | null,
    angle?: string | null,
    copper?: string | null,
    finish?: string | null,
    bracePosition?: string | null,
    height?: string | null,
    description?: string | null,
    style?: string | null
    purchaseOption?: string | null,
    bitEnds?: string | null
}

type MainStoreType = {
    searchQueryInput: FormDataEntryValue | null,
    setSearchQueryInput: (inputValue: FormDataEntryValue | null) => void,
    cart: cartItem[],
    cartQuantity: number,
    setCartQuantity: (quantity: number) => void,
    currentlySelectedItem: { name: string, price: number, categories?: string[] } | null,
    setCurrentlySelectedItem: (name: string, price: number, categories: string[]) => void,
    addToCart: (item: cartItem) => void,
    removeFromCart: (item: cartItem) => void,
    currentlySelectedQuery: string | null,
    setCurrentlySelectedQuery: (query: string | null) => void,
    displayedItems: items[],
    setDisplayedItems: (items: items[]) => void,
    setupQuery: (fallbackData: any) => void,
    isExpressShipping: boolean,
    setIsExpressShipping: () => void,
    mainCategory: string | null,
    setMainCategory: (category: string) => void
}

export const useMainStore = create<MainStoreType>((set, get) => ({
    searchQueryInput: null,
    setSearchQueryInput: (inputValue: FormDataEntryValue | null) => {
        set({
            searchQueryInput: inputValue
        })
    },
    mainCategory: null,
    setMainCategory: (category) => {
        set({
            mainCategory: category
        })
        console.log(get().mainCategory)
    },
    isExpressShipping: false,
    setIsExpressShipping: () => {
        set({
            isExpressShipping: get().isExpressShipping ? false : true
        })
    },
    cartQuantity: 0,
    setCartQuantity: (quantity) => {
        set({ cartQuantity: quantity })
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
            cart: [...temp],
            cartQuantity: get().cartQuantity - item.quantity
        })
    },
    currentlySelectedItem: null,
    setCurrentlySelectedItem: (name: string, price: number, categories: string[]) => {
        set({
            currentlySelectedItem: { name, price, categories }
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
        console.log(get().mainCategory)
        const category = get().mainCategory?.split("")
        if (category && category[category.length - 1] === "s") {
            category?.pop()
        }
        console.log(category?.join("")!)

        console.log(items)


        if (!get().searchQueryInput && get().mainCategory) {
            items = items.map((item) => {
                console.log(item)
                if (item !== undefined && item.categories?.includes(category?.join("")!)) {
                    return item
                }
            }).map((x: any) => {
                if (x !== undefined) {
                    return x
                }
            })
        }

        set({
            displayedItems: [...items]
        })
    },
    setupQuery(fallbackData) {
        console.log(fallbackData)
        console.log(get().currentlySelectedQuery)
        if (get().currentlySelectedQuery && !get().searchQueryInput) {
            get().setDisplayedItems(fallbackData.map((item: items) => {
                if (item.categories.map((category) => category).includes(get().currentlySelectedQuery!)) {
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