import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FamilyComponent } from './components/family/family.component';
import { HomeComponent } from './components/home/home.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ComponentsComponent } from './components/components.component'

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'family', component:FamilyComponent},
  {path:'gallery', component:GalleryComponent},
  {path:'components', component:ComponentsComponent}
  
];

@NgModule({
  exports: [RouterModule],
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
  
})
export class AppRoutingModule { }