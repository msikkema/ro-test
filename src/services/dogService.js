import Axios from 'axios'
import Dog from '../models/dog'

const URL = 'https://dog.ceo/api'

let notYetSeen = null
const seen = []
const getRandomItem = arr => arr[Math.floor(Math.random() * arr.length)]

export const init = async () => {
  // Flatten
  const { data: { message: allBreeds } } = await Axios.get(`${URL}/breeds/list/all`)

  Object.keys(allBreeds).forEach(breedName => {
    if (allBreeds[breedName].length > 0) {
      // Breed has subkeys
      allBreeds[breedName].forEach(subBreed => {
        notYetSeen.push(`${breedName}-${subBreed}`)
      })
    } else {
      notYetSeen.push(breedName)
    }
  })
}

export const getRandomDog = async () => {
  if (notYetSeen == null) {
    notYetSeen = []
    await init()
  }

  const randomDogName = getRandomItem(notYetSeen);
  const dogSlugs = randomDogName.split('-').join('/')
  const { data: { message: imageUrl } } = await Axios.get(`${URL}/breed/${dogSlugs}/images/random`)
  seen.push(randomDogName)
  notYetSeen = notYetSeen.filter(notSeen => notSeen !== randomDogName)

  return new Dog(imageUrl)
}