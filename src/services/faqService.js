import axios from "axios"

const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    withCredentials: true
})


export const getAllFaqWithAnswer = async() =>{
    try {
        const response = await api.get("/adminFaq/getFAQWithQuestionAndAnswer");
        // console.log(response.data);
        return response.data.faqs;
    } catch (error) {
        console.error("Error fetching FAQs:", error);
        throw error;
    }
}
