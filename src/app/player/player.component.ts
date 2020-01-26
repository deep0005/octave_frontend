import { Component, OnInit, ViewChild } from '@angular/core';
import { PlayerService } from '../shared/player.service';
import { faPlay, faPause, faStop } from '@fortawesome/free-solid-svg-icons';
import { Song } from '../model/song.model';
 

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {
  @ViewChild('player')
  playerRef;
  player: any;
  faPlay = faPlay;
  faPause = faPause;
  faStop = faStop;
  
  playerService: PlayerService;

  constructor(private playerSer: PlayerService) {
    this.playerService = playerSer
  }

  ngOnInit() {
    this.player = this.playerRef.nativeElement;
  }

  playTrack() {
    if(this.playerSer.currentSong.getValue())
      this.playerSer.playTrack(this.playerSer.currentSong.getValue());
  }

  pauseTrack() {
    this.playerSer.pauseTrack();
  }

  stopTrack = () => {
    this.playerSer.stopTrack();
  }
}
