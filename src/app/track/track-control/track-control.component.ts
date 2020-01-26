import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { PlayerService } from 'src/app/shared/player.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-track-control',
  templateUrl: './track-control.component.html',
  styleUrls: ['./track-control.component.scss'],
})
export class TrackControlComponent implements OnInit, OnDestroy {
  isPlaying: boolean = false;
  playSub: Subscription;
  endedSub: Subscription;
  @Input()
  public track: any;

  constructor() {
    

    
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.playSub.unsubscribe();
    this.endedSub.unsubscribe();
  }

  playTrack() {
    
  }

  pauseTrack() {
    
  }
}
