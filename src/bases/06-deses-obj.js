

const person = {
    name: 'Angel',
    age: 23,
    codeName: 'Ironman'
}

const {name,age,codeName,power='No tiene poder'} = person

// console.log(name)
// console.log(age)
// console.log(codeName)
// console.log(power)

const createHero=({name,age,codeName,power})=>({
        id:1123464444,
        name,
        age,
        codeName,
        power,})

console.log(createHero(person))