const h4Title = document.getElementById('saved-value')
const input = document.getElementById('name')
const saveButton = document.getElementById('save')
const resetButton = document.getElementById('reset')

saveButton.addEventListener('click', function () {
  const insertedValue = input.value // salvo in una variabile il valore dell'input
  localStorage.setItem('saved-name', insertedValue) // salvo il valore nel localStorage
  h4Title.innerText = insertedValue // inserisco il valore nell'h4
  input.value = '' // svuoto l'input
  alert('salvato!')
})

resetButton.addEventListener('click', function () {
  // svuoto l'input, se riempito
  input.value = '' // svuoto l'input
  localStorage.removeItem('saved-name') // elimino la chiave dal localStorage
  h4Title.innerText = '' // svuoto l'h4
  alert('rimosso!')
})

const loadValueOnPageLoad = function () {
  const savedValue = localStorage.getItem('saved-name')
  // savedValue può essere due cose: una stringa oppure null
  if (savedValue) {
    h4Title.innerText = savedValue // vuol dire che è una stringa
  }

  //   h4Title.innerText = localStorage.getItem('saved-name')
  //     ? localStorage.getItem('saved-name')
  //     : ''
}

loadValueOnPageLoad()

// ------------------- ESERCIZIO CUSTOM

const pets = [
  {
    name: 'Fuffy',
    age: 5,
    species: 'Rabbit',
    breed: 'Nano',
    color: 'white',
  },
  {
    name: 'Kitty',
    age: 3,
    species: 'Cat',
    breed: 'Siamese',
    color: 'brown',
  },
  {
    name: 'Woffy',
    age: 3,
    species: 'Bear',
    breed: 'Polar',
    color: 'ice',
  },
]

// inizializza un array vuoto
localStorage.setItem('pets', JSON.stringify([]))

const addButton = document.getElementById('add-pet') // bottone success
addButton.addEventListener('click', function () {
  const randomIndex = Math.floor(Math.random() * pets.length)
  const randomPet = pets[randomIndex] // uno dei pet a caso
  //   localStorage.setItem('randomPet', JSON.stringify(randomPet))
  //   localStorage.setItem('randomPet', randomPet)
  // prendiamo l'array di pets dal localStorage
  const savedPets = localStorage.getItem('pets') // STRINGA
  //   console.log(typeof savedPets)
  // convertire savedPets, che è una stringa, nuovamente nell'array
  const savedPetsAsArray = JSON.parse(savedPets) // ho ottenuto nuovamente l'array
  savedPetsAsArray.push(randomPet) // ora si può fare!
  console.log(savedPetsAsArray)
  // passaggio finale: ri-salvare il mio savedPetsAsArray dentro il localStorage
  //   localStorage.setItem('pets', savedPetsAsArray) // [object Object]
  localStorage.setItem('pets', JSON.stringify(savedPetsAsArray))
})
