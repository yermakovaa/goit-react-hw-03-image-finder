import axios from 'axios';

function apiService(query, page) {
  return axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=18963132-a5d8582da162d4c0f5ee62384&image_type=photo&orientation=horizontal&per_page=12`,
  );
}

export default apiService;
