import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons,
  IonBackButton, IonList, IonItem, IonThumbnail, IonLabel, IonText
 } from '@ionic/angular/standalone';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.page.html',
  styleUrls: ['./person-details.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,
    RouterModule, IonButtons, IonBackButton, IonList, IonItem, IonThumbnail, IonLabel, IonText
  ]
})
export class PersonDetailsPage implements OnInit {
  person: any = null;
  movies: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      // Get Person Bio and Info
      this.movieService.getPersonDetails(id).subscribe(data => {
        this.person = data;
      });

      // Get their Movie Credits
      this.movieService.getPersonMovies(id).subscribe(data => {
        this.movies = data.cast;
      });
    }
  }

}
