import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsAddComponent } from './notifications-add.component';

describe('NotificationsAddComponent', () => {
  let component: NotificationsAddComponent;
  let fixture: ComponentFixture<NotificationsAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotificationsAddComponent]
    });
    fixture = TestBed.createComponent(NotificationsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
