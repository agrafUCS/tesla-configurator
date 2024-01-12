import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelConfiguratorComponent } from './model-configurator.component';

describe('ModelConfiguratorComponent', () => {
  let component: ModelConfiguratorComponent;
  let fixture: ComponentFixture<ModelConfiguratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelConfiguratorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModelConfiguratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
