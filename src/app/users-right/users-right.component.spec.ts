import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersRightComponent } from './users-right.component';

describe('UsersRightComponent', () => {
  let component: UsersRightComponent;
  let fixture: ComponentFixture<UsersRightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersRightComponent]
    });
    fixture = TestBed.createComponent(UsersRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
