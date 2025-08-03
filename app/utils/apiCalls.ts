import axios from "axios"

export const getItems = async () => {
    const { data } = await axios.get("https://www.jtsilversmiths.com/api/get-items")
    return data
}