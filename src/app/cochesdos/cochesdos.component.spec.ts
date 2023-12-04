import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CochesdosComponent } from './cochesdos.component';

describe('CochesdosComponent', () => {
  let component: CochesdosComponent;
  let fixture: ComponentFixture<CochesdosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CochesdosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CochesdosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
