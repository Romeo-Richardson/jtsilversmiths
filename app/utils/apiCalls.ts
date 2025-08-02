import axios from "axios"

export const getItems = async () => {
    const { data } = await axios.get("http://localhost:3000/api/get-items")
    return data
}