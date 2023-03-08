import {findUnique} from "../src/utils/findUnique.js";

describe('find unique characters in a string', () => {
    it('letters', () => {
      expect(findUnique('abcdabcd')).toEqual('abcd');
    });
    it('numbers', () => {
        expect(findUnique('852852')).toEqual('852');
    });
    it('special characters', () => {
        expect(findUnique('!@#$%^&&^%$#@!')).toEqual('!@#$%^&');
    });
  });