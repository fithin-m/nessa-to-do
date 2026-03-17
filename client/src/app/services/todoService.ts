import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000/api/todos",
    headers: {
        "Content-Type": "application/json",
    },
});

export default API;

export const createTodo = async (data: { title: string; description?: string; }) => {
    try {
        const response = await API.post("/", data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getTodos = async (page = 1, limit = 5) => {
    try {
        const response = await API.get(`/?page=${page}&limit=${limit}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const updateTodo = async (id: string, data: { title?: string; description?: string; status?: number; }) => {
    try {
        const response = await API.put(`/${id}`, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const deleteTodo = async (id: string) => {
    try {
        const response = await API.delete(`/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};