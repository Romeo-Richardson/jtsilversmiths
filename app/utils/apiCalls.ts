import axios from "axios"

export const getItems = async () => {
    const { data } = await axios.get("https://jtsilversmiths-t5l8.vercel.app/api/get-items")
    return data
}