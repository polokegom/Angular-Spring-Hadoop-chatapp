import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAuthenticationComponent } from './modal-authentication.component';

describe('ModalAuthenticationComponent', () => {
  let component: ModalAuthenticationComponent;
  let fixture: ComponentFixture<ModalAuthenticationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalAuthenticationComponent]
    });
    fixture = TestBed.createComponent(ModalAuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
