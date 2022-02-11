import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { Tab1Component } from './about/tab1/tab1.component';
import { Tab2Component } from './about/tab2/tab2.component';
import { Tab3Component } from './about/tab3/tab3.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { ContactComponent } from './contact/contact.component';
import { FeedbackComponent } from './contact/feedback/feedback.component';
import { SuccessComponent } from './contact/success/success.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PlaygroundComponent } from './playground/playground.component';
import { PostComponent } from './playground/post/post.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent, data: { animation: 'isLeft' }, children: [
    {path: 'tab1',component: Tab1Component},
    {path: 'tab2',component: Tab2Component},
    {path: 'tab3',component: Tab3Component},
  ] },
  { path: 'playground', component: PlaygroundComponent, data: { animation: 'isRight' }, children: [
    {path: 'auth', component: AuthComponent},
    {path: 'post', component: PostComponent, canActivate:[AuthGuard]}
  ] },
  { path: 'contact', component: ContactComponent, data: { animation: 'isLeft' }, children: [
    {path: '',component: FeedbackComponent},
    {path: 'success',component: SuccessComponent},
  ] },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
