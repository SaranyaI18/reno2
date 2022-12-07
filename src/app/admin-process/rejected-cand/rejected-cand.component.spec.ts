import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedCandComponent } from './rejected-cand.component';

describe('RejectedCandComponent', () => {
  let component: RejectedCandComponent;
  let fixture: ComponentFixture<RejectedCandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectedCandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RejectedCandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
