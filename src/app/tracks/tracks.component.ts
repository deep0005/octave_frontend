import { TrackService } from './../service/track.service';
import { LocationService } from './../service/location.service';
import { WeatherService } from './../service/weather.service';
import { Song } from './../model/song.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from '../shared/player.service';
import { BehaviorSubject } from 'rxjs';
import { NgxSpinnerService } from "ngx-spinner";
import { faSnowflake, faCircle, faCloud, faCloudMeatball, faCloudShowersHeavy, faCloudRain, faPooStorm, faWater } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss'],
})
export class TracksComponent implements OnInit, OnDestroy {
  playlist: BehaviorSubject<Song[]> = new BehaviorSubject<Song[]>([]);
  currentWeather: BehaviorSubject<string> = new BehaviorSubject<string>("");
  location: BehaviorSubject<string> = new BehaviorSubject<string>("");
  trafficState: BehaviorSubject<string> = new BehaviorSubject("");
  isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  
  iconMapping = {
    clear_sky: faCircle,
   clouds:faCloud,
   scattered_clouds:faCloudMeatball,
   broken_clouds:faCloudMeatball,
   shower_rain:faCloudShowersHeavy,
   rain:faCloudRain,
   thunderstorm:faPooStorm,
   snow:faSnowflake,
   mist:faWater
  };

  routeParams;
  tracks: Array<any> = [];
  displayedColumns: string[] = ['Number', 'Name'];

  accessToken: string = "";
  refreshToken: string = "";

  constructor(
    private route: ActivatedRoute,
    private playerService: PlayerService,
    private weatherService: WeatherService,
    private locationService: LocationService,
    private trackService: TrackService,
    private spinner: NgxSpinnerService
  ) {
    this.spinner.show();
    this.route.queryParams.subscribe(params => {
      this.accessToken = params['access_token'];
      this.refreshToken = params['refresh_token'];
      
      

  });

  }

  ngOnInit() {
    
    
    
    
    let weather = "";
    let traffic = "";
    this.weatherService.getCurrentWeather().subscribe(response => {
      if(response && response.weather && response.weather.length > 0){
        this.currentWeather.next(response.weather[0].main);
        weather = response.weather[0].main;
        this.playerService.currentWeather.next(response.weather[0].main);
      }

      this.locationService.getTrafficInfo().then((locationResponse: boolean) => {
        this.trafficState.next(locationResponse ? "High" : "Light");
        traffic = locationResponse ? "High" : "Light";
        this.trackService.loadSpotifyTracks(this.accessToken, weather, traffic).then((trackData: Song[]) => {
          this.playlist.next(trackData.filter(item => item.id != -1));
          this.spinner.hide();
        })
      }, err => {
        this.trafficState.next("Error finding traffic data");
      })
      
    })

    

  }
  ngOnDestroy() {}

  playTrack(track: Song) {
    this.playerService.playTrack(track);
  }

  getIcon = () => {
    
    return this.iconMapping[this.playerService.currentWeather.getValue().toLowerCase().split(' ').join('_')]

  }
}
