import { UrlConstants } from './../service/urlconstants.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { Song } from '../model/song.model';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  constructor(private http: HttpClient, private urlConstants: UrlConstants) {
    let song = localStorage.getItem("song");
    if(song)
      this.currentSong.next(JSON.parse(song));
    else{
      this.stopTrack();
    }
  }

  playerState: BehaviorSubject<string> = new BehaviorSubject<string>("playing");
  currentSong: BehaviorSubject<Song> = new BehaviorSubject<Song>(null);
  currentWeather: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  playTrack(song: Song) {
    this.http.post(this.urlConstants.PLAY_MUSIC.split("{url}").join(song.playUrl), {}).subscribe((response: string) => {
      this.publishStatus();
    });
    this.currentSong.next(song);
    this.addTrack(song);
  }

  pauseTrack() {
    this.http.post(this.urlConstants.PAUSE_MUSIC, {}).subscribe((response: string) => {
      this.publishStatus();
    });
  }

  stopTrack() {
    this.http.post(this.urlConstants.STOP_MUSIC, {}).subscribe((response: string) => {
      this.publishStatus();
    });
    this.removeTrack();
  }

  publishStatus = () => {
    this.http.get(this.urlConstants.GET_STATUS).subscribe(response => {
      if(response){
        this.playerState.next(response.toString());
      }
    })
  }

  addTrack = (song: Song) => {
    localStorage.setItem("song", JSON.stringify(song));
  }

  removeTrack = () => {
    localStorage.setItem("song", null);
    this.currentSong.next(null);
  } 
}
