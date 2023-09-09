import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { ProfileChangePasswordComponent } from './profile-change-password/profile-change-password.component';



@NgModule({
  declarations: [
    ProfileViewComponent,
    ProfileChangePasswordComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProfileModule { }
