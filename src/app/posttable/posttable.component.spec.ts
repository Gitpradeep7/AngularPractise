import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosttableComponent } from './posttable.component';

describe('PosttableComponent', () => {
  let component: PosttableComponent;
  let fixture: ComponentFixture<PosttableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PosttableComponent]
    });
    fixture = TestBed.createComponent(PosttableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
