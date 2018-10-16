import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { environment } from '@env/environment';

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

// pipes
import { YesNoPipe } from './pipes/yesNo.pipe';

@NgModule({
  imports: [
    // other modules we depend on
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ApolloModule,
    HttpLinkModule,
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
      provide: APOLLO_OPTIONS,
      useFactory(httplink: HttpLink) {
        return {
          cache: new InMemoryCache(),
          link: httplink.create({
            uri: environment.graphQlUrl,
          }),
        };
      },
      deps: [HttpLink],
    },
  ],
  bootstrap: [AppComponent], // the root component
})
export class AppModule {}
