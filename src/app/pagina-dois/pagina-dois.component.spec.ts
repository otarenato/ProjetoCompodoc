import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaDoisComponent } from './pagina-dois.component';

describe('PaginaDoisComponent', () => {
  let component: PaginaDoisComponent;
  let fixture: ComponentFixture<PaginaDoisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaDoisComponent]
    });
    fixture = TestBed.createComponent(PaginaDoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
