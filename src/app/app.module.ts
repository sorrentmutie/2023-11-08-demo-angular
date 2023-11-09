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
    ProductsTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
