import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationsboxsComponent } from './presentationsboxs.component';

describe('PresentationsboxsComponent', () => {
  let component: PresentationsboxsComponent;
  let fixture: ComponentFixture<PresentationsboxsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PresentationsboxsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PresentationsboxsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
