const values = 'Hello world'
let newValue = 'New hello world'

console.log(`values before while condition: ${values}`)

while (true) {
  const values = 'Hello world from while condition'
  console.log(`values from while condition: ${values}`)
  break
}

console.log(`values after while condition: ${values}`)