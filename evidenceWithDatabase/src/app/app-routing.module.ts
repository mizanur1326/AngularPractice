import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { BookComponent } from './book/book.component';
import { APP_BASE_HREF } from '@angular/common';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'about', component:AboutComponent},
  {path: 'service', component:ServiceComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'book', component:BookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{provide: APP_BASE_HREF, useValue: 'https://mizanur.wdpf55.com/angular/'}]
})
export class AppRoutingModule { }
