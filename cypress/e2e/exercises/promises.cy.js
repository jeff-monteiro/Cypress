it('no tests yet', () => {

})

//Using callback function

// const getSomething = (callback) => {
//     setTimeout(() => {
//         callback('12')
//     }, 1000)
// }


const getSomething = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(13)
        }, 1000)
    })
    
}

const system = () => {
    console.log('init')
    getSomething().then(some => console.log(`Something is ${some}`))
    console.log('end')
}
system()

// Using async/await function but on cypress is not a good practice

// const system = async () => {
//     console.log('init')
//     const some = await getSomething()
//     console.log(`Something is ${some}`)
//     console.log('end')
// }

// system()



