import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgBootstrapAlphaFixedComponent } from './ng-bootstrap-alpha-fixed.component';

describe('NgBootstrapAlphaFixedComponent', () => {
  let component: NgBootstrapAlphaFixedComponent;
  let fixture: ComponentFixture<NgBootstrapAlphaFixedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgBootstrapAlphaFixedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgBootstrapAlphaFixedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
