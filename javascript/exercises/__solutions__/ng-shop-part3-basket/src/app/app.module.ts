import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// routing
import { AppRoutingModule } from './app.routes';

// components
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';

// containers
import { ProductTableListComponent } from './containers/productTableList/productTableList.component';
import { ProductPanelListComponent } from './containers/productPanelList/productPanelList.component';
import { ProductDetailComponent } from './containers/productDetail/productDetail.component';
import { BasketComponent } from './containers/basket/basket.component';

// services
import { AuthInterceptor } from './services/interceptors/authInterceptor';
import { ErrorInterceptor } from './services/interceptors/errorInterceptor';
import { ProductResolve } from './resolvers/productResolve';

// pipes
import { YesNoPipe } from './pipes/yesNo.pipe';

@NgModule({
  imports: [
    // other modules we depend on
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    // components
    AppComponent,
    ProductTableListComponent,
    ProductPanelListComponent,
    ProductDetailComponent,
    ProductComponent,
    BasketComponent,
    // pipes
    YesNoPipe,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true, // this is required!
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true, // this is required!
    },
  ],
  bootstrap: [AppComponent], // the root component
})
export class AppModule {}
