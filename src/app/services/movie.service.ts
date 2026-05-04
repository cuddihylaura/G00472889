import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  // Use your actual API key from themoviedb.org here
  private apiKey: string = '64c425a1eac25483f283f2c7bfa217a5'; 
  private baseUrl: string = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) { }

  // Fetches trending movies as required by Figure 2 in the project brief
  getTrendingMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}/trending/movie/day?api_key=${this.apiKey}`);
  }
}