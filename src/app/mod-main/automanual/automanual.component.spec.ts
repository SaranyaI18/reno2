import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomanualComponent } from './automanual.component';

describe('AutomanualComponent', () => {
  let component: AutomanualComponent;
  let fixture: ComponentFixture<AutomanualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutomanualComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutomanualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
