const functions = require('./functions')

test('2+2=4',()=>{
    expect(functions.add(2,2)).toBe(4)
})

test('Adds 2+2 NOt equal to 5',()=>{
    expect(functions.add(2,2)).not.toBe(5)
})
//to Be Null
test('Should be null',()=>{
    expect(functions.isNull()).toBeNull()
})
//to be false
test('Should be false',()=>{
    expect(functions.checkValue(null)).toBeFalsy()
})

test('User should be Andrii Zaitsev object',()=>{
    expect(functions.createUser()).toEqual({firstName: 'Andrii', lastName: 'Zaitsev'})
})