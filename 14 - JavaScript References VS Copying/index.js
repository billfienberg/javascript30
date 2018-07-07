const players = ['Wes', 'Sarah', 'Ryan', 'Poppy']
// and we want to make a copy of it.
// You might think we can just do something like this:
// however what happens when we update that array?
// now here is the problem!
// oh no - we have edited the original array too!
// Why? It's because that is an array reference, not an array copy. They both point to the same array!
// So, how do we fix this? We take a copy instead!
// one way
const copy1 = players.slice()
console.log(copy1) // Wes, Sarah, Ryan, Poppy
// or create a new array and concat the old one in
const copy2 = [].concat(players)
console.log(copy2) // Wes, Sarah, Ryan, Poppy
// or use the new ES6 Spread
const copy3 = [...players]
console.log(copy3) // Wes, Sarah, Ryan, Poppy

// now when we update it, the original one isn't changed
copy3[0] = 'Bill'
console.log(copy3) // Bill, Sarah, Ryan, Poppy
console.log(players) // Wes, Sarah, Ryan, Poppy

copy4 = Array.from(players)
console.log(copy4) // Wes, Sarah, Ryan, Poppy
copy4[0] = 'Lindsey'
console.log(copy4) // Lindsey, Sarah, Ryan, Poppy
console.log(players) // Wes, Sarah, Ryan, Poppy

// The same thing goes for objects, let's say we have a person object
// with Objects
const person = { name: 'Wes Bos', age: 80 }
// and think we make a copy:
// const captain = person
// captain.number = 99
// console.log(captain.number) // 99
// console.log(person.number) // 99

// how do we take a copy instead?
const cap2 = Object.assign({}, person, { number: 99 })
console.log(cap2) // {name: 'Wes Bos', age: 80, number: 99}
console.log(person) // { name: 'Wes Bos', age: 80 }

// We will hopefully soon see the object ...spread
const cap3 = { ...person }
// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should

// poor man's deep clone
const bill = {
  name: 'Bill',
  age: 30,
  social: { twitter: 'billfienberg', instagram: 'billfienberg' },
}
const billClone = JSON.parse(JSON.stringify(bill))
billClone.social.instagram = 'crazybill'
console.log(billClone.social.instagram) // 'crazybill'
console.log(bill.social.instagram) // 'billfienberg'
