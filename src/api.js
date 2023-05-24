import axios from 'axios';

const API_KEY = '';

const api = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1',
});

export const procurarLivros = async (query) => {
  try {
    const response = await api.get('/volumes', {
      params: {
        q: query,
        key: API_KEY,
      },
    });
    return response.data.items;
  } catch (error) {
    console.error('Erro ao buscar livros:', error);
    return [];
  }
};
