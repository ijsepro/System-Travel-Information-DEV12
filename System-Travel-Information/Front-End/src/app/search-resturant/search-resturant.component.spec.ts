import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResturantComponent } from './search-resturant.component';

describe('SearchResturantComponent', () => {
  let component: SearchResturantComponent;
  let fixture: ComponentFixture<SearchResturantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResturantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResturantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
