import axiosInstance from '../helpers/axiosInstance';


export async function fetchCoinData(id) {
    try {
        const response = await axiosInstance.get(`/coins/${id}`);
        console.log(response);
        return response.data;
    } catch (err) {
        return null;
    }
}