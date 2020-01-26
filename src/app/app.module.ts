import { TrackService } from './service/track.service';
import { LocationService } from './service/location.service';
import { WeatherService } from './service/weather.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';
import { TrackComponent } from './track/track.component';
import { PlayerComponent } from './player/player.component';
import { TrackControlComponent } from './track/track-control/track-control.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { TracksComponent } from './tracks/tracks.component';
import { UrlConstants } from './service/urlconstants.service';
import { LoginComponent } from './login/login.component';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent,
    AlbumComponent,
    TrackComponent,
    PlayerComponent,
    TrackControlComponent,
    HomeComponent,
    TracksComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatListModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    AppRoutingModule,
    MatCardModule,
    MatRippleModule,
    MatProgressSpinnerModule,
    FontAwesomeModule,
    NgxSpinnerModule
  ],
  providers: [WeatherService, LocationService, UrlConstants, TrackService],
  bootstrap: [AppComponent],
})
export class AppModule {}
