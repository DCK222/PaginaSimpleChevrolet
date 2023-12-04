import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CochestresComponent } from './cochestres.component';

describe('CochestresComponent', () => {
  let component: CochestresComponent;
  let fixture: ComponentFixture<CochestresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CochestresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CochestresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
