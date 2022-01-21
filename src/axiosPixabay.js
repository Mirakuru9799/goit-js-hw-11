const axios = require('axios');
const API_KEY = '25323331-e1c93a1452dabe16b0302b263';
const BASE_URL = 'https://pixabay.com/api';

export default class ImageApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.per_page = 40;
  }
  async fetchFotos() {

    const params = new URLSearchParams({
      q: this.searchQuery,
      key: '25323331-e1c93a1452dabe16b0302b263',
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: this.per_page,
      page: this.page,
    });
    const url = `${BASE_URL}/?${params}`;

    this.icrementPage();
    return await axios.get(url);
  }
  icrementPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.query - newQuery;
  }
}
