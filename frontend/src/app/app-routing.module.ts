import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent} from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductAddcarComponent } from './components/product/product-addcar/product-addcar.component';
import { AddcarReadComponent } from './components/product/addcar-read/addcar-read.component';
import { AddcarDeleteComponent } from './components/product/addcar-delete/addcar-delete.component';
import { AddcarUpdateComponent } from './components/product/addcar-update/addcar-update.component';
import { BuyReadComponent } from './components/product/buy-read/buy-read.component';
import { BuyDeleteComponent } from './components/product/buy-delete/buy-delete.component';
const routes: Routes = [
{
  path: "",
  component: HomeComponent
},{
  path: "products",
  component: ProductCrudComponent
},{
  path: "products/create",
  component: ProductCreateComponent
},{
  path: "products/update/:id",
  component: ProductUpdateComponent
},{
  path: "products/delete/:id",
  component: ProductDeleteComponent
},{
  path: "products/addcar/:id",
  component: ProductAddcarComponent
}
,{
  path: "addcar/read",
  component: AddcarReadComponent
}
,{
  path: "addcar/delete/:id",
  component: AddcarDeleteComponent
},
{
  path: "addcar/update/:id",
  component: AddcarUpdateComponent
}
,
{
  path: "buy/read",
  component: BuyReadComponent
},{
  path: "buy/delete/:id",
  component: BuyDeleteComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
