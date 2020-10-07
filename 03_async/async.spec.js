const Ajax = require("./async");

describe("Ajax echo testing func", ()=>{
    test("should return val async", async () => {
        const result = Ajax.echo("some data");
        expect(result).toBe('some data');
    });

    test("should return val with promise",  () => {
        return Ajax.echo("some data").then( (data)=> {
            expect(data).toBe('some data');
        })
    });

    test("should return val with promise",  () => {
        return Ajax.echo().catch( (err)=> {
            expect(err).toBeInstanceOf(Error);
        })
    });

    test("should return val with promise",  async () => {
        try {
            await Ajax.echo()
        } catch (e) {
         expect(e.message).toBe("error")
        }
    })
});
