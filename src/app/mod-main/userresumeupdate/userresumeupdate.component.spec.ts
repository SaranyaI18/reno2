import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserresumeupdateComponent } from './userresumeupdate.component';

describe('UserresumeupdateComponent', () => {
  let component: UserresumeupdateComponent;
  let fixture: ComponentFixture<UserresumeupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserresumeupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserresumeupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
