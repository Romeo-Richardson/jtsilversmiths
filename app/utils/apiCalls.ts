import axios from "axios"

export const getItems = async () => {
    const { data } = await axios.get("https://jtsilversmiths.com/api/get-items")
    return data
}