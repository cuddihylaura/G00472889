import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
 IonContent, IonHeader, IonTitle, IonToolbar,
IonList, IonItem, IonThumbnail, IonLabel,
 IonButton, IonIcon, IonBackButton, IonButtons
} from '@ionic/angular/standalone';
import { MovieService } from '../services/movie.service';
import { addIcons } from 'ionicons';
import { heart, home, person } from 'ionicons/icons';
import { RouterModule } from '@angular/router';

@Component({
selector: 'app-favourites',
templateUrl: './favourites.page.html',
styleUrls: ['./favourites.page.scss'],
 standalone: true,
 imports: [
 IonContent, IonHeader, IonTitle, IonToolbar,
IonList, IonItem, IonThumbnail, IonLabel,
IonButton, IonIcon, IonBackButton, IonButtons,
CommonModule, FormsModule, RouterModule]
})
export class FavouritesPage implements OnInit {
favouriteMovies: any[] = [];

// Import the required icons for the UI
constructor(private movieService: MovieService) {
addIcons({ heart, home, person });
 }

 ngOnInit() {}

 ionViewWillEnter() {
 this.favouriteMovies = this.movieService.getFavourites();
}

}
