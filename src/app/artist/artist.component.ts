import { Component, OnInit, Input } from '@angular/core';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss'],
})
export class ArtistComponent implements OnInit {
  @Input()
  set searchKey(key: string) {
    this.search(key);
  }
  searchResults: Array<any> = [];
  artistID: number = 0;
  selectedArtist: string;
  constructor() {}

  ngOnInit() {}

  search(param) {
    
  }

  getAlbums(artistId: number, artistName: string) {
    this.artistID = artistId;
    this.selectedArtist = artistName;
  }
}
