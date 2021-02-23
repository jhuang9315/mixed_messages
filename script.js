let people = ["Justin", "Jessica", "Kilo"]
let actions = ["go pick up", "cook", "go out for"]
let cuisine = ["Chinese", "Italian", "Japanese", "Korean", "Vietnamese"]

function randomNumber(array){
 return Math.floor(Math.random()*array.length)
}

function createMessage(){
  let peopleInput = people[randomNumber(people)]
  let actionInput = actions[randomNumber(actions)]
  let cuisineInput = cuisine[randomNumber(cuisine)]

  console.log(peopleInput +" should " + actionInput + " " + cuisineInput + " food")
}

createMessage()