import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersSelectorComponent } from './players-selector.component';

describe('PlayersSelectorComponent', () => {
  let component: PlayersSelectorComponent;
  let fixture: ComponentFixture<PlayersSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayersSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
