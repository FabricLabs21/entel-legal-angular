import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalGuaranteComponent } from './legal-guarante.component';

describe('LegalGuaranteComponent', () => {
  let component: LegalGuaranteComponent;
  let fixture: ComponentFixture<LegalGuaranteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LegalGuaranteComponent]
    });
    fixture = TestBed.createComponent(LegalGuaranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
