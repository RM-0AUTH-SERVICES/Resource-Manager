import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideIllustrationComponent } from './side-illustration.component';

describe('SideIllustrationComponent', () => {
  let component: SideIllustrationComponent;
  let fixture: ComponentFixture<SideIllustrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideIllustrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SideIllustrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
