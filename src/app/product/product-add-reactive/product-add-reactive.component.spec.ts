import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAddReactiveComponent } from './product-add-reactive.component';

describe('ProductAddReactiveComponent', () => {
  let component: ProductAddReactiveComponent;
  let fixture: ComponentFixture<ProductAddReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductAddReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAddReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
