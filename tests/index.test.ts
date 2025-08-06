import { describe, it } from 'node:test';
import assert from 'node:assert';
import {
  createString,
  getEarliestChar,
  rentOrOpen,
  reverseString,
} from '../index.js';

describe('Index', () => {
  describe('Functions', () => {
    describe('getEarliestChar', () => {
      it('should return the earliest character in the string', () => {
        assert.strictEqual(getEarliestChar('nepo'), 'e');
        assert.strictEqual(getEarliestChar('open'), 'e');
        assert.strictEqual(getEarliestChar('rent'), 'e');
      });
    });

    describe('reverseString', () => {
      it('should return the reversed string', () => {
        assert.strictEqual(reverseString('nepo'), 'open');
        assert.strictEqual(reverseString('open'), 'nepo');
        assert.strictEqual(reverseString('rent'), 'tner');
      });
    });

    describe('rentOrOpen', () => {
      it('should return "open" for odd length strings and "rent" for even length strings', () => {
        assert.strictEqual(rentOrOpen('nepo'), 'rent');
        assert.strictEqual(rentOrOpen('res'), 'open');
        assert.strictEqual(rentOrOpen('q2'), 'rent');
      });
    });

    describe('createString', () => {
      it('should create the correct concatenated string', () => {
        assert.strictEqual(createString('nepo'), 'openerent');
        assert.strictEqual(createString('open'), 'nepoerent');
        assert.strictEqual(createString('rent'), 'tnererent');
        assert.strictEqual(createString('ser'), 'reseopen');
      });
    });
  });
});
