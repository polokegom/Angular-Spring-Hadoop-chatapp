import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogexampleComponent } from './dialogexample.component';

describe('DialogexampleComponent', () => {
  let component: DialogexampleComponent;
  let fixture: ComponentFixture<DialogexampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogexampleComponent]
    });
    fixture = TestBed.createComponent(DialogexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
