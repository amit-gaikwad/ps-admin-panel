import { TestBed, async, inject } from '@angular/core/testing';

import { ParentAuthGuard } from './parent-auth.guard';

describe('ParentAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParentAuthGuard]
    });
  });

  it('should ...', inject([ParentAuthGuard], (guard: ParentAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
