import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey: string = '64c425a1eac25483f283f2c7bfa217a5'; 
  private baseUrl: string = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) { }

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

// 1. A basic list to hold our favourite movies
private favourites: any[] = [];

addToFavourites(movie: any) {
  // Check if movie is already there to avoid duplicates
  if (!this.favourites.find(m => m.id == movie.id)) {
this.favourites.push(movie);
console.log('Saved to list:', movie.title);
}
}

getFavourites() {
return this.favourites;
}
}
