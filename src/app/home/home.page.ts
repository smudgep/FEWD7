import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle } from '@ionic/angular/standalone';
import { MovieService } from '../services/movie-service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle],
})
export class HomePage {
  //create movie array
  movies: any[] = [];

  //gets the movie data
  constructor(private service: MovieService) { }
  ionViewWillEnter() {
    this.service.GetShrekMovieData().subscribe(
      (data) => {
        this.movies = data.Search;
        console.log(this.movies);
      }
    );

  }
}

