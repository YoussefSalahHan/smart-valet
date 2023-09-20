import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBranchAddComponent } from './user-branch-add.component';

describe('UserBranchAddComponent', () => {
  let component: UserBranchAddComponent;
  let fixture: ComponentFixture<UserBranchAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserBranchAddComponent]
    });
    fixture = TestBed.createComponent(UserBranchAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
