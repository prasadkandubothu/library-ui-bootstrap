import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CirculationlistComponent } from './circulationlist.component';

describe('CirculationlistComponent', () => {
  let component: CirculationlistComponent;
  let fixture: ComponentFixture<CirculationlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CirculationlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CirculationlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
