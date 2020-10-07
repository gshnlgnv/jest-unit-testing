const Lodash = require("./sync");

let _ = new Lodash();

describe("Lodash compact", () => {


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

describe("Lodash: groupBy", () => {
    test("should be defined", () => {
        expect(_.groupBy).toBeDefined();
        expect(_.groupBy).not.toBeUndefined();
    });

    test("should group array items by math.floor", ()=> {
        const arr = [2.2 , 2.4 , 4.2, 3.1];
        let result = {
            2: [2.2 , 2.4],
            4: [4.2],
            3: [3.1],
        };
        expect(_.groupBy(arr, Math.floor)).toEqual(result);
    });

    test ("should not return arr", ()=>{
        expect(_.groupBy([], Math.trunc)).not.toBeInstanceOf(Array)
    });
});