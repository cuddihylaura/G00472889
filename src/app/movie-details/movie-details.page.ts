import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class MovieDetailsPage implements OnInit {
  movie: any = null;
  cast: any[] = [];
crew: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      // Get general info
      this.movieService.getMovieDetails(id).subscribe(data => this.movie = data);
      
      // Get cast and crew
      this.movieService.getMovieCredits(id).subscribe(data => {
        this.cast = data.cast;
        this.crew = data.crew;
      });
    }
  }
}