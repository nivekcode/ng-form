import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOnComponent } from './update-on.component';

describe('UpdateOnComponent', () => {
  let component: UpdateOnComponent;
  let fixture: ComponentFixture<UpdateOnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateOnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
