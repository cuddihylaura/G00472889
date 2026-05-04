import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { MovieService } from '../services/movie.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLink],
})
export class HomePage implements OnInit {
  movies: any[] = [];
  studentNumber: string = 'G00472889';

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movieService.getTrendingMovies().subscribe((data) => {
      this.movies = data.results;
    });
  }
}

