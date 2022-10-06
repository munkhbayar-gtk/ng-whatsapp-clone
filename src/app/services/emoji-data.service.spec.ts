/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EmojiDataService } from './emoji-data.service';

describe('Service: EmojiData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmojiDataService]
    });
  });

  it('should ...', inject([EmojiDataService], (service: EmojiDataService) => {
    expect(service).toBeTruthy();
  }));
});
