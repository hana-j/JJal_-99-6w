const Calculator = require('../calculator');

describe('Calculator 요구사항 테스트', ()=>{
    let cal;
    beforeEach(()=>{
        cal = new Calculator();
    })
    test('inits with 0', ()=>{
        expect(cal.value).toBe(0);
    })
    test('set num', ()=>{
        const num = cal.value;
        expect(num).toBe(cal.value)
    })
    test('clear',()=>{
        cal.set(9);
        cal.clear();
        expect(cal.value).toBe(0);
    })
    test('add' , ()=>{
        cal.set(1);
        cal.add(4);
        expect(cal.value).toBe(5)
    })
    test('should throw Error if sum >100',()=>{
        expect(()=>{
            cal.set(2);
            cal.add(100);
        }).toThrow();
    });
    test('subtract' , ()=>{
        cal.set(1);
        cal.subtract(4);
        expect(cal.value).toBe(-3)
    })
    test('multiply' , ()=>{
        cal.set(1);
        cal.multiply(4);
        expect(cal.value).toBe(4)
    })

    describe('divides', ()=>{
        it('0/0 ===NaN',()=>{
            cal.set(0);
            cal.divide(0);
            expect(cal.value).toBe(NaN);
        });
        it('1/0 ===Infinity',()=>{
            cal.set(1);
            cal.divide(0);
            expect(cal.value).toBe(Infinity);
        });
        it('4/4 ===1',()=>{
            cal.set(4);
            cal.divide(4);
            expect(cal.value).toBe(1);
        })
    })
})