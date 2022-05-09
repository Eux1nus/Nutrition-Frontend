import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationSuccsessComponent } from './registration-succsess.component';

describe('RegistrationSuccsessComponent', () => {
  let component: RegistrationSuccsessComponent;
  let fixture: ComponentFixture<RegistrationSuccsessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationSuccsessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationSuccsessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
