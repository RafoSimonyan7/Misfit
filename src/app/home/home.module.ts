import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeSlideComponent } from './home-slide/home-slide.component';
import { HomeAboutComponent } from './home-about/home-about.component';
import { HomeServicesComponent } from './home-services/home-services.component';
import { HomeNewsComponent } from './home-news/home-news.component';
import { HomeTrainersComponent } from './home-trainers/home-trainers.component';
import { HomeGalleryComponent } from './home-gallery/home-gallery.component';
import { HomeContactComponent } from './home-contact/home-contact.component';


@NgModule({
  declarations: [
    HomeComponent,
    HomeSlideComponent,
    HomeAboutComponent,
    HomeServicesComponent,
    HomeNewsComponent,
    HomeTrainersComponent,
    HomeGalleryComponent,
    HomeContactComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
