import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Song } from '../model/song.model';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  constructor(private http: HttpClient) { 
    
  }

  trackMapping = {
    clear_sky:{
      High: 0.5,
      Light: 0.8
	  },
 clouds:{
		High: 0.6,
		Light: 0.7
	},
 scattered_clouds:{
		High: 0.4,
		Light: 0.7
	},
 broken_clouds:{
		High: 0.3,
		Light: 0.6
	},
 shower_rain:{
		High: 0.4,
		Light: 0.7
	},
 rain:{
		High: 0.4,
		Light: 0.9
	},
 thunderstorm:{
		High: 0.2,
		Light: 0.4
	},
 snow:{
		High: 0.5,
		Light: 0.8
	},
 mist:{
		High: 0.4,
		Light: 0.7
	}
};

  loadSpotifyTracks = (accessToken: string, weather: string, traffic: string) => {
    return new Promise((resolve, reject) => {
      const httpHeaders = new HttpHeaders({
        "Authorization": "Bearer " + accessToken,
      })
      this.http.get("https://api.spotify.com/v1/recommendations?market=CA&seed_artists=4NHQUGzhtTLFvgF5SZesLK&min_energy=0.4&min_popularity=50&max_valence=" + this.trackMapping[weather.toLowerCase().split(" ").join("_")][traffic], {headers: httpHeaders}).subscribe((response: any) => {
        if(response && response.tracks){
          let trackNameArray = response.tracks.map(track => {
            return track.name;
          })
          const jsonHeaders = new HttpHeaders({
            "Content-Type": "application/json",
          })
          this.http.post("http://localhost:8888/track_data", {
            tracks: trackNameArray
          }, {headers: jsonHeaders}).subscribe((trackResponse: any) => {
            if(trackResponse && trackResponse.songs){
              resolve(trackResponse.songs);
            }
          });

          
        }
      });
    });
     
  }

  // getSongDetail = (songName: string): Promise<Song> => {
  //   return new Promise((resolve, reject) => {
  //     const httpHeaders = new HttpHeaders({
  //       "Authorization": "29200f89797ff1b922a255c78ba10629",
  //     })
  //     this.http.get("https://conuhacks-2020.tsp.cld.touchtunes.com/v1/songs?query=" + songName, {headers: httpHeaders}).subscribe((response: any) => {
  //       if(response && response.songs.length > 0){
  //         this.http.get("https://conuhacks-2020.tsp.cld.touchtunes.com/v1/songs/" + response.songs[0].id, {headers: httpHeaders}).subscribe((responseTrack: any) => {
  //         if(response && response.id){
  //           resolve(response)
  //         }
  //       });
  //       }
  //     });
  //   });

  // }
}
