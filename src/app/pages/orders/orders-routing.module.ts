import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { OrdersListComponent } from "./orders-list/orders-list.component";
import { AddOrderComponent } from "./add-order/add-order.component";
import { OrdersViewComponent } from './orders-view/orders-view.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "list",
    pathMatch: "full",
  },
  {
    path: "list",
    component: OrdersListComponent,
  },
  {
    path: "view/:id",
    component: OrdersViewComponent,
  },
  {
    path: "add",
    component: AddOrderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersRoutingModule { }
