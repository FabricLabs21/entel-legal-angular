import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesRuleComponent } from './services-rule.component';

describe('ServicesRuleComponent', () => {
  let component: ServicesRuleComponent;
  let fixture: ComponentFixture<ServicesRuleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesRuleComponent]
    });
    fixture = TestBed.createComponent(ServicesRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
