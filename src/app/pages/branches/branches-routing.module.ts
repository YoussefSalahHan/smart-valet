import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditBranchComponent } from './edit-branch/edit-branch.component';
import { ViewBranchComponent } from './view-branch/view-branch.component';
import { BranchesListComponent } from './branches-list/branches-list.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "list",
    pathMatch: "full",
  },
  {
    path: "edit",
    component: EditBranchComponent,
  },
  {
    path: "view/:id",
    component: ViewBranchComponent,
  },
  {
    path: "list",
    component: BranchesListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BranchesRoutingModule { }
