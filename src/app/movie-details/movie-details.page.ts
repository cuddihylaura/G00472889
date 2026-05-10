import { Component, OnInit } from '@angular/core';
import { 
  IonHeader, IonToolbar, IonButtons, IonBackButton, 
  IonTitle, IonButton, IonIcon, IonContent, 
  IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, 
  IonCardContent, IonChip, IonLabel, IonList, IonItem, IonThumbnail, IonAvatar
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { home, heart, person } from 'ionicons/icons';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonTitle,
    IonButton,
    IonIcon,
    IonContent,
    IonLabel,
    IonChip,
    IonList,
    IonItem,
    IonThumbnail,
    IonCardHeader,
    IonCard,
    IonCardContent,
    IonCardTitle,
    IonAvatar
  ]
})
export class MovieDetailsPage implements OnInit {
  movie: any = null;
  cast: any[] = [];
crew: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {
    addIcons({ home, heart, person });
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      // Get general info
      this.movieService.getMovieDetails(id).subscribe(data => this.movie = data);

      // Get cast and crew
      this.movieService.getMovieCredits(id).subscribe(data => {
        this.cast = data.cast.slice(0,15); // Only include the top 15 actors
        this.crew = data.crew.slice(0,15); // Only include the top 15 crew
      });
    }
  }

  toggleFavourite() {
    this.movieService.addToFavourites(this.movie);
    alert(this.movie.title + ' saved to your favourites list!');
    }

}