import Axios from 'axios'
import Dog from '../models/dog'

const URL = 'https://dog.ceo/api'

export const getRandomDog = async (dontInclude = []) => {
  let found = false
  let randomDog
  while (!found) {
    const { data: { message: imageUrl } } = await Axios.get(`${URL}/breeds/image/random`)
  
    randomDog = new Dog(imageUrl)
    const { id } = randomDog
    if (!dontInclude.includes(id)) {
      found = true
    }
  }
  return randomDog
}