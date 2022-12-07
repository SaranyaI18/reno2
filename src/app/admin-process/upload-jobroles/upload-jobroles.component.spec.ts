import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadJobrolesComponent } from './upload-jobroles.component';

describe('UploadJobrolesComponent', () => {
  let component: UploadJobrolesComponent;
  let fixture: ComponentFixture<UploadJobrolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadJobrolesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadJobrolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
