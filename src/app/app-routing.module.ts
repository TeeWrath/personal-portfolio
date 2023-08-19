import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { MusicComponent } from './music/music.component';
import { BlogsComponent } from './blogs/blogs.component';

const routes: Routes = [
  {path : '', component : MainComponent},
  {path : 'about', component : AboutComponent},
  {path : 'experience', component : ExperienceComponent},
  {path : 'project', component : ProjectsComponent},
  {path : 'music', component : MusicComponent},
  {path : 'blog', component : BlogsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
