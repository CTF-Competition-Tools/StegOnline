import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ImageMenuComponent } from './imagemenu/imagemenu.component';
import { ExtractMenuComponent } from './embed-extract-data/extract-menu/extract-menu.component';
import { EmbedMenuComponent } from './embed-extract-data/embed-menu/embed-menu.component';
import { EmbedImageComponent } from './embed-image/embed-image.component';

const routes: Routes = [
  { path : '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'image', component: ImageMenuComponent },
  { path: 'extract', component: ExtractMenuComponent },
  { path: 'embed', component: EmbedMenuComponent },
  { path: 'embedimage', component: EmbedImageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
