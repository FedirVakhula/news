import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './component/news/news.component';
import { PathNotFoundComponent } from './component/path-not-found/path-not-found.component';
import { ContactComponent } from './component/contact/contact.component';
import { HomeComponent } from './component/home/home.component';
import { AuthGuard } from './guard/auth.guard';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'profile',
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    // loadChildren: 'src/app/component/profile/profile.module#ProfileModule',
    loadChildren: () => import('./component/profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'about',
    component: ContactComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PathNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
