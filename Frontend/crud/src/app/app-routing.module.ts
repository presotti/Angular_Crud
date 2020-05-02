import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
},
{
  path: 'product',
  component: ProductCrudComponent
},
{
  path: 'product/create',
  component: ProductCreateComponent
},
{
  path: 'product/delete/:id',
  component: ProductDeleteComponent
},
{
  path: 'product/update/:id',
  component: ProductUpdateComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
