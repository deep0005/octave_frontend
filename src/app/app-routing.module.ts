import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AlbumComponent } from './album/album.component';
import { TracksComponent } from './tracks/tracks.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  
  { path: 'login', component: LoginComponent },
  { path: 'music', component:  TracksComponent},
  { path: ':id/:name', component: AlbumComponent },
  { path: ':id/:name/:colllection_id/:collection_name', component: TracksComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '***', redirectTo: '/music', pathMatch: 'full' },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
