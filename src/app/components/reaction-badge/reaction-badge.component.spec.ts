import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactionBadgeComponent } from './reaction-badge.component';

describe('ReactionBadgeComponent', () => {
  let component: ReactionBadgeComponent;
  let fixture: ComponentFixture<ReactionBadgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactionBadgeComponent]
    });
    fixture = TestBed.createComponent(ReactionBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
