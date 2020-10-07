const Lodash = require("./sync");

describe("Lodash compact", () => {

    let _ = new Lodash();
    let arr;

    beforeEach(()=> {
        arr = [false, 42, 0, '', true, null, 'hello'];
    }); // this is a hooks. loading before each test

    test("should be defined", () => {
        expect(_.compact).toBeDefined();
        expect(_.compact).not.toBeUndefined();
    });

    test("should remove falsy from arr", () => {

        const result = [42, true, 'hello'];
        expect(_.compact(arr)).toBe(result);
        expect(_.compact(arr)).toEqual(result);
    });

    test("should not contain falsy vals", ()=> {
        expect(_.compact(arr)).not.toContain(false);
    });
});