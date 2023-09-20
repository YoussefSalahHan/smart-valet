import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserBranchesListComponent } from './user-branches-list/user-branches-list.component';
import { UserBranchAddComponent } from './user-branch-add/user-branch-add.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "list",
    pathMatch: "full",
  },
  {
    path: "add",
    component: UserBranchAddComponent,
  },
  {
    path: "list",
    component: UserBranchesListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserBranchesRoutingModule { }
