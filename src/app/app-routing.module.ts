import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsPageComponent } from './products/components/products-page/products-page.component';
import { RandomUserPageComponent } from './random-users/random-user-page/random-user-page.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FiglioAComponent } from './figlio-a/figlio-a.component';
import { FiglioBComponent } from './figlio-b/figlio-b.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { firstGuard } from './shared/guards/first.guard';

const routes: Routes = [
  { path: 'products', component: ProductsPageComponent, canActivate: [firstGuard]},
  { path: 'products/:id', component: ProductDetailsComponent},
  { path: 'random', component: RandomUserPageComponent},
  { path: 'first', component: FirstComponent, 
    children: [
    {path: 'a', component: FiglioAComponent},
    {path: 'b', component: FiglioBComponent},
    {path: '', redirectTo: "a", pathMatch: "full"} 
  ]},
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
