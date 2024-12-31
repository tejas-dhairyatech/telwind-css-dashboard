import axiosInstance from './axiosInstance';

export const apiRequest = async <T>(url: string, method: string, data?: any): Promise<T> => {
    try {
        const response = await axiosInstance.request<T>({
            url,
            method,
            data,
        });
        return response.data;
    } catch (error) {
        console.error(`API request failed: ${error}`);
        throw error;
    }
};
