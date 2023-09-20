import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBranchesListComponent } from './user-branches-list.component';

describe('UserBranchesListComponent', () => {
  let component: UserBranchesListComponent;
  let fixture: ComponentFixture<UserBranchesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserBranchesListComponent]
    });
    fixture = TestBed.createComponent(UserBranchesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
