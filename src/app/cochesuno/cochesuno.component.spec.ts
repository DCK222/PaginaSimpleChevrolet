import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CochesunoComponent } from './cochesuno.component';

describe('CochesunoComponent', () => {
  let component: CochesunoComponent;
  let fixture: ComponentFixture<CochesunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CochesunoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CochesunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
