import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { MenuComponent } from './shared/menu/menu.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ProductsPageComponent } from './products/components/products-page/products-page.component';
import { MyPipe } from './products/pipes/my.pipe';
import { MySecondPipe } from './products/pipes/my-second.pipe';
import { ProductsTableComponent } from './products/components/products-table/products-table.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RandomUserPageComponent } from './random-users/random-user-page/random-user-page.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FiglioAComponent } from './figlio-a/figlio-a.component';
import { FiglioBComponent } from './figlio-b/figlio-b.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { FirstInterceptor } from './shared/interceptors/first.interceptor';
import { SecondInterceptor } from './shared/interceptors/second.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    MenuComponent,
    FooterComponent,
    ProductsPageComponent,
    MyPipe,
    MySecondPipe,
    ProductsTableComponent,
    RandomUserPageComponent,
    WelcomeComponent,
    NotFoundComponent,
    FiglioAComponent,
    FiglioBComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: FirstInterceptor, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: SecondInterceptor, multi: true},    
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
