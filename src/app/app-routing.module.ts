import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard} from 'src/app/guards/auth.guard'
const routes: Routes = [
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full'
  },
  {
    path: 'intro',
    loadChildren: () => import('./pages/intro/intro.module').then( m => m.IntroPageModule),

  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),

  },
  {
    path: 'forgotpassword',
    loadChildren: () => import('./pages/forgotpassword/forgotpassword.module').then( m => m.ForgotpasswordPageModule)
  },
  {
    path: 'loginscreen',
    loadChildren: () => import('./pages/loginscreen/loginscreen.module').then( m => m.LoginscreenPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },

  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'uploadimage',
    loadChildren: () => import('./pages/uploadimage/uploadimage.module').then( m => m.UploadimagePageModule)
  },  {
    path: 'pages',
    loadChildren: () => import('./searchp/src/app/pages/pages.module').then( m => m.PagesPageModule)
  },
  {
    path: 'pages',
    loadChildren: () => import('./searchproduct/src/app/pages/pages.module').then( m => m.PagesPageModule)
  },
  {
    path: 'searchproduct',
    loadChildren: () => import('./src/app/pages/searchproduct/searchproduct.module').then( m => m.SearchproductPageModule)
  },
  {
    path: 'pages',
    loadChildren: () => import('./src/app/pages/pages.module').then( m => m.PagesPageModule)
  },
  {
    path: 'search-p',
    loadChildren: () => import('./pages/search-p/search-p.module').then( m => m.SearchPPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
