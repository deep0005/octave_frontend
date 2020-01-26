import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  url: string = "https://api.tomtom.com/traffic/services/4/flowSegmentData/absolute/10/json?point={lat}%2C{lng}&key=ygB0BvuiWLznUQ0hCGFqqKAU5V03ErOL";

  constructor(private http: HttpClient) { }

  isTraffic(): Promise<any>{
    return new Promise((resolve, reject) => {

      
    });

  }

  getTrafficInfo = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resp => {

        this.http.get(this.url.split("{lat}").join(resp.coords.latitude.toString()).split("{lng}").join(resp.coords.longitude.toString())).subscribe((response: any) => {

          if(response && response.flowSegmentData){
            resolve((response.flowSegmentData.freeFlowSpeed - response.flowSegmentData.currentSpeed) > 5);
          }else{
            reject(true);
          }
        }, err => {
          reject(err);
        });
        
      },
      err => {
        console.log(err);
        reject(err);
      }, {maximumAge:1000, timeout:1000000, enableHighAccuracy:true});

      
    })
      
  }
}
