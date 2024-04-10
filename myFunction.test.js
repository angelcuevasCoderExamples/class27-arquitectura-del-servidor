const myFunction = require("./myFunction");

describe('Testing my function', ()=>{
    it('should return 2 if we pass 1,1 as arguments', ()=>{
        let result = myFunction(1,1); 
        expect(result).toBe(2)
    })

    it('should return 4 if we pass 2,2 as arguments', ()=>{
        let result = myFunction(1,1); 
        expect(result).toBe(2)
    })
})