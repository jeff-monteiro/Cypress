/// <reference types="cypress" />

it('Equality', () => {
    const a = 1

    expect(a).equal(1)
    expect(a, `O valor deveria ser ${a}`).equal(1)
    expect(a).to.be.equal(1)
    expect('a').to.be.not.equal('b')
})

// Using the truthy value to verify the veracity (booleans)
it('Truthy', () => {
    const name = true
    const last = null
    let middle 

    expect(name).to.be.true
    expect(true).to.be.true
    expect(last).to.be.null
    expect(name).not.to.be.null
    expect(middle).to.be.undefined

})

// Using assertions in objects
it('Object Equality', () => {
    const obj = {
        a: 1,
        b: 2
    }

    expect(obj).equals(obj)
    expect(obj).to.be.equal(obj)
    expect(obj).to.be.deep.equal({ a: 1, b: 2 })
    expect(obj).eql({ a: 1, b: 2 })
    expect(obj).include({ a: 1 })
    expect(obj).to.have.property('b', 2)
    expect(obj).to.not.be.empty
    expect({}).to.be.empty
})

it('Arrays', () => {
    const arr = [1, 2, 3, 4]

    expect(arr).to.have.members([1, 2, 3, 4])
    expect(arr).to.include.members([1, 4])
    expect(arr).to.not.be.empty
    expect([]).to.be.empty
})

it('Types', () => {
    const num = 1
    const str = 'hello'

    expect(num).to.be.a('number')
    expect(str).to.be.a('string')
    expect({}).to.be.an('object')
    expect([]).to.be.an('array')
})

it('Strings', () => {
    const str = 'hello world string'

    expect(str).to.be.equal('hello world string')
    expect(str).to.have.length(18)
    expect(str).to.contains('world')
    expect(str).to.match(/hello/) // Use regex on the tests is possible too
    expect(str).to.match(/^hello/)
    expect(str).to.match(/string$/)
    expect(str).to.match(/\w+/) // Verifying that contains just string matches
    expect(str).to.match(/\D+/) // Verifying that not contains numbers matches
})

it('Numbers', () => {
    const number = 4
    const floatNumber = 3.1415

    expect(number).to.be.equal(4)
    expect(number).to.above(3)
    expect(number).to.below(6)
    expect(floatNumber).to.be.equal(3.1415)
    expect(floatNumber).to.be.closeTo(3.2, 0.1)
})