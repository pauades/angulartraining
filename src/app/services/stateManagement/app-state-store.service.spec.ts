import { TestBed } from '@angular/core/testing';

import { AppStateStoreService } from './app-state-store.service';

describe('AppStateStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppStateStoreService = TestBed.get(AppStateStoreService);
    expect(service).toBeTruthy();
  });
});
