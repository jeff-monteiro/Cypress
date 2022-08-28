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
})