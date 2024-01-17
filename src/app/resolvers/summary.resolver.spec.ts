import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { summaryResolver } from './summary.resolver';

describe('summaryResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => summaryResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
