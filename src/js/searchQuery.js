// Логіка работи з API
import axios from 'axios';
// class NewsApiGalleryService робить запит на API
export default class NewsApiGalleryService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }
// Запит на сервер
    async fetchGallery() {
        console.log(this);
    const BASE_URL = `https://pixabay.com/api/`;
    const API_KEY = `30191094-de1aa11b28019b956d42cce6d`;
        
          const response = await axios.get(
              `${BASE_URL}?key=${API_KEY}&q=${this.searchQuery}&
      image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&
      per_page=40`
          );
          return response.data;
    }

    
    incrementPage() {
        this.page += 1;
    }
    
    resetPage() {
        this.page = 1;
    }
    get query() {
        return this.searchQuery;
    }
    set query(newQuery) {
        this.searchQuery = newQuery
    }

}
    
    
    