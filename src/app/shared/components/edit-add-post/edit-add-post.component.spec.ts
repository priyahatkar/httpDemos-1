import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddPostComponent } from './edit-add-post.component';

describe('EditAddPostComponent', () => {
  let component: EditAddPostComponent;
  let fixture: ComponentFixture<EditAddPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAddPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAddPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
