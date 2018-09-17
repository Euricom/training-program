import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductResolve } from './resolvers/productResolve';
import { ProductTableListComponent } from './components/productTableList/productTableList.component';
import { ProductPanelListComponent } from './components/productPanelList/productPanelList.component';
import { ProductDetailComponent } from './components/productDetail/productDetail.component';

// create routes
const routes: Routes = [
  { path: 'overview', component: ProductTableListComponent },
  { path: 'home', component: ProductPanelListComponent },
  {
    path: 'detail/:id',
    component: ProductDetailComponent,
    resolve: {
      product: ProductResolve,
    },
  },
  {
    path: 'detail',
    component: ProductDetailComponent,
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: ProductPanelListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
