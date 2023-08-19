import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMainComponent } from './social-main.component';

describe('SocialMainComponent', () => {
  let component: SocialMainComponent;
  let fixture: ComponentFixture<SocialMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocialMainComponent]
    });
    fixture = TestBed.createComponent(SocialMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
