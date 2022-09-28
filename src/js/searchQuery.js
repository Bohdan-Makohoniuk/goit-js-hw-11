import axios from 'axios';
const axios = require('axios').default;

//Робота з API
// class NewsApiGalleryService відповідає за запит на API
export default class NewsApiGalleryService {
    constructor() {
        // searchQuery  те що вводить користувач
        this.searchQuery = '';
        this.page = 1;
    }

// key - твій унікальний ключ доступу до API.
// q - термін для пошуку. Те, що буде вводити користувач.
// image_type - тип зображення. На потрібні тільки фотографії, тому постав значення photo.
// orientation - орієнтація фотографії. Постав значення horizontal.
// safesearch - фільтр за віком. Постав значення true.
    
    // Ключі, базовий URL  
    async fetchGallery() {
        console.log(this);
    const BASE_URL = `https://pixabay.com/api/`;
        const API_KEY = `30191094-de1aa11b28019b956d42cce6d`;
        
        // HTTP запити
          const response = await axios.get(
              `${BASE_URL}?key=${API_KEY}&q=${this.searchQuery}&
      image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&
      per_page=40`
          );
          return response.data;
    }

    // Якщо запит успішний додає  +1 
    incrementPage() {
        this.page += 1;
    }
    // записує значення для нового запиту
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
    
    
    