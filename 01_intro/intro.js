function expect(value) {
    return {
        toBe: exp => {
            if (value === exp) {
                console.log("SUCCESS");
            } else {
                console.error(`Value is ${value} but expecation is ${exp}`);
            }
        }
    }
}

const sum = (a,b) => a + b;
const nativeNull = () => null;

module.exports = {sum, nativeNull};

console.log("sum" , sum(3,4));

// expect(sum(41, 2)).toBe(42);