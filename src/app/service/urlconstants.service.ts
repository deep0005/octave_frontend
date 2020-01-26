import { Injectable } from '@angular/core';

@Injectable()
export class UrlConstants {

  constructor() { }

  MUSIC_SERVER = "http://localhost:8080/";
  PLAY_MUSIC = this.MUSIC_SERVER + "play?url={url}";
  PAUSE_MUSIC = this.MUSIC_SERVER + "pause";
  STOP_MUSIC = this.MUSIC_SERVER + "stop";
  GET_STATUS = this.MUSIC_SERVER + "status";
  
  

  
  
}
