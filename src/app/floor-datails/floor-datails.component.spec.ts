import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloorDatailsComponent } from './floor-datails.component';

describe('FloorDatailsComponent', () => {
  let component: FloorDatailsComponent;
  let fixture: ComponentFixture<FloorDatailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloorDatailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloorDatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
