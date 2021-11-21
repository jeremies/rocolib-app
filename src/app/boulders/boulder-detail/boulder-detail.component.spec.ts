import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoulderDetailComponent } from './boulder-detail.component';

describe('BoulderDetailComponent', () => {
  let component: BoulderDetailComponent;
  let fixture: ComponentFixture<BoulderDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoulderDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoulderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
