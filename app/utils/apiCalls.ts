import axios from "axios"

export const getItems = async () => {
    const { data } = await axios.get("/api/get-items")
    return data
}

export const getInquiries = async () => {
    const { data } = await axios.get("/api/get-inquiries")
    if (!data.success) {
        console.log("Failed to get Inquiries")
    }
    return data
}