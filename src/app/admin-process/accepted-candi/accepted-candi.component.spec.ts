import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedCandiComponent } from './accepted-candi.component';

describe('AcceptedCandiComponent', () => {
  let component: AcceptedCandiComponent;
  let fixture: ComponentFixture<AcceptedCandiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptedCandiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceptedCandiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
