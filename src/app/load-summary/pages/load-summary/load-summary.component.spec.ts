import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadSummaryComponent } from './load-summary.component';

describe('LoadSummaryComponent', () => {
  let component: LoadSummaryComponent;
  let fixture: ComponentFixture<LoadSummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadSummaryComponent]
    });
    fixture = TestBed.createComponent(LoadSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
