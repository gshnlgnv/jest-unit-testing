const {sum} = require('./intro');
const {nativeNull} = require('./intro'); // import func we need to test

// global func describe to join test upon their meaning

describe("Sum func tests", () => {

    test(" should return sum of two digits", () => {
        expect(sum(1,3)).toBe(4);
        expect(sum(1,3)).toEqual(4);
    }); // if test is not identified: [file sett lang js libr downl jest]

    test(" should return val correct comparing to other", ()=> {
        expect(sum(2,4).toBeGreaterThan(5));
        expect(sum(2,4).toBeGreaterThanOrEqual(6));
        expect(sum(2,4).toBeLessThan(10));
    });

    test(" should sum 2 float val correct", () => {
        expect(sum(0.3, 0.4)).toBe(0.7);
        expect(sum(0.1, 0.2)).toBe(0.3);
        expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
    });

});

describe("Nativenull func", ()=> {

    test("should return false val null", ()=> {
        expect(nativeNull()).toBe(null);
        expect(nativeNull()).toBe();
        expect(nativeNull()).toBeFalsy(); // undef , null , "" , 0
        expect(nativeNull()).toBeDefined();
        expect(nativeNull()).not.toBeTruthy(); // .not. construction
    });
});

