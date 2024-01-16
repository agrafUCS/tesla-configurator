import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { modelResolver } from './model.resolver';

describe('modelResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => modelResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
