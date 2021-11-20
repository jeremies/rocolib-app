import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoulderListComponent } from './boulder-list.component';

describe('BoulderListComponent', () => {
  let component: BoulderListComponent;
  let fixture: ComponentFixture<BoulderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoulderListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoulderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
