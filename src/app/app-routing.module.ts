import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsPageComponent } from './products/components/products-page/products-page.component';
import { RandomUserPageComponent } from './random-users/random-user-page/random-user-page.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'products', component: ProductsPageComponent},
  { path: 'random', component: RandomUserPageComponent},
  { path: 'first', component: FirstComponent},
  { path: 'second', component: SecondComponent},
  { path: 'welcome', component: WelcomeComponent},
  { path: '', redirectTo: '/welcome', pathMatch: 'full'},
  { path: '**', component: NotFoundComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
