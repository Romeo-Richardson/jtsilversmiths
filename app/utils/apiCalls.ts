import axios from "axios"

export const getItems = async () => {
    const { data } = await axios.get("/api/get-items")
    return data
}