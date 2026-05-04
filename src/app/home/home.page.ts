import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { MovieService } from '../services/movie.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLink, FormsModule],
})

export class HomePage implements OnInit {
  movies: any[] = [];
  studentNumber: string = 'G00472889';
  searchQuery: string = '';

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movieService.getTrendingMovies().subscribe((data) => {
      this.movies = data.results;
    });
  } // <--- Make sure there is a closing bracket HERE

  onSearch() { // Now this function is correctly placed inside the Class, but outside ngOnInit
    if (this.searchQuery.trim() === '') {
      this.ngOnInit();
      return;
    }

    this.movieService.searchMovies(this.searchQuery).subscribe((data) => {
      this.movies = data.results;
    });
  }
}
