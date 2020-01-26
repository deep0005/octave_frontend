import { PlayerService } from './shared/player.service';
import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { fromEvent,interval } from 'rxjs';
import { debounceTime} from 'rxjs/operators';
import { faSnowflake, faCircle, faCloud, faCloudMeatball, faCloudShowersHeavy, faCloudRain, faPooStorm, faWater } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit,AfterViewInit {
  @ViewChild('searchBox') searchInput: ElementRef;
  // (keyup)="search(searchBox.value)"
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

  $playerService: PlayerService;
  
  hideResult:boolean;
  searchResults: Array<any> = [];
  constructor(private playerService: PlayerService) {
    this.$playerService = playerService;
  }

  ngOnInit(){
  }

  ngAfterViewInit(){
    let buttonStream$=fromEvent(this.searchInput.nativeElement, 'keyup')
    .pipe(debounceTime(1000))
    .subscribe(()=>{
      // this.search(this.searchInput.nativeElement.value);
    });

  }

  onResultClick(){
    this.hideResult=true;
    this.searchInput.nativeElement.value='';
  }

  getIcon = () => {
    console.log(this.playerService.currentWeather.getValue());
    return this.iconMapping[this.playerService.currentWeather.getValue().toLowerCase().split(' ').join('_')]

  }
}
