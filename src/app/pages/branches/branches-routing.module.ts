import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditBranchComponent } from './edit-branch/edit-branch.component';
import { ViewBranchComponent } from './view-branch/view-branch.component';

const routes: Routes = [
  {
    path: "edit",
    component: EditBranchComponent,
  },
  {
    path: "view/:id",
    component: ViewBranchComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BranchesRoutingModule { }
