import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'

import { Routing } from './app.routes';

//components
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component'
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductCreateComponent } from './components/products/product-create/product-create.component';

//directives
import { RedDirective } from './directives/red.directive';
import { ForDirective } from './directives/for.directive';

//itens-material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from "@angular/material/snack-bar"

//form
import { FormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { ProductReadComponent } from './components/products/product-read/product-read.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort'

import localePt from  '@angular/common/locales/pt';
import { registerLocaleData } from  '@angular/common';
import { ProductUpdateComponent } from './components/products/product-update/product-update.component';
import { ProductDeleteComponent } from './components/products/product-delete/product-delete.component'

registerLocaleData(localePt);

 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductsComponent,
    RedDirective,
    ForDirective,
    ProductCreateComponent,
    ProductReadComponent,
    ProductUpdateComponent,
    ProductDeleteComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    Routing,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [{
    provide : LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
