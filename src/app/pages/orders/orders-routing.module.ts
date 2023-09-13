import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { OrdersListComponent } from "./orders-list/orders-list.component";
import { AddOrderComponent } from "./add-order/add-order.component";

const routes: Routes = [
  {
    path: "list",
    component: OrdersListComponent,
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
export class OrdersRoutingModule {}
