import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAdminPannelComponent } from './all-admin-pannel.component';

describe('AllAdminPannelComponent', () => {
  let component: AllAdminPannelComponent;
  let fixture: ComponentFixture<AllAdminPannelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllAdminPannelComponent]
    });
    fixture = TestBed.createComponent(AllAdminPannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
