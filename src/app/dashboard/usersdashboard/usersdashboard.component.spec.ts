import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersdashboardComponent } from './usersdashboard.component';

describe('UsersdashboardComponent', () => {
  let component: UsersdashboardComponent;
  let fixture: ComponentFixture<UsersdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
