import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey: string = '64c425a1eac25483f283f2c7bfa217a5'; 
  private baseUrl: string = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {
    // 1. Check if any existing movies favourites saved on the device
    const savedData = localStorage.getItem('my_fav_movies');
    if (savedData) {
      this.favourites = JSON.parse(savedData);
      console.log('Loaded from storage:', this.favourites);
    }
  }

  getMovieDetails(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`);
  }

  getMovieCredits(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/${id}/credits?api_key=${this.apiKey}`);
  }
 
  searchMovies(query: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/search/movie?api_key=${this.apiKey}&query=${query}`);
  }

  getTrendingMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}/trending/movie/day?api_key=${this.apiKey}`);
  }

  private favourites: any[] = [];

  // Update the local storage string whenever a new movie is added
  addToFavourites(movie: any) {
    if (!this.favourites.find(m => m.id == movie.id)) {
      this.favourites.push(movie);
     
      localStorage.setItem('my_fav_movies', JSON.stringify(this.favourites));
     
      console.log('Saved to list and storage:', movie.title);
    }
  }

  removeFromFavourites(movie: any) {
    this.favourites = this.favourites.filter(m => m.id !== movie.id);
     localStorage.setItem('my_fav_movies', JSON.stringify(this.favourites));
    console.log('Removed and storage updated:', movie.title);
     }
     
  getFavourites() {
    return this.favourites;
  }
}
