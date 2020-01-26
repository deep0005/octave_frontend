import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss'],
})
export class TrackComponent implements OnInit {
  trackArray: Array<any> = [];
  displayedColumns: string[] = ['trackCensoredName'];

  @Input()
  set collectionId(collectionId: number) {
    this.getTracks(collectionId);
  }

  constructor() {}

  ngOnInit() {}

  getTracks(trackId: number) {
    
  }
}
