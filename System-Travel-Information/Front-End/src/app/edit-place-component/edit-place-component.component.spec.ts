import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPlaceComponentComponent } from './edit-place-component.component';

describe('EditPlaceComponentComponent', () => {
  let component: EditPlaceComponentComponent;
  let fixture: ComponentFixture<EditPlaceComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPlaceComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPlaceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
