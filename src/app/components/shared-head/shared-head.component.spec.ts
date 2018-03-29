import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedHeadComponent } from './shared-head.component';

describe('SharedHeadComponent', () => {
  let component: SharedHeadComponent;
  let fixture: ComponentFixture<SharedHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
